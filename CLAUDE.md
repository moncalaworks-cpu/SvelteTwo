# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with this project. This is a SvelteKit church website built for flexible deployment.

---

## Project Overview

**Hackettstown SDA Church Website** – A modern, responsive church website built with:
- **SvelteKit 2.0** – Full-stack Svelte framework with file-based routing
- **Tailwind CSS v4** – Utility-first styling
- **Svelte 5 Runes** – Reactive state management (`$state`, `$props`, `$derived`)
- **Adapter-auto** – Automatically detects deployment platform (Vercel, Netlify, Node.js, etc.)

The site includes 12 pages (home, about, giving, live stream, calendar, contact, food pantry, forms, galleries, login, bulletin, NJC youth), responsive navigation, a footer with social links, and a dark theme with light purple accents.

---

## Key Commands

### Development
- `npm run dev` — Start the SvelteKit dev server (http://localhost:5173)
- `npm run build` — Build for production
- `npm run preview` — Preview the production build locally

### Local Testing
```bash
npm install
npm run build
npm run preview
# App will be available locally for testing
```

---

## Project Structure

```
sveltetwo/
├── src/
│   ├── lib/
│   │   ├── components/
│   │   │   ├── Nav.svelte         # Sticky responsive navigation
│   │   │   └── Footer.svelte      # Footer with social links
│   │   └── data/
│   │       └── church.js          # Church constants (name, phone, email, social links)
│   ├── routes/
│   │   ├── +layout.svelte         # Root layout (wraps all pages)
│   │   ├── +page.svelte           # Home page
│   │   ├── about/+page.svelte
│   │   ├── bulletin/+page.svelte
│   │   ├── calendar/+page.svelte
│   │   ├── contact/+page.svelte
│   │   ├── food-pantry/+page.svelte
│   │   ├── forms/+page.svelte
│   │   ├── galleries/+page.svelte
│   │   ├── giving/+page.svelte
│   │   ├── live-stream/+page.svelte
│   │   ├── login/+page.svelte
│   │   └── njc-youth/+page.svelte
│   ├── app.html                   # HTML shell for SvelteKit
│   └── app.css                    # Global styles (Tailwind + brand colors)
├── public/                        # Static assets
├── package.json
├── vite.config.js
├── svelte.config.js               # SvelteKit config with adapter-auto
├── CLAUDE.md                       # This file
└── .gitignore
```

### Route Mapping
The 12-page site uses SvelteKit's file-based routing:
- `/` → `src/routes/+page.svelte` (Home)
- `/about` → `src/routes/about/+page.svelte`
- `/giving` → `src/routes/giving/+page.svelte`
- `/live-stream` → `src/routes/live-stream/+page.svelte`
- `/calendar` → `src/routes/calendar/+page.svelte`
- `/contact` → `src/routes/contact/+page.svelte`
- `/bulletin` → `src/routes/bulletin/+page.svelte`
- `/food-pantry` → `src/routes/food-pantry/+page.svelte`
- `/forms` → `src/routes/forms/+page.svelte`
- `/galleries` → `src/routes/galleries/+page.svelte`
- `/login` → `src/routes/login/+page.svelte`
- `/njc-youth` → `src/routes/njc-youth/+page.svelte`

---

## Design System

### Colors
- **Primary background**: `#0f0f1a` (near-black)
- **Surface**: `#16171d` (dark gray)
- **Accent**: Light purple (`purple-400` hover `purple-500`)
- **Text**: Off-white (`#f5f5f0`)

### Typography
- **Fonts**: System font stack (no external fonts)
- **Headings**: Bold, white, responsive sizes (h1: `text-4xl md:text-5xl`)
- **Body**: Gray-300, 16px base size

### Components
- **Nav**: Sticky, responsive, hamburger menu on mobile
- **Footer**: Three-column grid with quick links + social icons
- **Cards**: Dark gray background with hover effects
- **Forms**: Dark inputs with purple accent on focus
- **Buttons**: Purple background (accent color) with hover states

---

## Church Data Management

All church contact information is centralized in `src/lib/data/church.js`:

```javascript
export const church = {
  name: 'Hackettstown SDA Church',
  address: '927 County Road 517, Hackettstown, NJ 07840',
  phone: '(908) 852-6100',
  email: 'htnjsda@gmail.com',
  facebook: 'https://www.facebook.com/Hackettstown-SDA-Church-160810030663506/',
  youtube: 'https://www.youtube.com/@hackettstownsdachurch/streams',
  instagram: 'https://www.instagram.com/htownsdachurch',
  giving: 'https://adventistgiving.org/donate/ANBBCV',
  njcYouthUrl: 'https://www.njcyouth.com/',
  pastors: [/* pastor info */],
}
```

To update church info, edit this file once and it propagates to all pages (Nav, Footer, Contact, etc.).

---

## Development Notes

### Svelte 5 & Runes
The project uses Svelte 5 runes for reactive state:
- `$state()` – Reactive variables (e.g., `let count = $state(0)`)
- `$props()` – Component props (e.g., `let { title } = $props()`)
- `$derived()` – Computed values (auto-updates when deps change)

Do not use legacy reactive declarations (`let reactive;`).

### Tailwind CSS
Styling uses Tailwind utility classes. Common patterns:
- Responsive prefixes: `md:`, `lg:`, `sm:`
- Dark mode: Entire site is dark by default (no prefers-color-scheme toggle)
- Spacing: Use `py-16 md:py-24` for vertical padding

### SvelteKit Pages
Each route is a `+page.svelte` file in `src/routes/`. Pages automatically:
- Support server-side rendering (SSR) via adapter-auto
- Use the root `+layout.svelte` (Nav + Footer wrapper)
- Are lazy-loaded in production

### Forms
Two forms in the app use Svelte state for interactivity:
1. **Contact form** (`/contact`) – Name, email, message
2. **Forms page** (`/forms`) – Visitor card + prayer request (tabbed)

Both currently show success messages locally. For production, integrate with a backend API (Supabase, etc.).

---

## Adding a New Page

To add a new page:

1. Create a new folder in `src/routes/` (e.g., `src/routes/events/`)
2. Add a `+page.svelte` file with the page content
3. Page is automatically accessible at `/events`
4. Page inherits Nav + Footer from `src/routes/+layout.svelte`

Example:
```svelte
<svelte:head>
  <title>Events - {church.name}</title>
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-16">
  <h1 class="text-4xl font-bold text-white mb-6">Upcoming Events</h1>
  <!-- Your content here -->
</div>
```

---

## Common Tasks

- **Change church contact info**: Edit `src/lib/data/church.js` (used everywhere)
- **Update colors**: Edit CSS variables in `src/app.css` or use Tailwind classes
- **Add a component**: Create `.svelte` file in `src/lib/components/` and import where needed
- **Style a page**: Use Tailwind classes in the template or add `<style>` block for scoped CSS
- **Add navigation link**: Edit `navLinks` array in `src/lib/components/Nav.svelte`

---

## Deployment

SvelteKit with `adapter-auto` automatically detects your deployment platform. The build process generates the appropriate output for:
- **Vercel** – zero-config deployment
- **Netlify** – zero-config deployment
- **Node.js** – generates `build/` folder with handler

For specific deployment instructions, consult your platform's SvelteKit documentation.

---

## Troubleshooting

### App won't start locally
- Run `npm install` to ensure all dependencies are installed
- Check that `npm run build` completes without errors

### Build fails
- Check `svelte.config.js` and `vite.config.js` for syntax errors
- Ensure all component imports use correct paths
- Verify no syntax errors in `.svelte` files

### Pages not loading
- Use `npm run dev` to check for console errors in browser
- Verify route file names match the URL structure
- Check that `+page.svelte` files are in the correct folders

### Styling issues
- Ensure Tailwind classes are spelled correctly
- Check that `app.css` includes `@import "tailwindcss"`
- Verify responsive prefixes (`md:`, `lg:`) are working

---

## Resources

- [SvelteKit Docs](https://kit.svelte.dev)
- [Svelte 5 Runes](https://svelte.dev/docs/svelte/svelte)
- [Tailwind CSS](https://tailwindcss.com)
