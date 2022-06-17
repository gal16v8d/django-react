from dataclasses import fields
from rest_framework import serializers
from .models import Area

class AreaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Area
        fields = ('id', 'nombre', 'descripcion')