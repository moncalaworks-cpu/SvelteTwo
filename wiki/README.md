# 📚 Hackettstown SDA Church Website - Documentation Hub

Welcome to the complete documentation for the SvelteTwo church website project!

## 🎯 Quick Links

### For First-Time Setup
1. **[Setup & Installation](Setup-Installation)** - Get the project running in 5 minutes
2. **[Development Workflow](Development-Workflow)** - How to make changes & commit code
3. **[Project Structure](Project-Structure)** - Understanding the codebase layout

### For Feature Development
- **[Pages & Routes](Pages-Routes)** - All 12 pages (home, about, contact, etc.)
- **[Components](Components)** - Reusable UI components (Nav, Footer, VideoCarousel)
- **[Styling & Design System](Styling-Design-System)** - Colors, typography, dark/light modes
- **[Data Management](Data-Management)** - Church info, videos, bulletins, translations
- **[Internationalization (i18n)](Internationalization)** - EN/ES language support

### For Testing & Quality
- **[Testing Guide](Testing-Guide)** - Unit tests (Vitest) & E2E tests (Playwright)
- **[CI/CD Pipeline](CI-CD-Pipeline)** - GitHub Actions automation
- **[Deployment](Deployment)** - Vercel deployment process

### Reference & Support
- **[Common Tasks](Common-Tasks)** - How-to guides for frequent operations
- **[API Reference](API-Reference)** - Functions, exports, utilities
- **[Troubleshooting](Troubleshooting)** - Common issues & solutions
- **[Glossary](Glossary)** - Technical terms explained

---

## 📊 Project Stats

| Metric | Value |
|--------|-------|
| **Pages** | 12 (home, about, contact, giving, forms, events, bulletin, food-pantry, galleries, live-stream, login, njc-youth) |
| **Components** | 3 main (Nav, Footer, VideoCarousel) |
| **Routes** | All accessible, fully responsive |
| **Languages** | English (EN) & Spanish (ES) |
| **Themes** | Dark (default) & Light mode |
| **Tests** | 48 unit + 57 E2E = 105 total |
| **Test Status** | ✅ All passing |
| **Deployment** | Vercel (auto-deploy on push) |

---

## 🚀 Quick Start

### 1. Clone Repository
```bash
git clone https://github.com/moncalaworks-cpu/SvelteTwo.git
cd SvelteTwo/SvelteTwo
```

### 2. Install & Run
```bash
npm install
npm run dev
# Open http://localhost:5173
```

### 3. Make Changes
```bash
git checkout -b feature/my-feature
# Edit files...
npm test  # Tests run automatically on commit
git commit -m "feat: describe your changes"
git push origin feature/my-feature
```

### 4. Create Pull Request
- Push branch to GitHub
- Create PR with description
- All CI checks must pass
- Get approval & merge

See **[Setup & Installation](Setup-Installation)** for detailed steps.

---

## 📚 Documentation Structure

### Getting Started (New to Project)
```
1. Read: Home (this page)
2. Follow: Setup & Installation
3. Explore: Project Structure
4. Review: Development Workflow
5. Check: Testing Guide
```

### Feature Development
```
1. Find page/component in: Pages & Routes or Components
2. Understand design in: Styling & Design System
3. Check data usage in: Data Management
4. Review translations in: Internationalization (i18n)
5. Write tests: Testing Guide
6. Deploy via: Deployment
```

### Problem Solving
```
1. Search: Glossary
2. Check: Troubleshooting
3. Reference: API Reference
4. Ask: GitHub Issues
```

---

## 🛠️ Technology Stack

| Category | Technology | Purpose |
|----------|-----------|---------|
| **Framework** | SvelteKit 2.0 | Full-stack web framework |
| **UI** | Svelte 5 Runes | Reactive components |
| **Styling** | Tailwind CSS v4 | Utility-first CSS |
| **Testing** | Vitest | Unit testing |
| **E2E Testing** | Playwright | Browser automation testing |
| **i18n** | Custom (i18n.svelte.js) | Language switching |
| **Deployment** | Vercel | Hosting & CI/CD |
| **Version Control** | Git + GitHub | Code management |

---

## ✅ Requirements & Setup

### Node.js Version
- **Minimum:** v18
- **Recommended:** v20+

### Required Commands
```bash
node --version    # Should be v18+
npm --version     # Should be v8+
git --version     # Should be v2.30+
```

### Installation Time
- Initial install: ~2-3 minutes
- First build: ~10 seconds
- Test suite: ~17 seconds total

---

## 📖 Key Concepts

### SvelteKit Routing
- Files in `src/routes/` automatically become pages
- `+page.svelte` = the page content
- `+layout.svelte` = wrapper (Nav + Footer)
- Each route inherits the root layout automatically

### Svelte 5 Runes
- `$state()` - Reactive variable (like React state)
- `$props()` - Component props
- `$derived()` - Computed value (auto-updates)
- No legacy reactive declarations

### Tailwind CSS
- Utility-first styling (no custom CSS unless needed)
- Dark mode: `dark:` prefix (e.g., `dark:bg-gray-900`)
- Responsive: `md:`, `lg:`, `sm:` prefixes
- No custom color values (use predefined palette)

### Testing Philosophy
- Unit tests: Test functions & components in isolation
- E2E tests: Test user workflows end-to-end
- Pre-commit hook: Prevents committing broken code
- All tests must pass before deploying

---

## 🎨 Design System Highlights

### Color Palette
- **Light Mode:** White backgrounds, dark gray text
- **Dark Mode:** Dark gray backgrounds, white text
- **Accent Color:** Purple (primary brand color)
- **Consistency:** All colors defined in Tailwind config

### Responsive Design
- **Mobile First:** Design for mobile, then enhance
- **Breakpoints:** sm (640px), md (768px), lg (1024px)
- **Touch Targets:** Min 44px for buttons
- **Hamburger Menu:** Mobile nav drawer with overlay

### Typography
- **Headings:** Bold, large (h1: 2.25-3.75rem)
- **Body:** Regular weight, 16px base
- **System Fonts:** No external font files (faster loading)

---

## 🔄 Development Cycle

### Day-to-Day Workflow
```
1. npm run dev          # Start dev server
2. Edit files           # Make your changes
3. Open localhost:5173  # View changes live
4. npm test             # Run tests (auto on commit)
5. git commit           # Commit changes
6. git push             # Push to GitHub
7. Create PR            # Request review
8. Merge when approved  # Deploy on merge
```

### Commit Message Format
```
type(scope): short description

- Detailed explanation
- List of changes
- Any breaking changes

Co-Authored-By: Claude Haiku 4.5 <noreply@anthropic.com>
```

Examples:
- `feat(home): Add testimonials section`
- `fix(forms): Validate email before submission`
- `refactor(nav): Simplify responsive logic`
- `test(i18n): Add language persistence tests`

---

## 📋 Common Tasks

### Adding a New Page
```bash
mkdir -p src/routes/new-page
# Create src/routes/new-page/+page.svelte
# Add translations to src/lib/data/translations.js
# Add nav link to src/lib/components/Nav.svelte
```

### Updating Church Info
Edit `src/lib/data/church.js` (single source of truth)
- Changes propagate to Nav, Footer, Contact page

### Adding a Translation
1. Add key to `src/lib/data/translations.js` (both EN & ES)
2. Use in component: `{t('key.name')}`
3. Update will be live immediately

### Fixing a Bug
1. Write test that fails (demonstrates the bug)
2. Fix the code (make test pass)
3. Run full test suite
4. Commit with `fix:` prefix

---

## 🚢 Deployment Checklist

Before merging to main:
- [ ] All 48 unit tests pass locally
- [ ] All 57 E2E tests pass locally
- [ ] `npm run build` completes without errors
- [ ] No console errors in dev server
- [ ] No hardcoded values (use `church.js` or `translations.js`)
- [ ] Dark/light mode tested
- [ ] Mobile layout tested
- [ ] EN & ES translations complete
- [ ] Commit message descriptive
- [ ] PR description clear

When merged to main:
- [ ] GitHub Actions CI passes
- [ ] Vercel auto-deployment starts
- [ ] Live site updates (~1-2 minutes)

---

## 🆘 Need Help?

### Documentation
- **Setup Issues?** → [Setup & Installation](Setup-Installation)
- **Don't understand routing?** → [Project Structure](Project-Structure)
- **Want to add a page?** → [Pages & Routes](Pages-Routes)
- **Tests failing?** → [Testing Guide](Testing-Guide)
- **Can't deploy?** → [Deployment](Deployment)

### Common Problems
- **"npm install fails"** → See [Troubleshooting](Troubleshooting)
- **"Tests don't pass"** → Read [Testing Guide](Testing-Guide)
- **"How do I add translations?"** → Check [Internationalization](Internationalization)
- **"Dark mode broken"** → See [Styling & Design System](Styling-Design-System)

### External Resources
- [SvelteKit Docs](https://kit.svelte.dev)
- [Svelte 5 Runes](https://svelte.dev/docs/svelte/svelte)
- [Tailwind CSS](https://tailwindcss.com)
- [Playwright Docs](https://playwright.dev)

---

## 📞 Contact & Links

**Church Website:** https://htnjsda.vercel.app/  
**Repository:** https://github.com/moncalaworks-cpu/SvelteTwo  
**GitHub Actions:** https://github.com/moncalaworks-cpu/SvelteTwo/actions  

**Church Info:**
- Address: 927 County Road 517, Hackettstown, NJ 07840
- Phone: (908) 852-6100
- Email: htnjsda@gmail.com

---

## 📝 Contributing

This is a team project! Contributions welcome:

1. **Report bugs** - Use GitHub Issues
2. **Suggest features** - Discussions or Issues
3. **Submit code** - Pull requests with tests
4. **Improve docs** - Edit wiki pages
5. **Give feedback** - Let's make it better!

See [Development Workflow](Development-Workflow) for PR process.

---

## 📈 Project Status

- **Status:** ✅ Production-ready
- **Tests:** 105/105 passing
- **Deployment:** Auto via Vercel
- **Last Updated:** May 11, 2026

### Recent Work (May 2026)
- ✅ Fixed mobile video fallback (image after 3s)
- ✅ Fixed light mode title styling
- 🔄 Dark mode implementation (in progress)
- ✅ E2E test fixes & improvements

---

## 🎓 Learning Paths

### Path 1: Beginner (First Week)
1. [Setup & Installation](Setup-Installation)
2. [Project Structure](Project-Structure)
3. [Development Workflow](Development-Workflow)
4. [Pages & Routes](Pages-Routes) - explore a page
5. Make your first commit! 🎉

### Path 2: Intermediate (Weeks 2-3)
1. [Components](Components) - understand reusables
2. [Styling & Design System](Styling-Design-System)
3. [Testing Guide](Testing-Guide) - write some tests
4. [Internationalization](Internationalization) - add translations
5. Make a feature contribution! 🚀

### Path 3: Advanced (Months 2+)
1. [CI/CD Pipeline](CI-CD-Pipeline) - understand automation
2. [Deployment](Deployment) - manage production
3. [Data Management](Data-Management) - optimize data flow
4. Lead feature development
5. Mentor new team members! 👥

---

## 🎯 Success Metrics

You'll know you're productive when you can:
- ✅ Set up project from scratch
- ✅ Navigate the codebase confidently
- ✅ Create a new page with translations
- ✅ Write unit & E2E tests
- ✅ Push commits that pass all checks
- ✅ Deploy changes to production
- ✅ Help teammates with questions

---

## 📅 Maintenance Schedule

- **Weekly:** Review & merge PRs
- **Bi-weekly:** Update church info
- **Monthly:** Publish new bulletins
- **Quarterly:** Major feature updates
- **As needed:** Bug fixes & security updates

---

## 🔐 Security Notes

- ✅ No secrets in code (use environment variables)
- ✅ All dependencies up-to-date
- ✅ Pre-commit hooks prevent bad code
- ✅ GitHub Actions verify every push
- ✅ Deployment only after all tests pass

---

## 💡 Tips for Success

1. **Read CLAUDE.md first** - Project guidelines & standards
2. **Run tests often** - Catch issues early
3. **Start small** - Make one change at a time
4. **Ask questions** - No dumb questions!
5. **Document changes** - Commit messages matter
6. **Test thoroughly** - Unit + E2E + manual
7. **Keep learning** - New frameworks, tools, patterns

---

*Welcome to the team! 🎉 Happy coding!*

---

**Last Updated:** May 11, 2026  
**Maintained By:** Development Team  
**Contribution:** Always open! See [Development Workflow](Development-Workflow)
