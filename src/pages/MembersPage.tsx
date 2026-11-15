import ActivityDot from '../components/ActivityDot'
import type { CSSProperties } from 'react'
import DiscordIcon from '../components/DiscordIcon'
import { DISCORD_INVITE } from '../lib/discord'
import { clanCount, clanMembers, communitySize, founders } from '../lib/members'
import type { Member } from '../lib/members'

function BotIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="7" width="16" height="12" rx="3" />
      <path d="M12 3v4M9 3h6" />
      <circle cx="9" cy="13" r="1" />
      <circle cx="15" cy="13" r="1" />
    </svg>
  )
}

function MemberIndicators({ member }: { member: Member }) {
  if (member.fortniteModes.length === 0) return null

  return (
    <span className="zen-member-indicators">
      {member.fortniteModes.map((mode) => {
        const label = mode === 'build' ? 'Build Mode' : 'Zero Build'
        return (
          <span key={mode} className="zen-member-indicator" role="img" aria-label={label} title={label}>
            <img
              src={mode === 'build' ? '/icon-build-mode.png' : '/icon-zero-build.png'}
              alt=""
              width={18}
              height={18}
            />
          </span>
        )
      })}
    </span>
  )
}

const delay = (seconds: number) => ({ '--d': `${seconds}s` }) as CSSProperties

function MembersPage() {
  return (
    <div className="zen-members">
        <header className="zen-page-intro">
          <span className="zen-kicker zen-intro" style={delay(0.05)}>
            <span className="zen-kicker__dot" aria-hidden="true" />
            Clã ZEN
          </span>
          <h1 className="zen-page-intro__title zen-intro" style={delay(0.15)}>Membros</h1>
          <p className="zen-page-intro__lead zen-intro" style={delay(0.3)}>
            São {communitySize} pessoas na comunidade e crescendo. O clã ZEN é o grupo menor dentro dela —
            quem carrega a tag no nome.
          </p>
        </header>

        <section className="zen-section zen-section--gap">
          <div className="zen-section__head zen-section__head--baseline" data-reveal>
            <h2 className="zen-section__title zen-section__title--sm">Co-fundadores</h2>
            <span className="zen-count" data-count={founders.length} data-count-pad={2}>
              {String(founders.length).padStart(2, '0')}
            </span>
          </div>
          <div className="zen-cards zen-cards--4">
            {founders.map((m, i) => (
              <article key={m.name} className="zen-member-card" data-reveal data-tilt style={delay(i * 0.08)}>
                <div className="zen-member-card__top">
                  <span className="zen-avatar zen-avatar--lg zen-avatar--accent">{m.initials}</span>
                  <MemberIndicators member={m} />
                </div>
                <div className="zen-member-card__meta">
                  <span className="zen-member-card__name">
                    <ActivityDot activity={m.activity} />
                    {m.name}
                  </span>
                </div>
                <span className="zen-badge">{m.role}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="zen-section zen-section--gap">
          <div className="zen-section__head zen-section__head--baseline" data-reveal>
            <h2 className="zen-section__title zen-section__title--sm">Clã</h2>
            <span className="zen-count" data-count={clanCount} data-count-pad={2}>
              {String(clanCount).padStart(2, '0')}
            </span>
          </div>
          <div className="zen-cards zen-cards--3">
            {clanMembers.map((m, i) => (
              <div key={m.name} className="zen-clan-row" data-reveal style={delay((i % 3) * 0.06)}>
                <span
                  className={m.isBot ? 'zen-avatar zen-avatar--muted zen-avatar--bot' : 'zen-avatar zen-avatar--muted'}
                  aria-label={m.isBot ? 'Bot da comunidade' : undefined}
                  title={m.isBot ? 'Bot da comunidade' : undefined}
                >
                  {m.isBot ? <BotIcon /> : m.initials}
                </span>
                <div className="zen-clan-row__meta">
                  <span className="zen-clan-row__name">
                    <ActivityDot activity={m.activity} />
                    <span className="zen-clan-row__name-text">{m.name}</span>
                  </span>
                </div>
                <MemberIndicators member={m} />
              </div>
            ))}
          </div>
          <p className="zen-note" data-reveal>
            A tag ZEN é dada pelos co-fundadores. Não tem processo seletivo — só convivência.
          </p>
        </section>

        <section className="zen-join-bar" data-reveal>
          <div className="zen-join-bar__copy">
            <span className="zen-join-bar__title">Não precisa de tag para jogar com a gente</span>
            <span className="zen-join-bar__text">A comunidade é bem maior que o clã. Entra, escuta, joga.</span>
          </div>
          <a
            href={DISCORD_INVITE}
            className="zen-btn zen-btn--accent zen-btn--lg"
            target="_blank"
            rel="noopener noreferrer"
            data-umami-event="discord_click"
            data-umami-event-placement="members_join"
          >
            <DiscordIcon size={18} />
            Entrar no Discord
          </a>
        </section>
    </div>
  )
}

export default MembersPage
