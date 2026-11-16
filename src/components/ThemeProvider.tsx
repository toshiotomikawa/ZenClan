import { useEffect, useState, type ReactNode } from 'react'
import { ThemeContext } from '../context/theme'
import {
  applyOverride,
  onSystemSchemeChange,
  readStoredOverride,
  systemScheme,
  THEME_STORAGE_KEY,
  type SchemeOverride,
} from '../lib/theme'

function ThemeProvider({ children }: { children: ReactNode }) {
  const [override, setOverride] = useState<SchemeOverride>(() => readStoredOverride())
  const [system, setSystem] = useState(() => systemScheme())

  useEffect(() => onSystemSchemeChange(() => setSystem(systemScheme())), [])

  // Another tab changed the override: follow it.
  useEffect(() => {
    const onStorage = (event: StorageEvent) => {
      if (event.key !== THEME_STORAGE_KEY && event.key !== null) return
      const next = readStoredOverride()
      setOverride(next)
      applyOverride(next)
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  const scheme = override ?? system

  // Two-state toggle: pick the opposite of what is on screen; matching the system clears the override.
  const toggle = () => {
    const target = scheme === 'dark' ? 'light' : 'dark'
    const next = target === systemScheme() ? null : target
    setOverride(next)
    applyOverride(next)
  }

  return <ThemeContext.Provider value={{ scheme, toggle }}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
