from django.db import models
from django.conf import settings

from djrichtextfield.models import RichTextField


class MemberPage(models.Model):
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, related_name="owner")
    slug = models.SlugField(max_length=50, )
    content = RichTextField()

    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return "{}".format(self.owner.username)

    def get_owner_username(self):
        return "{}".format(self.owner.username)