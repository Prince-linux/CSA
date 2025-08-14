# views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Registration
from .serializers import RegistrationSerializer
from django.conf import settings
import requests
import uuid
from datetime import datetime
import logging

logger = logging.getLogger(__name__)
import os
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile   


class RegistrationChoicesAPIView(APIView):
    def get(self, request):
        choices = {
            "interested_course": dict(Registration.COURSE_CHOICES),
            "gender": dict(Registration.GENDER_CHOICES),
        }
        return Response(choices, status=status.HTTP_200_OK)

class RegistrationAPIView(APIView):
    def get(self, request):
        # If query parameter exists, return choices for registration form
        if request.query_params.get('choices'):
            choices = {
                "interested_course": dict(Registration.COURSE_CHOICES),
                "gender": dict(Registration.GENDER_CHOICES),
            }
            return Response(choices, status=status.HTTP_200_OK)
        
        # Otherwise return all registered members
        members = Registration.objects.filter(paid=True).order_by('-created_at')
        serializer = RegistrationSerializer(members, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
            # Generate reference first
            reference = f"REG_{uuid.uuid4().hex[:8]}"
            
            # Convert form data to JSON-serializable format
            reg_data = {
                'full_name': request.data.get('full_name'),
                'email': request.data.get('email'),
                'phone_number': request.data.get('phone_number'),
                'emergency_contact': request.data.get('emergency_contact'),
                'date_of_birth': request.data.get('date_of_birth'),
                'address': request.data.get('address'),
                'ghana_card_number': request.data.get('ghana_card_number'),
                'interested_course': request.data.get('interested_course'),
                'device': request.data.get('device'),
                'gender': request.data.get('gender'),
            }
            
            # Store in database temporarily (with paid=False)
            temp_reg = Registration.objects.create(
                **reg_data,
                paid=False,
                reference=reference
            )
            
            # Store image temporarily if exists
            if 'image' in request.FILES:
                image_file = request.FILES['image']
                temp_path = f"temp_images/{reference}_{image_file.name}"
                
                try:
                    default_storage.save(temp_path, ContentFile(image_file.read()))
                    temp_reg.temp_image_path = temp_path
                    temp_reg.save()
                except Exception as e:
                    logger.error(f"Failed to save temp image: {str(e)}")
                    temp_reg.delete()
                    return Response(
                        {"error": "Failed to process image"},
                        status=status.HTTP_500_INTERNAL_SERVER_ERROR
                    )

            # Initiate Paystack payment
            paystack_url = "https://api.paystack.co/transaction/initialize"
            headers = {
                "Authorization": f"Bearer {settings.PAYSTACK_SECRET_KEY}",
                "Content-Type": "application/json",
            }
            
            payload = {
                "email": reg_data["email"],
                "amount": 500 * 100,
                "reference": reference,
                "callback_url": f"{settings.PAYSTACK_CALLBACK_URL}?reference={reference}",
                "metadata": {
                    "registration_id": str(temp_reg.id)
                }
            }

            try:
                response = requests.post(paystack_url, headers=headers, json=payload)
                response.raise_for_status()
                return Response({
                    "payment_url": response.json()["data"]["authorization_url"],
                    "reference": reference
                }, status=status.HTTP_200_OK)
            except Exception as e:
                logger.error(f"Payment initialization failed: {str(e)}")
                # Clean up
                if hasattr(temp_reg, 'temp_image_path'):
                    if default_storage.exists(temp_reg.temp_image_path):
                        default_storage.delete(temp_reg.temp_image_path)
                temp_reg.delete()
                return Response(
                    {"error": "Payment initialization failed"},
                    status=status.HTTP_503_SERVICE_UNAVAILABLE
                )


class PaymentVerificationAPIView(APIView):
    def get(self, request):
        reference = request.query_params.get("reference")
        if not reference:
            return Response(
                {"error": "Reference required"}, 
                status=status.HTTP_400_BAD_REQUEST
            )

        try:
            # Get the temporary registration
            temp_reg = Registration.objects.filter(reference=reference, paid=False).first()
            if not temp_reg:
                return Response(
                    {"error": "Registration not found or already completed"},
                    status=status.HTTP_400_BAD_REQUEST
                )

            # Verify payment with Paystack
            verify_url = f"https://api.paystack.co/transaction/verify/{reference}"
            headers = {"Authorization": f"Bearer {settings.PAYSTACK_SECRET_KEY}"}
            response = requests.get(verify_url, headers=headers)
            response.raise_for_status()

            payment_data = response.json()
            if payment_data['data']['status'] != "success":
                return Response(
                    {"error": "Payment not successful"}, 
                    status=status.HTTP_400_BAD_REQUEST
                )

            # Handle the image file if exists
            if hasattr(temp_reg, 'temp_image_path') and temp_reg.temp_image_path:
                if default_storage.exists(temp_reg.temp_image_path):
                    # Create permanent path
                    file_ext = os.path.splitext(temp_reg.temp_image_path)[1]
                    perm_path = f"registrations/{reference}{file_ext}"
                    
                    # Move the file
                    with default_storage.open(temp_reg.temp_image_path, 'rb') as src:
                        default_storage.save(perm_path, src)
                    default_storage.delete(temp_reg.temp_image_path)
                    
                    # Update registration with image
                    temp_reg.image = perm_path

            # Complete the registration
            temp_reg.paid = True
            temp_reg.save()
            
            return Response({
                "message": "Registration completed successfully!",
                "registration": RegistrationSerializer(temp_reg).data
            }, status=status.HTTP_200_OK)

        except Exception as e:
            logger.error(f"Verification failed: {str(e)}")
            return Response(
                {"error": "Payment verification failed"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )



class CompleteRegistrationAPIView(APIView):
    def post(self, request, registration_id):
        try:
            registration = Registration.objects.get(id=registration_id)
        except Registration.DoesNotExist:
            return Response(
                {"error": "Registration not found"},
                status=status.HTTP_404_NOT_FOUND
            )

        if registration.image:
            return Response(
                {"message": "Registration already completed with image"},
                status=status.HTTP_200_OK
            )

        image_file = request.FILES.get('image')
        if not image_file:
            return Response(
                {"error": "Image file required"},
                status=status.HTTP_400_BAD_REQUEST
            )

        try:
            # Save the image to the registration
            registration.image = image_file
            registration.save()
            
            return Response(
                {"message": "Registration completed successfully with image"},
                status=status.HTTP_200_OK
            )
        except Exception as e:
            logger.error(f"Failed to save image: {str(e)}")
            return Response(
                {"error": "Failed to process image"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
        

