<script>
  import { church } from '$lib/data/church.js'
  import { t } from '$lib/i18n.svelte.js'
  let email = $state('')
  let password = $state('')
</script>

<svelte:head>
  <title>Admin Login - {church.name}</title>
</svelte:head>

<!-- Hero -->
<section class="relative w-full h-80 bg-gradient-to-r from-purple-900 to-purple-800 dark:from-gray-950 dark:to-gray-900 flex items-center justify-center">
  <div class="absolute inset-0 bg-black/40"></div>
  <div class="relative z-10 text-center">
    <h1 class="text-4xl md:text-5xl font-bold text-white !text-white">{t('login.title')}</h1>
  </div>
</section>

<div class="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
  <div class="bg-gray-200 dark:bg-gray-800 rounded-lg p-8">
    <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">{t('login.signIn')}</h2>

    <div class="bg-blue-100 dark:bg-blue-900 border border-blue-400 dark:border-blue-700 rounded-lg p-4 mb-6">
      <p class="text-blue-800 dark:text-blue-200 text-sm">
        {t('login.comingSoon')}
      </p>
    </div>

    <form class="space-y-4" onsubmit={(e) => e.preventDefault()}>
      <div>
        <label for="email" class="block text-gray-900 dark:text-white font-semibold mb-2">{t('login.emailLabel')}</label>
        <input
          type="email"
          id="email"
          bind:value={email}
          disabled
          class="w-full bg-gray-300 dark:bg-gray-700 border border-gray-400 dark:border-gray-600 rounded-lg px-4 py-2 text-gray-600 dark:text-gray-400 cursor-not-allowed"
          placeholder={t('login.emailPlaceholder')}
        />
      </div>

      <div>
        <label for="password" class="block text-gray-900 dark:text-white font-semibold mb-2">{t('login.passwordLabel')}</label>
        <input
          type="password"
          id="password"
          bind:value={password}
          disabled
          class="w-full bg-gray-300 dark:bg-gray-700 border border-gray-400 dark:border-gray-600 rounded-lg px-4 py-2 text-gray-600 dark:text-gray-400 cursor-not-allowed"
          placeholder="••••••••"
        />
      </div>

      <button
        type="submit"
        disabled
        class="w-full bg-gray-400 dark:bg-gray-600 text-gray-600 dark:text-gray-400 font-bold py-2 px-4 rounded-lg cursor-not-allowed"
      >
        {t('login.signInButton')}
      </button>
    </form>

    <div class="mt-8 text-center">
      <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">{t('login.questionsText')}</p>
      <a
        href={`mailto:${church.email}`}
        class="inline-block bg-transparent border-2 border-purple-400 hover:bg-purple-400 hover:text-black text-purple-400 font-bold py-2 px-4 rounded-lg transition-colors text-sm"
      >
        {t('login.contactUs')}
      </a>
    </div>
  </div>
</div>
