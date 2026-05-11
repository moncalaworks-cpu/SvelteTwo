<script>
  import { church } from '$lib/data/church.js'
  import { t } from '$lib/i18n.svelte.js'
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
<section class="relative w-full h-80 bg-gradient-to-r from-purple-900 to-purple-800 dark:from-gray-950 dark:to-gray-900 flex items-center justify-center">
  <div class="absolute inset-0 bg-black/40"></div>
  <div class="relative z-10 text-center">
    <h1 class="text-4xl md:text-5xl font-bold text-white !text-white">{t('forms.title')}</h1>
  </div>
</section>

<div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
  <!-- Tab Navigation -->
  <div class="flex gap-4 mb-8 border-b border-gray-300 dark:border-gray-800">
    <button
      onclick={() => (activeTab = 'visitor')}
      class={`pb-4 font-semibold transition-colors ${
        activeTab === 'visitor'
          ? 'text-purple-700 dark:text-purple-300 border-b-2 border-purple-700 dark:border-purple-300'
          : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
      }`}
    >
      {t('forms.visitorTab')}
    </button>
    <button
      onclick={() => (activeTab = 'prayer')}
      class={`pb-4 font-semibold transition-colors ${
        activeTab === 'prayer'
          ? 'text-purple-700 dark:text-purple-300 border-b-2 border-purple-700 dark:border-purple-300'
          : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
      }`}
    >
      {t('forms.prayerTab')}
    </button>
  </div>

  <!-- Visitor Card Form -->
  {#if activeTab === 'visitor'}
    <div class="bg-gray-200 dark:bg-gray-800 rounded-lg p-8">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t('forms.visitorTitle')}</h2>
      <p class="text-gray-700 dark:text-gray-300 mb-6">{t('forms.visitorIntro')}</p>

      {#if submitted.visitor}
        <div class="bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-600 rounded-lg p-4 mb-6">
          <p class="text-green-800 dark:text-green-200">{t('forms.visitorSuccess')}</p>
        </div>
      {:else}
        <form onsubmit={handleVisitorSubmit} class="space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label for="v_name" class="block text-gray-900 dark:text-white font-semibold mb-2">{t('forms.nameLabel')} *</label>
              <input
                type="text"
                id="v_name"
                bind:value={visitorForm.name}
                required
                class="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-purple-400"
                placeholder={t('forms.namePlaceholder')}
              />
            </div>
            <div>
              <label for="v_email" class="block text-gray-900 dark:text-white font-semibold mb-2">{t('forms.emailLabel')} *</label>
              <input
                type="email"
                id="v_email"
                bind:value={visitorForm.email}
                required
                class="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-purple-400"
                placeholder={t('forms.emailPlaceholder')}
              />
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label for="v_phone" class="block text-gray-900 dark:text-white font-semibold mb-2">{t('forms.phoneLabel')}</label>
              <input
                type="tel"
                id="v_phone"
                bind:value={visitorForm.phone}
                class="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-purple-400"
                placeholder={t('forms.phonePlaceholder')}
              />
            </div>
            <div>
              <label for="v_date" class="block text-gray-900 dark:text-white font-semibold mb-2">{t('forms.visitDateLabel')}</label>
              <input
                type="date"
                id="v_date"
                bind:value={visitorForm.visitDate}
                class="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-purple-400"
              />
            </div>
          </div>

          <div>
            <label for="v_address" class="block text-gray-900 dark:text-white font-semibold mb-2">{t('forms.addressLabel')}</label>
            <input
              type="text"
              id="v_address"
              bind:value={visitorForm.address}
              class="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-purple-400"
              placeholder={t('forms.addressPlaceholder')}
            />
          </div>

          <div>
            <label for="v_how" class="block text-gray-900 dark:text-white font-semibold mb-2">{t('forms.hearAboutLabel')}</label>
            <input
              type="text"
              id="v_how"
              bind:value={visitorForm.how}
              class="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-purple-400"
              placeholder={t('forms.hearAboutPlaceholder')}
            />
          </div>

          <button
            type="submit"
            class="w-full bg-purple-400 hover:bg-purple-500 text-black font-bold py-2 px-4 rounded-lg transition-colors"
          >
            {t('forms.submit')}
          </button>
        </form>
      {/if}
    </div>
  {/if}

  <!-- Prayer Request Form -->
  {#if activeTab === 'prayer'}
    <div class="bg-gray-200 dark:bg-gray-800 rounded-lg p-8">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t('forms.prayerTitle')}</h2>
      <p class="text-gray-700 dark:text-gray-300 mb-6">
        {t('forms.prayerIntro')}
      </p>

      {#if submitted.prayer}
        <div class="bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-600 rounded-lg p-4 mb-6">
          <p class="text-green-800 dark:text-green-200">{t('forms.prayerSuccess')}</p>
        </div>
      {:else}
        <form onsubmit={handlePrayerSubmit} class="space-y-4">
          <div>
            <label for="p_name" class="block text-gray-900 dark:text-white font-semibold mb-2">{t('forms.optionalName')}</label>
            <input
              type="text"
              id="p_name"
              bind:value={prayerForm.name}
              class="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-purple-400"
              placeholder={t('forms.namePlaceholder')}
            />
          </div>

          <div>
            <label for="p_request" class="block text-gray-900 dark:text-white font-semibold mb-2">{t('forms.prayerRequestLabel')} *</label>
            <textarea
              id="p_request"
              bind:value={prayerForm.request}
              required
              rows="6"
              class="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-purple-400"
              placeholder={t('forms.prayerRequestPlaceholder')}
            ></textarea>
          </div>

          <div class="flex items-center gap-3">
            <input
              type="checkbox"
              id="p_private"
              bind:checked={prayerForm.isPrivate}
              class="w-4 h-4 rounded accent-purple-400"
            />
            <label for="p_private" class="text-gray-700 dark:text-gray-300">{t('forms.privateLabel')}</label>
          </div>

          <button
            type="submit"
            class="w-full bg-purple-400 hover:bg-purple-500 text-black font-bold py-2 px-4 rounded-lg transition-colors"
          >
            {t('forms.submitPrayer')}
          </button>
        </form>
      {/if}
    </div>
  {/if}
</div>
