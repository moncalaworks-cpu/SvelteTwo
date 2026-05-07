<script>
  import { church } from '$lib/data/church.js'
</script>

<svelte:head>
  <title>Bulletin - {church.name}</title>
</svelte:head>

<!-- Hero -->
<section class="relative w-full h-80 bg-gradient-to-r from-gray-950 to-gray-900 flex items-center justify-center">
  <div class="absolute inset-0 bg-black/40"></div>
  <div class="relative z-10 text-center">
    <h1 class="text-4xl md:text-5xl font-bold text-white">Church Bulletin</h1>
  </div>
</section>

<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
  <h2 class="text-2xl font-bold text-white mb-6">Weekly Bulletin</h2>
  <p class="text-gray-300 mb-8">
    Download the latest church bulletin below. The bulletin contains announcements, upcoming events, and ministry
    updates.
  </p>

  <!-- PDF Embed Placeholder -->
  <div class="bg-gray-800 rounded-lg p-8 text-center mb-8">
    <p class="text-gray-300 mb-4">📄 Latest Bulletin</p>
    <p class="text-gray-400 text-sm mb-6">
      To add the weekly bulletin, replace <code class="bg-gray-700 px-2 py-1">static/bulletins/current.pdf</code> with your
      PDF file.
    </p>
    <a
      href="/bulletins/current.pdf"
      download
      class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors"
    >
      Download PDF
    </a>
  </div>

  <!-- How to Find Bulletins -->
  <section>
    <h2 class="text-xl font-bold text-white mb-4">Latest Announcements</h2>
    <div class="bg-gray-800 rounded-lg p-6">
      <p class="text-gray-300">
        Check back soon for the latest bulletin and announcements. You can also contact the church office at
        <a href={`tel:${church.phone}`} class="hover:text-purple-300 transition-colors">
          {church.phone}
        </a>
        for information.
      </p>
    </div>
  </section>
</div>
