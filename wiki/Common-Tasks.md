# Common Tasks

Step-by-step guides for the most frequent operations on this project.

---

## Publish a New Bulletin

**Weekly task — every Saturday/Sunday**

1. Upload the PDF to Vercel Blob:
   - Go to Vercel Dashboard → Storage → Blob
   - Upload `bulletin-YYYY-MM-DD.pdf`
   - Copy the public URL

2. Edit `src/lib/data/bulletins.js` — add at the **top** of the array:
   ```js
   export const bulletins = [
     { date: '2026-05-16', url: 'https://...blob.../bulletin-2026-05-16.pdf' },
     { date: '2026-05-09', url: '...' },  // previous week
   ]
   ```

3. Commit and push:
   ```bash
   git add src/lib/data/bulletins.js
   git commit -m "chore(bulletin): Add bulletin for 2026-05-16"
   git push
   ```

4. Vercel auto-deploys. The new bulletin appears on `/bulletin` within 2 minutes.

---

## Update Church Contact Info

Edit `src/lib/data/church.js` — changes propagate everywhere automatically:

```js
// Update phone
phone: '(908) 555-0000',

// Update email
email: 'newemail@example.com',

// Update social link
facebook: 'https://www.facebook.com/newpage',
```

Commit and push. No other files need changing.

---

## Add a New Page

1. Create the folder and file:
   ```bash
   mkdir src/routes/my-page
   touch src/routes/my-page/+page.svelte
   ```

2. Write the page using the standard template:
   ```svelte
   <script>
     import { t } from '$lib/i18n.svelte.js'
   </script>

   <svelte:head>
     <title>{t('myPage.title')} - Hackettstown SDA Church</title>
   </svelte:head>

   <div class="max-w-4xl mx-auto px-4 py-16">
     <h1 class="mb-6">{t('myPage.title')}</h1>
     <!-- Your content -->
   </div>
   ```

3. Add translation keys to `src/lib/data/translations.js` (both EN and ES)

4. Add a nav link if the page should appear in navigation (`Nav.svelte`, `navLinks` array)

5. The page is automatically accessible at `/my-page` and inherits Nav + Footer

---

## Add a Translation Key

1. Open `src/lib/data/translations.js`

2. Add the key to **both** `en` and `es` objects:
   ```js
   en: {
     'myPage.newKey': 'English text here',
   },
   es: {
     'myPage.newKey': 'Texto en español aquí',
   },
   ```

3. Use in any component: `{t('myPage.newKey')}`

4. Tests will catch it if you forget one language:
   ```bash
   npm test    # Will fail if EN/ES keys don't match
   ```

---

## Add a Hero Background Video

1. Prepare files:
   - `FILENAME.mp4` (H.264, ≤ 10MB)
   - `FILENAME.webm` (VP9, ≤ 5MB)
   - `FILENAME-desktop.jpg` (1920px wide, ≤ 300KB)
   - `FILENAME-mobile.jpg` (430px wide portrait, ≤ 60KB)

2. Upload MP4 and WebM to Vercel Blob (or place in `public/videos/`)

3. Place JPG images in `public/images/hero-thumbnails/`

4. Edit `src/lib/data/videos.js`:
   ```js
   const videos = [
     { name: 'Video 1', file: 'IMG_0093' },
     { name: 'New Video', file: 'FILENAME' },  // Add here
   ]
   ```

5. Commit and push

---

## Fix a Bug

Follow TDD (test-driven development):

1. Create a GitHub issue first:
   ```bash
   gh issue create --title "Bug: Description" --label "bug"
   ```

2. Create a branch:
   ```bash
   git checkout -b fix/short-description
   ```

3. Write a failing test that demonstrates the bug

4. Fix the code until the test passes

5. Run all tests:
   ```bash
   npm test && npm run build && npm run test:e2e
   ```

6. Commit with `fix:` prefix:
   ```bash
   git commit -m "fix(scope): Description of fix"
   ```

7. Push, create PR, merge after CI passes

---

## Update a Nav Link

**To add a link:**  
Edit `src/lib/components/Nav.svelte`, add to `navLinks` (internal pages) or `externalLinks` (new tab):
```js
const navLinks = [
  { key: 'nav.aboutUs', href: '/about' },
  { key: 'nav.myNewPage', href: '/my-page' },  // Add here
]
```
Add the translation key `'nav.myNewPage'` to both EN and ES in `translations.js`.

**To remove a link:**  
Delete the entry from the array. The link disappears from both desktop nav and mobile drawer automatically.

---

## Run Tests

```bash
# Unit tests only (fast, ~2s)
npm test

# Unit tests in watch mode (re-runs on file changes)
npm test -- --watch

# E2E tests (requires build, ~25s)
npm run build && npm run test:e2e

# E2E tests - specific file
npm run test:e2e -- e2e/mobile-hero.spec.js

# E2E tests - specific browser
npm run test:e2e -- --project=chromium

# E2E tests with visual UI
npm run test:e2e:ui
```

---

## Test in Mobile View (DevTools)

1. Open http://localhost:5173 in Chrome
2. Open DevTools (F12)
3. Click device toolbar icon (or Ctrl+Shift+M)
4. Select "iPhone 14 Pro Max" from the dropdown
5. Reload the page
6. Verify hero background images load immediately (no black screen)

---

## Check Dark/Light Mode

1. Open http://localhost:5173
2. Click the sun/moon icon in the top navigation
3. Verify all pages: backgrounds, text, cards, forms switch correctly
4. Open incognito window → should default to OS preference

---

## Access Vercel Dashboard

```bash
# View deployments
vercel ls

# View logs for latest deployment
vercel logs

# Open Vercel dashboard in browser
vercel dashboard
```

Or go to: https://vercel.com/moncalaworks-6225s-projects/svelte-two

---

*Last updated: May 11, 2026*
