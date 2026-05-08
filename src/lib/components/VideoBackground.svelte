<script>
  let { src = '', poster = '', ariaLabel = 'Background video' } = $props();
</script>

<video
  {poster}
  autoplay
  muted
  loop
  playsinline
  aria-label={ariaLabel}
  class="absolute inset-0 w-full h-full object-cover"
>
  <source {src} type="video/mp4" />
  <source src={src.replace('.mp4', '.webm')} type="video/webm" />
  <p>Your browser does not support the video tag.</p>
</video>

<style>
  video {
    background-color: #0f0f1a;
  }
</style>
