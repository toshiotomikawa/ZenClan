import { Link, NavLink } from 'react-router-dom'
import DiscordIcon from './DiscordIcon'
import FlowerLogo from './FlowerLogo'
import { useTheme } from '../hooks/useTheme'
import { DISCORD_INVITE } from '../lib/discord'
import type { ThemeMode } from '../lib/theme'

const themeOptions: { id: ThemeMode; label: string }[] = [
  { id: 'system', label: 'Sistema' },
  { id: 'day', label: 'Claro' },
  { id: 'night', label: 'Escuro' },
]

function ThemeIcon({ theme }: { theme: ThemeMode }) {
  if (theme === 'day') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41" />
      </svg>
    )
  }

  if (theme === 'night') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.35 15.35A9 9 0 0 1 8.65 3.65a9 9 0 1 0 11.7 11.7Z" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  )
}

function SiteHeader() {
  const { theme, setTheme } = useTheme()
  const currentThemeIndex = themeOptions.findIndex((option) => option.id === theme)
  const currentTheme = themeOptions[currentThemeIndex]
  const nextTheme = themeOptions[(currentThemeIndex + 1) % themeOptions.length]

  return (
    <header className="zen-header">
      <div className="zen-header__inner">
      <Link to="/" className="zen-brand" aria-label="Clã ZEN, página inicial">
        <FlowerLogo size={26} className="zen-brand__icon" />
        <span className="zen-brand__text">ZEN</span>
      </Link>

      <nav className="zen-nav" aria-label="Principal">
        <NavLink to="/" end className={({ isActive }) => (isActive ? 'zen-nav__link is-active' : 'zen-nav__link')}>
          Início
        </NavLink>
        <NavLink
          to="/membros"
          className={({ isActive }) => (isActive ? 'zen-nav__link is-active' : 'zen-nav__link')}
        >
          Membros
        </NavLink>
      </nav>

      <div className="zen-header__actions">
        <button
          type="button"
          className="zen-theme__btn"
          onClick={() => setTheme(nextTheme.id)}
          aria-label={`Tema: ${currentTheme.label}. Mudar para ${nextTheme.label}`}
          title={`Tema: ${currentTheme.label}`}
        >
          <ThemeIcon key={theme} theme={theme} />
        </button>
        <a
          href={DISCORD_INVITE}
          className="zen-btn zen-btn--accent zen-btn--sm"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Discord"
        >
          <DiscordIcon size={16} />
          <span>Discord</span>
        </a>
      </div>
      </div>
    </header>
  )
}

export default SiteHeader
