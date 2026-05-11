# API Reference

Exported functions and utilities available across the project.

---

## i18n (`src/lib/i18n.svelte.js`)

### `t(key: string) → string`
Returns the translated string for the given key in the current language. Falls back to English, then the key itself.
```js
import { t } from '$lib/i18n.svelte.js'
t('nav.aboutUs')  // → 'About Us' (EN) or 'Sobre Nosotros' (ES)
```

### `getLanguage() → 'en' | 'es'`
Returns the current language code.

### `setLanguage(lang: 'en' | 'es') → void`
Sets the active language and persists it to `localStorage` under key `'lang'`.

---

## Theme (`src/lib/theme.svelte.js`)

### `getTheme() → 'dark' | 'light'`
Returns the current theme. Reads from `localStorage` key `'theme'` on init, falling back to OS `prefers-color-scheme`.

### `toggleTheme() → void`
Flips between `'dark'` and `'light'` and persists to `localStorage`.

---

## Data Exports (`src/lib/data/`)

### `church` (`church.js`)
Plain object with church contact info. Fields: `name`, `address`, `phone`, `email`, `facebook`, `youtube`, `liveStream`, `instagram`, `giving`, `njcYouthUrl`, `mapsQuery`, `pastors[]`, `elders[]`.

### `backgroundVideos` (`videos.js`)
Array of video objects for the hero carousel. Each item: `{ name, mp4[], webm[], imageDesktop, imageMobile }`.

### `bulletins` / `latest` (`bulletins.js`)
`bulletins` — array of `{ date, url }` sorted newest first.  
`latest` — shorthand for `bulletins[0]` (or `null` if empty).

### `translations` (`translations.js`)
Object with `en` and `es` keys, each containing a flat map of translation keys to strings. Used internally by `t()`.

---

*Last updated: May 11, 2026*
