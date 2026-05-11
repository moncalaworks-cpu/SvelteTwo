# Components

Documentation for the three reusable components in `src/lib/components/`.

---

## Nav.svelte

**File:** `src/lib/components/Nav.svelte`  
**Used in:** `src/routes/+layout.svelte` (every page)

### What it does

Sticky top navigation bar with:
- Church name as home link (left)
- Desktop nav links (center/right, hidden on mobile)
- Social icons (Facebook, YouTube, Instagram)
- Dark/light theme toggle (sun/moon icon)
- Language toggle (EN ↔ ES)
- Hamburger menu button (mobile only)
- Mobile slide-down drawer with all links + toggles

### Key State

```js
let mobileMenuOpen = $state(false)   // Controls mobile drawer open/close
```

### Nav Links

Defined as arrays in the script:

```js
const navLinks = [
  { key: 'nav.aboutUs', href: '/about' },
  { key: 'nav.events', href: '/events' },
  { key: 'nav.bulletin', href: '/bulletin' },
  { key: 'nav.contact', href: '/contact' },
]

const externalLinks = [
  { key: 'nav.liveStream', href: church.youtube },  // Opens YouTube
  { key: 'nav.giving', href: church.giving },       // Opens Adventist Giving
]
```

To add a nav link, add an entry to `navLinks` (internal) or `externalLinks` (opens in new tab).

### Dependencies

| Import | Purpose |
|--------|---------|
| `church.js` | Church name, social URLs, YouTube link |
| `i18n.svelte.js` | `t()` for link labels, `getLanguage()`, `setLanguage()` |
| `theme.svelte.js` | `getTheme()`, `toggleTheme()` |

### Dark/Light Mode Classes

```
bg-white dark:bg-gray-950
border-gray-200 dark:border-gray-800
text-gray-900 dark:text-white
text-gray-700 dark:text-gray-300
```

### Accessibility

- All icon buttons have `aria-label`
- Mobile toggle button: `aria-label="Toggle menu"`
- Language button: `aria-label="Toggle language"`
- Theme button: dynamic aria-label based on current theme

---

## Footer.svelte

**File:** `src/lib/components/Footer.svelte`  
**Used in:** `src/routes/+layout.svelte` (every page)

### What it does

Three-column footer containing:
- **Column 1 — Church Info:** Name, address, clickable phone & email
- **Column 2 — Quick Links:** About, Live Stream, Events, Giving, Contact
- **Column 3 — Follow Us:** Facebook, YouTube, Instagram icons
- **Bottom row:** Copyright, SDA logo, NAD attribution

### Dependencies

| Import | Purpose |
|--------|---------|
| `church.js` | All contact info + social links |
| `i18n.svelte.js` | `t()` for translated labels |
| `../../assets/sda-logo.svg` | SDA denomination logo |

### Dark/Light Mode Classes

```
bg-gray-100 dark:bg-gray-900
border-gray-200 dark:border-gray-800
text-gray-900 dark:text-white       (headings)
text-gray-600 dark:text-gray-400    (body text)
text-gray-400 hover:text-white      (links - dark only pattern)
```

### Translated Keys Used

```
footer.quickLinks
footer.followUs
footer.rights
nav.aboutUs, nav.liveStream, nav.events, nav.giving, nav.contact
```

---

## VideoCarousel.svelte

**File:** `src/lib/components/VideoCarousel.svelte`  
**Used in:** `src/routes/+page.svelte` (home page hero)

### What it does

Full-screen hero section that:
1. Cycles through background videos/images at a configurable interval
2. On **desktop**: tries to autoplay MP4/WebM video, falls back to image on error
3. On **mobile** (< 768px): immediately shows fallback image (autoplay unreliable)
4. Renders gradient overlays and a content slot on top
5. Shows dot indicators at the bottom when there are multiple videos

### Props

```js
let { videos = [], rotationInterval = 5000, children } = $props()
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `videos` | Array | `[]` | Array of video objects (see structure below) |
| `rotationInterval` | Number | `5000` | Milliseconds between slides |
| `children` | Snippet | — | Content rendered over the hero |

### Video Object Structure

```js
{
  name: 'Video 1',
  mp4: ['/primary.mp4', '/fallback.mp4'],      // Array of sources tried in order
  webm: ['/primary.webm', '/fallback.webm'],
  imageDesktop: '/images/hero-thumbnails/IMG_0093-desktop.jpg',
  imageMobile: '/images/hero-thumbnails/IMG_0093-mobile.jpg',
}
```

### Key State

```js
let currentIndex = $state(0)
let currentVideo = $derived(videos[currentIndex])   // Auto-updates
let videoFailed = $state(isMobile)   // true immediately on mobile
let isMobile = $state(window.innerWidth < 768)
```

### Mobile vs Desktop Behavior

| | Mobile (< 768px) | Desktop (≥ 768px) |
|--|--|--|
| Initial state | `videoFailed = true` | `videoFailed = false` |
| What renders | Image immediately | Video first |
| On rotation | Stay `videoFailed = true` | Reset to `videoFailed = false` to try video |
| Image used | `imageMobile` | `imageDesktop` |

### Rotation Logic

```
onMount → scheduleNextRotation()
         ↓ (after rotationInterval ms)
         if desktop: videoFailed = false
         currentIndex++
         ↓
         scheduleNextRotation() again (via $effect re-run)
```

### Slots

```svelte
<VideoCarousel {videos}>
  <!-- Anything here renders centered over the hero -->
  <h1>Church Name</h1>
  <a href="/events">Events</a>
</VideoCarousel>
```

### Usage Example

```svelte
<script>
  import VideoCarousel from '$lib/components/VideoCarousel.svelte'
  import { backgroundVideos } from '$lib/data/videos.js'
</script>

<VideoCarousel videos={backgroundVideos} rotationInterval={6000}>
  <div class="text-center text-white">
    <h1>Welcome</h1>
  </div>
</VideoCarousel>
```

---

## Adding a New Component

1. Create `src/lib/components/MyComponent.svelte`
2. Use Svelte 5 runes for any state: `$state()`, `$props()`, `$derived()`
3. Use Tailwind classes with dark: variants: `bg-white dark:bg-gray-900`
4. Import `t()` from `$lib/i18n.svelte.js` for any user-visible text
5. Add a unit test at `src/tests/components/MyComponent.test.js`
6. Import and use: `import MyComponent from '$lib/components/MyComponent.svelte'`

---

*Last updated: May 11, 2026*
