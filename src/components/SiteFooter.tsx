import { Link } from 'react-router-dom'
import FlowerLogo from './FlowerLogo'
import { DISCORD_INVITE } from '../lib/discord'

function SiteFooter() {
  return (
    <footer className="zen-footer">
      <div className="zen-footer__inner">
        <span className="zen-footer__brand">
          <FlowerLogo size={18} className="zen-footer__mark" />
          © {new Date().getFullYear()} Clã ZEN
        </span>
        <nav className="zen-footer__nav" aria-label="Rodapé">
          <a href={DISCORD_INVITE} target="_blank" rel="noopener noreferrer">
            Discord
          </a>
          <Link to="/membros">Membros</Link>
          <Link to="/privacy">Privacidade</Link>
        </nav>
      </div>
    </footer>
  )
}

export default SiteFooter
