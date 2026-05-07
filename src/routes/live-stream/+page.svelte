<script>
  import { church } from '$lib/data/church.js'
</script>

<svelte:head>
  <title>Live Stream & Videos - {church.name}</title>
</svelte:head>

<!-- Hero -->
<section class="relative w-full h-80 bg-gradient-to-r from-gray-950 to-gray-900 flex items-center justify-center">
  <div class="absolute inset-0 bg-black/40"></div>
  <div class="relative z-10 text-center">
    <h1 class="text-4xl md:text-5xl font-bold text-white">Live Stream & Videos</h1>
  </div>
</section>

<div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
  <!-- Live Stream -->
  <section class="mb-16">
    <h2 class="text-3xl font-bold text-white mb-6">Watch Live</h2>
    <p class="text-gray-300 mb-6">
      Join us for live streaming of our Sabbath morning services. Services begin at 10:30 AM every Saturday.
    </p>
    <div class="relative w-full h-0 pb-[56.25%] bg-black rounded-lg overflow-hidden">
      <iframe
        class="absolute top-0 left-0 w-full h-full"
        title="YouTube Live Stream"
        src="https://www.youtube.com/embed/{church.youtubeChannelId}"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </section>

  <!-- Past Sermons -->
  <section>
    <h2 class="text-3xl font-bold text-white mb-6">Past Sermons</h2>
    <p class="text-gray-300 mb-6">
      Watch past services and sermons on our YouTube channel. You can find our complete library of messages below.
    </p>
    <a
      href={church.youtube}
      target="_blank"
      rel="noopener noreferrer"
      class="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
    >
      Visit Our YouTube Channel →
    </a>
  </section>
</div>
