const TOMI_ESL_URL = 'https://tomiesl.com.br/'

/** Sponsored banner for Tomi ESL, in the look of the live tomiesl.com.br site (red-dot "tomi ESL" wordmark). */
function TomiBanner() {
  return (
    <aside className="zen-ad" aria-label="Anúncio" data-reveal>
      <a
        className="zen-ad__link"
        href={TOMI_ESL_URL}
        target="_blank"
        rel="noopener noreferrer"
        data-tilt
        data-umami-event="tomi_esl_click"
        data-umami-event-placement="home_banner"
      >
        <span className="zen-ad__tag">Anúncio</span>
        <span className="zen-ad__logo" aria-label="Tomi ESL" role="img">
          <i aria-hidden="true" />
          tomi<small>ESL</small>
        </span>
        <span className="zen-ad__copy">
          <strong className="zen-ad__title">
            Simplificando o <em>inglês</em>.
          </strong>
          <span className="zen-ad__text">
            Você já entende. Agora, é hora de falar. Aulas particulares online, com aula experimental gratuita de
            30 minutos.
          </span>
        </span>
        <span className="zen-ad__cta">
          Agendar aula gratuita
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M7 7h10v10M7 17 17 7" />
          </svg>
        </span>
      </a>
    </aside>
  )
}

export default TomiBanner
