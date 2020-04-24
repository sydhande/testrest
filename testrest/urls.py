from django.contrib import admin
from django.urls import path
from rest_framework import routers,serializers, viewsets
from django.conf.urls import url,include
from owner import views
from django.views.generic import TemplateView

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GourpViewSet)
router.register(r'owner',views.OwnerViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api-auth/', include('rest_framework.urls',namespace='rest_framework')),
    path('', views.index, name='index'),
    url(r'^.*$', TemplateView.as_view(template_name="index.html")),

]
