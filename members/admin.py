from django.contrib import admin
from .models import MemberPage


class MemberPageAdmin(admin.ModelAdmin):
    '''
        Admin View for MemberPage
    '''
    list_display = ('id', 'slug', 'owner', 'date_created', 'date_updated', )
    search_fields = ('owner__username', )

admin.site.register(MemberPage, MemberPageAdmin)
