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
    app_url: https://arung-northwestern-mofography-web-demo.hf.space/
    repo_url:
    repo_status: GitHub repo coming soon
    paper_url:
    paper_status: Paper coming soon
    status: Web app available
    tags:
      - Python
      - Rust backend
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

  .software-repo-section {
    margin-top: 2rem;
    padding-top: 1.5rem;
    border-top: 1px solid var(--global-divider-color);
  }

  .software-section-heading {
    margin-bottom: 0.45rem;
    font-size: 1.45rem;
  }

  .software-section-note {
    max-width: 720px;
    margin-bottom: 1rem;
    color: var(--software-muted);
    line-height: 1.6;
  }

  .software-repo-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1rem;
  }

  .software-repo-card {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    padding: 1.1rem;
    border: 1px solid var(--global-divider-color);
    border-radius: 8px;
    background: var(--software-surface);
    text-decoration: none;
    transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
  }

  .software-repo-card:hover,
  .software-repo-card:focus {
    transform: translateY(-3px);
    border-color: var(--global-theme-color);
    box-shadow: var(--software-shadow);
    text-decoration: none;
  }

  .software-repo-icon {
    display: grid;
    flex: 0 0 48px;
    width: 48px;
    height: 48px;
    place-items: center;
    border: 1px solid var(--global-divider-color);
    border-radius: 8px;
    color: var(--global-theme-color);
    background: var(--global-bg-color);
    font-size: 1.35rem;
  }

  .software-repo-card h3 {
    margin: 0 0 0.25rem;
    font-size: 1.1rem;
  }

  .software-repo-card p {
    margin: 0;
    color: var(--software-muted);
    line-height: 1.5;
  }

  @media (max-width: 576px) {
    .software-card-header {
      align-items: stretch;
      flex-direction: column;
    }
  }
</style>

<div class="software-page">
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
            {% if package.app_url %}
              <a class="software-button" href="{{ package.app_url }}" target="_blank" rel="noopener noreferrer">
                <i class="fas fa-external-link-alt" aria-hidden="true"></i> Web app
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

            {% if package.paper_url %}
              <a class="software-button secondary" href="{{ package.paper_url }}" target="_blank" rel="noopener noreferrer">
                <i class="fas fa-file-alt" aria-hidden="true"></i> Paper
              </a>
            {% elsif package.paper_status %}
              <span class="software-button-disabled">
                <i class="fas fa-file-alt" aria-hidden="true"></i> {{ package.paper_status }}
              </span>
            {% endif %}
          </div>
        </div>
      </article>
    {% endfor %}
  </div>

  <section class="software-repo-section" aria-labelledby="more-software-heading">
    <h2 class="software-section-heading" id="more-software-heading">More Software</h2>
    <p class="software-section-note">
      This page highlights selected software from the group. Additional scripts, packages, and project repositories
      are available through these GitHub profiles.
    </p>

    <div class="software-repo-grid">
      <a class="software-repo-card" href="https://github.com/KaihangShi" target="_blank" rel="noopener noreferrer">
        <span class="software-repo-icon"><i class="fab fa-github" aria-hidden="true"></i></span>
        <div>
          <h3>Kaihang Shi GitHub</h3>
          <p>Personal repositories for research software, examples, and related computational tools.</p>
        </div>
      </a>

      <a class="software-repo-card" href="https://github.com/Shi-Research-Group" target="_blank" rel="noopener noreferrer">
        <span class="software-repo-icon"><i class="fab fa-github" aria-hidden="true"></i></span>
        <div>
          <h3>Shi Research Group GitHub</h3>
          <p>Group repositories for shared software, collaborative projects, and research code.</p>
        </div>
      </a>
    </div>
  </section>
</div>

<script>
  document.addEventListener("DOMContentLoaded", function () {
    var logos = Array.prototype.slice.call(document.querySelectorAll("[data-software-logo]"));

    logos.forEach(function (logo) {
      logo.addEventListener("error", function () {
        if (logo.parentElement) {
          logo.parentElement.classList.add("is-missing");
        }
      });
    });
  });
</script>

