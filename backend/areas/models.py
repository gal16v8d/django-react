from django.db import models

# Create your models here.
class Area(models.Model):
    # id es autogenerado por django
    nombre = models.CharField(max_length=200)
    descripcion = models.CharField(max_length=300)

    def __str__(self) -> str:
        return self.nombre

    def __repr__(self) -> str:
        return self.__str__