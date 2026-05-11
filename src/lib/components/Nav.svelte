<script>
  import { church } from '$lib/data/church.js'
  import { t, getLanguage, setLanguage } from '$lib/i18n.svelte.js'
  let mobileMenuOpen = $state(false)

  const navLinks = [
    { key: 'nav.aboutUs', href: '/about' },
    { key: 'nav.events', href: '/events' },
    { key: 'nav.bulletin', href: '/bulletin' },
    { key: 'nav.contact', href: '/contact' },
  ]

  const externalLinks = [
    { key: 'nav.liveStream', href: church.youtube },
    { key: 'nav.giving', href: church.giving },
  ]
</script>

<nav class="sticky top-0 z-50 bg-gray-950 border-b border-gray-800 shadow-lg">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-16">
      <!-- Church Name -->
      <a href="/" class="text-xl font-bold text-white hover:text-purple-300 transition-colors">
        {church.name}
      </a>

      <!-- Desktop Nav Links -->
      <div class="hidden md:flex items-center gap-8">
        {#each navLinks as link}
          <a href={link.href} class="text-gray-300 hover:text-white transition-colors">
            {t(link.key)}
          </a>
        {/each}
        {#each externalLinks as link}
          <a href={link.href} target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-white transition-colors">
            {t(link.key)}
          </a>
        {/each}
      </div>

      <!-- Social Icons + Language Toggle + Mobile Menu Toggle -->
      <div class="flex items-center gap-4">
        <!-- Language Toggle -->
        <button
          onclick={() => setLanguage(getLanguage() === 'en' ? 'es' : 'en')}
          class="text-xs border border-gray-600 hover:border-purple-400 rounded px-2 py-1 text-gray-300 hover:text-purple-300 transition"
          aria-label="Toggle language"
        >
          {getLanguage() === 'en' ? 'ES' : 'EN'}
        </button>

        <a
          href={church.facebook}
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-400 hover:text-white transition-colors"
          aria-label="Facebook"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
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
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
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
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.5C6.201 22.5 1.5 17.799 1.5 12S6.201 1.5 12 1.5 22.5 6.201 22.5 12 17.799 22.5 12 22.5zm3.5-12a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm2.205-5.795a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0z"
            />
          </svg>
        </a>

        <!-- Mobile Menu Toggle -->
        <button
          onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
          class="md:hidden inline-flex items-center justify-center p-2 text-gray-400 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    {#if mobileMenuOpen}
      <div class="md:hidden border-t border-gray-800 py-4 space-y-2">
        {#each navLinks as link}
          <a
            href={link.href}
            class="block px-3 py-2 text-gray-300 hover:bg-gray-800 hover:text-white rounded transition-colors"
            onclick={() => (mobileMenuOpen = false)}
          >
            {t(link.key)}
          </a>
        {/each}
        {#each externalLinks as link}
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            class="block px-3 py-2 text-gray-300 hover:bg-gray-800 hover:text-white rounded transition-colors"
            onclick={() => (mobileMenuOpen = false)}
          >
            {t(link.key)}
          </a>
        {/each}
        <button
          onclick={() => setLanguage(getLanguage() === 'en' ? 'es' : 'en')}
          class="w-full text-left px-3 py-2 text-gray-300 hover:bg-gray-800 hover:text-white rounded transition-colors text-sm"
        >
          {getLanguage() === 'en' ? 'Español' : 'English'}
        </button>
      </div>
    {/if}
  </div>
</nav>
