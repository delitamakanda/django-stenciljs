# -*- coding: utf-8 -*-
# Generated by Django 1.11.20 on 2019-05-03 20:22
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0011_auto_20190503_2015'),
    ]

    operations = [
        migrations.AlterField(
            model_name='useraccount',
            name='popularity',
            field=models.IntegerField(default='0'),
        ),
    ]
