---
layout: page
permalink: /publications/
title: Publications
description: See <a href="https://scholar.google.com/citations?user=UCZC5w8AAAAJ&hl=en&authuser=1"><u>Google Scholar</u></a>. Asterisk (*) denotes corresponding authors. Double dagger (‡) denotes equal contribution.
years: [2023,2021,2020,2019,2018,2016,2015]
nav: true
nav_order: 1
---
<!-- _pages/publications.md -->
<div class="publications">

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
