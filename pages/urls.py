from django.urls import path
from pages.views import ContactView, Result, detailPage

app_name = 'pages'

urlpatterns = [
    path('', ContactView.as_view(), name = 'index'),
    path('search/query=<str:query>', Result.as_view(), name = 'query'),
    path('search/details/<int:fdcId>', detailPage, name = 'detailPage'),
]
