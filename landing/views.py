from django.shortcuts import get_object_or_404

from rest_framework import viewsets
from rest_framework.response import Response

from .serializers import (
    HeaderSerializer,
    StackSerializer,
    ProjectSerializer,
)

from .models import Header, Stack, Project


class LandingAPI(viewsets.ViewSet):
    """ landing page endpoint
    """
    def headers(self, *args, **kwargs):
        serializer = HeaderSerializer(Header.objects.all(), many=True)
        return Response(serializer.data, status=200)

    def stacks(self, *args, **kwargs):
        serializer = StackSerializer(Stack.objects.all(), many=True)
        return Response(serializer.data, status=200)

    def projects(self, *args, **kwargs):
        serializer = ProjectSerializer(Project.objects.all(), many=True)
        return Response(serializer.data, status=200)