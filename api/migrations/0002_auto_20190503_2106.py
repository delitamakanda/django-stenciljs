# -*- coding: utf-8 -*-
# Generated by Django 1.11.20 on 2019-05-03 21:06
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='useraccount',
            name='details',
            field=models.TextField(null=True),
        ),
    ]