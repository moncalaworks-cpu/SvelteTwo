import { describe, it, expect } from 'vitest'
import { church } from '$lib/data/church.js'

describe('church data', () => {
  it('has required fields', () => {
    expect(church).toHaveProperty('name')
    expect(church).toHaveProperty('address')
    expect(church).toHaveProperty('phone')
    expect(church).toHaveProperty('email')
  })

  it('has valid URLs', () => {
    expect(church.facebook).toBeTruthy()
    expect(church.youtube).toBeTruthy()
    expect(church.instagram).toBeTruthy()
    expect(church.giving).toBeTruthy()
  })

  it('church name is non-empty', () => {
    expect(church.name).toBeTruthy()
    expect(church.name.length).toBeGreaterThan(0)
  })

  it('has valid contact info', () => {
    expect(church.phone).toMatch(/\d/)
    expect(church.email).toMatch(/@/)
  })
})
