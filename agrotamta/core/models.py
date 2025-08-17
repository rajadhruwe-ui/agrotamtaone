# models.py
from django.db import models


class UserModel(models.Model):
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    mobile_number = models.CharField(max_length=10)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)   
    address = models.CharField(max_length=255)
    pin_code = models.CharField(max_length=10)
    image = models.ImageField(null=True, blank=True)   
    role = models.IntegerField()

    def __str__(self):
        return self.username
