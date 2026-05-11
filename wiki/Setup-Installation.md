# Setup & Installation Guide

## Prerequisites

- **Node.js:** v18+ (v20+ recommended for better performance)
- **npm:** v8+ or **pnpm** v8+
- **Git:** v2.30+
- **Text Editor:** VS Code recommended (with Svelte extension)

## Step 1: Clone the Repository

```bash
# Clone via HTTPS (no SSH key needed)
git clone https://github.com/moncalaworks-cpu/SvelteTwo.git

# Or use SSH (if you have SSH key configured)
git clone git@github.com:moncalaworks-cpu/SvelteTwo.git

# Navigate to project
cd SvelteTwo/SvelteTwo
```

## Step 2: Install Dependencies

```bash
# Using npm
npm install

# Or using pnpm (faster)
pnpm install
```

This installs:
- SvelteKit & Vite
- Tailwind CSS
- Vitest (unit testing)
- Playwright (E2E testing)
- Husky (pre-commit hooks)

## Step 3: Verify Installation

```bash
# Check all tests pass
npm test

# Check E2E tests work
npm run test:e2e

# Check build succeeds
npm run build
```

All should complete successfully. ✅

## Step 4: Start Development Server

```bash
npm run dev
```

Output:
```
  VITE v8.0.10 building for development
  ➜  Local:   http://localhost:5173/
  ➜  press h to show help
```

Open http://localhost:5173 in your browser.

## Step 5: (Optional) Set Up GitHub for Commits

```bash
# Configure git identity (if not already done)
git config user.name "Your Name"
git config user.email "your.email@example.com"

# Verify Husky hooks installed
npx husky install
```

When you commit, tests automatically run via pre-commit hook.

---

## 📂 Project Structure After Install

```
SvelteTwo/
├── src/
│   ├── lib/           # Reusable components & utilities
│   ├── routes/        # Page components (SvelteKit routing)
│   ├── app.css        # Global styles
│   └── app.html       # HTML shell
├── public/            # Static assets
├── e2e/               # End-to-end tests
├── src/tests/         # Unit tests
├── node_modules/      # Dependencies (ignore in git)
├── .svelte-kit/       # Build cache (ignore in git)
├── package.json       # Project metadata & scripts
├── svelte.config.js   # SvelteKit configuration
├── vite.config.js     # Vite build configuration
├── tailwind.config.js # Tailwind CSS configuration
├── playwright.config.js # Playwright E2E config
└── CLAUDE.md          # Development guidelines
```

---

## 🚀 Available Commands

### Development
```bash
npm run dev              # Start dev server (http://localhost:5173)
npm run build            # Production build
npm run preview          # Preview production build locally
```

### Testing
```bash
npm test                # Run unit tests (Vitest)
npm run test:ui         # Visual test runner
npm run test:e2e        # Run E2E tests (Playwright)
npm run test:e2e:ui     # Visual E2E test runner
```

### Code Quality
```bash
npm run lint            # Check code (if linter configured)
npm run format          # Format code (if formatter configured)
```

---

## ✅ Verification Checklist

- [ ] `npm install` completed without errors
- [ ] `npm test` shows "48 passed"
- [ ] `npm run test:e2e` shows "57 passed"
- [ ] `npm run dev` starts server on :5173
- [ ] Homepage loads at http://localhost:5173
- [ ] Navigation links work
- [ ] Language toggle works (EN ↔ ES)
- [ ] Dark mode works (toggle button in nav)

## 🔧 Troubleshooting

### "npm ERR! node_modules"
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### "Port 5173 already in use"
```bash
# Use different port
npm run dev -- --port 5174
```

### "Husky pre-commit hook failed"
The tests ran and found failures. Fix the errors:
```bash
npm test    # See which tests failed
# Fix issues, then try commit again
```

### "Playwright browser not found"
```bash
# Install Playwright browsers
npx playwright install
```

### "Module not found: $lib/..."
Restart the dev server:
```bash
# Stop with Ctrl+C
npm run dev    # Restart
```

---

## 🌐 Environment Setup (Optional)

If you want to deploy or use Vercel features:

```bash
# Install Vercel CLI
npm i -g vercel

# Log in to Vercel
vercel login

# Link local project to Vercel
vercel link
```

But this is optional for local development.

---

## 📚 Next Steps

Once installed and verified:
1. Read [Project Structure](Project-Structure) to understand the codebase
2. Check [Development Workflow](Development-Workflow) for daily development
3. Pick a page/feature from [Pages & Routes](Pages-Routes) to explore
4. Make a small change and commit to test the workflow

---

## ⚡ Quick Reference

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start dev server |
| `npm test` | Run unit tests |
| `npm run test:e2e` | Run E2E tests |
| `npm run build` | Build for production |
| `git checkout -b feature/x` | Create feature branch |
| `git commit -m "feat: ..."` | Commit (runs tests) |
| `git push origin feature/x` | Push to GitHub |

---

*Last updated: May 11, 2026*
