import { describe, it, expect } from 'vitest'
import { translations } from '$lib/data/translations.js'

describe('translations', () => {
  const enKeys = Object.keys(translations.en).sort()
  const esKeys = Object.keys(translations.es).sort()

  it('has English translations', () => {
    expect(enKeys.length).toBeGreaterThan(0)
  })

  it('has Spanish translations', () => {
    expect(esKeys.length).toBeGreaterThan(0)
  })

  it('English and Spanish have the same keys', () => {
    expect(esKeys).toEqual(enKeys)
  })

  it('all keys have non-empty English values', () => {
    enKeys.forEach((key) => {
      expect(translations.en[key]).toBeTruthy()
      expect(typeof translations.en[key]).toBe('string')
      expect(translations.en[key].length).toBeGreaterThan(0)
    })
  })

  it('all keys have non-empty Spanish values', () => {
    esKeys.forEach((key) => {
      expect(translations.es[key]).toBeTruthy()
      expect(typeof translations.es[key]).toBe('string')
      expect(translations.es[key].length).toBeGreaterThan(0)
    })
  })

  it('Spanish values are different from English values (not just copies)', () => {
    const differentCount = enKeys.filter((key) => translations.en[key] !== translations.es[key])
      .length
    expect(differentCount).toBe(enKeys.length)
  })

  it('contains expected translation keys for main sections', () => {
    const expectedKeys = [
      'nav.aboutUs',
      'nav.contact',
      'home.welcomeTitle',
      'about.missionTitle',
      'contact.submit',
      'giving.title',
      'forms.visitorTab',
      'bulletin.title',
      'events.title',
      'foodPantry.title',
      'galleries.title',
      'liveStream.title',
      'login.title',
      'njcYouth.title',
    ]

    expectedKeys.forEach((key) => {
      expect(translations.en).toHaveProperty(key)
      expect(translations.es).toHaveProperty(key)
    })
  })
})
