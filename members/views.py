from django.shortcuts import render, get_object_or_404
from .models import MemberPage


def member_page(request, *args, **kwargs):
    member_page = get_object_or_404(MemberPage, slug=kwargs.get('slug', None))

    return render(request, 'member_page.html', {'member_page': member_page})
