# Testing Guide

The project has comprehensive test coverage with **105 total tests** ensuring code quality and preventing regressions.

## Testing Overview

| Type | Framework | Count | Command | Duration |
|------|-----------|-------|---------|----------|
| Unit Tests | Vitest | 48 | `npm test` | ~2s |
| E2E Tests | Playwright | 57 | `npm run test:e2e` | ~15s |
| **Total** | — | **105** | **Both** | **~17s** |

**Status:** ✅ All tests passing

---

## Unit Tests (48 total)

### Framework: Vitest

Vitest is a blazing-fast unit test framework built on Vite.

### Running Unit Tests

```bash
# Run once
npm test

# Run in watch mode (re-run on file changes)
npm test -- --watch

# Run specific test file
npm test src/tests/data/church.test.js

# Visual UI mode
npm run test:ui
```

### Test Structure

```
src/tests/
├── data/
│   ├── church.test.js       # 4 tests - Church info validation
│   ├── videos.test.js       # 6 tests - Video data validation
│   ├── bulletins.test.js    # 4 tests - Bulletin metadata
│   └── translations.test.js # 7 tests - i18n completeness
├── components/
│   ├── Nav.test.js          # 4 tests - Navigation component
│   ├── Footer.test.js       # 6 tests - Footer component
│   └── VideoCarousel.test.js # 6 tests - Video carousel
└── i18n.test.js             # 13 tests - Language toggle & persistence
```

### Test Categories

#### 1. **Data Validation Tests** (21 tests)

**Purpose:** Ensure data files are complete and correct

**Examples:**
```javascript
// Church data
✓ has required fields (name, address, phone, email)
✓ has valid URLs (facebook, youtube, instagram, giving)
✓ church name is non-empty
✓ has valid contact info

// Videos
✓ has videos array
✓ each video has required fields (name, mp4, webm, imageDesktop, imageMobile)
✓ video URLs include fallback paths
✓ video URLs end with correct extensions

// Bulletins
✓ latest equals first bulletin when bulletins exist
✓ latest is null when bulletins array is empty
✓ each bulletin has required fields

// Translations
✓ has English translations (400+ keys)
✓ has Spanish translations
✓ English and Spanish have same keys
✓ all keys have non-empty values
✓ Spanish values different from English (not just copies)
```

#### 2. **Component Tests** (16 tests)

**Purpose:** Test UI components render correctly

**Examples:**
```javascript
// Nav component
✓ renders church name as logo
✓ renders all navigation links on desktop
✓ nav links have correct hrefs
✓ has mobile menu button
✓ contains social media icons

// Footer component
✓ renders church name
✓ renders church address
✓ renders phone number and email
✓ contains quick links to pages
✓ renders social media links

// VideoCarousel component
✓ renders without videos
✓ renders video elements with provided videos
✓ shows dot indicators when multiple videos exist
✓ does not show indicators for single video
✓ applies overlay gradient
✓ video has correct attributes
```

#### 3. **i18n Tests** (13 tests)

**Purpose:** Ensure language toggle and translation system works

**Examples:**
```javascript
✓ exports required functions (getLanguage, setLanguage, t)
✓ getLanguage returns default language (EN)
✓ t() function returns English translation for a valid key
✓ t() function returns fallback key if translation not found
✓ t() function returns English translation for unknown language
✓ setLanguage updates the current language
✓ setLanguage persists language to localStorage
✓ language preference is retrieved from localStorage on init
✓ t() returns Spanish translation when language is set to Spanish
✓ toggles between English and Spanish
```

### Writing a New Unit Test

**Template:**
```javascript
import { describe, it, expect } from 'vitest'
import { yourFunction } from '$lib/path/to/file.js'

describe('Your Feature', () => {
  it('should do something specific', () => {
    const result = yourFunction('input')
    expect(result).toBe('expected output')
  })

  it('should handle edge case', () => {
    const result = yourFunction('')
    expect(result).toEqual(null)
  })
})
```

**Example: Testing a new data file**
```javascript
import { describe, it, expect } from 'vitest'
import { myData } from '$lib/data/mydata.js'

describe('myData', () => {
  it('should have required structure', () => {
    expect(myData).toBeDefined()
    expect(myData.length).toBeGreaterThan(0)
  })

  it('each item should have required fields', () => {
    myData.forEach(item => {
      expect(item.id).toBeDefined()
      expect(item.name).toBeTruthy()
    })
  })
})
```

---

## E2E Tests (57 total)

### Framework: Playwright

Playwright is a browser automation library that tests your app in real browsers (Chromium, Firefox, WebKit).

### Running E2E Tests

```bash
# Run all E2E tests (all 3 browsers)
npm run test:e2e

# Run specific test file
npm run test:e2e -- e2e/navigation.spec.js

# Run specific test
npm run test:e2e -- --grep "home page has hero buttons"

# Visual UI mode
npm run test:e2e:ui

# Debug mode (shows browser, slows down execution)
npm run test:e2e -- --debug

# Run only on one browser
npm run test:e2e -- --project=chromium
```

### Test Structure

```
e2e/
├── navigation.spec.js          # 6 tests - All pages load, links work
├── language-toggle.spec.js     # 8 tests - EN↔ES switching (1 skipped)
├── bulletin.spec.js            # 3 tests - PDF display & mobile
└── forms.spec.js               # 2 tests - Form submissions
```

### Test Categories

#### 1. **Navigation Tests** (6 tests)

**Purpose:** Verify all pages load and navigate correctly

```javascript
✓ all pages load successfully (12 routes tested)
✓ home page has hero buttons (Watch Live, Events, Bulletin)
✓ navigation menu links are functional
✓ footer links work
✓ no console errors on home page
```

#### 2. **Language Toggle Tests** (8 tests, 1 skipped)

**Purpose:** Ensure EN↔ES translation system works end-to-end

```javascript
✓ toggle button is visible on home page
✓ toggle shows EN or ES based on current language
✓ clicking toggle switches language from English to Spanish
✓ clicking toggle switches language from Spanish to English
✓ language preference persists after page reload
✓ language toggle works on multiple pages
✓ nav links are translated
✓ footer links are translated
⏭️ mobile language toggle works [SKIPPED - drawer interaction issue]
```

**Note:** Mobile drawer language toggle test is skipped due to Playwright drawer interaction issues. Desktop language toggle fully works.

#### 3. **Bulletin Tests** (3 tests)

**Purpose:** Test bulletin page PDF display and responsiveness

```javascript
✓ bulletin page loads and displays PDF
✓ bulletin download link is functional
✓ bulletin page is responsive on mobile
```

#### 4. **Forms Tests** (2 tests)

**Purpose:** Verify form submission and validation

```javascript
✓ contact form can be submitted (if backend ready)
✓ visitor card form displays success message
```

### Test Example

```javascript
import { test, expect } from '@playwright/test'

test('home page has hero buttons', async ({ page }) => {
  // Navigate to home page
  await page.goto('/')
  
  // Find Watch Live button
  const watchLiveButton = page.locator('a[href*="youtube"]')
  await expect(watchLiveButton).toContainText('Watch Live')
  
  // Find Events button
  const eventsButton = page.locator('a[href="/events"]')
  await expect(eventsButton).toBeVisible()
  
  // Click and verify navigation
  await eventsButton.click()
  await expect(page).toHaveURL('/events')
})
```

---

## Pre-commit Hooks

### How It Works

When you run `git commit`, Husky automatically runs:
```bash
npm test    # All 48 unit tests must pass
```

**If tests fail:** Commit is blocked. Fix the failures and try again.

**Why:** Prevents committing broken code to the repository.

### Override (if necessary)
```bash
git commit --no-verify    # Skips tests (use only if you know what you're doing!)
```

---

## CI/CD Pipeline

### GitHub Actions (`test.yml`)

When you push to GitHub:

1. **Unit Tests Job** (`npm test`)
   - Runs all 48 unit tests
   - Must pass to proceed

2. **E2E Tests Job** (`npm run test:e2e`)
   - Runs all 57 E2E tests
   - Tests in Chromium, Firefox, WebKit
   - Must pass before merge

3. **Auto-deploy** (if main branch)
   - Triggers Vercel deployment
   - Site live in ~1-2 minutes

### Test Coverage Expectations

For any change:
- Existing tests must continue passing
- New features should have corresponding tests
- Bug fixes should include test for the bug (test fails before fix, passes after)

---

## Testing Best Practices

### 1. **Test-Driven Development (TDD)**
```
1. Write test (fails, because code doesn't exist)
2. Write code (makes test pass)
3. Refactor (keep test passing, improve code)
```

### 2. **Test Structure (AAA Pattern)**
```javascript
// Arrange - Set up test data
const input = 'user input'

// Act - Execute the function
const result = myFunction(input)

// Assert - Check the result
expect(result).toBe('expected')
```

### 3. **Descriptive Test Names**
```javascript
// ❌ Bad
it('works', () => { ... })

// ✅ Good
it('should return Spanish translation when language is set to Spanish', () => { ... })
```

### 4. **Test One Thing Per Test**
```javascript
// ❌ Bad - tests multiple things
it('handles form submission', () => {
  // ... fill form
  // ... click submit
  // ... check success message
  // ... check data saved
})

// ✅ Good - one assertion
it('displays success message after form submission', () => {
  // ... fill form
  // ... click submit
  expect(successMessage).toBeVisible()
})
```

### 5. **Mock External Dependencies**
```javascript
// Don't test YouTube API in your tests
// Instead, mock the response
vi.mock('$lib/api/youtube', () => ({
  getChannelVideos: vi.fn(() => [{ id: '1', title: 'Video' }])
}))
```

---

## Debugging Tests

### Unit Test Debugging
```bash
# Run single test file
npm test src/tests/i18n.test.js

# Run with verbose output
npm test -- --reporter=verbose

# Use test UI for easier debugging
npm run test:ui
```

### E2E Test Debugging
```bash
# Run single test with visual output
npm run test:e2e -- --grep "language toggle" --headed

# Debug mode (pauses execution, shows browser)
npm run test:e2e -- --debug

# Generate HTML report after failure
npm run test:e2e
# Report at: playwright-report/index.html
```

---

## Common Test Assertions

### Unit Tests (Vitest)
```javascript
expect(value).toBe(expectedValue)           // Exact match
expect(value).toEqual(expectedValue)        // Deep equality
expect(value).toBeTruthy()                  // Truthy check
expect(value).toBeDefined()                 // Not undefined
expect(array).toHaveLength(3)               // Array length
expect(array).toContain('item')             // Contains item
expect(() => fn()).toThrow()                // Throws error
```

### E2E Tests (Playwright)
```javascript
await expect(locator).toBeVisible()         // Element visible
await expect(locator).toContainText('text') // Text present
await expect(page).toHaveURL('/path')       // URL matches
await expect(locator).toHaveCount(3)        // 3 elements exist
await expect(locator).toBeEnabled()         // Input enabled
```

---

## Test Coverage Goals

- **Unit Tests:** 80%+ code coverage for utils & components
- **E2E Tests:** Happy path + critical user flows
- **Each new feature:** Should have at least one test

---

## Troubleshooting Tests

### "Test fails locally but passes in CI"
- Node version might differ
- Clear node_modules: `rm -rf node_modules && npm install`
- Playwright browsers might differ: `npx playwright install`

### "E2E test times out"
- Page might be slow to load
- Increase timeout: `await expect(locator).toBeVisible({ timeout: 10000 })`
- Check network in browser DevTools

### "Pre-commit hook fails"
- Run `npm test` locally to see error
- Fix the failing test
- Try commit again

### "Playwright browsers not found"
```bash
npx playwright install
```

---

*Last updated: May 11, 2026*
