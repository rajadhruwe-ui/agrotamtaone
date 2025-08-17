from django.urls import path
from .views import FarmListCreateAPIView

urlpatterns = [
    path('farms/', FarmListCreateAPIView.as_view(), name='farm-list-create'),
]
