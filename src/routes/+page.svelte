<script>
  import { church } from '$lib/data/church.js'
</script>

<svelte:head>
  <title>Home - {church.name}</title>
</svelte:head>

<!-- Hero Section -->
<section class="relative w-full h-screen bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 flex items-center justify-center">
  <div class="absolute inset-0 bg-black/40"></div>
  <div class="relative z-10 text-center max-w-3xl px-6">
    <h1 class="text-5xl md:text-6xl font-bold text-white mb-4">{church.name}</h1>
    <p class="text-xl md:text-2xl text-gray-300 mb-8">Welcome to our faith community</p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a href="/live-stream" class="bg-purple-400 hover:bg-purple-500 text-black font-bold py-3 px-8 rounded-lg transition-colors">
        Watch Live
      </a>
      <a href="/giving" class="bg-transparent border-2 border-purple-400 hover:bg-purple-400 hover:text-black text-purple-400 font-bold py-3 px-8 rounded-lg transition-colors">
        Give Online
      </a>
    </div>
  </div>
</section>

<!-- Quick Links Section -->
<section class="py-16 md:py-24 bg-gray-900">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl md:text-4xl font-bold text-white text-center mb-12">Explore</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Live Stream Card -->
      <a href="/live-stream" class="bg-gray-800 hover:bg-gray-700 rounded-lg p-6 transition-colors">
        <div class="text-4xl mb-4">🎥</div>
        <h3 class="text-xl font-bold text-white mb-2">Live Stream</h3>
        <p class="text-gray-300">Watch our services live on YouTube</p>
      </a>

      <!-- Giving Card -->
      <a href="/giving" class="bg-gray-800 hover:bg-gray-700 rounded-lg p-6 transition-colors">
        <div class="text-4xl mb-4">💝</div>
        <h3 class="text-xl font-bold text-white mb-2">Online Giving</h3>
        <p class="text-gray-300">Support our ministry online</p>
      </a>

      <!-- Calendar Card -->
      <a href="/calendar" class="bg-gray-800 hover:bg-gray-700 rounded-lg p-6 transition-colors">
        <div class="text-4xl mb-4">📅</div>
        <h3 class="text-xl font-bold text-white mb-2">Calendar</h3>
        <p class="text-gray-300">View upcoming events and services</p>
      </a>

      <!-- Food Pantry Card -->
      <a href="/food-pantry" class="bg-gray-800 hover:bg-gray-700 rounded-lg p-6 transition-colors">
        <div class="text-4xl mb-4">🍽️</div>
        <h3 class="text-xl font-bold text-white mb-2">Food Pantry</h3>
        <p class="text-gray-300">Community assistance and resources</p>
      </a>

      <!-- Contact Card -->
      <a href="/contact" class="bg-gray-800 hover:bg-gray-700 rounded-lg p-6 transition-colors">
        <div class="text-4xl mb-4">📧</div>
        <h3 class="text-xl font-bold text-white mb-2">Contact Us</h3>
        <p class="text-gray-300">Get in touch with our team</p>
      </a>

      <!-- Forms Card -->
      <a href="/forms" class="bg-gray-800 hover:bg-gray-700 rounded-lg p-6 transition-colors">
        <div class="text-4xl mb-4">📝</div>
        <h3 class="text-xl font-bold text-white mb-2">Forms</h3>
        <p class="text-gray-300">Submit prayer requests and visitor cards</p>
      </a>
    </div>
  </div>
</section>

<!-- Welcome Section -->
<section class="py-16 md:py-24 bg-gray-950">
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">Welcome</h2>
    <p class="text-lg text-gray-300 mb-6">
      We are a Seventh-day Adventist church dedicated to sharing the love of Christ with our community and the world.
      Whether you're visiting for the first time or you've been with us for years, we invite you to experience genuine
      fellowship, inspiring worship, and biblical teaching.
    </p>
    <p class="text-lg text-gray-300">
      Join us for Sabbath services at 10:30 AM and discover what it means to be part of God's family.
    </p>
  </div>
</section>
