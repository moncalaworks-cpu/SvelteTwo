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
    { name: 'Giving', path: '/giving' },
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

    // Get hero section buttons - these are in the main content area with specific styling
    const watchLiveButton = page.locator('a[href="/live-stream"]').filter({ hasText: 'Watch Live' }).first()
    const eventsButton = page.locator('a[href="/events"]').filter({ hasText: /^Events$/ }).first()
    const bulletinButton = page.locator('a[href="/bulletin"]').filter({ hasText: /^Bulletin$/ }).first()

    await expect(watchLiveButton).toBeVisible()
    await expect(eventsButton).toBeVisible()
    await expect(bulletinButton).toBeVisible()

    expect(watchLiveButton).toHaveAttribute('href', '/live-stream')
    expect(eventsButton).toHaveAttribute('href', '/events')
    expect(bulletinButton).toHaveAttribute('href', '/bulletin')
  })

  test('navigation menu links are functional', async ({ page }) => {
    await page.goto('/')

    // Test desktop nav links
    const aboutLink = page.locator('nav a[href="/about"]')
    await aboutLink.click()
    await page.waitForLoadState('networkidle')
    expect(page.url()).toContain('/about')
  })

  test('footer links work', async ({ page }) => {
    await page.goto('/')

    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))

    const eventsFooterLink = page.locator('footer a[href="/events"]')
    await eventsFooterLink.click()
    await page.waitForLoadState('networkidle')
    expect(page.url()).toContain('/events')
  })

  test('no console errors on home page', async ({ page }) => {
    const errors = []
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text())
      }
    })

    await page.goto('/')
    expect(errors).toHaveLength(0)
  })
})
