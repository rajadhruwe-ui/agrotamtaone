from django.db import models
from django.contrib.auth.models import User

class Farm(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name="farms")
    name = models.CharField(max_length=100)
    location = models.CharField(max_length=200)
    size = models.DecimalField(max_digits=10, decimal_places=2)  # e.g. acres/hectares
    crop_type = models.CharField(max_length=100, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
