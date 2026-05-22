---
layout: page
permalink: /software/
title: Software
description: Open-source and web-accessible software developed by the Shi Research Group.
nav: true
nav_order: 5
software_packages:
  - name: Mofography
    logo: assets/img/mofography_logo.png
    tagline: Structural analysis and visualization for nanoporous materials
    description: Mofography is a powerful Python package for the structural analysis and visualization of nanoporous materials like MOFs, zeolites, and activated carbons.
    demo_url: https://arung-northwestern-mofography-web-demo.hf.space/
    repo_url:
    repo_status: GitHub repo coming soon
    status: Web demo available
    tags:
      - Python
      - MOFs
      - Zeolites
      - Activated carbons
      - Visualization
      - Structural analysis
---

<style>
  .software-page {
    --software-muted: var(--global-text-color-light);
    --software-surface: var(--global-card-bg-color);
    --software-shadow: 0 18px 42px rgba(0, 0, 0, 0.08);
  }

  .software-hero {
    position: relative;
    overflow: hidden;
    border: 1px solid var(--global-divider-color);
    border-radius: 8px;
    padding: 2rem;
    margin-bottom: 1.5rem;
    background:
      radial-gradient(circle at top right, rgba(0, 91, 187, 0.15), transparent 28rem),
      linear-gradient(135deg, var(--global-card-bg-color), var(--global-bg-color));
  }

  .software-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    margin-bottom: 0.9rem;
    color: var(--global-theme-color);
    font-size: 0.78rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0;
  }

  .software-hero h2 {
    max-width: 720px;
    margin-bottom: 0.75rem;
    font-size: clamp(1.85rem, 4vw, 3rem);
    line-height: 1.08;
  }

  .software-hero p {
    max-width: 760px;
    margin-bottom: 0;
    color: var(--software-muted);
    font-size: 1.05rem;
  }

  .software-toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin: 1.5rem 0;
    padding: 0.75rem;
    border: 1px solid var(--global-divider-color);
    border-radius: 8px;
    background: var(--global-card-bg-color);
  }

  .software-search {
    display: flex;
    align-items: center;
    flex: 1 1 340px;
    gap: 0.65rem;
    min-width: 0;
    padding: 0.65rem 0.85rem;
    border: 1px solid var(--global-divider-color);
    border-radius: 8px;
    background: var(--global-bg-color);
  }

  .software-search i {
    color: var(--software-muted);
  }

  .software-search input {
    width: 100%;
    border: 0;
    outline: 0;
    color: var(--global-text-color);
    background: transparent;
  }

  .software-count {
    white-space: nowrap;
    color: var(--software-muted);
    font-size: 0.9rem;
  }

  .software-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1rem;
  }

  .software-card {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    border: 1px solid var(--global-divider-color);
    border-radius: 8px;
    background: var(--software-surface);
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.02);
    transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
  }

  .software-card:hover,
  .software-card:focus-within {
    transform: translateY(-4px);
    border-color: var(--global-theme-color);
    box-shadow: var(--software-shadow);
  }

  .software-card-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.25rem 1.25rem 0.5rem;
  }

  .software-logo,
  .software-logo-placeholder {
    display: grid;
    flex: 0 0 74px;
    width: 74px;
    height: 74px;
    place-items: center;
    border: 1px solid var(--global-divider-color);
    border-radius: 8px;
    background: var(--global-bg-color);
  }

  .software-logo {
    position: relative;
  }

  .software-logo::before {
    display: none;
    color: var(--global-theme-color);
    content: attr(data-initial);
    font-size: 1.45rem;
    font-weight: 800;
  }

  .software-logo.is-missing::before {
    display: block;
  }

  .software-logo img {
    width: 58px;
    height: 58px;
    object-fit: contain;
  }

  .software-logo.is-missing img {
    display: none;
  }


  .software-logo-placeholder {
    color: var(--global-theme-color);
    font-size: 1.45rem;
    font-weight: 800;
  }

  .software-title-group {
    min-width: 0;
  }

  .software-title-group h3 {
    margin: 0 0 0.25rem;
    font-size: 1.35rem;
  }

  .software-tagline {
    margin: 0;
    color: var(--software-muted);
    font-size: 0.92rem;
    line-height: 1.35;
  }

  .software-card-body {
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 0.75rem 1.25rem 1.25rem;
  }

  .software-description {
    margin-bottom: 1rem;
    line-height: 1.65;
  }

  .software-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
    margin: 0 0 1.25rem;
    padding: 0;
    list-style: none;
  }

  .software-tags li {
    padding: 0.28rem 0.55rem;
    border: 1px solid var(--global-divider-color);
    border-radius: 999px;
    color: var(--software-muted);
    font-size: 0.78rem;
    line-height: 1.2;
    background: var(--global-bg-color);
  }

  .software-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.65rem;
    margin-top: auto;
  }

  .software-button,
  .software-button-disabled {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.45rem;
    min-height: 2.55rem;
    padding: 0.55rem 0.85rem;
    border-radius: 8px;
    font-weight: 700;
    font-size: 0.9rem;
    text-decoration: none;
  }

  .software-button {
    border: 1px solid var(--global-theme-color);
    color: #fff;
    background: var(--global-theme-color);
  }

  .software-button:hover {
    color: #fff;
    text-decoration: none;
    filter: brightness(0.95);
  }

  .software-button.secondary {
    color: var(--global-theme-color);
    background: transparent;
  }

  .software-button.secondary:hover {
    color: #fff;
    background: var(--global-theme-color);
  }

  .software-button-disabled {
    border: 1px dashed var(--global-divider-color);
    color: var(--software-muted);
    background: transparent;
  }

  .software-status {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    margin-bottom: 0.9rem;
    color: var(--global-theme-color);
    font-size: 0.86rem;
    font-weight: 700;
  }

  .software-empty {
    display: none;
    padding: 1.25rem;
    border: 1px dashed var(--global-divider-color);
    border-radius: 8px;
    color: var(--software-muted);
    text-align: center;
  }

  @media (max-width: 576px) {
    .software-hero {
      padding: 1.35rem;
    }

    .software-toolbar,
    .software-card-header {
      align-items: stretch;
      flex-direction: column;
    }

    .software-count {
      white-space: normal;
    }
  }
</style>

<div class="software-page">
  <section class="software-hero">
    <div class="software-eyebrow"><i class="fas fa-cubes" aria-hidden="true"></i> Group software</div>
    <h2>Tools for computational nanoporous materials research</h2>
    <p>
      We develop reusable software for structure analysis, visualization, and data-driven discovery.
      Explore group-built packages for modeling, characterizing, and interpreting complex porous systems.
    </p>
  </section>

  <div class="software-toolbar" aria-label="Software catalog controls">
    <label class="software-search">
      <i class="fas fa-search" aria-hidden="true"></i>
      <input id="software-search" type="search" placeholder="Search software by name, material, or capability" aria-label="Search software">
    </label>
    <div class="software-count"><span id="software-visible-count">{{ page.software_packages | size }}</span> <span id="software-package-label">package{% if page.software_packages.size != 1 %}s{% endif %}</span></div>
  </div>

  <div class="software-grid" id="software-grid">
    {% for package in page.software_packages %}
      {% assign tags_text = package.tags | join: ' ' %}
      {% assign searchable = package.name | append: ' ' | append: package.tagline | append: ' ' | append: package.description | append: ' ' | append: tags_text | downcase %}
      <article class="software-card" data-software-card data-search="{{ searchable | escape }}">
        <div class="software-card-header">
          {% if package.logo %}
            <div class="software-logo" data-initial="{{ package.name | slice: 0, 1 }}">
              <img data-software-logo src="{{ package.logo | relative_url }}" alt="{{ package.name }} logo">
            </div>
          {% else %}
            <div class="software-logo-placeholder" aria-hidden="true">{{ package.name | slice: 0, 1 }}</div>
          {% endif %}
          <div class="software-title-group">
            <h3>{{ package.name }}</h3>
            <p class="software-tagline">{{ package.tagline }}</p>
          </div>
        </div>

        <div class="software-card-body">
          {% if package.status %}
            <div class="software-status"><i class="fas fa-check-circle" aria-hidden="true"></i>{{ package.status }}</div>
          {% endif %}

          <p class="software-description">{{ package.description }}</p>

          {% if package.tags %}
            <ul class="software-tags" aria-label="{{ package.name }} tags">
              {% for tag in package.tags %}
                <li>{{ tag }}</li>
              {% endfor %}
            </ul>
          {% endif %}

          <div class="software-actions">
            {% if package.demo_url %}
              <a class="software-button" href="{{ package.demo_url }}" target="_blank" rel="noopener noreferrer">
                <i class="fas fa-external-link-alt" aria-hidden="true"></i> Web demo
              </a>
            {% endif %}

            {% if package.repo_url %}
              <a class="software-button secondary" href="{{ package.repo_url }}" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-github" aria-hidden="true"></i> GitHub
              </a>
            {% elsif package.repo_status %}
              <span class="software-button-disabled">
                <i class="fab fa-github" aria-hidden="true"></i> {{ package.repo_status }}
              </span>
            {% endif %}
          </div>
        </div>
      </article>
    {% endfor %}
  </div>

  <div class="software-empty" id="software-empty">No software packages match this search.</div>
</div>

<script>
  document.addEventListener("DOMContentLoaded", function () {
    var input = document.getElementById("software-search");
    var cards = Array.prototype.slice.call(document.querySelectorAll("[data-software-card]"));
    var count = document.getElementById("software-visible-count");
    var label = document.getElementById("software-package-label");
    var empty = document.getElementById("software-empty");
    var logos = Array.prototype.slice.call(document.querySelectorAll("[data-software-logo]"));

    if (!input || !cards.length) {
      return;
    }

    logos.forEach(function (logo) {
      logo.addEventListener("error", function () {
        if (logo.parentElement) {
          logo.parentElement.classList.add("is-missing");
        }
      });
    });

    function updateSoftwareList() {
      var query = input.value.trim().toLowerCase();
      var visible = 0;

      cards.forEach(function (card) {
        var matches = !query || card.getAttribute("data-search").indexOf(query) !== -1;
        card.hidden = !matches;
        if (matches) {
          visible += 1;
        }
      });

      count.textContent = visible;
      label.textContent = visible === 1 ? "package" : "packages";
      empty.style.display = visible ? "none" : "block";
    }

    input.addEventListener("input", updateSoftwareList);
  });
</script>




