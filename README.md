# Dylan Grow — Network & Security Engineer

A personal portfolio and study site for showcasing networking, security, troubleshooting, and PWA-focused frontend work.

## Overview

This site is a lightweight static portfolio built for GitHub Pages. It uses plain HTML, CSS, and JavaScript, plus a Progressive Web App setup for offline-friendly access and installability.

## Features

- Responsive portfolio layout.
- Smooth reveal animations.
- Project/build sections.
- Contact links for email and phone.
- PWA support with a web manifest and service worker.
- GitHub Pages-friendly relative paths.

## Project Structure

```text
/site
├── index.html
├── /css
│   └── styles.css
├── /js
│   ├── app.js
│   ├── reveal.js
│   └── ui.js
├── /pwa
│   ├── manifest.json
│   └── sw.js
├── /assets
│   ├── /icons
│   │   └── favicon.svg
│   └── /images
│       └── placeholder.webp
```

## Deployment

This site is intended to be hosted on GitHub Pages from the `/site/` path. Make sure all asset paths remain relative so they resolve correctly on the published site.

### GitHub Pages setup
1. Push the repository to GitHub.
2. Open the repository settings.
3. Enable GitHub Pages.
4. Select the branch and folder that contains the site files.
5. Make sure the published output includes `index.html` at the correct path.

GitHub Pages project sites commonly use subpaths, so relative links are the safest choice for assets, manifests, and scripts [web:10][web:17].

## PWA Notes

The site includes:
- `pwa/manifest.json` for install metadata.
- `pwa/sw.js` for caching and offline support.
- `assets/icons/favicon.svg` for the browser icon.

For the PWA to work correctly, the service worker and manifest paths must match the deployed directory structure [web:12][web:13][web:24].

## Local Editing

To work on the site locally, open `index.html` in a browser or use a simple local server.

Example:
```bash
python -m http.server
```

Then open the site in your browser at the local server address.

## Contact

- Email: [Dylangrow@gmail.com](mailto:Dylangrow@gmail.com)
- Phone: [252-349-0830](tel:12523490830)

## About

Built by Dylan Grow as a personal portfolio and technical learning project focused on networking fundamentals, security, and troubleshooting.
