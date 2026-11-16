import { createContext } from 'react'
import type { Scheme } from '../lib/theme'

export type ThemeContextValue = {
  /** The scheme currently on screen. */
  scheme: Scheme
  /** Switches to the opposite of what is on screen. */
  toggle: () => void
}

export const ThemeContext = createContext<ThemeContextValue | null>(null)
