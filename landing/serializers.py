from rest_framework import serializers
from .models import Header, Stack, Project, Mockup, Message


class HeaderSerializer(serializers.ModelSerializer):
    """ header serializer
    """
    class Meta:
        model = Header
        fields = ('title', 'subtitle', 'desc', 'image')


class StackSerializer(serializers.ModelSerializer):
    """ stack serializer
    """
    class Meta:
        model = Stack
        fields = ('name', 'url', 'image')


class ProjectSerializer(serializers.ModelSerializer):
    """ project serializer
    """
    class Meta:
        model = Project
        fields = ('title', 'desc', 'thumbnail', 'github', 'demo')

class MessageSerializer(serializers.ModelSerializer):
    """ message serializer
    """
    class Meta:
        model = Message
        fields = ('id', 'sender', 'email', 'company', 'phone', 'message')