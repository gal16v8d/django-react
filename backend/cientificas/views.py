from django.shortcuts import render
from rest_framework import generics, viewsets
from .serializers import CientificaSerializer
from .models import Cientifica

# Create your views here.
class CientificaView(viewsets.ModelViewSet):
    serializer_class = CientificaSerializer
    queryset = Cientifica.objects.all()

class CientificaList(generics.ListCreateAPIView):
    serializer_class = CientificaSerializer
    queryset = Cientifica.objects.all()

class CientificaDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CientificaSerializer
    queryset = Cientifica.objects.all()