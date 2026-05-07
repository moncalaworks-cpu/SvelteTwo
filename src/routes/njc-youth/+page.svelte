<script>
  import { church } from '$lib/data/church.js'
</script>

<svelte:head>
  <title>NJC Youth - {church.name}</title>
</svelte:head>

<!-- Hero -->
<section class="relative w-full h-80 bg-gradient-to-r from-gray-950 to-gray-900 flex items-center justify-center">
  <div class="absolute inset-0 bg-black/40"></div>
  <div class="relative z-10 text-center">
    <h1 class="text-4xl md:text-5xl font-bold text-white">NJC Youth</h1>
  </div>
</section>

<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
  <h2 class="text-2xl font-bold text-white mb-6">New Jersey Conference Youth Ministry</h2>
  <p class="text-lg text-gray-300 mb-8">
    The New Jersey Conference Youth Ministry serves young people across the Seventh-day Adventist churches in New Jersey.
    Our youth program is designed to help young people grow in faith, develop leadership skills, and connect with peers
    who share their values.
  </p>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
    <!-- What is NJC Youth? -->
    <section>
      <h3 class="text-xl font-bold text-white mb-4">About NJC Youth</h3>
      <div class="bg-gray-800 rounded-lg p-6">
        <p class="text-gray-300">
          NJC Youth organizes events, camps, retreats, and community service projects throughout the year. These
          gatherings provide opportunities for spiritual growth, friendship, and fun.
        </p>
      </div>
    </section>

    <!-- Get Involved -->
    <section>
      <h3 class="text-xl font-bold text-white mb-4">Get Involved</h3>
      <div class="bg-gray-800 rounded-lg p-6">
        <p class="text-gray-300 mb-4">
          If you're a young person in our church and want to connect with others your age, NJC Youth offers something
          for everyone.
        </p>
        <a
          href={church.njcYouthUrl}
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block bg-purple-400 hover:bg-purple-500 text-black font-bold py-2 px-4 rounded-lg transition-colors text-sm"
        >
          Visit NJC Youth →
        </a>
      </div>
    </section>
  </div>

  <!-- Upcoming Events -->
  <section>
    <h2 class="text-2xl font-bold text-white mb-6">Upcoming Events</h2>
    <div class="bg-gray-800 rounded-lg p-8 text-center">
      <p class="text-gray-300 mb-4">For information about upcoming NJC Youth events, please visit the official website:</p>
      <a
        href={church.njcYouthUrl}
        target="_blank"
        rel="noopener noreferrer"
        class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
      >
        NJC Youth Official Website
      </a>
    </div>
  </section>

  <!-- Contact Info -->
  <section class="mt-12">
    <h2 class="text-2xl font-bold text-white mb-6">Questions?</h2>
    <p class="text-gray-300 mb-6">
      Contact our church office or speak with our youth leaders for more information about NJC Youth events and how to
      participate.
    </p>
  </section>
</div>
