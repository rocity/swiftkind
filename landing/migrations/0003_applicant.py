# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2017-06-19 05:14
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('landing', '0002_message'),
    ]

    operations = [
        migrations.CreateModel(
            name='Applicant',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cv', models.FileField(upload_to='cv/%Y/%m/%d')),
                ('upload_date', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
