export type PrivacySection = {
  id: string
  title: string
  paragraphs: string[]
  list?: string[]
}

export type PrivacyContent = {
  title: string
  lastUpdated: string
  intro: string
  sections: PrivacySection[]
}

const enUS: PrivacyContent = {
  title: 'Privacy Policy',
  lastUpdated: 'Last updated: August 5, 2026',
  intro:
    'This Privacy Policy describes how Zen Web ("Zen", "we", "us", or "our"), operated at www.zenclan.lat, collects, uses, shares, and protects personal data when you visit our public website. It is designed to meet the requirements of Brazil\'s Lei Geral de Proteção de Dados (LGPD — Law No. 13,709/2018) and major U.S. state privacy laws, including the California Consumer Privacy Act as amended by the CPRA, the Virginia Consumer Data Protection Act, the Colorado Privacy Act, the Connecticut Data Privacy Act, the Utah Consumer Privacy Act, and similar statutes.',
  sections: [
    {
      id: 'controller',
      title: '1. Data controller',
      paragraphs: [
        'Zen Web is the data controller for personal data processed through this website. The service is operated from Brazil by the site owner. For questions about this policy or to exercise your privacy rights, contact our data protection contact (Encarregado pelo tratamento de dados pessoais under LGPD Art. 41):',
        'Email: privacy@zenclan.lat',
        'Website: https://www.zenclan.lat',
      ],
    },
    {
      id: 'scope',
      title: '2. Scope',
      paragraphs: [
        'This policy applies to visitors of the public website at www.zenclan.lat (and zenclan.lat, which redirects to www). The current production site is a static public community site: homepage, members page, and this Privacy Policy. It does not cover third-party websites or services you reach through links on our site (for example Discord or official game sites), which are governed by their own privacy policies.',
      ],
    },
    {
      id: 'collected',
      title: '3. Personal data we collect',
      paragraphs: [
        'The public site does not require registration or login. Depending on how you use the site, the following categories of data may be processed:',
      ],
      list: [
        'Preferences stored locally: language and theme choices saved in your browser (localStorage). These stay on your device and are not sent to our servers as account data.',
        'Analytics data (Umami Cloud): aggregate measurements described in section 4, processed by our analytics provider when the tracker loads on www.zenclan.lat.',
        'Connection metadata: like any website, hosting and network providers necessarily receive technical connection information (such as IP address and request headers) in transit to deliver the site. We do not operate persistent server access logs for the public static site.',
      ],
    },
    {
      id: 'analytics',
      title: '4. Analytics (Umami Cloud)',
      paragraphs: [
        'We use Umami Cloud (Umami Software, Inc.) as a privacy-conscious analytics provider. The tracker is configured for our production domain www.zenclan.lat only. Analytics are hosted in the European Union (EU) region under our current Hobby plan.',
        'Purpose: measure aggregate traffic, routes (normalized page paths), referral and campaign information, and two fixed custom-event families — Discord call-to-action clicks and homepage game-link clicks — so we can understand how the public site is used and improve it.',
        'Categories of analytics information may include: the page path (without query strings or URL fragments), referrer and campaign-related parameters as reported by the analytics service, broad browser/device information, approximate geographic information derived by the provider, and the custom events listed below.',
      ],
      list: [
        'Custom event discord_click with a placement value limited to home_hero, home_banner, or members_join.',
        'Custom event game_click with a game value limited to fortnite, minecraft, valorant, or counter_strike.',
        'Analytics retention under the current Hobby plan: six (6) months.',
        'No analytics cookies are set by the Umami tracker as configured for this site.',
        'We do not use session replay, heatmaps, device fingerprinting, advertising pixels, cross-site behavioral tracking, user identification, or persistent analytics identifiers that profile you as an individual.',
        'Query strings and URL fragments are excluded from analytics collection by configuration.',
        'If your browser sends a Do Not Track (DNT) signal, the tracker is configured to honor it and will not collect analytics events.',
        'You may block the analytics script (for example with a content blocker or by refusing third-party scripts). Doing so does not impair website functionality: pages still render, navigation still works, and outbound links still open normally.',
        'We do not sell analytics data.',
      ],
    },
    {
      id: 'not-collected',
      title: '5. What we do not collect',
      paragraphs: [
        'The current public production site does not offer account registration, login, Google OAuth, two-factor authentication, site-lock passwords, or protected editorial content. We do not sell personal data. We do not use advertising cookies or cross-site behavioral profiling for ads.',
      ],
    },
    {
      id: 'sources',
      title: '6. How we collect data',
      paragraphs: [
        'Language and theme preferences are stored in your browser when you change those controls. Analytics data is collected by the Umami Cloud script loaded on www.zenclan.lat when it is not blocked and when Do Not Track does not prevent collection. Connection metadata is processed by infrastructure providers as part of delivering the website over the internet.',
      ],
    },
    {
      id: 'purposes',
      title: '7. Purposes and legal bases',
      paragraphs: [
        'Under the LGPD, we process personal data based on the legal bases listed in Art. 7 and, where applicable, Art. 11. Under U.S. state laws, we process personal information for the business purposes described below.',
      ],
      list: [
        'Provide and operate the public website — legitimate interest and/or performance of a service (LGPD Art. 7, V and IX).',
        'Measure aggregate site usage and improve content and calls to action (including Discord and game links) — legitimate interest (LGPD Art. 7, IX).',
        'Comply with applicable law and respond to lawful requests — legal obligation (LGPD Art. 7, II).',
      ],
    },
    {
      id: 'cookies',
      title: '8. Cookies and similar technologies',
      paragraphs: [
        'The public production site does not set essential session or authentication cookies. Local storage may hold non-sensitive UI preferences (language and theme). You can clear local storage through your browser settings; doing so resets those preferences.',
        'The Umami analytics tracker, as configured for this site, does not use analytics cookies. Third-party embeds (see section 9) may set their own cookies under their policies when you interact with them.',
      ],
    },
    {
      id: 'sharing',
      title: '9. Sharing and third parties',
      paragraphs: [
        'We do not sell or share your personal data for cross-context behavioral advertising as defined under California and other U.S. state privacy laws. If your browser sends a Global Privacy Control (GPC) signal, we treat it as a request to opt out of sale or sharing; because we do not sell or share data for those purposes, the signal has no additional effect beyond our default practices.',
        'We may involve the following categories of recipients as needed to operate the public site:',
      ],
      list: [
        'Umami Cloud — privacy-conscious analytics provider (EU region for our site). Umami processes analytics events as described in section 4. See also Umami\'s own documentation and privacy materials.',
        'Hosting and CDN providers (currently Vercel and related infrastructure) — deliver the static site and may process connection metadata in transit under their terms and safeguards.',
        'Discord, Inc. — the site may embed Discord\'s official server widget and links to Discord invites. Interacting with the widget or invite is a separate third-party connection governed by Discord\'s privacy policy and terms, not by Zen\'s analytics configuration.',
        'Official game publishers and other external sites — when you follow outbound game or social links, those destinations process data under their own policies.',
        'Legal and safety — when required by law, court order, or to protect rights, safety, and security.',
      ],
    },
    {
      id: 'transfers',
      title: '10. International transfers',
      paragraphs: [
        'Zen Web is operated from Brazil and uses service providers that may process data in the European Union (Umami Cloud region for this site), the United States, or other countries (for example hosting infrastructure). When personal data is transferred outside Brazil, we rely on appropriate safeguards under LGPD Art. 33, such as standard contractual clauses, provider commitments, and necessity for service operation, unless an exemption applies.',
        'If you are a California resident, we do not "sell" personal information. We do not "share" personal information for cross-context behavioral advertising.',
      ],
    },
    {
      id: 'retention',
      title: '11. Data retention',
      paragraphs: [
        'We retain personal data only for as long as necessary to fulfill the purposes in this policy, unless a longer period is required by law.',
      ],
      list: [
        'Analytics events in Umami Cloud — retained for six (6) months under the current Hobby plan configuration.',
        'Browser localStorage preferences — retained until you clear them in your browser.',
        'Connection metadata at infrastructure providers — retained only as long as those providers require to operate their services, under their policies.',
      ],
    },
    {
      id: 'security',
      title: '12. Security',
      paragraphs: [
        'We implement technical and organizational measures appropriate to the risk for a public static site, including HTTPS in production and limiting analytics to aggregate, cookie-free measurement where possible. No method of transmission or storage is completely secure; we cannot guarantee absolute security.',
        'If we become aware of a security incident likely to affect your rights or freedoms, we will take reasonable steps to notify affected individuals and, where required by law, the ANPD or other authorities.',
      ],
    },
    {
      id: 'rights-requests',
      title: '13. How to exercise your rights',
      paragraphs: [
        'Privacy requests (access, correction, deletion, portability, and similar rights) are handled manually. Email privacy@zenclan.lat with enough information to verify your identity and describe your request. Because the public site does not maintain user accounts, many requests will relate to analytics or correspondence rather than an account profile.',
      ],
    },
    {
      id: 'rights-lgpd',
      title: '14. Your rights under the LGPD (Brazil)',
      paragraphs: [
        'If you are in Brazil or your data is processed under the LGPD, you have the rights set out in Art. 18, subject to applicable exceptions:',
      ],
      list: [
        'Confirmation of whether we process your data and access to your data.',
        'Correction of incomplete, inaccurate, or outdated data.',
        'Anonymization, blocking, or deletion of unnecessary, excessive, or unlawfully processed data.',
        'Portability of your data to another service provider, where applicable and regulated.',
        'Information about entities with whom we have shared your data.',
        'Information about the possibility of denying consent and the consequences of refusal.',
        'Revocation of consent, where processing is based on consent.',
        'Opposition to processing carried out on other legal bases, when applicable.',
      ],
    },
    {
      id: 'rights-lgpd-contact',
      title: '',
      paragraphs: [
        'To exercise these rights, email privacy@zenclan.lat. We will respond within the timeframes required by the LGPD (generally up to 15 days, extendable as permitted by law). You may also lodge a complaint with Brazil\'s National Data Protection Authority (ANPD): https://www.gov.br/anpd',
      ],
    },
    {
      id: 'rights-us',
      title: '15. U.S. state privacy rights',
      paragraphs: [
        'Depending on your state of residence, you may have additional rights regarding your personal information. We honor applicable rights for residents of California, Virginia, Colorado, Connecticut, Utah, and other states with comprehensive privacy laws, to the extent those laws apply to our processing.',
      ],
      list: [
        'Right to know / access — what categories of personal information we collected, sources, purposes, and recipients.',
        'Right to delete — request deletion of personal information we collected from you, subject to legal exceptions.',
        'Right to correct — request correction of inaccurate personal information.',
        'Right to opt out — we do not sell personal information or share it for cross-context behavioral advertising.',
        'Right to limit use of sensitive personal information — we do not use sensitive personal information for profiling or marketing.',
        'Right to non-discrimination — we will not discriminate against you for exercising privacy rights.',
        'Authorized agent — you may designate an authorized agent to submit requests where permitted by law, with proof of authorization.',
      ],
    },
    {
      id: 'rights-us-contact',
      title: '',
      paragraphs: [
        'To submit a U.S. state privacy request, email privacy@zenclan.lat with "Privacy Request" in the subject line and your state of residence. We will verify your request and respond within the timeframe required by applicable law (for example, 45 days under the CCPA/CPRA, with permitted extensions). If we deny a request, you may appeal by replying to our response email; if the appeal is denied, you may contact your state Attorney General where applicable.',
        'California residents may also request information about disclosures to third parties for direct marketing purposes once per year (California "Shine the Light" law). We do not disclose personal information to third parties for their own direct marketing.',
      ],
    },
    {
      id: 'children',
      title: '16. Children\'s privacy',
      paragraphs: [
        'Zen Web is not directed to children under 13 (or under 16 where a higher age applies under local law, including certain LGPD interpretations for minors). We do not knowingly collect personal data from children. If you believe a child provided us personal data, contact privacy@zenclan.lat and we will take steps to delete it where applicable.',
      ],
    },
    {
      id: 'automated',
      title: '17. Automated decisions',
      paragraphs: [
        'We do not use personal data to make automated decisions that produce legal or similarly significant effects on you.',
      ],
    },
    {
      id: 'changes',
      title: '18. Changes to this policy',
      paragraphs: [
        'We may update this Privacy Policy from time to time. The "Last updated" date at the top reflects the latest revision. Material changes will be posted on this page. Continued use of the site after changes take effect constitutes acknowledgment of the updated policy, except where additional consent is required by law.',
      ],
    },
    {
      id: 'contact',
      title: '19. Contact',
      paragraphs: [
        'For privacy questions, LGPD requests, U.S. state privacy requests, or to contact our Encarregado de Dados:',
        'Email: privacy@zenclan.lat',
        'Website: https://www.zenclan.lat/privacy',
      ],
    },
  ],
}

const ptBR: PrivacyContent = {
  title: 'Política de Privacidade',
  lastUpdated: 'Última atualização: 5 de agosto de 2026',
  intro:
    'Esta Política de Privacidade descreve como o Zen Web ("Zen", "nós" ou "nosso"), operado em www.zenclan.lat, coleta, usa, compartilha e protege dados pessoais quando você visita nosso site público. Ela foi elaborada para atender à Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018) e às principais leis estaduais de privacidade dos Estados Unidos, incluindo a CCPA alterada pela CPRA (Califórnia), VCDPA (Virgínia), CPA (Colorado), CTDPA (Connecticut), UCPA (Utah) e legislações semelhantes.',
  sections: [
    {
      id: 'controller',
      title: '1. Controlador de dados',
      paragraphs: [
        'O Zen Web é o controlador dos dados pessoais tratados por meio deste site. O serviço é operado a partir do Brasil pelo responsável pelo site. Para dúvidas sobre esta política ou para exercer seus direitos de privacidade, entre em contato com nosso Encarregado pelo tratamento de dados pessoais (LGPD, art. 41):',
        'E-mail: privacy@zenclan.lat',
        'Site: https://www.zenclan.lat',
      ],
    },
    {
      id: 'scope',
      title: '2. Escopo',
      paragraphs: [
        'Esta política se aplica a visitantes do site público em www.zenclan.lat (e zenclan.lat, que redireciona para www). O site de produção atual é um site estático público da comunidade: página inicial, página de membros e esta Política de Privacidade. Ela não cobre sites ou serviços de terceiros acessados por links em nosso site (por exemplo Discord ou sites oficiais de jogos), que possuem suas próprias políticas de privacidade.',
      ],
    },
    {
      id: 'collected',
      title: '3. Dados pessoais que coletamos',
      paragraphs: [
        'O site público não exige cadastro nem login. Conforme o uso, as seguintes categorias de dados podem ser tratadas:',
      ],
      list: [
        'Preferências locais: idioma e tema salvos no navegador (localStorage). Permanecem no seu dispositivo e não são enviados a servidores nossos como dados de conta.',
        'Dados de analytics (Umami Cloud): medições agregadas descritas na seção 4, tratadas pelo provedor de analytics quando o rastreador carrega em www.zenclan.lat.',
        'Metadados de conexão: como qualquer site, provedores de hospedagem e rede recebem necessariamente informações técnicas de conexão (como endereço IP e cabeçalhos de requisição) em trânsito para entregar o site. Não operamos registros persistentes de acesso ao servidor para o site estático público.',
      ],
    },
    {
      id: 'analytics',
      title: '4. Analytics (Umami Cloud)',
      paragraphs: [
        'Usamos o Umami Cloud (Umami Software, Inc.) como provedor de analytics com foco em privacidade. O rastreador está configurado apenas para o domínio de produção www.zenclan.lat. Os dados de analytics são hospedados na região da União Europeia (UE) no plano Hobby atual.',
        'Finalidade: medir tráfego agregado, rotas (caminhos de página normalizados), informações de referência e campanha, e duas famílias fixas de eventos personalizados — cliques em chamadas para o Discord e cliques em links de jogos na página inicial — para entender o uso do site público e melhorá-lo.',
        'As categorias de informações de analytics podem incluir: o caminho da página (sem strings de consulta ou fragmentos de URL), referenciador e parâmetros de campanha conforme relatados pelo serviço, informações amplas de navegador/dispositivo, localização geográfica aproximada derivada pelo provedor, e os eventos personalizados listados abaixo.',
      ],
      list: [
        'Evento personalizado discord_click com valor de placement limitado a home_hero, home_banner ou members_join.',
        'Evento personalizado game_click com valor de game limitado a fortnite, minecraft, valorant ou counter_strike.',
        'Retenção de analytics no plano Hobby atual: seis (6) meses.',
        'O rastreador Umami, conforme configurado neste site, não define cookies de analytics.',
        'Não usamos session replay, mapas de calor, fingerprinting de dispositivo, pixels de publicidade, rastreamento comportamental entre sites, identificação de usuários ou identificadores persistentes de analytics que perfilam você individualmente.',
        'Strings de consulta e fragmentos de URL são excluídos da coleta de analytics por configuração.',
        'Se o navegador enviar o sinal Do Not Track (DNT), o rastreador está configurado para honrá-lo e não coletará eventos de analytics.',
        'Você pode bloquear o script de analytics (por exemplo com bloqueador de conteúdo ou recusando scripts de terceiros). Isso não prejudica o funcionamento do site: as páginas continuam renderizando, a navegação funciona e os links externos abrem normalmente.',
        'Não vendemos dados de analytics.',
      ],
    },
    {
      id: 'not-collected',
      title: '5. O que não coletamos',
      paragraphs: [
        'O site público de produção atual não oferece cadastro de conta, login, Google OAuth, autenticação em dois fatores, senha de bloqueio do site nem conteúdo editorial protegido. Não vendemos dados pessoais. Não usamos cookies de publicidade nem perfilamento comportamental entre sites para anúncios.',
      ],
    },
    {
      id: 'sources',
      title: '6. Como coletamos os dados',
      paragraphs: [
        'Preferências de idioma e tema são armazenadas no navegador quando você altera esses controles. Dados de analytics são coletados pelo script do Umami Cloud em www.zenclan.lat quando ele não é bloqueado e quando o Do Not Track não impede a coleta. Metadados de conexão são tratados por provedores de infraestrutura como parte da entrega do site pela internet.',
      ],
    },
    {
      id: 'purposes',
      title: '7. Finalidades e bases legais',
      paragraphs: [
        'Na LGPD, tratamos dados pessoais com base nas hipóteses do art. 7º e, quando aplicável, do art. 11. Nas leis estaduais dos EUA, tratamos informações pessoais para as finalidades de negócio descritas abaixo.',
      ],
      list: [
        'Prestar e operar o site público — legítimo interesse e/ou execução de serviço (LGPD, art. 7º, V e IX).',
        'Medir o uso agregado do site e melhorar conteúdo e chamadas à ação (incluindo Discord e links de jogos) — legítimo interesse (LGPD, art. 7º, IX).',
        'Cumprir a lei aplicável e responder a solicitações legais — obrigação legal (LGPD, art. 7º, II).',
      ],
    },
    {
      id: 'cookies',
      title: '8. Cookies e tecnologias semelhantes',
      paragraphs: [
        'O site público de produção não define cookies essenciais de sessão ou autenticação. O armazenamento local pode guardar preferências de interface não sensíveis (idioma e tema). Você pode limpar o armazenamento local nas configurações do navegador; isso redefinirá essas preferências.',
        'O rastreador de analytics Umami, conforme configurado neste site, não usa cookies de analytics. Incorporações de terceiros (veja a seção 9) podem definir cookies próprios sob suas políticas quando você interage com elas.',
      ],
    },
    {
      id: 'sharing',
      title: '9. Compartilhamento e terceiros',
      paragraphs: [
        'Não vendemos nem compartilhamos seus dados pessoais para publicidade comportamental em contexto cruzado, conforme definido nas leis de privacidade da Califórnia e de outros estados dos EUA. Se seu navegador enviar um sinal Global Privacy Control (GPC), tratamos como pedido de exclusão de venda ou compartilhamento; como não vendemos nem compartilhamos dados para esses fins, o sinal não altera nossas práticas padrão.',
        'Podemos envolver as categorias abaixo quando necessário para operar o site público:',
      ],
      list: [
        'Umami Cloud — provedor de analytics com foco em privacidade (região UE para nosso site). O Umami trata eventos de analytics conforme a seção 4. Consulte também a documentação e materiais de privacidade do Umami.',
        'Provedores de hospedagem e CDN (atualmente Vercel e infraestrutura relacionada) — entregam o site estático e podem tratar metadados de conexão em trânsito sob seus termos e salvaguardas.',
        'Discord, Inc. — o site pode incorporar o widget oficial do servidor Discord e links de convite. Interagir com o widget ou o convite é uma conexão separada de terceiro regida pela política de privacidade e pelos termos do Discord, não pela configuração de analytics do Zen.',
        'Editoras oficiais de jogos e outros sites externos — ao seguir links de jogos ou redes sociais, esses destinos tratam dados sob suas próprias políticas.',
        'Exigências legais e segurança — quando exigido por lei, ordem judicial ou para proteger direitos, segurança e integridade.',
      ],
    },
    {
      id: 'transfers',
      title: '10. Transferências internacionais',
      paragraphs: [
        'O Zen Web é operado a partir do Brasil e usa provedores que podem tratar dados na União Europeia (região do Umami Cloud para este site), nos Estados Unidos ou em outros países (por exemplo infraestrutura de hospedagem). Quando dados pessoais são transferidos para fora do Brasil, adotamos salvaguardas adequadas nos termos do art. 33 da LGPD, como cláusulas contratuais padrão, compromissos dos provedores e necessidade para operação do serviço, salvo hipóteses de dispensa.',
        'Se você reside na Califórnia, não "vendemos" informações pessoais. Também não "compartilhamos" informações pessoais para publicidade comportamental em contexto cruzado.',
      ],
    },
    {
      id: 'retention',
      title: '11. Retenção de dados',
      paragraphs: [
        'Retemos dados pessoais apenas pelo tempo necessário às finalidades desta política, salvo prazo maior exigido por lei.',
      ],
      list: [
        'Eventos de analytics no Umami Cloud — retidos por seis (6) meses na configuração do plano Hobby atual.',
        'Preferências no localStorage do navegador — retidas até você limpá-las no navegador.',
        'Metadados de conexão em provedores de infraestrutura — retidos apenas pelo tempo exigido por esses provedores para operar seus serviços, sob suas políticas.',
      ],
    },
    {
      id: 'security',
      title: '12. Segurança',
      paragraphs: [
        'Adotamos medidas técnicas e organizacionais proporcionais ao risco de um site estático público, incluindo HTTPS em produção e limitação de analytics a medições agregadas sem cookies sempre que possível. Nenhum método de transmissão ou armazenamento é totalmente seguro; não podemos garantir segurança absoluta.',
        'Se tomarmos conhecimento de incidente de segurança com probabilidade de afetar seus direitos ou liberdades, adotaremos medidas razoáveis para notificar os titulares afetados e, quando exigido por lei, a ANPD ou outras autoridades.',
      ],
    },
    {
      id: 'rights-requests',
      title: '13. Como exercer seus direitos',
      paragraphs: [
        'Pedidos de privacidade (acesso, correção, exclusão, portabilidade e direitos semelhantes) são tratados manualmente. Envie e-mail para privacy@zenclan.lat com informações suficientes para verificar sua identidade e descrever o pedido. Como o site público não mantém contas de usuário, muitos pedidos se referirão a analytics ou correspondência, e não a um perfil de conta.',
      ],
    },
    {
      id: 'rights-lgpd',
      title: '14. Seus direitos na LGPD (Brasil)',
      paragraphs: [
        'Se você está no Brasil ou seus dados são tratados sob a LGPD, você tem os direitos do art. 18, sujeitos às exceções legais:',
      ],
      list: [
        'Confirmação da existência de tratamento e acesso aos seus dados.',
        'Correção de dados incompletos, inexatos ou desatualizados.',
        'Anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade.',
        'Portabilidade dos dados a outro fornecedor de serviço, quando aplicável e regulamentado.',
        'Informação sobre entidades com as quais compartilhamos seus dados.',
        'Informação sobre a possibilidade de não consentir e as consequências da negativa.',
        'Revogação do consentimento, quando o tratamento se basear em consentimento.',
        'Oposição a tratamento realizado com base em outras hipóteses legais, quando aplicável.',
      ],
    },
    {
      id: 'rights-lgpd-contact',
      title: '',
      paragraphs: [
        'Para exercer esses direitos, envie e-mail para privacy@zenclan.lat. Responderemos nos prazos da LGPD (em geral até 15 dias, prorrogáveis conforme a lei). Você também pode registrar reclamação na Autoridade Nacional de Proteção de Dados (ANPD): https://www.gov.br/anpd',
      ],
    },
    {
      id: 'rights-us',
      title: '15. Direitos de privacidade nos estados dos EUA',
      paragraphs: [
        'Conforme seu estado de residência, você pode ter direitos adicionais sobre suas informações pessoais. Atendemos os direitos aplicáveis a residentes da Califórnia, Virgínia, Colorado, Connecticut, Utah e outros estados com leis abrangentes de privacidade, na medida em que se aplicam ao nosso tratamento.',
      ],
      list: [
        'Direito de saber / acessar — categorias de informações coletadas, fontes, finalidades e destinatários.',
        'Direito de excluir — solicitar exclusão das informações que coletamos de você, sujeito a exceções legais.',
        'Direito de corrigir — solicitar correção de informações inexatas.',
        'Direito de optar por não participar — não vendemos informações pessoais nem as compartilhamos para publicidade comportamental em contexto cruzado.',
        'Direito de limitar o uso de informações pessoais sensíveis — não usamos informações pessoais sensíveis para perfilamento ou marketing.',
        'Direito à não discriminação — não discriminaremos você por exercer direitos de privacidade.',
        'Agente autorizado — você pode designar um agente autorizado para enviar solicitações, quando permitido por lei, com comprovação de autorização.',
      ],
    },
    {
      id: 'rights-us-contact',
      title: '',
      paragraphs: [
        'Para solicitações de privacidade nos EUA, envie e-mail para privacy@zenclan.lat com "Privacy Request" no assunto e seu estado de residência. Verificaremos a solicitação e responderemos no prazo exigido pela lei aplicável (por exemplo, 45 dias na CCPA/CPRA, com prorrogações permitidas). Se negarmos um pedido, você pode recorrer respondendo ao nosso e-mail de resposta; se o recurso for negado, poderá contatar o Procurador-Geral do seu estado, quando aplicável.',
        'Residentes da Califórnia também podem solicitar, uma vez por ano, informações sobre divulgações a terceiros para marketing direto (lei "Shine the Light"). Não divulgamos informações pessoais a terceiros para marketing direto próprio.',
      ],
    },
    {
      id: 'children',
      title: '16. Privacidade de crianças',
      paragraphs: [
        'O Zen Web não se destina a crianças menores de 13 anos (ou menores de 16 quando a lei local exigir idade superior, incluindo certas interpretações da LGPD para menores). Não coletamos intencionalmente dados pessoais de crianças. Se acreditar que uma criança nos forneceu dados, contate privacy@zenclan.lat e tomaremos medidas para excluí-los quando aplicável.',
      ],
    },
    {
      id: 'automated',
      title: '17. Decisões automatizadas',
      paragraphs: [
        'Não usamos dados pessoais para tomar decisões automatizadas que produzam efeitos legais ou impactos significativos semelhantes sobre você.',
      ],
    },
    {
      id: 'changes',
      title: '18. Alterações nesta política',
      paragraphs: [
        'Podemos atualizar esta Política de Privacidade periodicamente. A data de "Última atualização" no topo indica a revisão mais recente. Alterações relevantes serão publicadas nesta página. O uso continuado do site após a vigência das alterações constitui ciência da política atualizada, exceto quando consentimento adicional for exigido por lei.',
      ],
    },
    {
      id: 'contact',
      title: '19. Contato',
      paragraphs: [
        'Para dúvidas de privacidade, solicitações sob a LGPD, solicitações de privacidade nos EUA ou contato com nosso Encarregado de Dados:',
        'E-mail: privacy@zenclan.lat',
        'Site: https://www.zenclan.lat/privacy',
      ],
    },
  ],
}

export const privacyCatalogs = {
  'en-US': enUS,
  'pt-BR': ptBR,
} as const

export function getPrivacyContent(locale: keyof typeof privacyCatalogs): PrivacyContent {
  return privacyCatalogs[locale]
}
