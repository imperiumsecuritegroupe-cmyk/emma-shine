'use client'
import { useEffect, useRef } from 'react'
import { useLang } from './LanguageProvider'

export default function Services() {
  const { t } = useLang()
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const els = section.querySelectorAll('.reveal-up, .reveal-left, .reveal-right')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('in') }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="services section" id="services" ref={sectionRef}>
      <div className="svc-deco-left" />
      <div className="svc-deco-right" />
      <div className="container">
        <div className="section-header reveal-up">
          <div className="stag">{t('Nos Expertises', 'Our Expertise')}</div>
          <h2 className="stitle center">{t('Des Prestations Sur-Mesure', 'Tailor-Made Services')}</h2>
          <div className="gline center" />
          <p className="ssub">{t(
            'Six pôles d\'excellence pour répondre à tous vos besoins événementiels, en France et à travers l\'Europe.',
            'Six poles of excellence to meet all your event needs, in France and across Europe.'
          )}</p>
        </div>
        <div className="svc-grid">

          <div className="svc-card reveal-up">
            <div className="svc-top">
              <div className="svc-num">01</div>
              <div className="svc-icon">
                <svg viewBox="0 0 56 56" fill="none"><path d="M28 8C19.163 8 12 15.163 12 24c0 5.6 2.88 10.52 7.24 13.44L28 48l8.76-10.56C41.12 34.52 44 29.6 44 24c0-8.837-7.163-16-16-16z" stroke="currentColor" strokeWidth="1.5"/><circle cx="28" cy="24" r="5" stroke="currentColor" strokeWidth="1.5"/></svg>
              </div>
            </div>
            <h3>{t('Salons & Congrès', 'Trade Shows & Congresses')}</h3>
            <p>{t(
              'Hôtesses et hôtes professionnels pour vos salons professionnels, congrès scientifiques et foires commerciales. Accueil, orientation, gestion des badges et représentation de marque au plus haut niveau.',
              'Professional hostesses and hosts for your trade shows, scientific congresses and commercial fairs. Welcome, guidance, badge management and top-level brand representation.'
            )}</p>
            <div className="svc-tags">
              <span>{t('Paris Le Bourget', 'Paris Le Bourget')}</span>
              <span>Eurexpo Lyon</span>
              <span>{t('Parc des Expositions', 'Exhibition Centre')}</span>
            </div>
            <a href="#contact" className="svc-cta">{t('Demander un devis →', 'Request a quote →')}</a>
          </div>

          <div className="svc-card reveal-up" style={{ '--d': '.08s' } as React.CSSProperties}>
            <div className="svc-top">
              <div className="svc-num">02</div>
              <div className="svc-icon">
                <svg viewBox="0 0 56 56" fill="none"><path d="M14 42V22l14-14 14 14v20" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><rect x="22" y="30" width="12" height="12" stroke="currentColor" strokeWidth="1.5"/><path d="M10 42h36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </div>
            </div>
            <h3>{t('Soirées & Galas VIP', 'VIP Evenings & Galas')}</h3>
            <p>{t(
              'Pour vos dîners de prestige, soirées de gala et remises de prix, nos hôtes VIP incarnent l\'élégance absolue. Accueil des personnalités, gestion du protocole, placement des invités et coordination discrète.',
              'For your prestige dinners, gala evenings and award ceremonies, our VIP hosts embody absolute elegance. Welcome of personalities, protocol management, guest placement and discreet coordination.'
            )}</p>
            <div className="svc-tags">
              <span>Black Tie</span>
              <span>{t('Protocole international', 'International protocol')}</span>
              <span>VIP Management</span>
            </div>
            <a href="#contact" className="svc-cta">{t('Demander un devis →', 'Request a quote →')}</a>
          </div>

          <div className="svc-card reveal-up" style={{ '--d': '.16s' } as React.CSSProperties}>
            <div className="svc-top">
              <div className="svc-num">03</div>
              <div className="svc-icon">
                <svg viewBox="0 0 56 56" fill="none"><rect x="8" y="14" width="40" height="30" rx="3" stroke="currentColor" strokeWidth="1.5"/><path d="M8 22h40M20 14v8M36 14v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </div>
            </div>
            <h3>{t('Accueil Entreprise', 'Corporate Reception')}</h3>
            <p>{t(
              'Hôtesses permanentes ou ponctuelles pour l\'accueil de vos sièges sociaux, sites industriels et showrooms. La première impression laissée à vos visiteurs, clients et partenaires est notre responsabilité.',
              'Permanent or occasional hostesses for welcoming your headquarters, industrial sites and showrooms. The first impression left on your visitors, clients and partners is our responsibility.'
            )}</p>
            <div className="svc-tags">
              <span>{t('Mission longue durée', 'Long-term mission')}</span>
              <span>{t('Tenue personnalisée', 'Custom uniform')}</span>
            </div>
            <a href="#contact" className="svc-cta">{t('Demander un devis →', 'Request a quote →')}</a>
          </div>

          <div className="svc-card reveal-up" style={{ '--d': '.24s' } as React.CSSProperties}>
            <div className="svc-top">
              <div className="svc-num">04</div>
              <div className="svc-icon">
                <svg viewBox="0 0 56 56" fill="none"><circle cx="28" cy="20" r="9" stroke="currentColor" strokeWidth="1.5"/><path d="M12 48c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M40 14c2.2 1.6 4 4.2 4 8M44 28c4 2 8 6 8 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </div>
            </div>
            <h3>{t('Profils Multilingues', 'Multilingual Profiles')}</h3>
            <p>{t(
              'Hôtesses bilingues, trilingues et interprètes de liaison pour vos événements internationaux. Maîtrise courante de l\'anglais, espagnol, allemand, italien, portugais, arabe, mandarin et bien d\'autres langues.',
              'Bilingual, trilingual hostesses and liaison interpreters for your international events. Fluency in English, Spanish, German, Italian, Portuguese, Arabic, Mandarin and many more.'
            )}</p>
            <div className="svc-tags">
              <span>FR / EN / ES</span>
              <span>DE / IT / PT</span>
              <span>AR / ZH / …</span>
            </div>
            <a href="#contact" className="svc-cta">{t('Demander un devis →', 'Request a quote →')}</a>
          </div>

          <div className="svc-card reveal-up" style={{ '--d': '.32s' } as React.CSSProperties}>
            <div className="svc-top">
              <div className="svc-num">05</div>
              <div className="svc-icon">
                <svg viewBox="0 0 56 56" fill="none"><path d="M28 8l4 12h13l-10.5 8 4 12L28 33l-10.5 7 4-12L11 20h13z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>
              </div>
            </div>
            <h3>{t('Brand Ambassadors', 'Brand Ambassadors')}</h3>
            <p>{t(
              'Promotrices formées à vos produits et à votre identité de marque. Animation de stand, démonstrations, distributions d\'échantillons et expériences consommateurs hautement qualifiées pour maximiser votre impact.',
              'Promoters trained in your products and brand identity. Stand animation, demonstrations, sample distribution and highly qualified consumer experiences to maximise your impact.'
            )}</p>
            <div className="svc-tags">
              <span>{t('Formation produit', 'Product training')}</span>
              <span>{t('Reporting détaillé', 'Detailed reporting')}</span>
            </div>
            <a href="#contact" className="svc-cta">{t('Demander un devis →', 'Request a quote →')}</a>
          </div>

          <div className="svc-card reveal-up" style={{ '--d': '.4s' } as React.CSSProperties}>
            <div className="svc-top">
              <div className="svc-num">06</div>
              <div className="svc-icon">
                <svg viewBox="0 0 56 56" fill="none"><path d="M28 10c-7 0-14 4-14 12 0 10 14 24 14 24s14-14 14-24c0-8-7-12-14-12z" stroke="currentColor" strokeWidth="1.5"/><path d="M22 24l4 4 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>
            <h3>{t('Mariages & Événements Privés', 'Weddings & Private Events')}</h3>
            <p>{t(
              'Un mariage, un anniversaire, une réception privée mérite un accueil à la hauteur de ses ambitions. Nos hôtesses apportent une touche de raffinement inoubliable à vos célébrations les plus précieuses.',
              'A wedding, a birthday, a private reception deserves a welcome that matches its ambitions. Our hostesses bring an unforgettable touch of refinement to your most precious celebrations.'
            )}</p>
            <div className="svc-tags">
              <span>{t('Tenue au choix', 'Outfit of choice')}</span>
              <span>{t('Coordination incluse', 'Coordination included')}</span>
            </div>
            <a href="#contact" className="svc-cta">{t('Demander un devis →', 'Request a quote →')}</a>
          </div>

        </div>
      </div>
    </section>
  )
}
