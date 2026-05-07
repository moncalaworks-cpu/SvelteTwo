<script>
  import { church } from '$lib/data/church.js'
</script>

<svelte:head>
  <title>Food Pantry - {church.name}</title>
</svelte:head>

<!-- Hero -->
<section class="relative w-full h-80 bg-gradient-to-r from-gray-950 to-gray-900 flex items-center justify-center">
  <div class="absolute inset-0 bg-black/40"></div>
  <div class="relative z-10 text-center">
    <h1 class="text-4xl md:text-5xl font-bold text-white">Food Pantry</h1>
  </div>
</section>

<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
  <div class="bg-yellow-50 border-l-4 border-purple-400 p-6 mb-12 rounded">
    <p class="text-yellow-800 font-semibold">
      🤝 Our food pantry is dedicated to serving members of our community in need. All services are provided with dignity
      and respect.
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <!-- Eligibility -->
    <section>
      <h2 class="text-2xl font-bold text-white mb-4">Eligibility</h2>
      <div class="bg-gray-800 rounded-lg p-6">
        <p class="text-gray-300 mb-4">
          Our food pantry serves individuals and families in our community who are experiencing food insecurity. No
          documentation is required to receive assistance.
        </p>
        <p class="text-gray-300">
          If you or someone you know could benefit from our services, please visit us or give us a call.
        </p>
      </div>
    </section>

    <!-- Hours & Location -->
    <section>
      <h2 class="text-2xl font-bold text-white mb-4">Hours & Location</h2>
      <div class="bg-gray-800 rounded-lg p-6">
        <p class="text-gray-300 mb-2">
          <span class="font-bold text-white">Location:</span>
        </p>
        <p class="text-gray-300 mb-4">{church.address}</p>
        <p class="text-gray-300 mb-2">
          <span class="font-bold text-white">Contact:</span>
        </p>
        <p class="text-gray-300 mb-2">
          <a href={`tel:${church.phone}`} class="hover:text-purple-300 transition-colors">
            {church.phone}
          </a>
        </p>
        <p class="text-gray-300">
          <a href={`mailto:${church.email}`} class="hover:text-purple-300 transition-colors">
            {church.email}
          </a>
        </p>
      </div>
    </section>
  </div>

  <!-- What We Offer -->
  <section class="mt-12">
    <h2 class="text-2xl font-bold text-white mb-6">What We Provide</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-gray-800 rounded-lg p-6">
        <h3 class="text-lg font-bold text-white mb-3">🥫 Groceries</h3>
        <p class="text-gray-300">
          We provide nutritious staple foods including fresh and canned produce, proteins, grains, and dairy products.
        </p>
      </div>
      <div class="bg-gray-800 rounded-lg p-6">
        <h3 class="text-lg font-bold text-white mb-3">👥 Community Support</h3>
        <p class="text-gray-300">
          Beyond food, we offer referrals to other community resources and support services when available.
        </p>
      </div>
    </div>
  </section>

  <!-- Volunteer -->
  <section class="mt-12 bg-gray-800 rounded-lg p-8 text-center">
    <h2 class="text-2xl font-bold text-white mb-4">Want to Help?</h2>
    <p class="text-gray-300 mb-6">
      We're always looking for volunteers to help with our food pantry. Visit us or contact the church office to get
      involved!
    </p>
    <a
      href="/contact"
      class="inline-block bg-purple-400 hover:bg-purple-500 text-black font-bold py-2 px-6 rounded-lg transition-colors"
    >
      Get In Touch
    </a>
  </section>
</div>
