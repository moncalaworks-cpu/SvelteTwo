# Development Workflow

How to make changes, commit code, and contribute to the project.

---

## Daily Workflow

```
1. npm run dev          → Start dev server (http://localhost:5173)
2. Edit files           → Make your changes
3. Open browser         → Verify changes look correct
4. npm test             → Run unit tests
5. git add / commit     → Pre-commit hook runs tests automatically
6. git push             → Push branch to GitHub
7. Create PR            → Request review via GitHub
8. Merge when approved  → Vercel auto-deploys
```

---

## Branching Strategy

### Branch Naming

```
feature/US-{N}-short-description   → New features
fix/short-description              → Bug fixes
refactor/short-description         → Code cleanup
docs/short-description             → Documentation only
```

**Examples:**
```bash
feature/US-42-add-gallery-page
fix/mobile-video-fallback
refactor/nav-simplify-responsive
```

### Creating a Branch

```bash
git checkout main
git pull
git checkout -b feature/US-42-short-description
```

---

## Commit Messages

### Format

```
type(scope): short description

- Detailed bullet point
- Another change

Co-Authored-By: Claude Haiku 4.5 <noreply@anthropic.com>
```

### Types

| Type | When to use |
|------|-------------|
| `feat` | New feature or page |
| `fix` | Bug fix |
| `refactor` | Code restructuring (no behavior change) |
| `test` | Adding or updating tests |
| `docs` | Documentation only |
| `style` | CSS/Tailwind changes only |
| `chore` | Config, dependencies, tooling |

### Scopes (optional but helpful)

```
feat(home): Add testimonials section
fix(nav): Correct mobile menu close behavior
test(i18n): Add Spanish translation coverage
```

### Examples

```
feat(US-12): Add food pantry volunteer form

- Add tabbed form with visitor + prayer sections
- Validate required fields before submit
- Show 3-second success message on submit

Co-Authored-By: Claude Haiku 4.5 <noreply@anthropic.com>
```

---

## Pre-commit Hook

When you run `git commit`, Husky automatically runs:

```bash
npm test    # All 48 unit tests must pass
```

**If tests fail:** The commit is blocked. Fix the failures, then try again.

```bash
npm test    # See which tests failed
# Fix the code...
git commit  # Try again
```

**Override (emergency only):**
```bash
git commit --no-verify    # Skips pre-commit hook — use sparingly
```

---

## Pull Requests

### Creating a PR

```bash
git push -u origin feature/US-42-short-description
gh pr create \
  --title "feat(US-42): Add new feature" \
  --body "Closes #42

## Summary
- What changed and why

## Test Coverage
- [ ] Unit tests added
- [ ] E2E tests updated

## Checklist
- [ ] Svelte 5 runes used correctly
- [ ] Tailwind consistent with design system
- [ ] Responsive design maintained
- [ ] Dark/light mode tested
- [ ] EN & ES translations complete
"
```

### CI Checks Required

All PRs must pass before merging:
- **Unit Tests** — `npm test` (48 tests)
- **E2E Tests** — `npm run test:e2e` (87+ tests)

### Review & Merge

```bash
# Wait for CI
gh pr checks <PR_NUMBER> --watch

# Merge (squash commits into one)
gh pr merge <PR_NUMBER> --squash --delete-branch
```

---

## GitHub Issues

Always create an issue for bugs, defects, or planned features before starting work.

```bash
gh issue create \
  --title "Bug: Description of the problem" \
  --label "bug" \
  --body "## Description
What's wrong?

## Steps to Reproduce
1. Go to...
2. See error

## Expected Behavior
What should happen

## Actual Behavior
What actually happens"
```

**Keyword rule:** Any prompt containing **Bug**, **Issue**, or **Defect** triggers issue creation automatically.

---

## User Story Workflow

For larger features, use the full user story format:

```bash
gh issue create \
  --title "US: Brief feature description" \
  --body "**As a** [user type]
**I want** [action]
**so that** [benefit]

## Acceptance Criteria
- [ ] AC1
- [ ] AC2

## Sub-Tasks
- [ ] Write unit tests
- [ ] Implement feature
- [ ] Update translations
"
```

See `CLAUDE.md` for the complete user story workflow with project board automation.

---

## Hotfix Workflow

For urgent production fixes:

```bash
git checkout main
git pull
git checkout -b fix/critical-issue-description
# Make fix
npm test
git commit -m "fix: Describe the fix"
git push
gh pr create --title "fix: Critical fix" --base main
# Merge immediately after CI passes
```

---

## Code Review Checklist

Before approving any PR, verify:

- [ ] Svelte 5 runes (`$state`, `$props`, `$derived`) — no legacy syntax
- [ ] Tailwind utility classes only — no inline CSS except `style=` for dynamic values
- [ ] Responsive design — `sm:`, `md:`, `lg:` prefixes used correctly
- [ ] Dark/light mode — every color has both light and `dark:` variant
- [ ] Translations — both EN and ES keys added for any new UI text
- [ ] Tests — new functionality has corresponding unit test
- [ ] Static assets — images/files in `public/` not `static/`
- [ ] No hardcoded church info — use `church.js`
- [ ] No secrets in code — use environment variables

---

*Last updated: May 11, 2026*
