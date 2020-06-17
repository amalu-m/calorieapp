from django.shortcuts import render
from . import forms
import requests
import json
from django.views.generic import ListView, FormView
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.urls import reverse_lazy
from django.conf import settings
import logging

import pdb

class ContactView(FormView):
    """
    This view gives form for entering search input(fooditem).
    Once the form is submitted, it validates and redirect to result page.
    """
    logging.basicConfig(level = logging.DEBUG, format = '%(asctime)s - %(levelname)s - %(message)s')

    template_name = 'index.html'
    form_class = forms.NutritionForm
    context_object_name = 'search_results'

    def form_valid(self, form, **kwargs):
        self.term = form.cleaned_data['query']
        return super().form_valid(form, **kwargs)

    def get_success_url(self):
        return reverse_lazy("pages:query", kwargs = {'query':self.term})

class Result(ListView):

    """
    Calls the helper method to get the results as list view.
    Results are paginated.
    """
    template_name = 'result.html'
    paginate_by = 10
    context_object_name = 'search_results'
    search_results = []

    def get_queryset(self):
        self.food = self.kwargs.get('query')
        self.search_results = SearchHelper.search(self, self.food)
        return self.search_results

    def get_context_data(self, **kwargs):
        if len(self.search_results) == 0:
            context = {
            'paginator': None,
            'page_obj': None,
            'is_paginated': False,
            'search_results': []
            }
            logging.debug("got valid results with count: " + str(len(self.search_results)))
        else:
            context  = super(Result, self).get_context_data()
            page = self.request.GET.get('page',1)
            paginator = Paginator(self.search_results, self.paginate_by)
            try:
                results = paginator.page(page)
                logging.debug("got valid results with count: " + str(len(self.search_results)))
            except PageNotAnInteger:
                results = paginator.page(1)
                logging.error("tried to get a non-integer page")
            context['search_results'] = results
        return context

class SearchHelper(object):
    """
    This class makes the API call to fetch the results for search keyword
    """
    def search(self, food):
        headers = {
            'X-Api-Key': settings.API_KEY
        }

        url = settings.LIST_URL
        params = {
                'query': food,
                'pageNumber': 1,
                'pageSize':100,
        }

        logging.debug("the query url is: " + str(url))

        response = requests.request("GET", url, headers = headers, params = params)
        data = response.json()
        return data

def detailPage(request,fdcId):
    """
    This function renders the detail elements in the list.
    """
    result = {}
    headers = {
        'X-Api-Key': settings.API_KEY
    }

    url = settings.DETAIL_URL + str(fdcId)

    logging.debug("the url for detail page is: " + url)

    response = requests.request("GET", url, headers = headers)
    data = response.json()
    result = data

    return render(request, 'detail.html', {'result': result})
