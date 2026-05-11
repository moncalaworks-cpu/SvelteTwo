// Background videos with fallback: tries Vercel Blob first, falls back to local
const BLOB_BASE = 'https://vysuzf3ywizupqg3.public.blob.vercel-storage.com/videos'
const LOCAL_BASE = '/videos'

const videos = [
  { name: 'Video 1', file: 'IMG_0093' },
  { name: 'Video 2', file: 'IMG_0148' },
  { name: 'Video 3', file: 'IMG_1502' },
  { name: 'Video 4', file: 'IMG_1640' },
]

export const backgroundVideos = videos.map((v) => ({
  name: v.name,
  // Video sources: try Blob first, then local
  mp4: [
    `${BLOB_BASE}/${v.file}.mp4`,
    `${LOCAL_BASE}/${v.file}.mp4`,
  ],
  webm: [
    `${BLOB_BASE}/${v.file}.webm`,
    `${LOCAL_BASE}/${v.file}.webm`,
  ],
  // Image fallbacks: responsive thumbnails (5 second display)
  imageDesktop: `/images/hero-thumbnails/${v.file}-desktop.jpg`,
  imageMobile: `/images/hero-thumbnails/${v.file}-mobile.jpg`,
}))
