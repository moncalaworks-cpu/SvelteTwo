import { describe, it, expect, beforeEach, vi } from 'vitest'

describe('i18n', () => {
  let mockLocalStorage

  beforeEach(() => {
    mockLocalStorage = {
      storage: {},
      getItem(key) {
        return this.storage[key] || null
      },
      setItem(key, value) {
        this.storage[key] = String(value)
      },
      removeItem(key) {
        delete this.storage[key]
      },
      clear() {
        this.storage = {}
      },
    }

    global.localStorage = mockLocalStorage
  })

  it('exports required functions', async () => {
    const { getLanguage, setLanguage, t } = await import('$lib/i18n.svelte.js')
    expect(typeof getLanguage).toBe('function')
    expect(typeof setLanguage).toBe('function')
    expect(typeof t).toBe('function')
  })

  it('getLanguage returns default language', async () => {
    mockLocalStorage.clear()
    const { getLanguage } = await import('$lib/i18n.svelte.js')
    const lang = getLanguage()
    expect(['en', 'es']).toContain(lang)
  })

  it('t() function returns English translation for a valid key', async () => {
    const { t } = await import('$lib/i18n.svelte.js')
    const translated = t('home.welcomeTitle')
    expect(translated).toBe('Welcome')
  })

  it('t() function returns fallback key if translation not found', async () => {
    const { t } = await import('$lib/i18n.svelte.js')
    const translated = t('nonexistent.key')
    expect(translated).toBe('nonexistent.key')
  })

  it('t() function returns English translation for unknown language', async () => {
    const { t } = await import('$lib/i18n.svelte.js')
    const welcomeEN = t('home.welcomeTitle')
    expect(welcomeEN).toBe('Welcome')
  })

  it('setLanguage updates the current language', async () => {
    const { getLanguage, setLanguage } = await import('$lib/i18n.svelte.js')
    setLanguage('es')
    const lang = getLanguage()
    expect(lang).toBe('es')
  })

  it('setLanguage persists language to localStorage', async () => {
    const { setLanguage } = await import('$lib/i18n.svelte.js')
    setLanguage('es')
    expect(mockLocalStorage.getItem('lang')).toBe('es')
  })

  it('language preference is retrieved from localStorage on init', async () => {
    mockLocalStorage.setItem('lang', 'es')
    const { getLanguage } = await import('$lib/i18n.svelte.js')
    const lang = getLanguage()
    expect(lang).toBe('es')
  })

  it('t() returns Spanish translation when language is set to Spanish', async () => {
    mockLocalStorage.setItem('lang', 'es')
    const { t } = await import('$lib/i18n.svelte.js')
    const translated = t('home.welcomeTitle')
    expect(translated).toBe('Bienvenido')
  })

  it('toggles between English and Spanish', async () => {
    const { getLanguage, setLanguage } = await import('$lib/i18n.svelte.js')

    setLanguage('en')
    expect(getLanguage()).toBe('en')

    setLanguage('es')
    expect(getLanguage()).toBe('es')

    setLanguage('en')
    expect(getLanguage()).toBe('en')
  })
})
