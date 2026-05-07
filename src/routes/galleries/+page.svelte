<script>
  import { church } from '$lib/data/church.js'
  let selectedImage = $state(null)
</script>

<svelte:head>
  <title>Galleries - {church.name}</title>
</svelte:head>

<!-- Hero -->
<section class="relative w-full h-80 bg-gradient-to-r from-gray-950 to-gray-900 flex items-center justify-center">
  <div class="absolute inset-0 bg-black/40"></div>
  <div class="relative z-10 text-center">
    <h1 class="text-4xl md:text-5xl font-bold text-white">Photo Galleries</h1>
  </div>
</section>

<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
  <h2 class="text-2xl font-bold text-white mb-12 text-center">Coming Soon</h2>
  <p class="text-center text-gray-300 mb-12">
    We're gathering photos from recent events and services. Check back soon for a gallery of our church community in
    action!
  </p>

  <!-- Photo Grid Placeholder -->
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {#each Array(12) as _, i}
      <div class="aspect-square bg-gray-800 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors">
        <div class="text-center">
          <div class="text-3xl mb-2">📸</div>
          <p class="text-gray-400 text-sm">Photo Coming Soon</p>
        </div>
      </div>
    {/each}
  </div>

  <!-- Instructions -->
  <section class="mt-16 bg-gray-800 rounded-lg p-8 text-center">
    <h2 class="text-xl font-bold text-white mb-4">Want to Share Your Photos?</h2>
    <p class="text-gray-300 mb-4">
      If you have photos from church events, services, or ministries, we'd love to feature them in our gallery!
    </p>
    <a
      href="/contact"
      class="inline-block bg-purple-400 hover:bg-purple-500 text-black font-bold py-2 px-6 rounded-lg transition-colors"
    >
      Contact Us
    </a>
  </section>
</div>

<!-- Lightbox Modal (for future use when images are added) -->
{#if selectedImage}
  <div
    class="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
    onclick={() => (selectedImage = null)}
  >
    <button onclick={() => (selectedImage = null)} class="absolute top-4 right-4 text-white text-3xl">
      ✕
    </button>
  </div>
{/if}
