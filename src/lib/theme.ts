/** Explicit override of the system color scheme; null means "follow the system". */
export type SchemeOverride = 'light' | 'dark' | null
export type Scheme = 'light' | 'dark'

export const THEME_STORAGE_KEY = 'zenweb-theme'

const darkQuery = () => window.matchMedia('(prefers-color-scheme: dark)')

export function systemScheme(): Scheme {
  return darkQuery().matches ? 'dark' : 'light'
}

export function onSystemSchemeChange(listener: () => void) {
  const query = darkQuery()
  query.addEventListener('change', listener)
  return () => query.removeEventListener('change', listener)
}

/** Reads the stored override, mapping the old day/night values. */
export function readStoredOverride(): SchemeOverride {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY)
    if (stored === 'light' || stored === 'day') return 'light'
    if (stored === 'dark' || stored === 'night') return 'dark'
  } catch {
    // site data blocked: follow the system
  }
  return null
}

/** Applies the override to <meta name="color-scheme">, which the CSS maps to color-scheme. */
export function applyOverride(override: SchemeOverride) {
  const meta = document.querySelector<HTMLMetaElement>('meta[name="color-scheme"]')
  if (meta) meta.content = override ?? 'light dark'
  try {
    if (override) localStorage.setItem(THEME_STORAGE_KEY, override)
    else localStorage.removeItem(THEME_STORAGE_KEY)
  } catch {
    // cannot persist; the page still shows the chosen scheme
  }
}
