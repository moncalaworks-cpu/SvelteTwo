import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/svelte'
import VideoCarousel from '$lib/components/VideoCarousel.svelte'

describe('VideoCarousel component', () => {
  const mockVideos = [
    { name: 'Video 1', mp4: 'https://example.com/v1.mp4', webm: 'https://example.com/v1.webm' },
    { name: 'Video 2', mp4: 'https://example.com/v2.mp4', webm: 'https://example.com/v2.webm' },
  ]

  it('renders without videos', () => {
    render(VideoCarousel, { props: { videos: [], rotationInterval: 5000 } })
    const videos = document.querySelectorAll('video')
    expect(videos.length).toBe(0)
  })

  it('renders video elements with provided videos', () => {
    render(VideoCarousel, { props: { videos: mockVideos, rotationInterval: 5000 } })
    const videos = document.querySelectorAll('video')
    expect(videos.length).toBeGreaterThan(0)
  })

  it('shows dot indicators when multiple videos exist', () => {
    render(VideoCarousel, { props: { videos: mockVideos, rotationInterval: 5000 } })
    const indicators = document.querySelectorAll('button')
    expect(indicators.length).toBe(mockVideos.length)
  })

  it('does not show indicators for single video', () => {
    render(VideoCarousel, {
      props: { videos: [mockVideos[0]], rotationInterval: 5000 },
    })
    const indicators = document.querySelectorAll('button')
    expect(indicators.length).toBe(0)
  })

  it('applies overlay gradient', () => {
    render(VideoCarousel, { props: { videos: mockVideos, rotationInterval: 5000 } })
    const overlays = document.querySelectorAll('[class*="bg-gradient"]')
    expect(overlays.length).toBeGreaterThan(0)
  })

  it('video has correct attributes', () => {
    render(VideoCarousel, { props: { videos: mockVideos, rotationInterval: 5000 } })
    const video = document.querySelector('video')
    expect(video.getAttribute('autoplay')).toBeDefined()
    expect(video.getAttribute('muted')).toBeDefined()
    expect(video.getAttribute('playsinline')).toBeDefined()
  })
})
