<script>
  import { church } from '$lib/data/church.js'
</script>

<svelte:head>
  <title>Online Giving - {church.name}</title>
</svelte:head>

<!-- Hero -->
<section class="relative w-full h-80 bg-gradient-to-r from-gray-950 to-gray-900 flex items-center justify-center">
  <div class="absolute inset-0 bg-black/40"></div>
  <div class="relative z-10 text-center">
    <h1 class="text-4xl md:text-5xl font-bold text-white">Online Giving</h1>
  </div>
</section>

<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
  <!-- Message -->
  <section class="text-center mb-12">
    <h2 class="text-2xl font-bold text-white mb-4">Support Our Ministry</h2>
    <p class="text-lg text-gray-300 mb-6">
      "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God
      loves a cheerful giver." - 2 Corinthians 9:7
    </p>
    <p class="text-gray-400 mb-8">
      Your generous gifts enable us to continue our mission of spreading God's love, supporting community outreach, and
      maintaining our facilities. Thank you for your faithful stewardship.
    </p>
  </section>

  <!-- Giving Button -->
  <div class="text-center mb-12">
    <a
      href={church.giving}
      target="_blank"
      rel="noopener noreferrer"
      class="inline-block bg-purple-400 hover:bg-purple-500 text-black font-bold py-4 px-12 rounded-lg text-lg transition-colors"
    >
      Give Online Now →
    </a>
  </div>

  <!-- Other Ways to Give -->
  <section>
    <h2 class="text-2xl font-bold text-white mb-6">Other Ways to Give</h2>
    <div class="bg-gray-800 rounded-lg p-8">
      <h3 class="text-xl font-bold text-white mb-4">In Person</h3>
      <p class="text-gray-300 mb-6">
        Offerings are collected during our Sabbath morning services. You can also speak with any of our ushers if you
        have questions.
      </p>

      <h3 class="text-xl font-bold text-white mb-4">By Mail</h3>
      <p class="text-gray-300 mb-2">{church.address}</p>
      <p class="text-gray-300 mb-6">Please make checks payable to "{church.name}"</p>

      <h3 class="text-xl font-bold text-white mb-4">Questions?</h3>
      <p class="text-gray-300">
        Contact us at
        <a href={`tel:${church.phone}`} class="hover:text-purple-300 transition-colors">
          {church.phone}
        </a>
      </p>
    </div>
  </section>
</div>
