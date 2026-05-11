# CI/CD Pipeline

Automated testing and deployment via GitHub Actions and Vercel.

---

## Overview

Every push to `main` or `develop`, and every pull request, triggers:

```
Push/PR
  ↓
GitHub Actions
  ├── Unit Tests job    (npm test)
  └── E2E Tests job     (npm run build && npm run test:e2e)
         ↓ (if main branch)
       Vercel auto-deployment
```

---

## GitHub Actions — test.yml

**File:** `.github/workflows/test.yml`  
**Triggers:** Push or PR to `main` or `develop`

### Job 1: Unit Tests

```yaml
unit-tests:
  runs-on: ubuntu-latest
  steps:
    - uses: actions/checkout@v4
    - uses: actions/setup-node@v4
      with:
        node-version: '20'
        cache: 'npm'
    - run: npm ci
    - run: npm test -- --run
```

- Runs all 48 unit tests via Vitest
- Node.js 20 (matches production)
- `npm ci` (clean install from lockfile — reproducible)
- `--run` flag runs once, no watch mode

### Job 2: E2E Tests

```yaml
e2e-tests:
  runs-on: ubuntu-latest
  steps:
    - uses: actions/checkout@v4
    - uses: actions/setup-node@v4
      with:
        node-version: '20'
        cache: 'npm'
    - run: npm ci
    - run: npm run build
    - run: npx playwright install --with-deps
    - run: npm run test:e2e
    - uses: actions/upload-artifact@v4
      if: always()
      with:
        name: playwright-report
        path: playwright-report/
        retention-days: 30
```

- Builds the app first (`npm run build`) — tests against the production bundle
- Installs Playwright browsers with system dependencies
- Runs all E2E tests (87+ tests across 5 browser profiles)
- Uploads HTML test report as artifact even on failure (retention: 30 days)

### Viewing Test Results

After a CI run:
1. Go to GitHub Actions tab
2. Click the failing run
3. Download `playwright-report` artifact
4. Open `index.html` to see detailed failure info with screenshots

---

## Pre-commit Hooks — Husky

**File:** `.husky/pre-commit`

Runs locally before every `git commit`:

```bash
npm test    # All 48 unit tests must pass
```

If tests fail → commit is blocked. This prevents broken code from ever reaching GitHub.

### Installation

Hooks are installed automatically via `npm install` (postinstall script).

If hooks aren't running:
```bash
npx husky install
```

---

## Vercel Deployment

### Auto-deploy Trigger

Vercel watches the `main` branch. When a commit lands on `main`:
1. Vercel pulls the code
2. Runs `npm run build`
3. Deploys the output
4. Site is live at https://htnjsda.vercel.app/ in ~1-2 minutes

### Preview Deployments

Every pull request gets a unique preview URL from Vercel:
- Useful for testing before merging
- URL posted as a PR comment automatically
- Preview deployments don't affect production

### Adapter

`svelte.config.js` uses `@sveltejs/adapter-auto`, which automatically detects Vercel and generates the correct serverless function output.

---

## Deployment Flow Diagram

```
Developer pushes to feature branch
          ↓
GitHub Actions runs (Unit Tests + E2E Tests)
          ↓
PR created → Vercel preview URL generated
          ↓
Code review + CI passes
          ↓
Merge to main
          ↓
GitHub Actions runs again (on main)
          ↓
Vercel detects main push
          ↓
Production deployment (~1-2 min)
          ↓
https://htnjsda.vercel.app/ updated
```

---

## Monitoring & Debugging

### Check CI Status

```bash
# List recent workflow runs
gh run list --repo moncalaworks-cpu/SvelteTwo --limit 5

# Watch a specific run
gh run watch <RUN_ID>

# View job details
gh run view <RUN_ID> --json jobs
```

### Check Vercel Deployment

```bash
# List recent deployments
vercel ls

# View deployment logs
vercel logs <DEPLOYMENT_URL>
```

### Common CI Failures

| Failure | Likely Cause | Fix |
|---------|-------------|-----|
| Unit tests fail | Code broke a function | Run `npm test` locally to reproduce |
| E2E build fails | SvelteKit build error | Run `npm run build` locally |
| Playwright install fails | Dependency issue | Re-run job manually |
| E2E tests timeout | Slow CI environment | Increase timeout in test |

---

## Adding a New CI Check

To add a new automated check (e.g., linting):

```yaml
# In .github/workflows/test.yml, add a new job:
lint:
  runs-on: ubuntu-latest
  steps:
    - uses: actions/checkout@v4
    - uses: actions/setup-node@v4
      with:
        node-version: '20'
        cache: 'npm'
    - run: npm ci
    - run: npm run lint
```

---

*Last updated: May 11, 2026*
