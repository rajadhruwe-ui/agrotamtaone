from django.urls import path
from django.http import HttpResponse
from .conn import check_db_connection
from .views import *
from . import views

# simple home view
def home(request):
    return HttpResponse("<h1>Welcome to Agrotamta API</h1><p>Available endpoints: /check_db, /users, /login, /profile/&lt;id&gt;</p>")

urlpatterns = [
    path('', home, name='home'),   # 👈 add this for root URL
    path('check_db/', check_db_connection, name='check_db'),
    path('users/', UserListAPIView.as_view(), name='user-list'),
    # path('users/<int:id>/', UserListAPIView.as_view(), name='user-update'),
    path('login/', LoginAPIView.as_view(), name='login'),
    path('profile/<int:id>/', ProfileView.as_view(), name='profile'),
]
