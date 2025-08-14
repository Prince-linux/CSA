from rest_framework import serializers
from .models import Registration
from django.conf import settings


class RegistrationSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()
    
    class Meta:
        model = Registration
        fields = '__all__'
        extra_fields = ['image_url']
    
    def get_image_url(self, obj):
        if obj.image:
            # Ensure the URL is properly constructed
            if not obj.image.name.startswith('registrations/'):
                return f"{settings.MEDIA_URL}registrations/{obj.image.name}"
            return f"{settings.MEDIA_URL}{obj.image.name}"
        return None