from django.conf.urls import include, url
from django.contrib.auth.decorators import login_required
from django.contrib.auth.views import login
from django.views.generic.base import TemplateView

from django.contrib import admin
admin.autodiscover()

# TODO: Is there a way to make the root URL point to a static file, instead of using a no-op template view?
urlpatterns = [
    url(r'^$', login_required(TemplateView.as_view(template_name="main.html"))),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^accounts/login/$', login, {'template_name': 'login.html'}, name="login"),
    url(r'^words/', include('words.urls')),
]
