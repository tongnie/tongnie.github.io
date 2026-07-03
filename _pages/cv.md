---
layout: page
title: CV
permalink: /cv/
description: dynamically generated CV with a printable PDF view.
nav: true
nav_order: 6
---

{% assign cv = site.data.cv %}

<div class="cv-hero">
  <p>{{ cv.basics.summary }}</p>
  <p class="cv-updated">Last updated: {{ cv.basics.updated }}</p>
  <div class="cv-actions">
    <a class="btn btn-sm z-depth-0" href="/assets/pdf/Tong_Nie_CV.pdf">Download PDF</a>
    <a class="btn btn-sm z-depth-0" href="/cv-print/">Printable source</a>
  </div>
</div>

<object class="cv-pdf-frame" data="/assets/pdf/Tong_Nie_CV.pdf" type="application/pdf">
  <p>The generated PDF can be downloaded from <a href="/assets/pdf/Tong_Nie_CV.pdf">this link</a>.</p>
</object>

<section class="cv-section">
  <h2>Education</h2>
  <div class="cv-timeline">
    {% for item in cv.education %}
      <article>
        <div>
          <strong>{{ item.degree }}</strong>
          <span>{{ item.institution }}, {{ item.location }}</span>
          {% if item.details %}<span>{{ item.details }}</span>{% endif %}
        </div>
        <time>{{ item.date }}</time>
      </article>
    {% endfor %}
  </div>
</section>

<section class="cv-section">
  <h2>Awards and Honors</h2>
  <div class="cv-timeline compact">
    {% for item in cv.awards %}
      <article>
        <div><strong>{{ item.name }}</strong></div>
        <time>{{ item.date }}</time>
      </article>
    {% endfor %}
  </div>
</section>

<section class="cv-section">
  <h2>Research Funding</h2>
  {% for item in cv.funding %}
    <article class="cv-card">
      <strong>{{ item.title }}</strong>
      <span>{{ item.agency }} · {{ item.role }} · {{ item.amount }} · {{ item.period }}</span>
    </article>
  {% endfor %}
</section>

<section class="cv-section">
  <h2>Selected Talks and Presentations</h2>
  <div class="cv-timeline compact">
    {% for item in cv.talks %}
      <article>
        <div>
          <strong>{{ item.title }}</strong>
          <span>{{ item.venue }}, {{ item.location }}</span>
        </div>
        <time>{{ item.date }}</time>
      </article>
    {% endfor %}
  </div>
</section>
