<script>
  import { church } from '$lib/data/church.js'
  import { t } from '$lib/i18n.svelte.js'
</script>

<footer class="bg-gray-900 border-t border-gray-800 mt-16">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
      <!-- Church Info -->
      <div>
        <h3 class="text-lg font-bold text-white mb-4">{church.name}</h3>
        <p class="text-gray-400 text-sm mb-4">{church.address}</p>
        <p class="text-gray-400 text-sm mb-2">
          <a href={`tel:${church.phone}`} class="hover:text-white transition-colors">
            {church.phone}
          </a>
        </p>
        <p class="text-gray-400 text-sm">
          <a href={`mailto:${church.email}`} class="hover:text-white transition-colors">
            {church.email}
          </a>
        </p>
      </div>

      <!-- Quick Links -->
      <div>
        <h3 class="text-lg font-bold text-white mb-4">{t('footer.quickLinks')}</h3>
        <ul class="space-y-2 text-sm">
          <li><a href="/about" class="text-gray-400 hover:text-white transition-colors">{t('nav.aboutUs')}</a></li>
          <li>
            <a href="/live-stream" class="text-gray-400 hover:text-white transition-colors">{t('nav.liveStream')}</a>
          </li>
          <li><a href="/events" class="text-gray-400 hover:text-white transition-colors">{t('nav.events')}</a></li>
          <li><a href={church.giving} target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition-colors">{t('nav.giving')}</a></li>
          <li><a href="/contact" class="text-gray-400 hover:text-white transition-colors">{t('nav.contact')}</a></li>
        </ul>
      </div>

      <!-- Social Media -->
      <div>
        <h3 class="text-lg font-bold text-white mb-4">{t('footer.followUs')}</h3>
        <div class="flex gap-4">
          <a
            href={church.facebook}
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-400 hover:text-white transition-colors"
            aria-label="Facebook"
          >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
              />
            </svg>
          </a>
          <a
            href={church.youtube}
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-400 hover:text-white transition-colors"
            aria-label="YouTube"
          >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
              />
            </svg>
          </a>
          <a
            href={church.instagram}
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-400 hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.5C6.201 22.5 1.5 17.799 1.5 12S6.201 1.5 12 1.5 22.5 6.201 22.5 12 17.799 22.5 12 22.5zm3.5-12a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm2.205-5.795a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
      <p>&copy; {new Date().getFullYear()} {church.name}. {t('footer.rights')}</p>
    </div>
  </div>
</footer>
