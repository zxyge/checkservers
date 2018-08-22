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
        id = json_result.get('id')
        type = json_result.get('type')
        print(json_result)
        if type=='ks':
            odrlink='https://www.kimsufi.com/en/order/kimsufi.xml?reference='
        else:
            odrlink='https://www.soyoustart.com/ie/order/soYouStart.xml?reference='
        s = requests.session()
        page = s.get('https://checkservers.ovh/')
        pagesoup = BeautifulSoup(page.text, 'html.parser')
        links = pagesoup.find("a", href=odrlink+id)
        if links != None:
            server_status={"status": "true"}
        return HttpResponse(json.dumps(server_status), content_type="application/json")

def index(request):
    return render(request, "index.html")
