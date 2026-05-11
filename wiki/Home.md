# Hackettstown SDA Church Website Wiki

Welcome to the official wiki for the **Hackettstown SDA Church Website** project!

This wiki contains comprehensive documentation for developers, contributors, and stakeholders.

## 📖 Quick Navigation

### Getting Started
- **[[Setup & Installation]]** - How to set up the project locally
- **[[Development Workflow]]** - Day-to-day development guide
- **[[Project Structure]]** - Understanding the codebase

### Feature Documentation
- **[[Pages & Routes]]** - All 12 pages explained
- **[[Components]]** - Reusable UI components (Nav, Footer, VideoCarousel)
- **[[Styling & Design System]]** - Colors, typography, themes
- **[[Internationalization (i18n)]]** - Language support & translations
- **[[Dark/Light Mode]]** - Theme management

### Testing & Quality
- **[[Testing Guide]]** - Unit tests, E2E tests, pre-commit hooks
- **[[CI/CD Pipeline]]** - GitHub Actions automation
- **[[Deployment]]** - Vercel deployment process

### Data & Integration
- **[[Data Management]]** - Church info, videos, bulletins, translations
- **[[Forms & Submissions]]** - Contact & prayer request forms
- **[[Video Carousel]]** - Hero video backgrounds with image fallback

### Reference
- **[[API Reference]]** - Functions & exports
- **[[Common Tasks]]** - How-to guides for frequent operations
- **[[Troubleshooting]]** - Common issues & solutions
- **[[Glossary]]** - Technical terms & abbreviations

---

## 🎯 Project Overview

**Site:** https://htnjsda.vercel.app/  
**Repository:** https://github.com/moncalaworks-cpu/SvelteTwo  
**Framework:** SvelteKit 2.0  
**Testing:** Vitest (48 unit tests) + Playwright (57 E2E tests)  
**Deployment:** Vercel  

### Key Features
✅ 12-page responsive website  
✅ Dark/light mode support  
✅ Full English/Spanish translations  
✅ Mobile-optimized hero with video backgrounds  
✅ Image fallback for mobile (autoplay unreliable)  
✅ Comprehensive test coverage (105 tests total)  
✅ Pre-commit hooks enforce code quality  
✅ Automated CI/CD with GitHub Actions  

---

## 🚀 Quick Start

### 1. Clone & Install
```bash
git clone https://github.com/moncalaworks-cpu/SvelteTwo.git
cd SvelteTwo/SvelteTwo
npm install
```

### 2. Start Development
```bash
npm run dev
# Open http://localhost:5173
```

### 3. Run Tests
```bash
npm test              # Unit tests
npm run test:e2e      # E2E tests
```

### 4. Make Changes & Commit
```bash
git checkout -b feature/your-feature
# Edit files, tests run automatically on commit
git commit -m "feat: your changes"
git push origin feature/your-feature
```

### 5. Create PR
- Push branch and create pull request on GitHub
- All CI checks must pass
- Get approval and merge

---

## 📋 Documentation by Role

### 👨‍💻 Developers
Start with:
1. [[Setup & Installation]]
2. [[Project Structure]]
3. [[Development Workflow]]
4. Then pick a feature area to work on

### 🎨 Designers
Focus on:
1. [[Styling & Design System]]
2. [[Pages & Routes]] (to see all pages)
3. [[Components]] (reusable UI elements)

### 🧪 QA & Testers
Review:
1. [[Testing Guide]] (how tests work)
2. [[Deployment]] (testing checklist)
3. [[CI/CD Pipeline]] (automated checks)

### 📱 Content Editors
Manage:
1. [[Data Management]] (church info, videos)
2. [[Internationalization]] (adding translations)
3. [[Common Tasks]] (how to update content)

---

## 🤝 Contributing

1. **Report Issues:** GitHub Issues board
2. **Submit Changes:** Feature branches + pull requests
3. **Code Reviews:** Self-review checklist in CLAUDE.md
4. **Tests:** Must pass all 105 tests before merge

See [[Development Workflow]] for detailed steps.

---

## 📊 Project Status

| Component | Status | Tests |
|-----------|--------|-------|
| Unit Tests | ✅ Passing | 48/48 |
| E2E Tests | ✅ Passing | 57/57 (1 skipped) |
| Deployment | ✅ Active | Vercel |
| Dark Mode | 🔄 In Progress | — |
| Translations | ✅ Complete | EN & ES |

---

## 🔗 Important Links

- **Repository:** https://github.com/moncalaworks-cpu/SvelteTwo
- **Live Site:** https://htnjsda.vercel.app/
- **Vercel Dashboard:** https://vercel.com/dashboard
- **GitHub Actions:** https://github.com/moncalaworks-cpu/SvelteTwo/actions
- **Project Board:** https://github.com/users/moncalaworks-cpu/projects/6

---

## 📞 Contact

**Church:**
- Address: 927 County Road 517, Hackettstown, NJ 07840
- Phone: (908) 852-6100
- Email: htnjsda@gmail.com

**Development:**
- GitHub Issues for bug reports
- Feature requests welcome via PR discussions

---

*Last updated: May 11, 2026*
