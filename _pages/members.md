---
layout: page
title: Members
permalink: /members/
description: 
nav: true
nav_order: 3
display_categories: [PI, Visiting Scholar, Graduate Students, Undergraduates, Alumni]
horizontal: true
---

<!-- pages/members.md -->
<div class="projects">
{%- if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized members -->
  {%- for category in page.display_categories %}
  <h2 class="category" style="margin-top: 1rem; margin-bottom: 0.5rem;">{{ category }}</h2>
  {%- assign categorized_projects = site.projects | where: "category", category -%}
  {%- assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each member, 3 per row -->
  <div class="container">
    <div class="row">
    {%- for project in sorted_projects -%}
      {% include member_card.html %}
    {%- endfor %}
    </div>
  </div>
  {% endfor %}

{%- else -%}
<!-- Display members without categories -->
  {%- assign sorted_projects = site.projects | sort: "importance" -%}
  <div class="container">
    <div class="row">
    {%- for project in sorted_projects -%}
      {% include member_card.html %}
    {%- endfor %}
    </div>
  </div>
{%- endif -%}
</div>
