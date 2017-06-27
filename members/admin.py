from django.contrib import admin
from django.core.exceptions import PermissionDenied

from .models import MemberPage


class MemberPageAdmin(admin.ModelAdmin):
    '''
        Admin View for MemberPage
    '''
    list_display = ('id', 'slug', 'owner', 'date_created', 'date_updated', )
    search_fields = ('owner__username', )

    def save_model(self, request, obj, form, change):
        if request.user and request.user.id != obj.owner.id:
            raise PermissionDenied
        obj.save()

admin.site.register(MemberPage, MemberPageAdmin)
