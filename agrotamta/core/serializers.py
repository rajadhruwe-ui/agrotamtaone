# from rest_framework import serializers
# from .models import UserModel
# from django.contrib.auth.hashers import make_password


# class UserModelSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = UserModel
#         fields = '__all__'  # or specify the fields you want

#     def validate_email(self, value):
#         if UserModel.objects.filter(email=value).exists():
#             raise serializers.ValidationError("This email is already in use.")
#         return value
#     # for password incription 
#     def create(self, validated_data):
#         # Hash the password before saving the user
#         password = validated_data.pop('password')  # Remove the password from validated data
#         user = UserModel(**validated_data)  # Create the user instance
#         user.password = make_password(password)  # Hash the password
#         user.save()  # Save the user instance
#         return user  
    

# class LoginSerializer(serializers.Serializer):
#     email = serializers.EmailField()
#     password = serializers.CharField(write_only=True)    





from rest_framework import serializers
from .models import UserModel
from django.contrib.auth.hashers import make_password, check_password

class UserModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = '__all__'  # or specify the fields you want

    def validate_email(self, value):
        if UserModel.objects.filter(email=value).exists():
            raise serializers.ValidationError("This email is already in use.")
        return value

    def create(self, validated_data):
        # Hash the password before saving the user
        password = validated_data.pop('password')  # Remove the password from validated data
        user = UserModel(**validated_data)  # Create the user instance
        user.password = make_password(password)  # Hash the password
        user.save()  # Save the user instance
        return user  

class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)
    def check_password(self, raw_password):
        """Check the provided password against the stored hashed password."""
        return check_password(raw_password, self.password)    