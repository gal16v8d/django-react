from dataclasses import fields
from rest_framework import serializers
from .models import Cientifica

class CientificaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cientifica
        fields = ('id', 'nombre', 'fecha_nacimiento', 'nacionalidad', 'foto', 'descripcion')