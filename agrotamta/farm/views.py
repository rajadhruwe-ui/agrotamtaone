from rest_framework import generics, permissions
from .models import Farm
from .serializers import FarmSerializer

class FarmListCreateAPIView(generics.ListCreateAPIView):
    queryset = Farm.objects.all()
    serializer_class = FarmSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
