import { describe, it, expect } from 'vitest'
import { backgroundVideos } from '$lib/data/videos.js'

describe('backgroundVideos data', () => {
  it('has videos array', () => {
    expect(Array.isArray(backgroundVideos)).toBe(true)
  })

  it('each video has required fields', () => {
    backgroundVideos.forEach((video) => {
      expect(video).toHaveProperty('name')
      expect(video).toHaveProperty('mp4')
      expect(video).toHaveProperty('webm')
    })
  })

  it('video URLs point to Vercel Blob', () => {
    backgroundVideos.forEach((video) => {
      expect(video.mp4).toContain('blob.vercel-storage.com')
      expect(video.webm).toContain('blob.vercel-storage.com')
    })
  })

  it('video URLs end with correct extensions', () => {
    backgroundVideos.forEach((video) => {
      expect(video.mp4).toMatch(/\.mp4$/)
      expect(video.webm).toMatch(/\.webm$/)
    })
  })

  it('all fields are non-empty strings', () => {
    backgroundVideos.forEach((video) => {
      expect(video.name.length).toBeGreaterThan(0)
      expect(video.mp4.length).toBeGreaterThan(0)
      expect(video.webm.length).toBeGreaterThan(0)
    })
  })
})
