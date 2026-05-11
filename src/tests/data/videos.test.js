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

  it('video URLs include fallback paths', () => {
    backgroundVideos.forEach((video) => {
      const mp4Array = Array.isArray(video.mp4) ? video.mp4 : [video.mp4]
      const webmArray = Array.isArray(video.webm) ? video.webm : [video.webm]

      // Should have local path as fallback
      expect(mp4Array.some(url => url.match(/^\/videos\//))).toBe(true)
      expect(webmArray.some(url => url.match(/^\/videos\//))).toBe(true)
    })
  })

  it('video URLs end with correct extensions', () => {
    backgroundVideos.forEach((video) => {
      const mp4Array = Array.isArray(video.mp4) ? video.mp4 : [video.mp4]
      const webmArray = Array.isArray(video.webm) ? video.webm : [video.webm]

      mp4Array.forEach(url => expect(url).toMatch(/\.mp4$/))
      webmArray.forEach(url => expect(url).toMatch(/\.webm$/))
    })
  })

  it('all fields are present and non-empty', () => {
    backgroundVideos.forEach((video) => {
      expect(video.name.length).toBeGreaterThan(0)

      const mp4Array = Array.isArray(video.mp4) ? video.mp4 : [video.mp4]
      const webmArray = Array.isArray(video.webm) ? video.webm : [video.webm]

      expect(mp4Array.length).toBeGreaterThan(0)
      expect(webmArray.length).toBeGreaterThan(0)
      mp4Array.forEach(url => expect(url.length).toBeGreaterThan(0))
      webmArray.forEach(url => expect(url.length).toBeGreaterThan(0))
    })
  })
})
