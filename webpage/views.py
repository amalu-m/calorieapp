from django.shortcuts import render
from django.views.generic import TemplateView


class IndexPage(TemplateView):
    template_name = 'index.html'

class OverviewPage(TemplateView):
   template_name = 'overview.html'

class HelpPage(TemplateView):
    template_name = 'help.html'
