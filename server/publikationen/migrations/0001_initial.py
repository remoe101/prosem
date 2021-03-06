# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-05-02 19:59
from __future__ import unicode_literals

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Veroeffentlichungen',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('professur', models.CharField(max_length=200)),
                ('jahr', models.IntegerField(default=2017, validators=[django.core.validators.MinValueValidator(2011), django.core.validators.MaxValueValidator(2018)])),
                ('artikel', models.IntegerField()),
            ],
        ),
    ]
