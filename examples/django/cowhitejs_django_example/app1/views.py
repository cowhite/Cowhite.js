# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

from .models import Item
from .serializers import ItemSerializer

from rest_framework import generics


class ItemListCreateApiView(generics.ListCreateAPIView):
    serializer_class = ItemSerializer
    queryset = Item.objects.all()


class ItemRetrieveUpdateDestroyApiView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ItemSerializer
    queryset = Item.objects.all()
