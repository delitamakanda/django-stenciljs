# -*- coding: utf-8 -*-
# Generated by Django 1.11.20 on 2019-04-26 20:39
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_auto_20190426_1857'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userphoto',
            name='active',
            field=models.BooleanField(default=True),
        ),
    ]
