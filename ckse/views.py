from django.shortcuts import render
from django.shortcuts import HttpResponse
import requests
from bs4 import BeautifulSoup
import re
import os
import socket
import time
import io
import sys
import json

# def models():
def check_servers(request):
    server_status = {"status": "false"}
    if (request.method == 'POST'):
        postBody = request.body
        json_result = json.loads(postBody)
        link=json_result.get('link')+json_result.get('id')
        s = requests.session()
        # id = json_result.get('id')
        type = json_result.get('type')
        if type=="ks" or type=="sys":
            page = s.get("https://checkservers.ovh")
            pagesoup = BeautifulSoup(page.text, 'html.parser')
            links = pagesoup.find("a", href=link)
        elif type=="ol":
            page = s.get(link.lower())
            pagesoup = BeautifulSoup(page.text, 'html.parser')
            links = pagesoup.find("span", itemtype="http://schema.org/InStock")
        if links != None:
            server_status = {"status": "true"}
        return HttpResponse(json.dumps(server_status), content_type="application/json")

def index(request):
    return render(request, "index.html")
