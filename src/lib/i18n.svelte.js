import { browser } from '$app/environment'
import { translations } from '$lib/data/translations.js'

let lang = $state(browser ? (localStorage.getItem('lang') ?? 'en') : 'en')

export function getLanguage() {
  return lang
}

export function setLanguage(l) {
  lang = l
  if (browser) {
    localStorage.setItem('lang', l)
  }
}

export function t(key) {
  return translations[lang]?.[key] ?? translations['en'][key] ?? key
}
