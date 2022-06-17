from django.shortcuts import render
from rest_framework import generics, viewsets
from .serializers import AreaSerializer
from .models import Area

# Create your views here.
class AreaView(viewsets.ModelViewSet):
    serializer_class = AreaSerializer
    queryset = Area.objects.all()

class AreaList(generics.ListCreateAPIView):
    serializer_class = AreaSerializer
    queryset = Area.objects.all()

class AreaDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = AreaSerializer
    queryset = Area.objects.all()