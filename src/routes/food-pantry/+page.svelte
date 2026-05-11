<script>
  import { church } from '$lib/data/church.js'
  import { t } from '$lib/i18n.svelte.js'
</script>

<svelte:head>
  <title>Food Pantry - {church.name}</title>
</svelte:head>

<!-- Hero -->
<section class="relative w-full h-80 bg-gradient-to-r from-purple-900 to-purple-800 dark:from-gray-950 dark:to-gray-900 flex items-center justify-center">
  <div class="absolute inset-0 bg-black/40"></div>
  <div class="relative z-10 text-center">
    <h1 class="text-4xl md:text-5xl font-bold text-white">{t('foodPantry.title')}</h1>
  </div>
</section>

<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
  <div class="bg-yellow-50 border-l-4 border-purple-400 p-6 mb-12 rounded">
    <p class="text-yellow-800 font-semibold">
      {t('foodPantry.banner')}
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <!-- Eligibility -->
    <section>
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t('foodPantry.eligibilityTitle')}</h2>
      <div class="bg-gray-200 dark:bg-gray-800 rounded-lg p-6">
        <p class="text-gray-700 dark:text-gray-300 mb-4">
          {t('foodPantry.eligibilityP1')}
        </p>
        <p class="text-gray-700 dark:text-gray-300">
          {t('foodPantry.eligibilityP2')}
        </p>
      </div>
    </section>

    <!-- Hours & Location -->
    <section>
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t('foodPantry.hoursTitle')}</h2>
      <div class="bg-gray-200 dark:bg-gray-800 rounded-lg p-6">
        <p class="text-gray-700 dark:text-gray-300 mb-2">
          <span class="font-bold text-gray-900 dark:text-white">{t('foodPantry.locationLabel')}</span>
        </p>
        <p class="text-gray-700 dark:text-gray-300 mb-4">{church.address}</p>
        <p class="text-gray-700 dark:text-gray-300 mb-2">
          <span class="font-bold text-gray-900 dark:text-white">{t('foodPantry.contactLabel')}</span>
        </p>
        <p class="text-gray-700 dark:text-gray-300 mb-2">
          <a href={`tel:${church.phone}`} class="hover:text-purple-700 dark:hover:text-purple-300 transition-colors">
            {church.phone}
          </a>
        </p>
        <p class="text-gray-700 dark:text-gray-300">
          <a href={`mailto:${church.email}`} class="hover:text-purple-700 dark:hover:text-purple-300 transition-colors">
            {church.email}
          </a>
        </p>
      </div>
    </section>
  </div>

  <!-- What We Offer -->
  <section class="mt-12">
    <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t('foodPantry.providesTitle')}</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-gray-200 dark:bg-gray-800 rounded-lg p-6">
        <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">{t('foodPantry.groceriesTitle')}</h3>
        <p class="text-gray-700 dark:text-gray-300">
          {t('foodPantry.groceriesDesc')}
        </p>
      </div>
      <div class="bg-gray-200 dark:bg-gray-800 rounded-lg p-6">
        <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">{t('foodPantry.supportTitle')}</h3>
        <p class="text-gray-700 dark:text-gray-300">
          {t('foodPantry.supportDesc')}
        </p>
      </div>
    </div>
  </section>

  <!-- Volunteer -->
  <section class="mt-12 bg-gray-200 dark:bg-gray-800 rounded-lg p-8 text-center">
    <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t('foodPantry.volunteerTitle')}</h2>
    <p class="text-gray-700 dark:text-gray-300 mb-6">
      {t('foodPantry.volunteerText')}
    </p>
    <a
      href="/contact"
      class="inline-block bg-purple-400 hover:bg-purple-500 text-black font-bold py-2 px-6 rounded-lg transition-colors"
    >
      {t('foodPantry.getInTouch')}
    </a>
  </section>
</div>
