# Glossary

Technical terms used in this project, explained for all experience levels.

---

## A

### adapter-auto
A SvelteKit adapter that automatically detects the deployment environment (Vercel, Netlify, Node.js) and generates the appropriate build output. Configured in `svelte.config.js`.

### Artifact (GitHub Actions)
A file or folder saved after a CI job runs — such as the Playwright HTML report. Available for download from the GitHub Actions run page for 30 days.

---

## B

### Blob (Vercel Blob)
Vercel's cloud object storage. Used to host large files (videos, PDFs) that are too big for git. Files get public URLs like `https://vysuzf3ywizupqg3.public.blob.vercel-storage.com/...`.

### Branch
A parallel copy of the code in git. Feature branches are created from `main`, worked on independently, then merged back via a Pull Request. Named like `feature/US-42-add-page`.

### Build
The process of compiling the SvelteKit app into optimized files for production. Run with `npm run build`. Output goes to `.svelte-kit/output/`.

---

## C

### CI/CD
**Continuous Integration / Continuous Deployment.** Automated pipelines that run tests on every code push (CI) and automatically deploy passing code (CD). This project uses GitHub Actions for CI and Vercel for CD.

### Component
A reusable piece of UI defined in a `.svelte` file. This project has three: `Nav.svelte`, `Footer.svelte`, `VideoCarousel.svelte`. Components can accept props, maintain state, and render HTML.

### Co-Authored-By
A git commit trailer that credits multiple authors. Every commit in this project ends with:
```
Co-Authored-By: Claude Haiku 4.5 <noreply@anthropic.com>
```

---

## D

### Dark Mode
A visual theme with dark backgrounds and light text. Activated by adding the `.dark` class to `<html>`. Toggled by the sun/moon button in the Nav. Defaults to the OS preference.

### `$derived`
A Svelte 5 rune that creates a computed value which automatically updates when its dependencies change:
```js
let currentVideo = $derived(videos[currentIndex])
// currentVideo updates whenever currentIndex changes
```

---

## E

### E2E Test (End-to-End)
A test that runs in a real browser and simulates actual user actions — clicking buttons, navigating pages, reading visible text. This project uses Playwright for E2E tests. Slower but more realistic than unit tests.

### Effect (`$effect`)
A Svelte 5 rune for side effects that run reactively:
```js
$effect(() => {
  document.title = `${currentPage} - Church Site`
})
```
Runs whenever referenced reactive values change.

---

## F

### Fallback (Video Carousel)
When a video cannot play (mobile autoplay block, network error), the carousel shows a JPEG image instead. Mobile devices show the fallback immediately; desktop shows it only on error.

### `files.assets`
A SvelteKit configuration option (`kit.files.assets`) specifying which directory contains static assets. Defaults to `'static'`. This project sets it to `'public'` so that the `public/` folder is served correctly in production.

---

## G

### GitHub Actions
Automated workflows defined in `.github/workflows/`. They run on push, pull request, or schedule. This project uses `test.yml` to run unit and E2E tests.

### GitHub Issue
A tracked item (bug, feature request, task) on the GitHub repository. Every bug should have a corresponding issue. Create with `gh issue create`.

---

## H

### Hero Section
The large full-screen section at the top of the home page, containing the video carousel background, church name, tagline, and CTA buttons.

### Husky
A tool that runs git hooks. This project uses it to run `npm test` before every commit, blocking the commit if tests fail. Configured in `.husky/`.

---

## I

### i18n
Internationalization — making the UI available in multiple languages. This project supports EN (English) and ES (Spanish). See [Internationalization](Internationalization) for details.

### `isMobile`
A reactive boolean in `VideoCarousel.svelte` that is `true` when the viewport width is less than 768px. Used to decide whether to show images immediately or try video playback.

---

## L

### Layout
In SvelteKit, `+layout.svelte` wraps all pages beneath it in the route tree. The root layout (`src/routes/+layout.svelte`) adds `<Nav>` and `<Footer>` to every page automatically.

### localStorage
Browser storage that persists data between page reloads and browser sessions. This project uses it to remember language (`'lang'` key) and theme (`'theme'` key) preferences.

---

## M

### MCP Server
**Model Context Protocol** server — provides tools to AI assistants. This project has a Svelte MCP server that validates `.svelte` files and fetches documentation.

### Mobile-First
A CSS design approach where base styles target mobile, with larger screen styles added via breakpoint prefixes (`md:`, `lg:`). Tailwind is mobile-first by default.

---

## P

### Playwright
A browser automation library for E2E testing. Can run tests in Chromium, Firefox, WebKit, and simulated mobile browsers. Tests are in the `e2e/` folder.

### Preview Build
The production build served locally via `npm run preview` (port 4173). E2E tests run against this to catch production-only issues (like missing static assets).

### `$props`
A Svelte 5 rune for declaring component props:
```js
let { videos = [], rotationInterval = 5000, children } = $props()
```
Replaces the legacy `export let` syntax.

### Pull Request (PR)
A GitHub proposal to merge one branch into another. PRs trigger CI checks and allow code review before merging. Always create a PR for feature work — never commit directly to `main`.

---

## R

### Reactive / Reactivity
When UI updates automatically in response to state changes. Svelte handles this through runes (`$state`, `$derived`). When `currentIndex` changes, anything using `$derived(videos[currentIndex])` updates immediately.

### Route
A URL path served by the app. SvelteKit uses file-based routing — `src/routes/about/+page.svelte` maps to `/about`. All 12 pages are routes.

### Rune
Svelte 5's syntax for reactive primitives. They look like function calls (`$state()`, `$derived()`, `$effect()`, `$props()`) but are compiler-processed. Not actual JavaScript functions.

---

## S

### SSR (Server-Side Rendering)
Rendering HTML on the server before sending to the browser. SvelteKit does this by default. On Vercel, SSR routes become serverless functions. Static pages are pre-rendered as HTML files.

### `$state`
A Svelte 5 rune for reactive variables:
```js
let count = $state(0)
// changing count updates any UI that reads it
```

### Static Assets
Files served directly without processing — images, videos, PDFs. Must be in the `public/` folder (configured via `kit.files.assets`).

---

## T

### Tailwind CSS
A utility-first CSS framework where styles are applied via class names like `text-xl`, `bg-gray-900`, `flex`. No custom CSS files needed for most styling. Version 4 used via the `@tailwindcss/vite` plugin.

### Translation Key
A string identifier like `'home.heroSubtitle'` that maps to a translated phrase in `translations.js`. Used with the `t()` function.

---

## U

### Unit Test
A test that checks a single function or component in isolation, without a real browser. Fast to run (~2s total). Uses Vitest. Tests are in `src/tests/`.

---

## V

### Vercel
The hosting platform for this project. Provides automatic deployments, preview URLs for PRs, CDN, serverless functions, Blob storage, and Vercel analytics.

### VideoCarousel
The hero component on the home page that cycles through background videos (or images on mobile) with a configurable interval, gradient overlays, and dot indicators.

### `videoFailed`
A reactive boolean in `VideoCarousel.svelte`. When `true`, the image fallback renders instead of the `<video>` element. Starts as `true` on mobile so images show immediately.

### Vitest
A fast unit test framework built on Vite. Compatible with Jest APIs (`describe`, `it`, `expect`). Configured in `vite.config.js`. Runs in jsdom environment to simulate the browser.

---

## W

### Webm
A video format (VP9 codec) that provides smaller file sizes than MP4 for the same quality. Supported by Chrome and Firefox. Safari may not support it, which is why MP4 sources are also provided.

---

*Last updated: May 11, 2026*
