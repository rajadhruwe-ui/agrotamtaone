from rest_framework import serializers
from .models import Farm

class FarmSerializer(serializers.ModelSerializer):
    class Meta:
        model = Farm
        fields = ['id', 'owner', 'name', 'location', 'size', 'crop_type', 'created_at']
