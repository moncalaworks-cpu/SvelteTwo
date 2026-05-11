<script>
  import { church } from '$lib/data/church.js'
  import { t } from '$lib/i18n.svelte.js'
</script>

<svelte:head>
  <title>NJC Youth - {church.name}</title>
</svelte:head>

<!-- Hero -->
<section class="relative w-full h-80 bg-gradient-to-r from-gray-950 to-gray-900 flex items-center justify-center">
  <div class="absolute inset-0 bg-black/40"></div>
  <div class="relative z-10 text-center">
    <h1 class="text-4xl md:text-5xl font-bold text-white">{t('njcYouth.title')}</h1>
  </div>
</section>

<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
  <h2 class="text-2xl font-bold text-white mb-6">{t('njcYouth.ministryTitle')}</h2>
  <p class="text-lg text-gray-300 mb-8">
    {t('njcYouth.ministryDesc')}
  </p>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
    <!-- What is NJC Youth? -->
    <section>
      <h3 class="text-xl font-bold text-white mb-4">{t('njcYouth.aboutTitle')}</h3>
      <div class="bg-gray-800 rounded-lg p-6">
        <p class="text-gray-300">
          {t('njcYouth.aboutText')}
        </p>
      </div>
    </section>

    <!-- Get Involved -->
    <section>
      <h3 class="text-xl font-bold text-white mb-4">{t('njcYouth.getInvolvedTitle')}</h3>
      <div class="bg-gray-800 rounded-lg p-6">
        <p class="text-gray-300 mb-4">
          {t('njcYouth.getInvolvedText')}
        </p>
        <a
          href={church.njcYouthUrl}
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block bg-purple-400 hover:bg-purple-500 text-black font-bold py-2 px-4 rounded-lg transition-colors text-sm"
        >
          {t('njcYouth.visitButton')}
        </a>
      </div>
    </section>
  </div>

  <!-- Upcoming Events -->
  <section>
    <h2 class="text-2xl font-bold text-white mb-6">{t('njcYouth.eventsTitle')}</h2>
    <div class="bg-gray-800 rounded-lg p-8 text-center">
      <p class="text-gray-300 mb-4">{t('njcYouth.eventsText')}</p>
      <a
        href={church.njcYouthUrl}
        target="_blank"
        rel="noopener noreferrer"
        class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
      >
        {t('njcYouth.officialSite')}
      </a>
    </div>
  </section>

  <!-- Contact Info -->
  <section class="mt-12">
    <h2 class="text-2xl font-bold text-white mb-6">{t('njcYouth.questionsTitle')}</h2>
    <p class="text-gray-300 mb-6">
      {t('njcYouth.questionsText')}
    </p>
  </section>
</div>
