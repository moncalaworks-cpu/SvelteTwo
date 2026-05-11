<script>
  import { church } from '$lib/data/church.js'
  import { t } from '$lib/i18n.svelte.js'
  import pastorPhoto from '../../assets/pastor-ponterio.png'
  import elderPhoto from '../../assets/elder-nazaire.png'
  import aboutBg from '../../assets/about-bg.jpg'
</script>

<svelte:head>
  <title>About Us - {church.name}</title>
</svelte:head>

<!-- Hero -->
<section
  class="relative w-full h-80 flex items-center justify-center bg-cover bg-center"
  style="background-image: linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.3)), url({aboutBg})"
>
  <div class="relative z-10 text-center">
    <h1 class="text-4xl md:text-5xl font-bold text-white">{t('about.title')}</h1>
  </div>
</section>

<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
  <!-- Mission & Vision -->
  <section class="mb-16">
    <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">{t('about.missionTitle')}</h2>
    <p class="text-lg text-gray-700 dark:text-gray-300 mb-4">
      {t('about.missionText')}
    </p>
  </section>

  <!-- Pastoral Staff -->
  <section class="mb-16">
    <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">{t('about.leadershipTitle')}</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      {#each church.pastors as pastor}
        <div class="flex flex-col items-center">
          <img src={pastorPhoto} alt={pastor.name} class="w-64 h-64 rounded-full object-cover mb-6" />
          <div class="bg-gray-200 dark:bg-gray-800 rounded-lg p-6 w-full">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">{pastor.name}</h3>
            <p class="text-gray-700 dark:text-gray-300 mb-2">
              <a href={`tel:${pastor.phone}`} class="hover:text-purple-700 dark:hover:text-purple-300 transition-colors">
                {pastor.phone}
              </a>
            </p>
            {#if pastor.email}
              <p class="text-gray-700 dark:text-gray-300">
                <a href={`mailto:${pastor.email}`} class="hover:text-purple-700 dark:hover:text-purple-300 transition-colors">
                  {pastor.email}
                </a>
              </p>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </section>

  <!-- Church Elders -->
  {#if church.elders && church.elders.length > 0}
    <section class="mb-16">
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Church Elders</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        {#each church.elders as elder}
          <div class="flex flex-col items-center">
            <img src={elderPhoto} alt={elder.name} class="w-64 h-64 rounded-full object-cover mb-6" />
            <div class="bg-gray-200 dark:bg-gray-800 rounded-lg p-6 w-full">
              <p class="text-purple-700 dark:text-purple-300 text-sm font-semibold mb-1">{elder.title}</p>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">{elder.name}</h3>
              {#if elder.phone}
                <p class="text-gray-700 dark:text-gray-300 mb-2">
                  <a href={`tel:${elder.phone}`} class="hover:text-purple-700 dark:hover:text-purple-300 transition-colors">
                    {elder.phone}
                  </a>
                </p>
              {/if}
              {#if elder.email}
                <p class="text-gray-700 dark:text-gray-300">
                  <a href={`mailto:${elder.email}`} class="hover:text-purple-700 dark:hover:text-purple-300 transition-colors">
                    {elder.email}
                  </a>
                </p>
              {/if}
            </div>
          </div>
        {/each}
      </div>
    </section>
  {/if}

  <!-- History -->
  <section>
    <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">{t('about.storyTitle')}</h2>
    <p class="text-lg text-gray-700 dark:text-gray-300 mb-4">
      {t('about.storyP1')}
    </p>
    <p class="text-lg text-gray-700 dark:text-gray-300">
      {t('about.storyP2')}
    </p>
  </section>
</div>
