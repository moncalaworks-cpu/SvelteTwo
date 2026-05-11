# Data Management

How church data, videos, bulletins, and translations are stored and updated.

---

## Overview

All data lives in `src/lib/data/`. There are four data files:

| File | What it stores | Update frequency |
|------|---------------|-----------------|
| `church.js` | Contact info, social links, pastors | Rarely |
| `videos.js` | Hero video/image metadata | Occasionally |
| `bulletins.js` | Weekly bulletin PDF URLs | Weekly |
| `translations.js` | EN + ES UI strings | When adding pages |

---

## church.js — Church Information

**File:** `src/lib/data/church.js`

This is the **single source of truth** for all church contact info. Change it once and it updates everywhere.

```js
export const church = {
  name: 'Hackettstown SDA Church',
  address: '927 County Road 517, Hackettstown, NJ 07840',
  phone: '(908) 852-6100',
  email: 'htnjsda@gmail.com',
  facebook: 'https://www.facebook.com/Hackettstown-SDA-Church-160810030663506/',
  youtube: 'https://www.youtube.com/@hackettstownsdachurch/streams',
  liveStream: 'https://www.youtube.com/@hackettstownsdachurch/streams',
  youtubeChannelId: 'UCIQvQs_RCMGiuTnTCBtumlQ',
  instagram: 'https://www.instagram.com/htownsdachurch',
  giving: 'https://adventistgiving.org/donate/ANBBCV',
  njcYouthUrl: 'https://www.njcyouth.com/',
  mapsQuery: '927+County+Road+517,+Hackettstown,+NJ+07840',
  pastors: [
    {
      name: 'Pastor Anthony Ponterio Jr.',
      phone: '(732) 492-3547',
      email: 'pastorponterio@gmail.com',
    },
  ],
  elders: [
    {
      name: 'David Nazaire',
      title: '1st Elder',
      phone: '(201) 790-5075',
      email: 'dvdnazaire@gmail.com',
    },
  ],
}
```

### Used By

- `Nav.svelte` — church name, YouTube, Giving, Instagram, Facebook URLs
- `Footer.svelte` — address, phone, email, all social links
- `contact/+page.svelte` — address, phone, email, map link
- `about/+page.svelte` — pastor/elder profiles

### How to Update

```js
// Change phone number:
phone: '(908) 555-0123',

// Add a new pastor:
pastors: [
  { name: 'Pastor Name', phone: '...', email: '...' },
  { name: 'Pastor 2', phone: '...', email: '...' },
],

// Update giving link:
giving: 'https://adventistgiving.org/donate/NEWCODE',
```

---

## videos.js — Hero Video Metadata

**File:** `src/lib/data/videos.js`

Defines the background videos and their image fallbacks for the home page hero carousel.

```js
const BLOB_BASE = 'https://vysuzf3ywizupqg3.public.blob.vercel-storage.com/videos'
const LOCAL_BASE = '/videos'

const videos = [
  { name: 'Video 1', file: 'IMG_0093' },
  { name: 'Video 2', file: 'IMG_0148' },
  { name: 'Video 3', file: 'IMG_1502' },
  { name: 'Video 4', file: 'IMG_1640' },
]

export const backgroundVideos = videos.map((v) => ({
  name: v.name,
  mp4: [`${BLOB_BASE}/${v.file}.mp4`, `${LOCAL_BASE}/${v.file}.mp4`],
  webm: [`${BLOB_BASE}/${v.file}.webm`, `${LOCAL_BASE}/${v.file}.webm`],
  imageDesktop: `/images/hero-thumbnails/${v.file}-desktop.jpg`,
  imageMobile: `/images/hero-thumbnails/${v.file}-mobile.jpg`,
}))
```

### Video Source Strategy

Each video has two MP4 sources and two WebM sources:
1. **Primary:** Vercel Blob (CDN-served, fast globally)
2. **Fallback:** Local `/videos/` folder (served from `public/`)

The browser tries sources in order and uses the first one that loads.

### Adding a New Video

1. Upload `FILENAME.mp4` and `FILENAME.webm` to Vercel Blob (or place in `public/videos/`)
2. Create `FILENAME-desktop.jpg` and `FILENAME-mobile.jpg` and place in `public/images/hero-thumbnails/`
3. Add an entry to the `videos` array in `videos.js`:
   ```js
   { name: 'Video 5', file: 'FILENAME' },
   ```

### Image Specs

| Image | Dimensions | Size target |
|-------|-----------|-------------|
| Desktop | 1920×1080 or wider | < 300KB |
| Mobile | 430×932 or similar portrait | < 60KB |

---

## bulletins.js — Weekly Bulletins

**File:** `src/lib/data/bulletins.js`

Stores URLs to weekly church bulletin PDFs. New bulletins are uploaded to Vercel Blob.

```js
export const bulletins = [
  {
    date: '2026-05-09',
    url: 'https://vysuzf3ywizupqg3.public.blob.vercel-storage.com/bulletins/bulletin-2026-05-09.pdf'
  },
]

export const latest = bulletins[0] || null
```

### Publishing a New Bulletin

1. Upload PDF to Vercel Blob (via Vercel dashboard or CLI)
2. Copy the public URL
3. Add a new entry at the **top** of the `bulletins` array:
   ```js
   export const bulletins = [
     { date: '2026-05-16', url: 'https://...blob.../bulletin-2026-05-16.pdf' },
     { date: '2026-05-09', url: 'https://...blob.../bulletin-2026-05-09.pdf' },
   ]
   ```
4. `latest` automatically points to `bulletins[0]` — no change needed

### Date Format

Always use `YYYY-MM-DD` format (ISO 8601). This ensures correct sorting and display.

### Used By

- `bulletin/+page.svelte` — displays latest bulletin + archive list

---

## translations.js — UI Strings

**File:** `src/lib/data/translations.js`

Contains all user-visible text in both English and Spanish (~400+ keys).

```js
export const translations = {
  en: {
    'nav.aboutUs': 'About Us',
    'nav.events': 'Events',
    'home.heroSubtitle': 'Welcome to our faith community',
    // ... 400+ more keys
  },
  es: {
    'nav.aboutUs': 'Sobre Nosotros',
    'nav.events': 'Eventos',
    'home.heroSubtitle': 'Bienvenidos a nuestra comunidad de fe',
    // ...
  },
}
```

### Key Naming Convention

```
section.fieldName
```

**Examples:**
```
nav.aboutUs
home.heroSubtitle
contact.formTitle
bulletin.download
footer.quickLinks
```

### Adding a Translation Key

1. Add the key to **both** `en` and `es` in `translations.js`:
   ```js
   en: {
     // ... existing keys ...
     'myPage.title': 'My Page Title',
     'myPage.subtitle': 'Welcome to my page',
   },
   es: {
     // ... existing keys ...
     'myPage.title': 'Título de Mi Página',
     'myPage.subtitle': 'Bienvenido a mi página',
   },
   ```

2. Use in any Svelte component:
   ```svelte
   <script>
     import { t } from '$lib/i18n.svelte.js'
   </script>

   <h1>{t('myPage.title')}</h1>
   <p>{t('myPage.subtitle')}</p>
   ```

### Missing Key Behavior

If a key is missing, `t()` returns:
1. The English value (if only Spanish is missing)
2. The key string itself (e.g., `'myPage.title'`) — visible in UI as a signal that it's missing

The unit tests in `src/tests/data/translations.test.js` catch missing keys automatically.

---

## External Storage: Vercel Blob

Some assets are stored on Vercel Blob instead of in the repo:

| Asset | Storage | Why |
|-------|---------|-----|
| Videos (MP4/WebM) | Vercel Blob | Too large for git (8-10MB each) |
| Bulletins (PDF) | Vercel Blob | Updated weekly, not version-controlled |
| Hero images | `public/` (git) | Small enough (< 300KB), fast to serve locally |

**Vercel Blob URL base:** `https://vysuzf3ywizupqg3.public.blob.vercel-storage.com/`

Files are publicly readable. Upload via Vercel dashboard or `@vercel/blob` SDK.

---

*Last updated: May 11, 2026*
