# Troubleshooting

Solutions to common problems when developing or deploying the site.

---

## Development Server

### "npm run dev" fails to start

```bash
# Clear dependencies and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Port 5173 already in use

```bash
npm run dev -- --port 5174
```

### "Module not found: $lib/..."

The `$lib` alias requires the SvelteKit dev server to be running. Restart it:

```bash
# Ctrl+C to stop
npm run dev
```

### Changes not appearing in browser

- Hard reload: Ctrl+Shift+R (Chrome/Firefox) or Cmd+Shift+R (Mac)
- If still not updating, stop the dev server and restart it

---

## Build Errors

### "npm run build" fails

```bash
npm run build 2>&1 | grep -E "Error|error"
```

Common causes:
- **Missing import** — check all `import` paths are correct
- **Svelte syntax error** — look for unclosed `{#if}` or `{#each}` blocks
- **TypeScript error** — type mismatch in `.ts` files

### "Could not detect a supported production environment"

This is a warning, not an error. `adapter-auto` shows this when running locally because it can't detect Vercel. The build succeeds. Ignore it.

---

## Tests

### Unit tests fail locally but pass in CI

```bash
# Clear test cache
rm -rf .svelte-kit
npm install
npm test
```

Or check Node.js version matches CI (v20):
```bash
node --version    # Should be v20.x
```

### E2E tests time out

```bash
# Run with longer timeout
npm run test:e2e -- --timeout=30000

# Run in headed mode to see what's happening
npm run test:e2e -- --headed --project=chromium
```

### "Playwright browsers not found"

```bash
npx playwright install
```

### Pre-commit hook failing

```bash
# See which tests are failing
npm test

# Fix the failing tests, then try committing again
git commit -m "your message"
```

### E2E tests fail: "Cannot connect to localhost:4173"

The E2E tests require a production build. The `webServer` config in `playwright.config.js` runs `npm run preview` automatically — but if the port is already in use:

```bash
# Kill whatever is on port 4173
lsof -ti:4173 | xargs kill

# Then re-run tests
npm run test:e2e
```

---

## Mobile / Hero Background

### Hero images not showing on mobile

Verify:
1. Image files exist in `public/images/hero-thumbnails/`:
   ```bash
   ls public/images/hero-thumbnails/
   ```
2. `svelte.config.js` has `files: { assets: 'public' }` — this is required
3. Build includes the images:
   ```bash
   npm run build
   find .svelte-kit/output -name "*.jpg" | grep hero
   ```

### Hero shows black screen

On mobile, `videoFailed` should start as `true` (shows image immediately). On desktop, if video fails to load, the `handleVideoError` function should set `videoFailed = true`.

Check `VideoCarousel.svelte` line 9:
```js
let videoFailed = $state(browser && typeof window !== 'undefined' && window.innerWidth < 768)
```

### Images 404 in production but work locally

The dev server (Vite) serves `public/` by default. The production build only includes `public/` if `files.assets: 'public'` is set in `svelte.config.js`. Verify this config is present.

---

## Dark/Light Mode

### Theme not persisting after reload

Check that `theme.svelte.js` is writing to localStorage:
```js
// Should see this key in browser DevTools → Application → Local Storage
localStorage.getItem('theme')   // 'dark' or 'light'
```

### Dark mode classes not applying

Verify `app.css` has the dark variant declaration:
```css
@variant dark (&:where(.dark, .dark *));
```

And that `+layout.svelte` toggles the `.dark` class on `<html>`:
```js
$effect(() => {
  document.documentElement.classList.toggle('dark', getTheme() === 'dark')
})
```

---

## Internationalization

### Language toggle not working

Check `i18n.svelte.js` is saving to localStorage:
```js
// In browser console:
localStorage.getItem('lang')   // 'en' or 'es'
```

### Translation key shows as raw key string

If you see `'home.heroSubtitle'` in the UI instead of the actual text, the key is missing from `translations.js`. Add it to both `en` and `es`.

### Spanish translations look like English

Run `npm test` — the test checks that Spanish values differ from English.

---

## Bulletins

### Bulletin PDF not showing

1. Check the URL in `bulletins.js` is correct
2. Verify the PDF is publicly accessible (open the URL in a browser)
3. Check the browser console for CORS errors — Vercel Blob should be CORS-enabled

### Bulletin page shows "No bulletins yet"

`bulletins.js` array is empty. Add at least one entry.

---

## Deployment

### Vercel deployment stuck or failed

```bash
# Check deployment logs
vercel logs

# Check recent deployments
vercel ls
```

Common causes:
- Build error in CI — check GitHub Actions logs
- Out of memory during build — usually temporary, retry

### Site shows old version after deployment

Vercel CDN caches can take a few minutes to propagate. Hard-refresh:
- Chrome: Ctrl+Shift+R (Windows) / Cmd+Shift+R (Mac)
- Or open in incognito window

### GitHub Actions failing but local tests pass

Check Node.js version: CI uses v20. Your local version might differ.

```bash
# Use correct version
nvm use 20
npm test
```

---

## Husky / Git Hooks

### "husky - DEPRECATED" warning on commit

This is a display warning about an older Husky configuration syntax. It doesn't affect functionality. The hooks still run.

To fix it, edit `.husky/pre-commit` and remove these two deprecated lines if present:
```
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"
```

### Hooks not running

```bash
npx husky install
```

---

## Getting More Help

1. Check the specific wiki page for the area you're working in
2. Search GitHub Issues: `gh issue list --state all`
3. Check the browser DevTools Console for errors
4. Run tests with verbose output: `npm test -- --reporter=verbose`
5. File a bug issue: `gh issue create --title "Bug: ..." --label "bug"`

---

*Last updated: May 11, 2026*
