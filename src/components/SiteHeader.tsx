import { Link, NavLink } from 'react-router-dom'
import DiscordIcon from './DiscordIcon'
import FlowerLogo from './FlowerLogo'
import { useTheme } from '../hooks/useTheme'
import { DISCORD_INVITE } from '../lib/discord'
import type { Scheme } from '../lib/theme'

/** Shows the scheme currently on screen: a sun when light, a moon when dark. */
function ThemeIcon({ scheme }: { scheme: Scheme }) {
  if (scheme === 'light') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.35 15.35A9 9 0 0 1 8.65 3.65a9 9 0 1 0 11.7 11.7Z" />
    </svg>
  )
}

function SiteHeader() {
  const { scheme, toggle } = useTheme()
  const actionLabel = scheme === 'dark' ? 'Mudar para o tema claro' : 'Mudar para o tema escuro'

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
          onClick={toggle}
          aria-label={actionLabel}
          title={actionLabel}
        >
          <ThemeIcon key={scheme} scheme={scheme} />
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
