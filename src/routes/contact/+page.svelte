<script>
  import { church } from '$lib/data/church.js'
  import { t } from '$lib/i18n.svelte.js'
  import contactBg from '../../assets/contact-bg.jpg'

  let intent = $state('message')
  let formData = $state({
    name: '',
    email: '',
    phone: '',
    message: '',
    prayerRequest: '',
    isPrivate: false,
    visitDate: '',
    address: '',
    hearAbout: '',
  })
  let submitted = $state(false)

  function handleSubmit() {
    submitted = true
    setTimeout(() => {
      submitted = false
      formData = {
        name: '',
        email: '',
        phone: '',
        message: '',
        prayerRequest: '',
        isPrivate: false,
        visitDate: '',
        address: '',
        hearAbout: '',
      }
    }, 3000)
  }

  let successKey = $derived(
    intent === 'prayer'
      ? 'contact.prayerSuccess'
      : intent === 'visitor'
        ? 'contact.visitorSuccess'
        : 'contact.success'
  )
</script>

<svelte:head>
  <title>Contact Us - {church.name}</title>
</svelte:head>

<!-- Hero -->
<section
  class="relative w-full h-80 flex items-center justify-center bg-cover bg-center"
  style="background-image: linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.3)), url({contactBg})"
>
  <div class="relative z-10 text-center">
    <h1 class="text-4xl md:text-5xl font-bold text-white">{t('contact.title')}</h1>
  </div>
</section>

<div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
    <!-- Contact Info -->
    <div>
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t('contact.subtitle')}</h2>

      <div class="space-y-6">
        <!-- Address -->
        <div class="bg-gray-200 dark:bg-gray-800 rounded-lg p-6">
          <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">{t('contact.addressLabel')}</h3>
          <p class="text-gray-700 dark:text-gray-300">{church.address}</p>
        </div>

        <!-- Phone -->
        <div class="bg-gray-200 dark:bg-gray-800 rounded-lg p-6">
          <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">{t('contact.phoneLabel')}</h3>
          <a href={`tel:${church.phone}`} class="text-purple-700 hover:text-purple-600 dark:text-purple-300 dark:hover:text-purple-200 transition-colors">
            {church.phone}
          </a>
        </div>

        <!-- Email -->
        <div class="bg-gray-200 dark:bg-gray-800 rounded-lg p-6">
          <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">{t('contact.emailLabel')}</h3>
          <a href={`mailto:${church.email}`} class="text-purple-700 hover:text-purple-600 dark:text-purple-300 dark:hover:text-purple-200 transition-colors">
            {church.email}
          </a>
        </div>

        <!-- Map -->
        <div class="bg-gray-200 dark:bg-gray-800 rounded-lg p-6 h-80">
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
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t('contact.formTitle')}</h2>

      {#if submitted}
        <div class="bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-600 rounded-lg p-6 mb-6">
          <p class="text-green-800 dark:text-green-200">{t(successKey)}</p>
        </div>
      {:else}
        <form onsubmit={handleSubmit} class="space-y-4">
          <!-- Name -->
          <div>
            <label for="name" class="block text-gray-900 dark:text-white font-semibold mb-2">{t('contact.nameLabel')}</label>
            <input
              type="text"
              id="name"
              bind:value={formData.name}
              required
              class="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-purple-400"
              placeholder={t('contact.namePlaceholder')}
            />
          </div>

          <!-- Email -->
          <div>
            <label for="email" class="block text-gray-900 dark:text-white font-semibold mb-2">{t('contact.emailFieldLabel')}</label>
            <input
              type="email"
              id="email"
              bind:value={formData.email}
              required
              class="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-purple-400"
              placeholder={t('contact.emailPlaceholder')}
            />
          </div>

          <!-- Phone -->
          <div>
            <label for="phone" class="block text-gray-900 dark:text-white font-semibold mb-2">{t('contact.formPhoneLabel')}</label>
            <input
              type="tel"
              id="phone"
              bind:value={formData.phone}
              class="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-purple-400"
              placeholder={t('contact.formPhonePlaceholder')}
            />
          </div>

          <!-- Intent Selector -->
          <fieldset>
            <legend class="block text-gray-900 dark:text-white font-semibold mb-3">{t('contact.intentLabel')}</legend>
            <div class="space-y-2">
              <label class="flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white cursor-pointer">
                <input
                  type="radio"
                  name="intent"
                  value="message"
                  bind:group={intent}
                  class="w-4 h-4 accent-purple-400 cursor-pointer"
                />
                <span class="ml-2">{t('contact.intentMessage')}</span>
              </label>
              <label class="flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white cursor-pointer">
                <input
                  type="radio"
                  name="intent"
                  value="prayer"
                  bind:group={intent}
                  class="w-4 h-4 accent-purple-400 cursor-pointer"
                />
                <span class="ml-2">{t('contact.intentPrayer')}</span>
              </label>
              <label class="flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white cursor-pointer">
                <input
                  type="radio"
                  name="intent"
                  value="visitor"
                  bind:group={intent}
                  class="w-4 h-4 accent-purple-400 cursor-pointer"
                />
                <span class="ml-2">{t('contact.intentVisitor')}</span>
              </label>
            </div>
          </fieldset>

          <!-- Conditional: Message -->
          {#if intent === 'message'}
            <div>
              <label for="message" class="block text-gray-900 dark:text-white font-semibold mb-2">{t('contact.messageLabel')}</label>
              <textarea
                id="message"
                bind:value={formData.message}
                required
                rows="6"
                class="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-purple-400"
                placeholder={t('contact.messagePlaceholder')}
              ></textarea>
            </div>
          {/if}

          <!-- Conditional: Prayer Request -->
          {#if intent === 'prayer'}
            <div>
              <label for="prayer" class="block text-gray-900 dark:text-white font-semibold mb-2">{t('contact.prayerRequestLabel')}</label>
              <textarea
                id="prayer"
                bind:value={formData.prayerRequest}
                required
                rows="6"
                class="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-purple-400"
                placeholder={t('contact.prayerPlaceholder')}
              ></textarea>
            </div>

            <label class="flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white cursor-pointer">
              <input
                type="checkbox"
                bind:checked={formData.isPrivate}
                class="w-4 h-4 accent-purple-400 cursor-pointer"
              />
              <span class="ml-2">{t('contact.privateLabel')}</span>
            </label>
          {/if}

          <!-- Conditional: Visitor Info -->
          {#if intent === 'visitor'}
            <div>
              <label for="visitDate" class="block text-gray-900 dark:text-white font-semibold mb-2">{t('contact.visitDateLabel')}</label>
              <input
                type="date"
                id="visitDate"
                bind:value={formData.visitDate}
                class="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 text-gray-900 dark:text-white focus:outline-none focus:border-purple-400"
              />
            </div>

            <div>
              <label for="address" class="block text-gray-900 dark:text-white font-semibold mb-2">{t('contact.yourAddressLabel')}</label>
              <input
                type="text"
                id="address"
                bind:value={formData.address}
                class="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-purple-400"
                placeholder={t('contact.yourAddressPlaceholder')}
              />
            </div>

            <div>
              <label for="hearAbout" class="block text-gray-900 dark:text-white font-semibold mb-2">{t('contact.hearAboutLabel')}</label>
              <input
                type="text"
                id="hearAbout"
                bind:value={formData.hearAbout}
                class="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-purple-400"
                placeholder={t('contact.hearAboutPlaceholder')}
              />
            </div>
          {/if}

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
