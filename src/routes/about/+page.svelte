<script>
  import { church } from '$lib/data/church.js'
</script>

<svelte:head>
  <title>About Us - {church.name}</title>
</svelte:head>

<!-- Hero -->
<section class="relative w-full h-80 bg-gradient-to-r from-gray-950 to-gray-900 flex items-center justify-center">
  <div class="absolute inset-0 bg-black/40"></div>
  <div class="relative z-10 text-center">
    <h1 class="text-4xl md:text-5xl font-bold text-white">About Us</h1>
  </div>
</section>

<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
  <!-- Mission & Vision -->
  <section class="mb-16">
    <h2 class="text-3xl font-bold text-white mb-6">Our Mission</h2>
    <p class="text-lg text-gray-300 mb-4">
      To share the love of Jesus Christ, grow in faith through biblical teaching, and serve our community with compassion
      and integrity.
    </p>
  </section>

  <!-- Pastoral Staff -->
  <section class="mb-16">
    <h2 class="text-3xl font-bold text-white mb-8">Pastoral Leadership</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      {#each church.pastors as pastor}
        <div class="bg-gray-800 rounded-lg p-6">
          <h3 class="text-xl font-bold text-white mb-2">{pastor.name}</h3>
          <p class="text-gray-300 mb-2">
            <a href={`tel:${pastor.phone}`} class="hover:text-purple-300 transition-colors">
              {pastor.phone}
            </a>
          </p>
          {#if pastor.email}
            <p class="text-gray-300">
              <a href={`mailto:${pastor.email}`} class="hover:text-purple-300 transition-colors">
                {pastor.email}
              </a>
            </p>
          {/if}
        </div>
      {/each}
    </div>
  </section>

  <!-- History -->
  <section>
    <h2 class="text-3xl font-bold text-white mb-6">Our Story</h2>
    <p class="text-lg text-gray-300 mb-4">
      Hackettstown Seventh-day Adventist Church has been a beacon of faith in our community for many years. Founded on
      the principles of the Seventh-day Adventist faith, we are committed to spreading the gospel and serving those in
      need.
    </p>
    <p class="text-lg text-gray-300">
      Our church family comes from diverse backgrounds, but we are united by our shared faith in Jesus Christ and our
      commitment to living out His teachings in our daily lives.
    </p>
  </section>
</div>
