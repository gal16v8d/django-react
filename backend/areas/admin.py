from django.contrib import admin
from .models import Area

class AreaAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'descripcion')

# Register your models here.
admin.site.register(Area, AreaAdmin)