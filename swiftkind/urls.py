from django.conf import settings

from django.conf.urls import url, include
from django.contrib import admin
from django.conf.urls.static import static
from django.views.generic import TemplateView


urlpatterns = [
    url(r'^$', TemplateView.as_view(template_name="base.html"), name="base"),
    url(r'^admin/', admin.site.urls),

    url(r'^api/landing/', include('landing.urls')),

]