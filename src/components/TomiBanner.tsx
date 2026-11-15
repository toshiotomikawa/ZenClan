const TOMI_ESL_URL = 'https://tomiesl.com.br/'

/** Sponsored banner for Tomi ESL. Keeps Tomi ESL's own logo and colours on a light card in every theme. */
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
        <img className="zen-ad__logo" src="/tomi-esl.svg" alt="Tomi ESL — Simplificando o inglês." width={260} height={65} />
        <span className="zen-ad__copy">
          <strong className="zen-ad__title">Você já entende. Agora, é hora de falar.</strong>
          <span className="zen-ad__text">Aulas particulares de inglês online, com aula experimental gratuita de 30 minutos.</span>
        </span>
        <span className="zen-ad__cta">
          Conhecer a Tomi ESL
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M7 7h10v10M7 17 17 7" />
          </svg>
        </span>
      </a>
    </aside>
  )
}

export default TomiBanner
