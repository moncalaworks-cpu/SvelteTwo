<script>
  import { onMount } from 'svelte'
  import { browser } from '$app/environment'

  let { videos = [], rotationInterval = 5000, children } = $props()

  let currentIndex = $state(0)
  let currentVideo = $derived(videos[currentIndex])
  let videoFailed = $state(browser && typeof window !== 'undefined' && window.innerWidth < 768)
  let imageDisplayTimer = $state(null)
  let isMobile = $state(browser ? window.innerWidth < 768 : false)
  let videoElement = $state(null)
  let rotationTimeout = $state(null)
  let autoplayTimeout = $state(null)
  let mobileVideoTimeout = $state(null)

  onMount(() => {
    // Detect mobile viewport
    isMobile = window.innerWidth < 768
    const handleResize = () => {
      isMobile = window.innerWidth < 768
    }
    window.addEventListener('resize', handleResize)

    if (videos.length === 0) return

    // Schedule next rotation after rotationInterval
    const scheduleNextRotation = () => {
      if (rotationTimeout) clearTimeout(rotationTimeout)
      rotationTimeout = setTimeout(() => {
        if (imageDisplayTimer) clearTimeout(imageDisplayTimer)
        if (!isMobile) videoFailed = false
        currentIndex = (currentIndex + 1) % videos.length
      }, rotationInterval)
    }

    scheduleNextRotation()

    return () => {
      if (rotationTimeout) clearTimeout(rotationTimeout)
      if (imageDisplayTimer) clearTimeout(imageDisplayTimer)
      if (autoplayTimeout) clearTimeout(autoplayTimeout)
      if (mobileVideoTimeout) clearTimeout(mobileVideoTimeout)
      window.removeEventListener('resize', handleResize)
    }
  })

  // Separate effect for mobile fallback: triggers when video changes
  $effect(() => {
    // On mobile, show fallback image after short delay since autoplay is unreliable
    if (isMobile && !videoFailed && currentVideo && browser) {
      if (mobileVideoTimeout) clearTimeout(mobileVideoTimeout)
      mobileVideoTimeout = setTimeout(() => {
        videoFailed = true
      }, 3000)
    }

    return () => {
      if (mobileVideoTimeout) clearTimeout(mobileVideoTimeout)
    }
  })

  function handleVideoError() {
    videoFailed = true
    if (autoplayTimeout) clearTimeout(autoplayTimeout)
    // Display image for 5 seconds before moving to next video
    if (imageDisplayTimer) clearTimeout(imageDisplayTimer)
    imageDisplayTimer = setTimeout(() => {
      currentIndex = (currentIndex + 1) % videos.length
      videoFailed = false
    }, 5000)
  }

  function handleVideoEnded() {
    // Auto-advance when video finishes
    if (autoplayTimeout) clearTimeout(autoplayTimeout)
    if (imageDisplayTimer) clearTimeout(imageDisplayTimer)
    videoFailed = false
    currentIndex = (currentIndex + 1) % videos.length
  }

  function handleVideoPlay() {
    // Video started playing, clear autoplay timeout
    if (autoplayTimeout) clearTimeout(autoplayTimeout)
  }

</script>

<div class="relative w-full h-screen overflow-hidden">
  <!-- Video Background -->
  {#if currentVideo && !videoFailed}
    {#key currentIndex}
      <video
        bind:this={videoElement}
        autoplay
        muted
        playsinline
        onerror={handleVideoError}
        onended={handleVideoEnded}
        onplay={handleVideoPlay}
        class="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 pointer-events-none"
        style="object-position: center 33%"
      >
        {#if Array.isArray(currentVideo.mp4)}
          {#each currentVideo.mp4 as src}
            <source {src} type="video/mp4" />
          {/each}
        {:else}
          <source src={currentVideo.mp4} type="video/mp4" />
        {/if}
        {#if Array.isArray(currentVideo.webm)}
          {#each currentVideo.webm as src}
            <source {src} type="video/webm" />
          {/each}
        {:else}
          <source src={currentVideo.webm} type="video/webm" />
        {/if}
      </video>
    {/key}
  {/if}

  <!-- Image Fallback (5 second display) -->
  {#if currentVideo && videoFailed}
    {#key currentIndex}
      <img
        src={isMobile ? currentVideo.imageMobile : currentVideo.imageDesktop}
        alt={currentVideo.name}
        class="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style="object-position: center 33%"
      />
    {/key}
  {/if}

  <!-- Gradient Overlays -->
  <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70"></div>
  <div class="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"></div>
  
  <!-- Content Overlay -->
  <div class="relative z-10 h-full flex items-center justify-center">
    {@render children?.()}
  </div>
  
  <!-- Carousel Indicators -->
  {#if videos.length > 1}
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3 backdrop-blur-sm bg-black/20 px-4 py-2 rounded-full">
      {#each videos as _, index (index)}
        <button
          onclick={() => currentIndex = index}
          class="h-2 rounded-full transition-all duration-300 {index === currentIndex ? 'bg-purple-400 w-8 shadow-lg shadow-purple-500/50' : 'bg-white/40 w-2 hover:bg-white/60'}"
          aria-label="Go to video {index + 1}"
        ></button>
      {/each}
    </div>
  {/if}
</div>

<style>
  video {
    background-color: #0f0f1a;
  }

  :global(.transition-opacity) {
    transition: opacity 1s ease-in-out;
  }
</style>
