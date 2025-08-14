from django.db import models


class Registration(models.Model):
    COURSE_CHOICES = [
        ("Photography", "Photography"),
        ("Videography", "Videography"),
        ("Web Development", "Web Development"),
    ]

    GENDER_CHOICES = [
        ("Male", "Male"),
        ("Female", "Female"),
    ]

    full_name = models.CharField(max_length=100)
    email = models.EmailField()
    phone_number = models.CharField(max_length=20)
    emergency_contact = models.CharField(max_length=20)
    date_of_birth = models.DateField()
    address = models.CharField(max_length=200)
    ghana_card_number = models.CharField(max_length=200, blank=True, null=True)
    interested_course = models.CharField(max_length=20, choices=COURSE_CHOICES)
    device = models.CharField(max_length=100)
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES)
    image = models.ImageField(upload_to='registrations/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    paid = models.BooleanField(default=False)
    temp_image_path = models.CharField(max_length=255, blank=True, null=True)
    reference = models.CharField(max_length=50, unique=True, null=True, blank=True)

    def __str__(self):
        return self.full_name
    
   
    
    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=['email', 'phone_number'],
                name='unique_email_phone',
                condition=models.Q(paid=True)  # Only enforce for paid registrations
            )
        ]