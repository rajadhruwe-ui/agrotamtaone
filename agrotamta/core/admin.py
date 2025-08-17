from django.contrib import admin

# Register your models here.
from .models import  UserModel

class UserModelAdmin(admin.ModelAdmin):
    list_display = ('username', 'email', 'mobile_number', 'first_name', 'last_name', 'role')
    search_fields = ('username', 'email', 'mobile_number', 'first_name', 'last_name')
    list_filter = ('role',)

# admin.site.register(User, UserAdmin)
admin.site.register(UserModel, UserModelAdmin)
