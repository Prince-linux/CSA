from django.urls import path
from .views import RegistrationAPIView, RegistrationChoicesAPIView, PaymentVerificationAPIView, CompleteRegistrationAPIView


urlpatterns = [
    path('register/', RegistrationAPIView.as_view(), name='register'),
    path("register/choices/", RegistrationChoicesAPIView.as_view(), name="registration-choices"),
    path('verify-payment/', PaymentVerificationAPIView.as_view(), name='verify-payment'),
    path('complete/<int:registration_id>/', CompleteRegistrationAPIView.as_view(), name='complete-registration'),

]