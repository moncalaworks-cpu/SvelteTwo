<script>
  import { church } from '$lib/data/church.js'
  let activeTab = $state('visitor')
  let visitorForm = $state({ name: '', email: '', phone: '', address: '', visitDate: '', how: '' })
  let prayerForm = $state({ name: '', request: '', isPrivate: true })
  let submitted = $state({ visitor: false, prayer: false })

  function handleVisitorSubmit() {
    submitted.visitor = true
    setTimeout(() => {
      submitted.visitor = false
      visitorForm = { name: '', email: '', phone: '', address: '', visitDate: '', how: '' }
    }, 3000)
  }

  function handlePrayerSubmit() {
    submitted.prayer = true
    setTimeout(() => {
      submitted.prayer = false
      prayerForm = { name: '', request: '', isPrivate: true }
    }, 3000)
  }
</script>

<svelte:head>
  <title>Forms - {church.name}</title>
</svelte:head>

<!-- Hero -->
<section class="relative w-full h-80 bg-gradient-to-r from-gray-950 to-gray-900 flex items-center justify-center">
  <div class="absolute inset-0 bg-black/40"></div>
  <div class="relative z-10 text-center">
    <h1 class="text-4xl md:text-5xl font-bold text-white">Forms</h1>
  </div>
</section>

<div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
  <!-- Tab Navigation -->
  <div class="flex gap-4 mb-8 border-b border-gray-800">
    <button
      onclick={() => (activeTab = 'visitor')}
      class={`pb-4 font-semibold transition-colors ${
        activeTab === 'visitor'
          ? 'text-purple-300 border-b-2 border-purple-300'
          : 'text-gray-400 hover:text-white'
      }`}
    >
      Visitor Card
    </button>
    <button
      onclick={() => (activeTab = 'prayer')}
      class={`pb-4 font-semibold transition-colors ${
        activeTab === 'prayer'
          ? 'text-purple-300 border-b-2 border-purple-300'
          : 'text-gray-400 hover:text-white'
      }`}
    >
      Prayer Request
    </button>
  </div>

  <!-- Visitor Card Form -->
  {#if activeTab === 'visitor'}
    <div class="bg-gray-800 rounded-lg p-8">
      <h2 class="text-2xl font-bold text-white mb-6">Visitor Card</h2>
      <p class="text-gray-300 mb-6">Welcome! Please fill out your information so we can get to know you better.</p>

      {#if submitted.visitor}
        <div class="bg-green-900 border border-green-600 rounded-lg p-4 mb-6">
          <p class="text-green-200">Thank you for visiting! We're blessed to have you with us.</p>
        </div>
      {:else}
        <form onsubmit={handleVisitorSubmit} class="space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label for="v_name" class="block text-white font-semibold mb-2">Full Name *</label>
              <input
                type="text"
                id="v_name"
                bind:value={visitorForm.name}
                required
                class="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label for="v_email" class="block text-white font-semibold mb-2">Email *</label>
              <input
                type="email"
                id="v_email"
                bind:value={visitorForm.email}
                required
                class="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                placeholder="you@email.com"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label for="v_phone" class="block text-white font-semibold mb-2">Phone</label>
              <input
                type="tel"
                id="v_phone"
                bind:value={visitorForm.phone}
                class="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                placeholder="(123) 456-7890"
              />
            </div>
            <div>
              <label for="v_date" class="block text-white font-semibold mb-2">Visit Date</label>
              <input
                type="date"
                id="v_date"
                bind:value={visitorForm.visitDate}
                class="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
              />
            </div>
          </div>

          <div>
            <label for="v_address" class="block text-white font-semibold mb-2">Address</label>
            <input
              type="text"
              id="v_address"
              bind:value={visitorForm.address}
              class="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
              placeholder="Street Address"
            />
          </div>

          <div>
            <label for="v_how" class="block text-white font-semibold mb-2">How did you hear about us?</label>
            <input
              type="text"
              id="v_how"
              bind:value={visitorForm.how}
              class="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
              placeholder="Friend, Family, Google, etc."
            />
          </div>

          <button
            type="submit"
            class="w-full bg-purple-400 hover:bg-purple-500 text-black font-bold py-2 px-4 rounded-lg transition-colors"
          >
            Submit
          </button>
        </form>
      {/if}
    </div>
  {/if}

  <!-- Prayer Request Form -->
  {#if activeTab === 'prayer'}
    <div class="bg-gray-800 rounded-lg p-8">
      <h2 class="text-2xl font-bold text-white mb-6">Prayer Request</h2>
      <p class="text-gray-300 mb-6">
        Please share your prayer request. Our prayer team will lift you up in prayer. You can choose to remain
        anonymous or share your contact information.
      </p>

      {#if submitted.prayer}
        <div class="bg-green-900 border border-green-600 rounded-lg p-4 mb-6">
          <p class="text-green-200">Thank you for your prayer request. We will pray for you.</p>
        </div>
      {:else}
        <form onsubmit={handlePrayerSubmit} class="space-y-4">
          <div>
            <label for="p_name" class="block text-white font-semibold mb-2">Name (Optional)</label>
            <input
              type="text"
              id="p_name"
              bind:value={prayerForm.name}
              class="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label for="p_request" class="block text-white font-semibold mb-2">Prayer Request *</label>
            <textarea
              id="p_request"
              bind:value={prayerForm.request}
              required
              rows="6"
              class="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
              placeholder="Share what you'd like us to pray about..."
            ></textarea>
          </div>

          <div class="flex items-center gap-3">
            <input
              type="checkbox"
              id="p_private"
              bind:checked={prayerForm.isPrivate}
              class="w-4 h-4 rounded accent-purple-400"
            />
            <label for="p_private" class="text-gray-300">Keep this prayer request private</label>
          </div>

          <button
            type="submit"
            class="w-full bg-purple-400 hover:bg-purple-500 text-black font-bold py-2 px-4 rounded-lg transition-colors"
          >
            Submit Prayer Request
          </button>
        </form>
      {/if}
    </div>
  {/if}
</div>
