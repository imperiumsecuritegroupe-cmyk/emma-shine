'use client'
import { useEffect, useRef } from 'react'
import { useLang } from './LanguageProvider'

export default function About() {
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
    <section className="about section" id="about" ref={sectionRef}>
      <div className="container">
        <div className="about-grid">
          <div className="about-media reveal-left">
            <div className="am-main">
              <img src="https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=900&q=85" alt="Emma Shine" />
              <div className="am-frame" />
            </div>
            <div className="am-secondary">
              <img src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=600&q=85" alt="Équipe" />
            </div>
            <div className="am-badge">
              <div className="amb-inner">
                <span className="amb-num" style={{ fontSize: '1.4rem', letterSpacing: '-.02em' }}>GROUPE</span>
                <span className="amb-label">Imperium</span>
              </div>
            </div>
          </div>
          <div className="about-body reveal-right">
            <div className="stag">{t('Qui sommes-nous', 'Who we are')}</div>
            <h2 className="stitle">{t('Une Nouvelle Agence, une Expérience Éprouvée', 'A New Agency, a Proven Experience')}</h2>
            <div className="gline" />
            <p>{t(
              "Emma Shine est une agence nouvellement créée, fière d'appartenir au Groupe Imperium. Si notre enseigne est jeune, notre savoir-faire, lui, ne l'est pas : nos équipes réunissent des professionnels de l'accueil haut de gamme forts de plusieurs années d'expérience terrain dans les domaines de l'événementiel, du protocole et du luxe.",
              "Emma Shine is a newly created agency, proud to be part of the Imperium Group. While our brand is young, our expertise is not: our teams bring together premium hospitality professionals with several years of hands-on experience in events, protocol and luxury."
            )}</p>
            <p>{t(
              "Portés par la vision et les ressources du Groupe Imperium, nous apportons à chaque client une qualité de prestation immédiatement au niveau des plus grandes agences, avec la réactivité et l'attention d'une structure à taille humaine entièrement dédiée à votre satisfaction.",
              "Backed by the vision and resources of the Imperium Group, we bring every client a quality of service immediately on par with the biggest agencies, with the responsiveness and attention of a human-sized structure entirely dedicated to your satisfaction."
            )}</p>
            <div className="about-pillars">
              <div className="pillar">
                <div className="pillar-icon">✦</div>
                <div>
                  <strong>{t('Adossée au Groupe Imperium', 'Backed by the Imperium Group')}</strong>
                  <span>{t("Ressources, réseau et standards d'excellence du groupe", "Group resources, network and standards of excellence")}</span>
                </div>
              </div>
              <div className="pillar">
                <div className="pillar-icon">✦</div>
                <div>
                  <strong>{t('Équipes Expérimentées', 'Experienced Teams')}</strong>
                  <span>{t("Nos profils cumulent des années d'expérience en accueil", "Our profiles combine years of hospitality experience")}</span>
                </div>
              </div>
              <div className="pillar">
                <div className="pillar-icon">✦</div>
                <div>
                  <strong>{t('Couverture France & Europe', 'France & Europe Coverage')}</strong>
                  <span>{t("Déployés sur l'ensemble du territoire et en Europe", "Deployed across the entire territory and in Europe")}</span>
                </div>
              </div>
              <div className="pillar">
                <div className="pillar-icon">✦</div>
                <div>
                  <strong>{t('Ambition Sans Compromis', 'Ambition Without Compromise')}</strong>
                  <span>{t("La fraîcheur d'une nouvelle structure, l'excellence d'une grande agence", "The freshness of a new structure, the excellence of a major agency")}</span>
                </div>
              </div>
            </div>
            <a href="#contact" className="btn-gold">{t('Travailler avec nous', 'Work with us')}</a>
          </div>
        </div>
      </div>
    </section>
  )
}
