# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-05-03 08:37
from __future__ import unicode_literals

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('publikationen', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='veroeffentlichungen',
            name='artikel',
            field=models.IntegerField(default=0, validators=[django.core.validators.MinValueValidator(0)]),
        ),
    ]