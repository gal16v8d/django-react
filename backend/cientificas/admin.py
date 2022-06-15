from django.contrib import admin
from .models import Cientifica

class CientificaAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'fecha_nacimiento', 'nacionalidad', 'foto', 'descripcion')

# Register your models here.
admin.site.register(Cientifica, CientificaAdmin)