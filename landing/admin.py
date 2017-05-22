from django.contrib import admin
from .models import Header, Stack, Project, Mockup, Message


class MockupAdmin(admin.ModelAdmin):
	model = Mockup


class MockupInline(admin.TabularInline):
	model = Mockup


class ProjectAdmin(admin.ModelAdmin):
	model = Project
	inlines = [MockupInline,]


class HeaderAdmin(admin.ModelAdmin):
	model = Header



admin.site.register(Mockup, MockupAdmin)
admin.site.register(Project, ProjectAdmin)
admin.site.register(Header, HeaderAdmin)
admin.site.register(Message)