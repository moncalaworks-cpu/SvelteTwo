<script>
  import { church } from '$lib/data/church.js'
  import { bulletins, latest } from '$lib/data/bulletins.js'
</script>

<svelte:head>
  <title>Bulletin - {church.name}</title>
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-16 md:py-24">
  <h1 class="text-4xl md:text-5xl font-bold text-white mb-2">Bulletin</h1>
  <p class="text-gray-400 mb-8">Weekly service announcements and updates</p>

  {#if latest}
    <!-- Latest Bulletin -->
    <div class="mb-16">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-2xl font-bold text-white">Latest Bulletin</h2>
        <span class="text-sm text-purple-400 bg-purple-900/30 px-3 py-1 rounded">{latest.date}</span>
      </div>

      <!-- Download Button -->
      <a
        href={latest.url}
        download
        class="inline-flex items-center gap-2 bg-purple-500 hover:bg-purple-600 transition px-6 py-3 rounded-lg text-white font-medium mb-6"
      >
        <span>📥</span> Download PDF
      </a>

      <!-- PDF Viewer -->
      <div class="bg-gray-900 rounded-lg border border-gray-700 overflow-y-auto" style="height: clamp(400px, 75vh, 90vh);">
        <iframe
          title="Latest Bulletin"
          src={latest.url}
          class="w-full h-full border-none"
        ></iframe>
      </div>
    </div>

    <!-- Archive -->
    {#if bulletins.length > 1}
      <div class="mt-16 border-t border-gray-700 pt-12">
        <h3 class="text-xl font-bold text-white mb-6">Past Bulletins</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          {#each bulletins.slice(1) as bulletin}
            <a
              href={bulletin.url}
              download
              class="p-4 bg-gray-800 hover:bg-gray-700 transition rounded-lg border border-gray-700 hover:border-purple-500"
            >
              <div class="flex items-center justify-between">
                <span class="text-white font-medium">{bulletin.date}</span>
                <span class="text-gray-400">📄</span>
              </div>
            </a>
          {/each}
        </div>
      </div>
    {/if}
  {:else}
    <div class="bg-gray-800 border border-gray-700 rounded-lg p-8 text-center">
      <p class="text-gray-400 mb-4">No bulletins available yet.</p>
      <p class="text-sm text-gray-500">Check back soon for weekly bulletins.</p>
    </div>
  {/if}
</div>
