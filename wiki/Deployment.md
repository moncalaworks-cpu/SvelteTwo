# Deployment

How the site is deployed to production via Vercel.

---

## Live URLs

| Environment | URL |
|-------------|-----|
| Production | https://htnjsda.vercel.app/ |
| Repository | https://github.com/moncalaworks-cpu/SvelteTwo |
| CI/CD | https://github.com/moncalaworks-cpu/SvelteTwo/actions |

---

## How Deployment Works

1. **Push to `main`** → Vercel webhook fires automatically
2. **Vercel builds:** `npm run build` (SvelteKit + adapter-auto)
3. **adapter-auto detects Vercel** → generates serverless function output
4. **Vercel deploys** the `.svelte-kit/output/` to its CDN
5. **DNS updates** → live at https://htnjsda.vercel.app/ in ~1-2 minutes

---

## Vercel Configuration

### Adapter

```js
// svelte.config.js
import adapter from '@sveltejs/adapter-auto'

export default {
  kit: {
    adapter: adapter(),
    files: {
      assets: 'public',   // Static assets served from public/
    },
  },
}
```

`adapter-auto` automatically detects the Vercel environment and configures serverless functions for SSR routes. No manual `vercel.json` needed.

### Static Assets

Files in `public/` are served directly without going through SvelteKit's routing:

```
public/images/hero-thumbnails/*.jpg  →  /images/hero-thumbnails/*.jpg
public/videos/*.mp4                  →  /videos/*.mp4
public/bulletin/*.pdf                →  /bulletin/*.pdf
public/favicon.svg                   →  /favicon.svg
```

> **Key insight:** SvelteKit defaults to `static/` for assets. This project explicitly sets `files.assets: 'public'` so that `public/` is copied into the build output and served correctly on Vercel.

---

## Deploying Manually

```bash
# Install Vercel CLI (once)
npm i -g vercel

# Deploy to production
vercel --prod

# Deploy preview
vercel
```

Alternatively, just push to `main` and Vercel handles it automatically.

---

## Preview Deployments (Pull Requests)

Every PR gets a unique Vercel preview URL, automatically posted as a PR comment. Use this to test changes before merging:

1. Open PR → Vercel builds and comments the preview URL
2. Click the URL → test in the browser
3. Verify mobile, dark/light mode, language toggle
4. Merge when satisfied → production updates

---

## Environment Variables

Currently no environment variables are required — all configuration is in source files.

If you add API keys or secrets in the future:

```bash
# Set in Vercel (production)
vercel env add MY_SECRET production

# Set locally (for dev)
echo "MY_SECRET=value" >> .env.local
```

Access in SvelteKit:
```js
import { MY_SECRET } from '$env/static/private'   // Server-only
import { PUBLIC_MY_KEY } from '$env/static/public' // Safe to expose
```

**Never commit `.env` files to git.**

---

## Build Output

```bash
npm run build
```

Output structure:
```
.svelte-kit/output/
├── client/                → Static files (JS, CSS, images)
│   ├── _app/              → Hashed bundles
│   └── images/            → Copied from public/
└── server/                → SSR serverless functions
```

---

## Rollback

If a bad deployment goes to production:

```bash
# List recent deployments
vercel ls

# Promote a previous deployment to production
vercel promote <DEPLOYMENT_URL>
```

Or via Vercel dashboard → Deployments → click older deployment → "Promote to Production".

---

## Build Troubleshooting

### Build fails locally

```bash
npm run build 2>&1
# Look for: [svelte] errors, TypeScript errors, missing imports
```

### "adapter-auto could not detect environment"

This warning appears locally — it's normal. The adapter detects Vercel only when running on Vercel's infrastructure. The build still succeeds.

### Assets 404 in preview

Ensure files are in `public/` (not `static/`). The `files.assets: 'public'` config in `svelte.config.js` must be present.

### Vercel deployment stuck

```bash
vercel logs <DEPLOYMENT_URL>    # Check deployment logs
vercel cancel                   # Cancel a stuck deployment
```

---

## Pre-Deployment Checklist

Before merging to main:

- [ ] `npm test` → 48/48 passing
- [ ] `npm run test:e2e` → 87+ passing
- [ ] `npm run build` → no errors
- [ ] Dev server tested manually: dark/light mode, EN/ES, mobile layout
- [ ] No hardcoded secrets or API keys
- [ ] New static assets placed in `public/` not `static/`
- [ ] New bulletin PDFs uploaded to Vercel Blob and added to `bulletins.js`

---

*Last updated: May 11, 2026*
