<script>
  import { church } from '$lib/data/church.js'
  import { t } from '$lib/i18n.svelte.js'
</script>

<svelte:head>
  <title>Events - {church.name}</title>
</svelte:head>

<!-- Hero -->
<section class="relative w-full h-80 bg-gradient-to-r from-gray-950 to-gray-900 flex items-center justify-center">
  <div class="absolute inset-0 bg-black/40"></div>
  <div class="relative z-10 text-center">
    <h1 class="text-4xl md:text-5xl font-bold text-white !text-white">{t('events.title')}</h1>
  </div>
</section>

<div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
  <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t('events.upcomingTitle')}</h2>
  <p class="text-gray-700 dark:text-gray-300 mb-8">
    {t('events.comingSoon')}
  </p>

  <!-- Placeholder for Google Calendar -->
  <div class="bg-gray-200 dark:bg-gray-800 rounded-lg p-8 text-center">
    <p class="text-gray-700 dark:text-gray-300">
      Google Calendar embed will appear here. Contact us for the calendar link or email
      <a href={`mailto:${church.email}`} class="hover:text-purple-700 dark:hover:text-purple-300 transition-colors">
        {church.email}
      </a>
    </p>
  </div>

  <!-- Regular Services -->
  <section class="mt-16">
    <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t('events.regularTitle')}</h2>
    <div class="bg-gray-200 dark:bg-gray-800 rounded-lg p-6">
      <p class="text-gray-700 dark:text-gray-300 mb-2">
        <span class="font-bold text-gray-900 dark:text-white">{t('events.sabbathTitle')}</span>
      </p>
      <p class="text-gray-600 dark:text-gray-400">{t('events.sabbathTime')}</p>
      <p class="text-gray-600 dark:text-gray-400">{church.address}</p>
    </div>
  </section>
</div>
