from rest_framework import serializers
from publikationen.models import Veroeffentlichungen


class VeroeffentlichungenSerializer(serializers.ModelSerializer):
    class Meta:
        model = Veroeffentlichungen
        fields = ("id", "professur", "jahr", "artikel")
