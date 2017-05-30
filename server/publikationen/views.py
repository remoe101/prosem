from rest_framework import viewsets
from publikationen.models import Veroeffentlichungen
from publikationen.serializers import VeroeffentlichungenSerializer


class VeroeffentlichungenViewSet(viewsets.ModelViewSet):
    queryset = Veroeffentlichungen.objects.all()
    serializer_class = VeroeffentlichungenSerializer