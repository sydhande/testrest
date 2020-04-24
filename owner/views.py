from django.shortcuts import render
from django.contrib.auth.models import User,Group
from .models import Owner
from rest_framework import viewsets, permissions
from .serializers import UserSerializer,GroupSerializer,OwnerSerializer


def index(request):
    return render(request, template_name='index.html')
    
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class GourpViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]

class OwnerViewSet(viewsets.ModelViewSet):
    queryset = Owner.objects.all()
    serializer_class = OwnerSerializer
    

