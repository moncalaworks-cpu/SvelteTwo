# Video Background Setup Guide

This guide covers hosting, optimizing, and serving video backgrounds for the church website.

## Quick Start

### 1. Install FFmpeg

```bash
# macOS
brew install ffmpeg

# Ubuntu/Debian
sudo apt-get install ffmpeg

# Windows (with Chocolatey)
choco install ffmpeg
```

### 2. Optimize Videos

Place your 4 sample videos in a local folder, then run:

```bash
bash scripts/optimize-videos.sh /path/to/your/videos
```

This creates optimized MP4 and WebM versions in `public/videos/`.

**Example:**
```bash
bash scripts/optimize-videos.sh ~/Downloads/church-videos
```

### 3. Choose Hosting

#### Option A: Local Hosting (Development/Testing)
Use videos from `public/videos/` directly:

```svelte
<VideoBackground src="/videos/background.mp4" />
```

**Pros:** Simple, no setup  
**Cons:** Adds to bundle size, slower delivery

#### Option B: Vercel Blob (Recommended Production)

1. **Set up Blob in Vercel Dashboard:**
   - Go to https://vercel.com/dashboard → Select your project
   - Settings → Storage → Create Database → Blob
   - Copy `BLOB_READ_WRITE_TOKEN`

2. **Upload videos:**
   ```bash
   export BLOB_READ_WRITE_TOKEN=your_token_here
   node scripts/upload-videos-blob.js
   ```

3. **Use Blob URLs in your pages:**
   ```svelte
   <VideoBackground src="https://your-blob-url.blob.vercel-storage.com/videos/background.mp4" />
   ```

## Usage in Pages

### Video Background Component

```svelte
<script>
  import VideoBackground from '$lib/components/VideoBackground.svelte';
</script>

<div class="relative h-screen">
  <VideoBackground 
    src="/videos/background.mp4"
    poster="/images/poster.jpg"
  />
  
  <!-- Content overlay -->
  <div class="relative z-10 flex items-center justify-center h-full bg-black/50">
    <h1 class="text-5xl font-bold text-white">Welcome</h1>
  </div>
</div>
```

### Direct Video Tag

```svelte
<video autoplay muted loop playsinline class="w-full">
  <source src="/videos/background.mp4" type="video/mp4" />
  <source src="/videos/background.webm" type="video/webm" />
</video>
```

## Video Specifications

After optimization, videos should be:

| Property | Spec |
|----------|------|
| Format | MP4 (primary) + WebM (fallback) |
| Codec | H.264 (MP4) / VP9 (WebM) |
| Resolution | 1920×1080 or 1280×720 |
| Bitrate | 800-1500 kbps |
| Audio | AAC 64kbps (or muted) |
| Size | < 50MB per video |

## Troubleshooting

### FFmpeg errors
```bash
# Update FFmpeg
brew upgrade ffmpeg

# Check installation
ffmpeg -version
```

### Vercel Blob upload fails
- Verify `BLOB_READ_WRITE_TOKEN` is set correctly
- Check token has read/write permissions
- Ensure videos are in `public/videos/`

### Videos not playing in browser
- Check browser console for CORS errors
- Verify video format is supported (MP4 first, WebM fallback)
- Test locally with `npm run dev` first

### Slow video playback
- Reduce bitrate in optimize script (change `-b:v 1500k` to `1000k`)
- Use Blob storage instead of local files
- Serve lower resolution for mobile

## Video Optimization Tips

### For Different Use Cases

**Background (no audio):**
```bash
ffmpeg -i input.mov -c:v libx264 -crf 28 -vf "scale=1920:-1" -an output.mp4
```

**Featured Video (with audio):**
```bash
ffmpeg -i input.mov -c:v libx264 -crf 23 -c:a aac -b:a 128k output.mp4
```

**Ultra-compressed (mobile):**
```bash
ffmpeg -i input.mov -c:v libx264 -crf 30 -vf "scale=1280:-1" -c:a aac -b:a 32k output.mp4
```

### Batch Processing

To optimize all videos in a folder:
```bash
for f in *.mov; do ffmpeg -i "$f" -c:v libx264 -crf 28 -vf "scale=1920:-1" "${f%.mov}.mp4"; done
```

## Resources

- [FFmpeg Docs](https://ffmpeg.org/documentation.html)
- [Vercel Blob Docs](https://vercel.com/docs/storage/vercel-blob)
- [Video Optimization Guide](https://web.dev/articles/optimize-video)
