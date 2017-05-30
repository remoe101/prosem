from __future__ import unicode_literals

from django.db import models
from django.contrib import admin
from django.core.validators import MaxValueValidator, MinValueValidator


class Veroeffentlichungen(models.Model):
	professur = models.CharField(max_length=200)
	jahr = models.IntegerField(
		default=2017,
		validators=[
			MinValueValidator(2011),
			MaxValueValidator(2018)
		]
	)
	artikel = models.IntegerField(
		default=0,
		validators=[
			MinValueValidator(0)
		]
	)
	def __str__(self):
		return self.professur