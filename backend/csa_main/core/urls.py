from django.urls import path
from .views import RegistrationAPIView, RegistrationChoicesAPIView


urlpatterns = [
    path('register/', RegistrationAPIView.as_view(), name='register'),
    path("register/choices/", RegistrationChoicesAPIView.as_view(), name="registration-choices"),

]

