import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import ActivityDot from '../components/ActivityDot'
import DiscordIcon from '../components/DiscordIcon'
import FlowerLogo from '../components/FlowerLogo'
import TomiBanner from '../components/TomiBanner'
import { DISCORD_INVITE, DISCORD_WIDGET_URL } from '../lib/discord'
import { getGameUrl } from '../lib/gameLinks'
import { communitySize, clanTotal, founders } from '../lib/members'

/** Loads Discord's widget only once it scrolls into view, so its cookies and scripts stay off the first load. */
function DiscordWidget() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setVisible(true)
        observer.disconnect()
      }
    })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="zen-cta-banner__widget" ref={ref} style={{ minWidth: 'min(350px, 100%)', minHeight: 320 }}>
      {visible && (
        <iframe
          src={DISCORD_WIDGET_URL}
          title="Widget do servidor Discord da comunidade ZEN"
          width={350}
          height={320}
          allowTransparency
          frameBorder={0}
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        />
      )}
    </div>
  )
}

/** Fixed Umami custom-event values for homepage game cards (do not derive from labels). */
type HomeGameAnalyticsKey = 'fortnite' | 'minecraft' | 'valorant' | 'counter_strike'

type HomeGame = {
  name: string
  analyticsKey: HomeGameAnalyticsKey
  mono: string
  genre: string
  art: string
  texture: string
}

const homeGames: HomeGame[] = [
  {
    name: 'Fortnite',
    analyticsKey: 'fortnite',
    mono: 'FN',
    genre: 'Battle royale',
    art: 'linear-gradient(135deg, #2f6bff 0%, #7b5cff 60%, #b45cff 100%)',
    texture:
      'repeating-linear-gradient(115deg, rgba(255,255,255,0.14) 0 10px, transparent 10px 26px)',
  },
  {
    name: 'Minecraft',
    analyticsKey: 'minecraft',
    mono: 'MC',
    genre: 'Survival',
    art: 'linear-gradient(160deg, #4f9b32 0%, #2f7a2a 55%, #7a5a33 100%)',
    texture:
      'repeating-linear-gradient(0deg, rgba(0,0,0,0.10) 0 13px, transparent 13px 14px), repeating-linear-gradient(90deg, rgba(0,0,0,0.10) 0 13px, transparent 13px 14px)',
  },
  {
    name: 'Valorant',
    analyticsKey: 'valorant',
    mono: 'VAL',
    genre: 'Tático 5v5',
    art: 'linear-gradient(120deg, #ff4655 0%, #d31f35 55%, #2b2a4a 100%)',
    texture:
      'linear-gradient(105deg, rgba(255,255,255,0) 46%, rgba(255,255,255,0.22) 47%, rgba(255,255,255,0.22) 50%, rgba(255,255,255,0) 51%), linear-gradient(105deg, rgba(255,255,255,0) 62%, rgba(255,255,255,0.14) 63%, rgba(255,255,255,0.14) 68%, rgba(255,255,255,0) 69%)',
  },
  {
    name: 'Counter-Strike',
    analyticsKey: 'counter_strike',
    mono: 'CS',
    genre: 'Tático 5v5',
    art: 'linear-gradient(135deg, #e79b3c 0%, #b6641f 45%, #2f3d4d 100%)',
    texture:
      'radial-gradient(circle at 78% 50%, rgba(255,255,255,0.18) 0 14%, transparent 15%), radial-gradient(circle at 78% 50%, rgba(255,255,255,0.12) 0 28%, transparent 29%)',
  },
]

const marqueeWords = [
  'Jogue sem toxicidade',
  'Fortnite',
  'Minecraft',
  'Valorant',
  'Counter-Strike',
  'Memes',
  'Call aberta',
  'Arte e amigurumi',
]

const remainingMembers = Math.max(0, communitySize - founders.length)

/** Stagger helper: sets the CSS delay variable used by reveal and intro animations. */
const delay = (seconds: number) => ({ '--d': `${seconds}s` }) as CSSProperties

function HomePage() {
  return (
    <>
      <section className="zen-hero">
        <div className="zen-hero__copy">
          <span className="zen-kicker zen-intro" style={delay(0.05)}>
            <span className="zen-kicker__dot" aria-hidden="true" />
            Comunidade online · desde 15 jan 2023
          </span>
          <h1 className="zen-hero__title" aria-label="Jogue sem toxicidade.">
            <span className="zen-word" style={delay(0.15)} aria-hidden="true">
              <span>Jogue</span>
            </span>{' '}
            <span className="zen-word" style={delay(0.25)} aria-hidden="true">
              <span>sem</span>
            </span>{' '}
            <span className="zen-word" style={delay(0.35)} aria-hidden="true">
              <span className="zen-hero__accent">toxicidade.</span>
            </span>
          </h1>
          <p className="zen-hero__lead zen-intro" style={delay(0.55)}>
            A comunidade Zen é um lugar tranquilo para jogar, conversar e enviar memes. O mais importante é não
            ser tóxico!
          </p>
          <div className="zen-hero__cta-row zen-intro" style={delay(0.7)}>
            <a
              href={DISCORD_INVITE}
              className="zen-btn zen-btn--accent zen-btn--lg"
              target="_blank"
              rel="noopener noreferrer"
              data-umami-event="discord_click"
              data-umami-event-placement="home_hero"
            >
              <DiscordIcon size={18} />
              Entrar no Discord
            </a>
            <Link to="/membros" className="zen-text-link">
              Ver membros <span className="zen-arrow" aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="zen-social-proof zen-intro" style={delay(0.85)}>
            <div className="zen-avatar-stack" aria-hidden="true">
              {founders.map((m, i) => (
                <span key={m.name} className="zen-avatar-stack__item" style={delay(0.95 + i * 0.07)}>
                  {m.initials}
                </span>
              ))}
              <span className="zen-avatar-stack__more" style={delay(0.95 + founders.length * 0.07)}>
                +{remainingMembers}
              </span>
            </div>
            <div className="zen-live-stat">
              <span className="zen-dot zen-dot--online" aria-hidden />
              <span>
                <strong>{communitySize}</strong> membros e crescendo
              </span>
            </div>
          </div>
        </div>

        <div className="zen-hero__visual">
          <FlowerLogo size={420} className="zen-hero__flower" />
          <div className="zen-game-grid">
            {homeGames.map((game, i) => {
              const href = getGameUrl(game.name)
              if (!href) return null
              return (
                <a
                  key={game.name}
                  className="zen-game zen-intro zen-intro--pop"
                  style={delay(0.45 + i * 0.1)}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-tilt
                  data-umami-event="game_click"
                  data-umami-event-game={game.analyticsKey}
                >
                  <span className="zen-game__art" style={{ background: game.art }}>
                    <span className="zen-game__tex" style={{ background: game.texture }} aria-hidden />
                    <span className="zen-game__sheen" aria-hidden />
                    <span className="zen-game__genre">{game.genre}</span>
                    <span className="zen-game__mono" aria-hidden>
                      {game.mono}
                    </span>
                  </span>
                  <span className="zen-game__foot">
                    {game.name}
                    <span className="zen-game__arrow" aria-hidden="true">
                      ↗
                    </span>
                  </span>
                </a>
              )
            })}
            <div className="zen-game zen-game--extra zen-intro zen-intro--pop" style={delay(0.85)}>
              <span className="zen-plus">+</span>
              <span>e o que a galera trouxer na semana</span>
            </div>
          </div>
        </div>
      </section>

      <div className="zen-marquee" aria-hidden="true">
        <div className="zen-marquee__track">
          {[0, 1].map((copy) => (
            <div className="zen-marquee__group" key={copy}>
              {marqueeWords.map((word) => (
                <span key={word} className="zen-marquee__item">
                  {word}
                  <FlowerLogo size={18} className="zen-marquee__mark" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section className="zen-rule-bar" data-reveal>
        <div className="zen-rule-bar__copy">
          <span className="zen-rule-bar__kicker">Regra 01</span>
          <span className="zen-rule-bar__title">A única regra é não ser tóxico!</span>
        </div>
        <div className="zen-rule-bar__stats">
          <div className="zen-stat">
            <span className="zen-stat__value">
              <span data-count={communitySize}>{communitySize}</span> ↗
            </span>
            <span className="zen-stat__label">na comunidade</span>
          </div>
          <div className="zen-stat">
            <span className="zen-stat__value" data-count={clanTotal}>
              {clanTotal}
            </span>
            <span className="zen-stat__label">no clã ZEN</span>
          </div>
          <div className="zen-stat">
            <span className="zen-stat__value">15.01.2023</span>
            <span className="zen-stat__label">fundado em</span>
          </div>
        </div>
      </section>

      <section className="zen-section">
        <h2 className="zen-section__title" data-reveal>
          Mais que jogo
        </h2>
        <div className="zen-cards zen-cards--3">
          <article className="zen-card" data-reveal style={delay(0)}>
            <span className="zen-card__label">Ateliê</span>
            <h3 className="zen-card__title">Desenho e amigurumi</h3>
            <p className="zen-card__text">
              Digital, tradicional e crochê. Rascunhos, projetos, qualquer arte é bem-vinda.
            </p>
          </article>
          <article className="zen-card" data-reveal style={delay(0.1)}>
            <span className="zen-card__label">Oficina</span>
            <h3 className="zen-card__title">Projetos particulares</h3>
            <p className="zen-card__text">Código, jogos, planos. Só contar para a gente como andam as coisas.</p>
          </article>
          <article className="zen-card" data-reveal style={delay(0.2)}>
            <span className="zen-card__label">Clã ZEN</span>
            <h3 className="zen-card__title">O grupo dentro da comunidade</h3>
            <p className="zen-card__text">Quem usa a tag ZEN no nick.</p>
          </article>
        </div>
      </section>

      <section className="zen-section zen-section--tight">
        <div className="zen-section__head" data-reveal>
          <h2 className="zen-section__title zen-section__title--sm">Co-fundadores</h2>
          <Link to="/membros" className="zen-accent-link">
            Todos os membros <span className="zen-arrow" aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="zen-cards zen-cards--4">
          {founders.map((m, i) => (
            <div key={m.name} className="zen-person" data-reveal style={delay(i * 0.08)}>
              <span className="zen-avatar zen-avatar--accent">{m.initials}</span>
              <div className="zen-person__meta">
                <span className="zen-person__name">
                  <ActivityDot activity={m.activity} />
                  <span className="zen-person__name-text">{m.name}</span>
                </span>
                <span className="zen-person__role">{m.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <TomiBanner />

      <section className="zen-cta-banner" data-reveal>
        <div className="zen-cta-banner__layout">
          <div className="zen-cta-banner__copy">
            <h2 className="zen-cta-banner__title">Chega aí na call.</h2>
            <p className="zen-cta-banner__text">Só aparecer e convidar quando quiser jogar.</p>
            <a
              href={DISCORD_INVITE}
              className="zen-btn zen-btn--accent zen-btn--lg"
              target="_blank"
              rel="noopener noreferrer"
              data-umami-event="discord_click"
              data-umami-event-placement="home_banner"
            >
              <DiscordIcon size={18} />
              Entrar no Discord
            </a>
          </div>
          <DiscordWidget />
        </div>
      </section>
    </>
  )
}

export default HomePage
