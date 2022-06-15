from distutils.command.upload import upload
from django.db import models

# Create your models here.
class Cientifica(models.Model):
    # id es autogenerado por django
    nombre = models.CharField(max_length=200)
    fecha_nacimiento = models.DateField()
    nacionalidad = models.CharField(max_length=200)
    foto = models.ImageField(upload_to = 'fotos', blank = True)
    descripcion = models.CharField(max_length=300)

    def __str__(self) -> str:
        return self.nombre

    def __repr__(self) -> str:
        return self.__str__