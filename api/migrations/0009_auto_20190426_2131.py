# -*- coding: utf-8 -*-
# Generated by Django 1.11.20 on 2019-04-26 21:31
from __future__ import unicode_literals

import api.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_auto_20190426_2039'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userphoto',
            name='file',
            field=models.ImageField(blank=True, null=True, upload_to=api.models.upload_user_photo_image),
        ),
    ]