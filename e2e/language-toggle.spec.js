import { test, expect } from '@playwright/test'

test.describe('Language Toggle', () => {
  test('toggle button is visible on home page', async ({ page }) => {
    await page.goto('/')
    const toggleButton = page.locator('button[aria-label="Toggle language"]').first()
    await expect(toggleButton).toBeVisible()
  })

  test('toggle shows EN or ES based on current language', async ({ page }) => {
    await page.goto('/')
    const toggleButton = page.locator('button[aria-label="Toggle language"]').first()

    const initialText = await toggleButton.textContent()
    expect(['EN', 'ES']).toContain(initialText?.trim())
  })

  test('clicking toggle switches language from English to Spanish', async ({ page }) => {
    await page.goto('/')

    const welcomeSection = page.locator('h2:text("Welcome")')
    await expect(welcomeSection).toBeVisible()

    const toggleButton = page.locator('button[aria-label="Toggle language"]').first()
    await toggleButton.click()

    const welcomeSectionES = page.locator('h2:text("Bienvenido")')
    await expect(welcomeSectionES).toBeVisible()
  })

  test('clicking toggle switches language from Spanish to English', async ({ page }) => {
    await page.goto('/')

    const toggleButton = page.locator('button[aria-label="Toggle language"]').first()

    await toggleButton.click()
    const welcomeSectionES = page.locator('h2:text("Bienvenido")')
    await expect(welcomeSectionES).toBeVisible()

    await toggleButton.click()
    const welcomeSectionEN = page.locator('h2:text("Welcome")')
    await expect(welcomeSectionEN).toBeVisible()
  })

  test('language preference persists after page reload', async ({ page, context }) => {
    await page.goto('/')

    const toggleButton = page.locator('button[aria-label="Toggle language"]').first()
    await toggleButton.click()

    const welcomeSectionES = page.locator('h2:text("Bienvenido")')
    await expect(welcomeSectionES).toBeVisible()

    await page.reload()

    const welcomeSectionESAfterReload = page.locator('h2:text("Bienvenido")')
    await expect(welcomeSectionESAfterReload).toBeVisible()
  })

  test('language toggle works on multiple pages', async ({ page }) => {
    await page.goto('/')

    const toggleButton = page.locator('button[aria-label="Toggle language"]').first()
    await toggleButton.click()

    const welcomeSectionES = page.locator('h2:text("Bienvenido")')
    await expect(welcomeSectionES).toBeVisible()

    await page.goto('/about')

    const aboutTitleES = page.locator('h1:text("Sobre Nosotros")')
    await expect(aboutTitleES).toBeVisible()

    await page.goto('/contact')

    const contactTitleES = page.locator('h1:text("Contáctanos")')
    await expect(contactTitleES).toBeVisible()
  })

  test('nav links are translated', async ({ page }) => {
    await page.goto('/')

    const toggleButton = page.locator('button[aria-label="Toggle language"]').first()
    await toggleButton.click()

    const aboutLink = page.locator('a:text("Sobre Nosotros")').first()
    await expect(aboutLink).toBeVisible()

    const contactLink = page.locator('a:text("Contacto")').first()
    await expect(contactLink).toBeVisible()
  })

  test('footer links are translated', async ({ page }) => {
    await page.goto('/')

    const toggleButton = page.locator('button[aria-label="Toggle language"]').first()
    await toggleButton.click()

    const quickLinksHeading = page.locator('h3:text("Enlaces Rápidos")')
    await expect(quickLinksHeading).toBeVisible()

    const followUsHeading = page.locator('h3:text("Síguenos")')
    await expect(followUsHeading).toBeVisible()
  })

  test('mobile language toggle works', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')

    const menuButton = page.locator('button[aria-label="Toggle menu"]')
    await menuButton.click()

    const languageButton = page.locator('button:text("Español")').first()
    await expect(languageButton).toBeVisible()

    await languageButton.click()

    const welcomeSectionES = page.locator('h2:text("Bienvenido")')
    await expect(welcomeSectionES).toBeVisible()
  })
})
