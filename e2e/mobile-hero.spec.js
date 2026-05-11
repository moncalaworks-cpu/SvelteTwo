import { test, expect } from '@playwright/test'

test.describe('Mobile Hero Background', () => {
  test.use({ viewport: { width: 430, height: 932 } })

  test('hero image is present in DOM on mobile', async ({ page }) => {
    await page.goto('/')
    // Image fallback should render immediately on mobile (videoFailed starts true)
    const heroImg = page.locator('img[src*="hero-thumbnails"]')
    await expect(heroImg).toBeVisible({ timeout: 5000 })
  })

  test('hero image uses mobile variant', async ({ page }) => {
    await page.goto('/')
    const heroImg = page.locator('img[src*="hero-thumbnails"]')
    await expect(heroImg).toBeVisible({ timeout: 5000 })
    const src = await heroImg.getAttribute('src')
    expect(src).toContain('-mobile.jpg')
  })

  test('hero image actually loads (not broken)', async ({ page }) => {
    await page.goto('/')
    const heroImg = page.locator('img[src*="hero-thumbnails"]')
    await expect(heroImg).toBeVisible({ timeout: 5000 })

    // Verify the image has loaded (naturalWidth > 0 means the file was fetched)
    const loaded = await heroImg.evaluate((img) => img.complete && img.naturalWidth > 0)
    expect(loaded).toBe(true)
  })

  test('hero image fills the viewport (not zero-height)', async ({ page }) => {
    await page.goto('/')
    const heroImg = page.locator('img[src*="hero-thumbnails"]')
    await expect(heroImg).toBeVisible({ timeout: 5000 })

    const box = await heroImg.boundingBox()
    expect(box).not.toBeNull()
    expect(box.width).toBeGreaterThan(200)
    expect(box.height).toBeGreaterThan(200)
  })

  test('no video element rendered on mobile', async ({ page }) => {
    await page.goto('/')
    // On mobile, videoFailed=true so <video> should not be in the DOM
    const video = page.locator('video')
    await expect(video).toHaveCount(0)
  })

  test('hero section screenshot', async ({ page }) => {
    await page.goto('/')
    // Wait for image to be visible before screenshotting
    await page.locator('img[src*="hero-thumbnails"]').waitFor({ timeout: 5000 })
    await page.screenshot({ path: 'playwright-report/mobile-hero.png', clip: { x: 0, y: 0, width: 430, height: 500 } })
  })
})
