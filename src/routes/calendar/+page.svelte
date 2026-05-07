<script>
  import { church } from '$lib/data/church.js'
</script>

<svelte:head>
  <title>Calendar - {church.name}</title>
</svelte:head>

<!-- Hero -->
<section class="relative w-full h-80 bg-gradient-to-r from-gray-950 to-gray-900 flex items-center justify-center">
  <div class="absolute inset-0 bg-black/40"></div>
  <div class="relative z-10 text-center">
    <h1 class="text-4xl md:text-5xl font-bold text-white">Calendar</h1>
  </div>
</section>

<div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
  <h2 class="text-2xl font-bold text-white mb-6">Upcoming Events</h2>
  <p class="text-gray-300 mb-8">
    Our calendar is coming soon! In the meantime, our Sabbath services begin at 10:30 AM every Saturday.
  </p>

  <!-- Placeholder for Google Calendar -->
  <div class="bg-gray-800 rounded-lg p-8 text-center">
    <p class="text-gray-300">
      Google Calendar embed will appear here. Contact us for the calendar link or email
      <a href={`mailto:${church.email}`} class="hover:text-purple-300 transition-colors">
        {church.email}
      </a>
    </p>
  </div>

  <!-- Regular Services -->
  <section class="mt-16">
    <h2 class="text-2xl font-bold text-white mb-6">Regular Services</h2>
    <div class="bg-gray-800 rounded-lg p-6">
      <p class="text-gray-300 mb-2">
        <span class="font-bold text-white">Sabbath Worship Service</span>
      </p>
      <p class="text-gray-400">Every Saturday, 10:30 AM</p>
      <p class="text-gray-400">{church.address}</p>
    </div>
  </section>
</div>
