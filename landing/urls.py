from django.conf.urls import url
from .views import LandingAPI, MessageAPI


urlpatterns = [
    url(r'^headers/$', LandingAPI.as_view({
        'get': 'headers',
    }), name="headers"),

    url(r'^stacks/$', LandingAPI.as_view({
        'get': 'stacks',
    }), name="stacks"),

    url(r'^projects/$', LandingAPI.as_view({
        'get': 'projects',
    }), name="projects"),

    url(r'^message/$', MessageAPI.as_view({
        'post': 'send',
    }), name="messages"),
]