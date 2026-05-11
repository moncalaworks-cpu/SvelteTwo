# Styling & Design System

Everything about colors, typography, dark/light mode, and how to apply Tailwind in this project.

---

## Technology

- **Tailwind CSS v4** via `@tailwindcss/vite` plugin
- **Dark mode** via `.dark` class on `<html>` (toggled by theme.svelte.js)
- **Global styles** in `src/app.css`

---

## Dark / Light Mode

### How it Works

1. `theme.svelte.js` holds a reactive `$state` for `'dark'` or `'light'`
2. The initial value comes from `localStorage` → falls back to OS `prefers-color-scheme`
3. `+layout.svelte` runs a `$effect` that toggles `.dark` class on `document.documentElement`
4. Tailwind's `dark:` prefix activates when `.dark` is present on `<html>`

```js
// theme.svelte.js
let theme = $state(
  browser
    ? (localStorage.getItem('theme') ??
       (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
    : 'dark'
)
```

```svelte
<!-- +layout.svelte -->
$effect(() => {
  document.documentElement.classList.toggle('dark', getTheme() === 'dark')
})
```

### Custom Dark Variant (app.css)

```css
@variant dark (&:where(.dark, .dark *));
```

This is required because Tailwind v4's dark variant doesn't use the `.dark` class by default. This line enables it.

### Toggling Theme

The sun/moon button in `Nav.svelte` calls `toggleTheme()` which:
1. Flips `theme` state between `'dark'` and `'light'`
2. Persists to `localStorage` under key `'theme'`

---

## Color Palette

### Light Mode (default)

| Purpose | Class |
|---------|-------|
| Page background | `bg-white` |
| Secondary surface | `bg-gray-100` |
| Cards/surfaces | `bg-gray-200` |
| Body text | `text-gray-900` |
| Secondary text | `text-gray-700` |
| Muted text | `text-gray-500` |
| Borders | `border-gray-200`, `border-gray-300` |
| Accent | `text-purple-700`, `bg-purple-600` |
| Accent hover | `hover:text-purple-600` |

### Dark Mode

| Purpose | Class |
|---------|-------|
| Page background | `dark:bg-gray-950` |
| Secondary surface | `dark:bg-gray-900` |
| Cards/surfaces | `dark:bg-gray-800` |
| Body text | `dark:text-white`, `dark:text-gray-100` |
| Secondary text | `dark:text-gray-300` |
| Muted text | `dark:text-gray-400` |
| Borders | `dark:border-gray-800`, `dark:border-gray-700` |
| Accent | `dark:text-purple-300`, `dark:text-purple-400` |
| Accent hover | `dark:hover:text-purple-200` |

### Always-Present (hero sections with background images)

Hero sections on About and Contact have background images — they don't change between light/dark modes. Use overlays for text contrast:

```html
<div class="bg-gradient-to-r from-black/70 to-black/50">
  <!-- Text always readable over dark overlay -->
</div>
```

---

## Typography

Defined in `app.css`:

```css
body {
  font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
  font-size: 16px;
  line-height: 1.5;
}

h1 { @apply text-4xl md:text-5xl font-bold text-gray-900 dark:text-white; }
h2 { @apply text-3xl md:text-4xl font-bold text-gray-900 dark:text-white; }
h3 { @apply font-bold text-gray-900 dark:text-white; }

a { @apply text-purple-700 hover:text-purple-600 dark:text-purple-300 
           dark:hover:text-purple-200 transition-colors; }
```

**No external fonts** — system font stack only for performance.

### Heading Sizes

| Element | Classes |
|---------|---------|
| Page title (h1) | `text-4xl md:text-5xl font-bold` |
| Section title (h2) | `text-3xl md:text-4xl font-bold` |
| Card title (h3) | `text-xl font-bold` or `text-lg font-semibold` |
| Body | `text-base` (16px) |
| Small/caption | `text-sm` (14px) |

---

## Responsive Breakpoints

Tailwind's standard breakpoints (mobile-first):

| Prefix | Min-width | Target |
|--------|-----------|--------|
| (none) | 0px | Mobile phones |
| `sm:` | 640px | Large phones |
| `md:` | 768px | Tablets |
| `lg:` | 1024px | Laptops |
| `xl:` | 1280px | Desktops |

### Common Patterns

```html
<!-- Stacked on mobile, side-by-side on desktop -->
<div class="flex flex-col md:flex-row gap-6">

<!-- Larger text on bigger screens -->
<h1 class="text-3xl md:text-5xl">

<!-- Hidden on mobile, shown on desktop -->
<div class="hidden md:flex">

<!-- Full width on mobile, fixed on desktop -->
<div class="w-full md:max-w-lg">
```

---

## Component Patterns

### Cards

```html
<div class="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 
            hover:bg-gray-200 dark:hover:bg-gray-700 
            transition-colors">
  <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Title</h3>
  <p class="text-gray-600 dark:text-gray-400 text-sm">Description</p>
</div>
```

### Buttons

```html
<!-- Primary (purple filled) -->
<button class="bg-purple-600 hover:bg-purple-700 text-white 
               px-6 py-3 rounded-lg font-semibold transition-colors">
  Click Me
</button>

<!-- Secondary (outlined) -->
<button class="border border-purple-600 text-purple-600 
               hover:bg-purple-50 dark:hover:bg-purple-900/20
               px-6 py-3 rounded-lg font-semibold transition-colors">
  Click Me
</button>
```

### Form Inputs

```html
<input
  class="w-full bg-white dark:bg-gray-800 
         border border-gray-300 dark:border-gray-700 
         text-gray-900 dark:text-white 
         rounded-lg px-4 py-3 
         focus:outline-none focus:border-purple-500 dark:focus:border-purple-400"
/>
```

### Hero Sections (with gradient background)

```html
<!-- Purple gradient hero (no background image) -->
<div class="bg-gradient-to-r from-purple-900 to-purple-800 py-24">
  <h1 class="text-white text-5xl font-bold">Page Title</h1>
</div>

<!-- Image + overlay hero (About, Contact pages) -->
<div class="relative bg-cover bg-center py-32"
     style="background-image: url('/images/hero.jpg')">
  <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
  <div class="relative z-10 text-white">
    <h1>Title</h1>
  </div>
</div>
```

---

## CSS Variables (app.css)

```css
:root {
  --color-primary: #1a1a2e;
  --color-accent:  #c9a84c;
  --color-surface: #0f0f1a;
  --color-text:    #f5f5f0;
}
```

These are legacy variables from the original dark-only design. **Prefer Tailwind classes** over these variables in new code.

---

## Rules & Conventions

1. **Always pair light + dark**: Every bg/text class needs its `dark:` counterpart
2. **No hardcoded hex colors**: Use Tailwind's palette
3. **Mobile-first**: Write base styles for mobile, use `md:` / `lg:` to enhance
4. **Purple is brand**: Use `purple-600` / `dark:purple-400` for accents and CTAs
5. **No `<style>` blocks** unless scoped CSS is truly necessary (VideoCarousel is the exception for `video { background-color }`)

---

*Last updated: May 11, 2026*
