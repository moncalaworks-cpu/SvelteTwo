<script>
  import { church } from '$lib/data/church.js'
  let email = $state('')
  let password = $state('')
</script>

<svelte:head>
  <title>Admin Login - {church.name}</title>
</svelte:head>

<!-- Hero -->
<section class="relative w-full h-80 bg-gradient-to-r from-gray-950 to-gray-900 flex items-center justify-center">
  <div class="absolute inset-0 bg-black/40"></div>
  <div class="relative z-10 text-center">
    <h1 class="text-4xl md:text-5xl font-bold text-white">Admin Portal</h1>
  </div>
</section>

<div class="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
  <div class="bg-gray-800 rounded-lg p-8">
    <h2 class="text-2xl font-bold text-white mb-6 text-center">Sign In</h2>

    <div class="bg-blue-900 border border-blue-700 rounded-lg p-4 mb-6">
      <p class="text-blue-200 text-sm">
        🔒 Admin login is coming soon. Authentication will be enabled in the next update.
      </p>
    </div>

    <form class="space-y-4" onsubmit={(e) => e.preventDefault()}>
      <div>
        <label for="email" class="block text-white font-semibold mb-2">Email Address</label>
        <input
          type="email"
          id="email"
          bind:value={email}
          disabled
          class="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-gray-400 cursor-not-allowed"
          placeholder="admin@church.org"
        />
      </div>

      <div>
        <label for="password" class="block text-white font-semibold mb-2">Password</label>
        <input
          type="password"
          id="password"
          bind:value={password}
          disabled
          class="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-gray-400 cursor-not-allowed"
          placeholder="••••••••"
        />
      </div>

      <button
        type="submit"
        disabled
        class="w-full bg-gray-600 text-gray-400 font-bold py-2 px-4 rounded-lg cursor-not-allowed"
      >
        Sign In
      </button>
    </form>

    <div class="mt-8 text-center">
      <p class="text-gray-400 text-sm mb-4">Questions about admin access?</p>
      <a
        href={`mailto:${church.email}`}
        class="inline-block bg-transparent border-2 border-purple-400 hover:bg-purple-400 hover:text-black text-purple-400 font-bold py-2 px-4 rounded-lg transition-colors text-sm"
      >
        Contact Us
      </a>
    </div>
  </div>
</div>
