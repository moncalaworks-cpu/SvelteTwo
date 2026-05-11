# Internationalization (i18n)

The site supports English (EN) and Spanish (ES). Language preference persists across page reloads.

---

## How It Works

```
translations.js          → Stores all EN + ES strings
i18n.svelte.js           → Reactive language state + t() lookup function
Nav.svelte               → Toggle button (EN ↔ ES)
Any component            → import { t } and call t('key')
```

---

## i18n.svelte.js

**File:** `src/lib/i18n.svelte.js`

```js
import { browser } from '$app/environment'
import { translations } from '$lib/data/translations.js'

let lang = $state(browser ? (localStorage.getItem('lang') ?? 'en') : 'en')

export function getLanguage() { return lang }

export function setLanguage(l) {
  lang = l
  if (browser) localStorage.setItem('lang', l)
}

export function t(key) {
  return translations[lang]?.[key] ?? translations['en'][key] ?? key
}
```

### Initialization

On page load in the browser:
1. Checks `localStorage` for saved `'lang'` key
2. Falls back to `'en'` if nothing saved
3. SSR (server-side rendering) always uses `'en'`

### Persistence

`setLanguage()` saves to `localStorage` under key `'lang'`. The preference survives:
- Page reloads
- Browser tab close/reopen
- Navigation between pages

---

## API Reference

### `t(key: string) → string`

Looks up a translation key in the current language.

```svelte
<script>
  import { t } from '$lib/i18n.svelte.js'
</script>

<h1>{t('home.heroSubtitle')}</h1>
<button>{t('nav.events')}</button>
```

**Fallback chain:**
1. Current language (EN or ES)
2. English (if ES key is missing)
3. The key string itself (if completely missing — visible as a bug signal)

### `getLanguage() → 'en' | 'es'`

Returns the current language code.

```svelte
<button>
  {getLanguage() === 'en' ? 'ES' : 'EN'}
</button>
```

### `setLanguage(lang: 'en' | 'es') → void`

Sets the current language and persists to localStorage.

```svelte
<button onclick={() => setLanguage('es')}>Español</button>
```

---

## Language Toggle UI

The toggle button is in `Nav.svelte`. It shows the **opposite** language as the button label:

```svelte
<button onclick={() => setLanguage(getLanguage() === 'en' ? 'es' : 'en')}>
  {getLanguage() === 'en' ? 'ES' : 'EN'}
</button>
```

- When in English → button shows **ES** (click to switch to Spanish)
- When in Spanish → button shows **EN** (click to switch to English)

The mobile drawer shows the full language name:
- In English → button says **"Español"**
- In Spanish → button says **"English"**

---

## Translation Keys Structure

Keys use a `section.fieldName` pattern:

```
nav.*           → Navigation bar labels
footer.*        → Footer labels
home.*          → Home page content
about.*         → About page content
contact.*       → Contact page content
bulletin.*      → Bulletin page content
giving.*        → Giving page content
events.*        → Events page content
forms.*         → Forms page content
foodPantry.*    → Food Pantry page content
liveStream.*    → Live Stream page content
galleries.*     → Galleries page content
login.*         → Login page content
njcYouth.*      → NJC Youth page content
```

---

## Adding Translations for a New Page

**Step 1:** Add keys to `src/lib/data/translations.js` under both `en` and `es`:

```js
export const translations = {
  en: {
    // ... existing keys ...
    'newPage.title': 'New Page Title',
    'newPage.intro': 'Welcome to the new page.',
    'newPage.ctaButton': 'Learn More',
  },
  es: {
    // ... existing keys ...
    'newPage.title': 'Título de la Nueva Página',
    'newPage.intro': 'Bienvenido a la nueva página.',
    'newPage.ctaButton': 'Más Información',
  },
}
```

**Step 2:** Use in your page component:

```svelte
<script>
  import { t } from '$lib/i18n.svelte.js'
</script>

<svelte:head>
  <title>{t('newPage.title')} - Hackettstown SDA Church</title>
</svelte:head>

<h1>{t('newPage.title')}</h1>
<p>{t('newPage.intro')}</p>
<a href="/about">{t('newPage.ctaButton')}</a>
```

**Step 3:** The unit tests automatically verify that:
- All EN keys have non-empty values
- All ES keys have non-empty values
- EN and ES have the same keys (no missing translations)

---

## Translation Quality Rules

The tests in `src/tests/data/translations.test.js` enforce:

1. **Same keys**: EN and ES must have identical key sets
2. **Non-empty**: No key can have an empty string value
3. **Not copies**: Spanish values must differ from English (catches untranslated strings)

When you add a key to EN but forget ES, the test fails with a helpful message showing exactly which keys are missing.

---

## Reactive Updates

Because `lang` is a Svelte 5 `$state`, any component that calls `t()` or `getLanguage()` automatically re-renders when the language changes — no event listeners needed.

```svelte
<!-- This paragraph re-renders instantly when language toggles -->
<p>{t('home.welcomeTitle')}</p>
```

---

*Last updated: May 11, 2026*
