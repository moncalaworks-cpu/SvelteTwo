<script>
  import { church } from '$lib/data/church.js'
  import { t } from '$lib/i18n.svelte.js'
  let formData = $state({ name: '', email: '', message: '' })
  let submitted = $state(false)

  function handleSubmit() {
    submitted = true
  }
</script>

<svelte:head>
  <title>Contact Us - {church.name}</title>
</svelte:head>

<!-- Hero -->
<section class="relative w-full h-80 bg-gradient-to-r from-gray-950 to-gray-900 flex items-center justify-center">
  <div class="absolute inset-0 bg-black/40"></div>
  <div class="relative z-10 text-center">
    <h1 class="text-4xl md:text-5xl font-bold text-white">{t('contact.title')}</h1>
  </div>
</section>

<div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
    <!-- Contact Info -->
    <div>
      <h2 class="text-2xl font-bold text-white mb-6">{t('contact.subtitle')}</h2>

      <div class="space-y-6">
        <!-- Address -->
        <div class="bg-gray-800 rounded-lg p-6">
          <h3 class="text-lg font-bold text-white mb-2">{t('contact.addressLabel')}</h3>
          <p class="text-gray-300">{church.address}</p>
        </div>

        <!-- Phone -->
        <div class="bg-gray-800 rounded-lg p-6">
          <h3 class="text-lg font-bold text-white mb-2">{t('contact.phoneLabel')}</h3>
          <a href={`tel:${church.phone}`} class="text-purple-300 hover:text-purple-200 transition-colors">
            {church.phone}
          </a>
        </div>

        <!-- Email -->
        <div class="bg-gray-800 rounded-lg p-6">
          <h3 class="text-lg font-bold text-white mb-2">{t('contact.emailLabel')}</h3>
          <a href={`mailto:${church.email}`} class="text-purple-300 hover:text-purple-200 transition-colors">
            {church.email}
          </a>
        </div>

        <!-- Map -->
        <div class="bg-gray-800 rounded-lg p-6 h-80">
          <iframe
            class="w-full h-full rounded"
            title="Church Location"
            src="https://www.google.com/maps/embed/v1/place?q={church.mapsQuery}&key=AIzaSyBFw0Qbyq9zTFTd2vVLQfY_N7_33BNVZ1A"
          ></iframe>
        </div>
      </div>
    </div>

    <!-- Contact Form -->
    <div>
      <h2 class="text-2xl font-bold text-white mb-6">{t('contact.formTitle')}</h2>

      {#if submitted}
        <div class="bg-green-900 border border-green-600 rounded-lg p-6 mb-6">
          <p class="text-green-200">{t('contact.success')}</p>
        </div>
      {:else}
        <form onsubmit={handleSubmit} class="space-y-4">
          <div>
            <label for="name" class="block text-white font-semibold mb-2">{t('contact.nameLabel')}</label>
            <input
              type="text"
              id="name"
              bind:value={formData.name}
              required
              class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
              placeholder={t('contact.namePlaceholder')}
            />
          </div>

          <div>
            <label for="email" class="block text-white font-semibold mb-2">{t('contact.emailFieldLabel')}</label>
            <input
              type="email"
              id="email"
              bind:value={formData.email}
              required
              class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
              placeholder={t('contact.emailPlaceholder')}
            />
          </div>

          <div>
            <label for="message" class="block text-white font-semibold mb-2">{t('contact.messageLabel')}</label>
            <textarea
              id="message"
              bind:value={formData.message}
              required
              rows="6"
              class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
              placeholder={t('contact.messagePlaceholder')}
            ></textarea>
          </div>

          <button
            type="submit"
            class="w-full bg-purple-400 hover:bg-purple-500 text-black font-bold py-2 px-4 rounded-lg transition-colors"
          >
            {t('contact.submit')}
          </button>
        </form>
      {/if}
    </div>
  </div>
</div>
