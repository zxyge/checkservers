from django.shortcuts import render
from django.shortcuts import HttpResponse
import requests
from bs4 import BeautifulSoup
import requests
from bs4 import BeautifulSoup
import re
import os
import socket
import time
import io
import sys
import json

models = [
    {"id": "1801sk21", "title": "KS-1加拿大", "cpu": "Atom™ D425", "ram": "2 GB", "disk": "500 GB", "network": "100 Mbps",
     "price": "€ 3.99", "type": "ks", "odrlink": "https://www.kimsufi.com/en/order/kimsufi.xml?reference="},
    {"id": "1804sk12", "title": "KS-1加拿大", "cpu": "Atom™ D425", "ram": "2 GB", "disk": "500 GB", "network": "100 Mbps",
     "price": "€ 3.99", "type": "ks", "odrlink":"https://www.kimsufi.com/en/order/kimsufi.xml?reference="},
    {"id": "1804sk13", "title": "KS-2加拿大", "cpu": "Atom™ N2800", "ram": "4 GB", "disk": "1 TB", "network": "100 Mbps",
     "price": "€ 4.99", "type": "ks","odrlink":"https://www.kimsufi.com/en/order/kimsufi.xml?reference="},
    {"id": "1801armada01", "title": "SYS2T加拿大", "cpu": "Cortex A9 ARMv7", "ram": "2 GB", "disk": "2 TB", "network": "250 Mbps",
     "price": "€ 4.99", "type": "sys","odrlink":"https://www.soyoustart.com/ie/order/soYouStart.xml?reference="},
    {"id": "1801armada02", "title": "SYS4T加拿大", "cpu": "Cortex A9 ARMv7", "ram": "2 GB", "disk": "4 TB",
     "network": "250 Mbps",
     "price": "€ 8.99", "type": "sys","odrlink":"https://www.soyoustart.com/ie/order/soYouStart.xml?reference="},
    {"id": "1801armada03", "title": "SYS6T加拿大", "cpu": "Cortex A9 ARMv7", "ram": "2 GB", "disk": "6 TB",
     "network": "250 Mbps",
     "price": "€ 13.99", "type": "sys","odrlink":"https://www.soyoustart.com/ie/order/soYouStart.xml?reference="},
    {"id": "1801sk12", "title": "KS-1法国", "cpu": "Atom™ D425", "ram": "2 GB", "disk": "500 GB", "network": "100 Mbps",
     "price": "€ 3.99", "type": "ks","odrlink":"https://www.kimsufi.com/en/order/kimsufi.xml?reference="},
    {"id": "1801sk13", "title": "KS-2法国", "cpu": "Atom™ N2800", "ram": "4 GB", "disk": "1 TB", "network": "100 Mbps",
     "price": "€ 4.99", "type": "ks","odrlink":"https://www.kimsufi.com/en/order/kimsufi.xml?reference="},
    {"id": "1804armada01", "title": "SYS2T法国", "cpu": "Cortex A9 ARMv7", "ram": "2 GB", "disk": "6 TB",
     "network": "250 Mbps",
     "price": "€ 4.99", "type": "sys","odrlink":"https://www.soyoustart.com/ie/order/soYouStart.xml?reference="},
    {"id": "1804armada02", "title": "SYS4T法国", "cpu": "Cortex A9 ARMv7", "ram": "2 GB", "disk": "6 TB",
     "network": "250 Mbps",
     "price": "€ 8.99", "type": "sys","odrlink":"https://www.soyoustart.com/ie/order/soYouStart.xml?reference="},
    {"id": "1804armada03", "title": "SYS6T法国", "cpu": "Cortex A9 ARMv7", "ram": "2 GB", "disk": "6 TB",
     "network": "250 Mbps",
     "price": "€ 13.99", "type": "sys","odrlink":"https://www.soyoustart.com/ie/order/soYouStart.xml?reference="},
]

def chser():
    s = requests.session()
    page = s.get('https://checkservers.ovh/')
    pagesoup = BeautifulSoup(page.text, 'html.parser')
    for server_id in models:
        server_link =server_id.get("odrlink") +server_id.get("id")
        links = pagesoup.find("a",href=server_link)
        if links != None:
            server_status={"status": "有货"}
            server_id.update(server_status)
            # print(server_id)

        else:
            server_status = {"status": "无货"}
            server_id.update(server_status)
    return models

def index(request):
    servet_list=chser()
    return render(request, "index.html", {"models": servet_list},)
