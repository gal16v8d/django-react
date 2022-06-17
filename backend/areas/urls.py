'''configuracion de la URL para areas'''
from django.urls import include, path
from rest_framework import routers
from areas import views

router = routers.DefaultRouter()
router.register('listado', views.AreaView, 'areas')

app_name = "areas"

urlpatterns = [
    path('areasClass/', include(router.urls)),
    path('areas/', views.AreaList.as_view()),
    path('areas/<int:pk>', views.AreaDetail.as_view())
]