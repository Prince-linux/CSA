from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Registration
from .serializers import RegistrationSerializer

class RegistrationAPIView(APIView):
    def get(self, request):
        registrations = Registration.objects.all()
        serializer = RegistrationSerializer(registrations, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    def post(self, request):
        serializer = RegistrationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Registration successful!"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class RegistrationChoicesAPIView(APIView):
    def get(self, request):
        choices = {
            "interested_course": dict(Registration.COURSE_CHOICES),
            "gender": dict(Registration.GENDER_CHOICES),
        }
        return Response(choices, status=status.HTTP_200_OK)