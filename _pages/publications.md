---
layout: page
permalink: /publications/
title: Publications
description: 
years: [2023,2021,2020,2019,2018,2016,2015]
nav: true
nav_order: 3
---

See [Google Scholar](https://scholar.google.com/citations?user=UCZC5w8AAAAJ&hl=en&authuser=1). Asterisk (*) denotes corresponding authors. Double dagger (‡) denotes equal contribution.
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/pub_img/mofxdb.jpg" title="MOFX-DB: An Online Database of Computational Adsorption Data for Nanoporous Materials" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/pub_img/pressure_tensor_perspective.jpg" title="A perspective on the microscopic pressure (stress) tensor: History, current understanding, and future challenges" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
    </div>
</div>
<!-- _pages/publications.md -->
<div class="publications">

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
