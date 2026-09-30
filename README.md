# Ana Muenz — Product Design Portfolio

A single-page, English-language portfolio with native expandable case studies. Built with HTML, CSS and a small progressive-enhancement script. No build step, package installation, database or account login is required.

## Local preview

Open `index.html` in a browser, or run `node .tools/serve.cjs` from this folder for a localhost preview. The preview helper is intentionally ignored by Git.

## Publishing to GitHub Pages

The planned repository is `vampiranna/ana-muenz`, with the expected address `https://vampiranna.github.io/ana-muenz/`. This address is not a claim of a completed deployment.

After the local version is reviewed, create the repository using **this folder only**, push the site files to the `main` branch and configure Pages to deploy from `main` / `/ (root)`. All asset paths are relative and work under the `/ana-muenz/` prefix. `.nojekyll` enables the buildless static site flow.

## Content maintenance

- `index.html`: introduction, case studies, About and contact links.
- `styles.css`: colors, typography, responsive layout and reduced-motion support.
- `script.js`: case closing with keyboard focus restoration and direct links to cases.
- `assets/`: public Notion images, optimized copies, self-hosted fonts and their licenses.
- `CONTENT-SOURCES.md`: publication scope and source references.

Future changes can be requested in the same ChatGPT conversation. Prometheus is intentionally deferred.

## Confidentiality boundary

**Never initialize Git, upload or publish the parent `Portfolio` folder.** The pre-existing `AI Cockpit` and `Atma` folders and PDF are confidential. No files from those folders were copied into this site. Only images fetched directly from the approved Notion cases are used.

Temporary signed Notion image URLs, raw research data and credentials must never be committed. Only the downloaded public images and permanent source-page links belong in this folder.

## Fonts

Manrope and UnifrakturCook are distributed under the SIL Open Font License; Roboto Slab is distributed under Apache License 2.0. Font license files and the Manrope FONTLOG are included in `assets/fonts/`.

## Verification

Before publication, check both cases, links, keyboard access, reduced motion, mobile/desktop layouts, and the list of files being uploaded. The content reports design deliverables and qualitative contributions without inventing impact metrics.
