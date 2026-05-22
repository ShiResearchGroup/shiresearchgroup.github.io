---
layout: page
permalink: /publications/
title: Publications
description: 
years: [2026,2025,2024,2023,2021,2020,2019,2018,2016,2015]
nav: true
nav_order: 4
---

See [Google Scholar](https://scholar.google.com/citations?user=UCZC5w8AAAAJ&hl=en&authuser=1). * corresponding authors; & equal contribution; ^ the Shi group's member.
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/pub_img/mofxdb.jpg" title="MOFX-DB: An Online Database of Computational Adsorption Data for Nanoporous Materials" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/pub_img/pressure_tensor_perspective.jpg" title="A perspective on the microscopic pressure (stress) tensor: History, current understanding, and future challenges" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
    </div>
</div>
<!-- _pages/publications.md -->
<div class="publication-search mb-4">
  <label for="publication-search-input" class="sr-only">Search publications</label>
  <input
    type="search"
    id="publication-search-input"
    class="form-control"
    placeholder="Search publications by title, author, journal, keyword..."
    aria-describedby="publication-search-count"
  >
  <small id="publication-search-count" class="form-text text-muted"></small>
</div>

<div class="publications">

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>

<script>
  (function () {
    function normalizeText(text) {
      var normalized = text.toLowerCase();
      normalized = normalized.normalize ? normalized.normalize("NFD") : normalized;

      return normalized
        .replace(/[\u0300-\u036f]/g, "");
    }

    function pluralize(count) {
      return count === 1 ? "publication" : "publications";
    }

    var searchInput = document.getElementById("publication-search-input");
    var countElement = document.getElementById("publication-search-count");
    var publications = document.querySelector(".publications");

    if (!searchInput || !countElement || !publications) {
      return;
    }

    var entries = Array.prototype.slice.call(publications.querySelectorAll("ol.bibliography > li"));

    entries.forEach(function (entry) {
      entry.dataset.searchText = normalizeText([
        entry.textContent,
        entry.innerHTML.replace(/<[^>]*>/g, " "),
        entry.querySelector("[id]") ? entry.querySelector("[id]").id : ""
      ].join(" "));
    });

    function filterPublications() {
      var terms = normalizeText(searchInput.value).split(/\s+/).filter(Boolean);
      var visibleCount = 0;

      entries.forEach(function (entry) {
        var isMatch = terms.every(function (term) {
          return entry.dataset.searchText.indexOf(term) !== -1;
        });

        entry.style.display = isMatch ? "" : "none";

        if (isMatch) {
          visibleCount += 1;
        }
      });

      Array.prototype.slice.call(publications.querySelectorAll("h2.year")).forEach(function (yearHeading) {
        var bibliography = yearHeading.nextElementSibling;
        var yearEntries = bibliography
          ? Array.prototype.slice.call(bibliography.children).filter(function (child) {
              return child.tagName && child.tagName.toLowerCase() === "li";
            })
          : [];
        var hasVisibleEntries = yearEntries
          .some(function (entry) {
            return entry.style.display !== "none";
          });

        yearHeading.style.display = hasVisibleEntries ? "" : "none";
        if (bibliography) {
          bibliography.style.display = hasVisibleEntries ? "" : "none";
        }
      });

      if (terms.length === 0) {
        countElement.textContent = "";
      } else if (visibleCount === 0) {
        countElement.textContent = "No matching publications found.";
      } else {
        countElement.textContent = "Showing " + visibleCount + " matching " + pluralize(visibleCount) + ".";
      }
    }

    searchInput.addEventListener("input", filterPublications);
    filterPublications();
  })();
</script>
