# Tong Nie's Homepage

This repository contains the source for [tongnie.github.io](https://tongnie.github.io), built with the latest al-folio Jekyll starter and its v1.x plugin runtime.

## Structure

- `_pages/`: top-level pages such as about, publications, projects, news, and CV.
- `_bibliography/papers.bib`: BibTeX records rendered by `jekyll-scholar`.
- `_news/`: dated news items shown on the homepage and `/news/`.
- `_projects/`: project cards and project pages.
- `assets/img/publication_preview/`: publication and project preview images.

## Deployment

The al-folio deploy workflow builds the Jekyll site with GitHub Actions and publishes the generated site to the `gh-pages` branch. For GitHub Pages, the repository Pages source should be set to `gh-pages`.
