'''configuracion de la URL para cientificas'''
from django.urls import include, path
from rest_framework import routers
from cientificas import views

router = routers.DefaultRouter()
router.register('listado', views.CientificaView, 'cientificas')

app_name = "cientifica"

urlpatterns = [
    path('cientificasClass/', include(router.urls)),
    path('cientificas/', views.CientificaList.as_view()),
    path('cientificas/<int:pk>', views.CientificaDetail.as_view())
]