from django.shortcuts import get_object_or_404

from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.parsers import FormParser, MultiPartParser

from .serializers import (
    HeaderSerializer,
    StackSerializer,
    ProjectSerializer,
    MessageSerializer,
    ApplicantCVSerializer
)

from .mixins import ContactUsMixin

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


class MessageAPI(ContactUsMixin, viewsets.ViewSet):
    """ messages endpoint
    """
    def send(self, *args, **kwargs):
        serializer = MessageSerializer(data=self.request.data)
        if serializer.is_valid():
            data = serializer.save()
            self.send_message(data)
            return Response(serializer.data, status=200)
        return Response(serializer.errors, status=400)


class ApplicantCvAPI(viewsets.ViewSet):
    """ upload applicant cv
    """
    parser_classes = (FormParser, MultiPartParser)

    def upload_cv(self, *args, **kwargs):
        serializer = ApplicantCVSerializer(data=self.request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=200)
        return Response(serializer.errors, status=400)
