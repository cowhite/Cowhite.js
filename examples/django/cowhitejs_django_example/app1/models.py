# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models


class Item(models.Model):
    name = models.CharField(max_length=100)

    def __unicode__(self):
        return u"%s" % self.name