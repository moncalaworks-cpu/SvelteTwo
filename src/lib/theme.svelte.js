import { browser } from '$app/environment'

let theme = $state(
  browser
    ? (localStorage.getItem('theme') ??
       (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
    : 'dark'
)

export function getTheme() {
  return theme
}

export function toggleTheme() {
  theme = theme === 'dark' ? 'light' : 'dark'
  if (browser) {
    localStorage.setItem('theme', theme)
  }
}
