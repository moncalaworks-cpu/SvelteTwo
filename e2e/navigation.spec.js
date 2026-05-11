import { test, expect } from '@playwright/test'

test.describe('Navigation', () => {
  const pages = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Live Stream', path: '/live-stream' },
    { name: 'Events', path: '/events' },
    { name: 'Bulletin', path: '/bulletin' },
    { name: 'Contact', path: '/contact' },
    { name: 'Food Pantry', path: '/food-pantry' },
    { name: 'Forms', path: '/forms' },
    { name: 'Galleries', path: '/galleries' },
    { name: 'Login', path: '/login' },
    { name: 'NJC Youth', path: '/njc-youth' },
  ]

  test('all pages load successfully', async ({ page }) => {
    for (const { name, path } of pages) {
      await page.goto(path)
      expect(page.url()).toContain(path)
      expect(await page.locator('body').isVisible()).toBeTruthy()
    }
  })

  test('home page has hero buttons', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('domcontentloaded')

    // Get hero section buttons - look for buttons with specific text AND href combination
    // "Watch Live" is unique to hero section
    const watchLiveButton = page.locator('a[href="/live-stream"]').filter({ hasText: 'Watch Live' })
    // For Events and Bulletin, get the first occurrence (hero section, not nav)
    const allEventsButtons = page.locator('a[href="/events"]')
    const allBulletinButtons = page.locator('a[href="/bulletin"]')

    await expect(watchLiveButton).toBeVisible()
    await expect(allEventsButtons.first()).toBeVisible()
    await expect(allBulletinButtons.first()).toBeVisible()

    expect(await watchLiveButton.getAttribute('href')).toBe('/live-stream')
    expect(await allEventsButtons.first().getAttribute('href')).toBe('/events')
    expect(await allBulletinButtons.first().getAttribute('href')).toBe('/bulletin')
  })

  test('navigation menu links are functional', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('domcontentloaded')

    // Test desktop nav links
    const aboutLink = page.locator('nav a[href="/about"]')
    await Promise.all([page.waitForURL(/\/about/), aboutLink.click()])
    expect(page.url()).toContain('/about')
  })

  test('footer links work', async ({ page }) => {
    await page.goto('/')

    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))

    const eventsFooterLink = page.locator('footer a[href="/events"]')
    await Promise.all([page.waitForURL(/\/events/), eventsFooterLink.click()])
    expect(page.url()).toContain('/events')
  })

  test('no console errors on home page', async ({ page }) => {
    const errors = []
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        // Ignore external resource loading errors (403 from external services)
        const text = msg.text()
        if (!text.includes('Failed to load resource') && !text.includes('403')) {
          errors.push(text)
        }
      }
    })

    await page.goto('/')
    expect(errors).toHaveLength(0)
  })
})
