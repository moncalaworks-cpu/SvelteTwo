import { describe, it, expect } from 'vitest'
import { bulletins, latest } from '$lib/data/bulletins.js'

describe('bulletins data', () => {
  it('latest equals first bulletin when bulletins exist', () => {
    if (bulletins.length > 0) {
      expect(latest).toEqual(bulletins[0])
    }
  })

  it('latest is null when bulletins array is empty', () => {
    if (bulletins.length === 0) {
      expect(latest).toBeNull()
    }
  })

  it('each bulletin has required fields', () => {
    bulletins.forEach((bulletin) => {
      expect(bulletin).toHaveProperty('date')
      expect(bulletin).toHaveProperty('url')
      expect(typeof bulletin.date).toBe('string')
      expect(typeof bulletin.url).toBe('string')
    })
  })

  it('bulletin dates are valid format', () => {
    bulletins.forEach((bulletin) => {
      expect(bulletin.date).toMatch(/^\d{4}-\d{2}-\d{2}$/)
    })
  })
})
