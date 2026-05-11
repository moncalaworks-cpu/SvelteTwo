<script>
  import { church } from '$lib/data/church.js'
  import { backgroundVideos } from '$lib/data/videos.js'
  import VideoCarousel from '$lib/components/VideoCarousel.svelte'
  import { t } from '$lib/i18n.svelte.js'
</script>

<svelte:head>
  <title>Home - {church.name}</title>
</svelte:head>

<!-- Hero Section with Video Background -->
<VideoCarousel videos={backgroundVideos} rotationInterval={5000}>
  {#snippet children()}
    <div class="text-center max-w-3xl px-4 sm:px-6 py-8 sm:py-12 bg-black/50 rounded-lg">
      <h1 class="text-5xl md:text-6xl font-bold text-white mb-4">{church.name}</h1>
      <p class="text-xl md:text-2xl text-gray-300 mb-8">{t('home.heroSubtitle')}</p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
        <a href={church.youtube} target="_blank" rel="noopener noreferrer" class="bg-purple-400 hover:bg-purple-500 text-black font-bold py-3 px-8 rounded-lg transition-colors">
          {t('home.watchLive')}
        </a>
        <a href="/events" class="bg-transparent border-2 border-purple-400 hover:bg-purple-400 hover:text-black text-purple-400 font-bold py-3 px-8 rounded-lg transition-colors">
          {t('home.events')}
        </a>
        <a href="/bulletin" class="bg-transparent border-2 border-purple-400 hover:bg-purple-400 hover:text-black text-purple-400 font-bold py-3 px-8 rounded-lg transition-colors">
          {t('home.bulletin')}
        </a>
      </div>
    </div>
  {/snippet}
</VideoCarousel>

<!-- Quick Links Section -->
<section class="py-16 md:py-24 bg-gray-900">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl md:text-4xl font-bold text-white text-center mb-12">{t('home.exploreTitle')}</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Live Stream Card -->
      <a href={church.youtube} target="_blank" rel="noopener noreferrer" data-sveltekit-preload-data="off" class="bg-gray-800 hover:bg-gray-700 rounded-lg p-6 transition-colors">
        <div class="text-4xl mb-4">🎥</div>
        <h3 class="text-xl font-bold text-white mb-2">{t('home.cardLiveStream')}</h3>
        <p class="text-gray-300">{t('home.cardLiveStreamDesc')}</p>
      </a>

      <!-- Giving Card -->
      <a href={church.giving} target="_blank" rel="noopener noreferrer nofollow" data-sveltekit-preload-data="off" class="bg-gray-800 hover:bg-gray-700 rounded-lg p-6 transition-colors">
        <div class="text-4xl mb-4">💝</div>
        <h3 class="text-xl font-bold text-white mb-2">{t('home.cardGiving')}</h3>
        <p class="text-gray-300">{t('home.cardGivingDesc')}</p>
      </a>

      <!-- Events Card -->
      <a href="/events" class="bg-gray-800 hover:bg-gray-700 rounded-lg p-6 transition-colors">
        <div class="text-4xl mb-4">📅</div>
        <h3 class="text-xl font-bold text-white mb-2">{t('home.cardEvents')}</h3>
        <p class="text-gray-300">{t('home.cardEventsDesc')}</p>
      </a>

      <!-- Food Pantry Card -->
      <a href="/food-pantry" class="bg-gray-800 hover:bg-gray-700 rounded-lg p-6 transition-colors">
        <div class="text-4xl mb-4">🍽️</div>
        <h3 class="text-xl font-bold text-white mb-2">{t('home.cardFoodPantry')}</h3>
        <p class="text-gray-300">{t('home.cardFoodPantryDesc')}</p>
      </a>

      <!-- Contact Card -->
      <a href="/contact" class="bg-gray-800 hover:bg-gray-700 rounded-lg p-6 transition-colors">
        <div class="text-4xl mb-4">📧</div>
        <h3 class="text-xl font-bold text-white mb-2">{t('home.cardContact')}</h3>
        <p class="text-gray-300">{t('home.cardContactDesc')}</p>
      </a>

      <!-- Forms Card -->
      <a href="/forms" class="bg-gray-800 hover:bg-gray-700 rounded-lg p-6 transition-colors">
        <div class="text-4xl mb-4">📝</div>
        <h3 class="text-xl font-bold text-white mb-2">{t('home.cardForms')}</h3>
        <p class="text-gray-300">{t('home.cardFormsDesc')}</p>
      </a>
    </div>
  </div>
</section>

<!-- Welcome Section -->
<section class="py-16 md:py-24 bg-gray-950">
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">{t('home.welcomeTitle')}</h2>
    <p class="text-lg text-gray-300 mb-6">
      {t('home.welcomeP1')}
    </p>
    <p class="text-lg text-gray-300">
      {t('home.welcomeP2')}
    </p>
  </div>
</section>
