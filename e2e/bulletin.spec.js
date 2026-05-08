import { test, expect } from '@playwright/test'

test.describe('Bulletin Page', () => {
  test('bulletin page loads', async ({ page }) => {
    await page.goto('/bulletin')
    expect(page.url()).toContain('/bulletin')
    await expect(page.locator('h1')).toContainText('Bulletin')
  })

  test('bulletin page shows content or empty state', async ({ page }) => {
    await page.goto('/bulletin')

    // Check if either the bulletin iframe OR the empty state is visible
    const iframe = page.locator('iframe')
    const emptyState = page.locator('text=No bulletins available')

    const hasIframe = await iframe.isVisible().catch(() => false)
    const hasEmptyState = await emptyState.isVisible().catch(() => false)

    expect(hasIframe || hasEmptyState).toBeTruthy()
  })

  test('bulletin page has download button when bulletin exists', async ({ page }) => {
    await page.goto('/bulletin')

    const downloadButton = page.getByRole('link', { name: /download pdf/i })
    const iframeVisible = await page.locator('iframe').isVisible().catch(() => false)

    if (iframeVisible) {
      await expect(downloadButton).toBeVisible()
      const href = await downloadButton.getAttribute('href')
      expect(href).toBeTruthy()
    }
  })

  test('bulletin page is responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/bulletin')

    const heading = page.locator('h1')
    await expect(heading).toBeVisible()

    // Check if content is scrollable
    const pageHeight = await page.evaluate(() => document.body.scrollHeight)
    const viewportHeight = await page.evaluate(() => window.innerHeight)
    expect(pageHeight).toBeGreaterThan(viewportHeight)
  })

  test('navigation from bulletin page works', async ({ page }) => {
    await page.goto('/bulletin')

    const homeLink = page.locator('a').filter({ hasText: /Hackettstown SDA Church/ }).first()
    if (await homeLink.isVisible()) {
      await homeLink.click()
      await page.waitForLoadState('networkidle')
      expect(page.url()).toBe('http://localhost:4173/')
    }
  })

  test('bulletin page has correct title', async ({ page }) => {
    await page.goto('/bulletin')
    await expect(page).toHaveTitle(/Bulletin/)
  })
})
