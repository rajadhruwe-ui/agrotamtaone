# views.py
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import *  # Import your User model
from .serializers import *
from django.conf import settings

from .conn import conn
from rest_framework.decorators import api_view
from django.contrib.auth import authenticate
from django.contrib.auth.hashers import check_password



# 12 11 2024
# class UserListAPIView(APIView):
#     def get(self, request):
#         users = UserModel.objects.all()  # Retrieve all user data
#         for user in users:
#             print(f"User: {user.username}, Email: {user.email}, Full Name: {user.first_name} {user.last_name}")
#         serializer = UserModelSerializer(users, many=True)
#         return Response(serializer.data, status=status.HTTP_200_OK)
    
#     def post(self, request):
#         # Print all existing users (optional)
#         users = UserModel.objects.all()
#         for user in users:
#             print(f":User    {user.username}, Email: {user.email}, Full Name: {user.first_name} {user.last_name}")
#         # Initialize the serializer with the request data
#         serializer = UserModelSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()  # This will call the create method and handle password hashing
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



# 24 7 2025
class UserListAPIView(APIView):
    def get(self, request):
        users = UserModel.objects.all()
        serializer = UserModelSerializer(users, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
            print("Received POST data:", request.data)  # <-- Debug print
            serializer = UserModelSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()  # Save to DB
                print("Saved user:", serializer.data)  # <-- Debug print saved user data
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            else:
                print("Validation errors:", serializer.errors)  # <-- Debug print errors
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# for login
class LoginAPIView(APIView):
    def post(self, request):
        print("Received POST data:", request.data) 
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            password = serializer.validated_data['password']
            # Attempt to retrieve the user by email
            user = UserModel.objects.filter(email=email).first()
            # Check if user exists and validate the password
            if user and check_password(password, user.password):  # Pass both plain password and hashed password
                user_exist = UserModel.objects.filter(email=email).first()
                user_data = UserModelSerializer(user_exist).data
                return Response({"message": "Login successful","user": user_data}, status=status.HTTP_200_OK)
            else:
                return Response({"error": "Invalid email or password"}, status=status.HTTP_400_BAD_REQUEST)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
    
    
    
        
# profile
class ProfileView(APIView):
    def get(self, request, *args, **kwargs):
        # Access the 'id' parameter from the URL
        profile_id = self.kwargs.get('id')
        # Fetch the user by ID
        user = UserModel.objects.filter(id=profile_id).first()
        if user is None:
            return Response({"error": "User  not found"}, status=status.HTTP_404_NOT_FOUND)
        # Serialize the user data
        user_data = UserModelSerializer(user).data
        # You can return a response with the serialized user data
        return Response({"profile_id": profile_id, "user": user_data}, status=status.HTTP_200_OK)