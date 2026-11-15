import { getPrivacyContent } from '../i18n/privacy'

/** Static privacy page (no backend). PT-BR primary for the production shell. */
function PrivacyPolicyPage() {
  const content = getPrivacyContent('pt-BR')

  return (
        <article className="zen-privacy zen-intro">
          <h1>{content.title}</h1>
          <p className="zen-privacy__meta">{content.lastUpdated}</p>
          <p className="zen-privacy__intro">{content.intro}</p>
          {content.sections.map((section) => (
            <section key={section.id} id={section.id}>
              {section.title ? <h2>{section.title}</h2> : null}
              {section.paragraphs.map((p, i) => (
                <p key={`${section.id}-p-${i}`}>{p}</p>
              ))}
              {section.list && section.list.length > 0 ? (
                <ul>
                  {section.list.map((item, i) => (
                    <li key={`${section.id}-li-${i}`}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </article>
  )
}

export default PrivacyPolicyPage
