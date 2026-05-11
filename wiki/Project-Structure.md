# Project Structure

Complete map of every folder and file in the repository.

---

## Top-Level Layout

```
SvelteTwo/
├── src/                    → Application source code
├── public/                 → Static assets (images, videos, PDFs)
├── e2e/                    → Playwright end-to-end tests
├── wiki/                   → Project documentation (this wiki)
├── .github/workflows/      → GitHub Actions CI/CD
├── .husky/                 → Pre-commit hooks
├── package.json            → Dependencies & npm scripts
├── svelte.config.js        → SvelteKit config (adapter, assets dir)
├── vite.config.js          → Vite build config + Vitest settings
├── playwright.config.js    → Playwright E2E test config
├── CLAUDE.md               → AI development guidelines
└── SITE_OVERVIEW.md        → High-level architecture reference
```

---

## `src/` — Application Code

```
src/
├── app.html                → HTML shell (head, body wrapper)
├── app.css                 → Global styles (Tailwind + dark variant)
├── assets/
│   └── sda-logo.svg        → SDA church logo (imported by Footer)
├── lib/
│   ├── components/
│   │   ├── Nav.svelte          → Sticky top navigation
│   │   ├── Footer.svelte       → Page footer with social links
│   │   └── VideoCarousel.svelte → Hero video/image carousel
│   ├── data/
│   │   ├── church.js           → Church contact info (single source of truth)
│   │   ├── videos.js           → Background video metadata + image fallbacks
│   │   ├── bulletins.js        → Weekly bulletin PDF URLs
│   │   └── translations.js     → EN + ES translation strings (~400+ keys)
│   ├── i18n.svelte.js          → Language state + t() function
│   └── theme.svelte.js         → Dark/light theme state
└── routes/
    ├── +layout.svelte          → Root layout (wraps all pages with Nav + Footer)
    ├── +page.svelte            → / Home
    ├── about/+page.svelte      → /about
    ├── bulletin/+page.svelte   → /bulletin
    ├── calendar/+page.svelte   → /calendar
    ├── contact/+page.svelte    → /contact
    ├── events/+page.svelte     → /events
    ├── food-pantry/+page.svelte → /food-pantry
    ├── forms/+page.svelte      → /forms
    ├── galleries/+page.svelte  → /galleries
    ├── giving/+page.svelte     → /giving
    ├── live-stream/+page.svelte → /live-stream
    ├── login/+page.svelte      → /login
    └── njc-youth/+page.svelte  → /njc-youth
```

---

## `public/` — Static Assets

> **Important:** SvelteKit is configured to serve `public/` as the static assets directory (`files.assets: 'public'` in `svelte.config.js`). Files here are accessible at their path root (e.g., `/images/...`).

```
public/
├── favicon.svg
├── icons.svg
├── bulletin/
│   └── *.pdf               → Old local bulletin PDFs (new ones on Vercel Blob)
├── images/
│   └── hero-thumbnails/
│       ├── IMG_0093-desktop.jpg
│       ├── IMG_0093-mobile.jpg
│       ├── IMG_0148-desktop.jpg
│       ├── IMG_0148-mobile.jpg
│       ├── IMG_1502-desktop.jpg
│       ├── IMG_1502-mobile.jpg
│       ├── IMG_1640-desktop.jpg
│       └── IMG_1640-mobile.jpg
└── videos/
    ├── IMG_0093.mp4 / .webm
    ├── IMG_0148.mp4 / .webm
    ├── IMG_1502.mp4 / .webm
    └── IMG_1640.mp4 / .webm
```

---

## `e2e/` — End-to-End Tests

```
e2e/
├── navigation.spec.js          → All 12 pages load; nav & footer links work
├── language-toggle.spec.js     → EN↔ES switching; localStorage persistence
├── bulletin.spec.js            → PDF display, download, responsiveness
├── mobile-hero.spec.js         → Mobile image loading (Pixel 5 + iPhone 14)
└── (forms.spec.js not present) → Form tests not yet implemented as E2E
```

---

## `src/tests/` — Unit Tests

```
src/tests/
├── setup.js                    → Vitest global setup
├── data/
│   ├── church.test.js          → church.js field validation
│   ├── videos.test.js          → videos.js structure validation
│   ├── bulletins.test.js       → bulletins.js metadata validation
│   └── translations.test.js    → Translation key completeness
├── components/
│   ├── Nav.test.js             → Nav renders correctly
│   ├── Footer.test.js          → Footer renders correctly
│   └── VideoCarousel.test.js   → Carousel renders, indicators, fallback
└── i18n.test.js                → Language toggle & persistence
```

---

## `.github/workflows/` — CI/CD

```
.github/
└── workflows/
    ├── test.yml                → Unit + E2E tests on push/PR
    └── project-automation.yml  → GitHub Projects board automation
```

---

## Key Configuration Files

### `svelte.config.js`
```js
import adapter from '@sveltejs/adapter-auto'

export default {
  kit: {
    adapter: adapter(),
    files: {
      assets: 'public',   // ← Serves public/ as static assets
    },
  },
}
```

### `vite.config.js`
```js
export default defineConfig({
  plugins: [sveltekit(), tailwindcss()],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}'],
    environment: 'jsdom',
    globals: true,
    setupFiles: ['src/tests/setup.js'],
  },
})
```

### `playwright.config.js`
- Runs tests against `http://localhost:4173` (preview build)
- Projects: chromium, firefox, webkit, mobile-chrome (Pixel 5), mobile-safari (iPhone 14)
- Mobile projects only run `**/mobile-*.spec.js`

---

## How Files Connect

```
+layout.svelte
  ├── imports Nav.svelte
  │     ├── reads church.js (name, social URLs)
  │     ├── reads i18n.svelte.js (t(), getLanguage, setLanguage)
  │     └── reads theme.svelte.js (getTheme, toggleTheme)
  ├── imports Footer.svelte
  │     ├── reads church.js (address, phone, email, socials)
  │     └── reads i18n.svelte.js (t())
  └── reads theme.svelte.js → toggles dark class on <html>

+page.svelte (home)
  └── uses VideoCarousel.svelte
        └── reads videos.js (mp4, webm, imageMobile, imageDesktop)
```

---

*Last updated: May 11, 2026*
