from django import forms

class NutritionForm(forms.Form):
    query = forms.CharField(max_length = '100',
                            label = '',
                            widget=forms.TextInput(attrs =
                                                    {'placeholder': 'Search for food or FDC ID or UPC',
                                                    'size':80,'autocomplete':'off',
                                                    'style': 'height: 50px;'
                                                            'width: 600px;'
                                                            'border-radius:8px solid grey;'
                                                            'padding: 7px; margin-top: 10px;'
                                                            'margin-bottom: 10px; font-size: 15px;'}))
