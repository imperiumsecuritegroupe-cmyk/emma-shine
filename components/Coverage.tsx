'use client'
import { useEffect, useRef } from 'react'
import { useLang } from './LanguageProvider'

export default function Coverage() {
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
    <section className="coverage section" id="coverage" ref={sectionRef}>
      <div className="coverage-bg" />
      <div className="container">
        <div className="section-header reveal-up">
          <div className="stag">{t('Notre Présence', 'Our Presence')}</div>
          <h2 className="stitle center">{t('France Entière & Europe', 'All of France & Europe')}</h2>
          <div className="gline center" />
          <p className="ssub">{t(
            'Emma Shine intervient sur l\'ensemble du territoire français et dans plus de 20 pays européens. Où que soit votre événement, nous sommes là.',
            'Emma Shine operates across all of France and in more than 20 European countries. Wherever your event is, we are there.'
          )}</p>
        </div>
        <div className="coverage-grid">
          <div className="cov-zone reveal-left">
            <div className="cz-header">
              <div className="cz-flag">🇫🇷</div>
              <h3>{t('France', 'France')}</h3>
            </div>
            <div className="cz-cities">
              <div className="cz-city featured"><span className="cc-dot" />Paris <span className="cc-badge">{t('Siège', 'HQ')}</span></div>
              <div className="cz-city"><span className="cc-dot" />Lyon</div>
              <div className="cz-city"><span className="cc-dot" />Marseille</div>
              <div className="cz-city"><span className="cc-dot" />Bordeaux</div>
              <div className="cz-city"><span className="cc-dot" />Nice</div>
              <div className="cz-city"><span className="cc-dot" />Cannes</div>
              <div className="cz-city"><span className="cc-dot" />Monaco</div>
              <div className="cz-city"><span className="cc-dot" />Toulouse</div>
              <div className="cz-city"><span className="cc-dot" />Lille</div>
              <div className="cz-city"><span className="cc-dot" />Strasbourg</div>
              <div className="cz-city"><span className="cc-dot" />Nantes</div>
              <div className="cz-city"><span className="cc-dot" />Montpellier</div>
              <div className="cz-city plus">{t('+ tout le territoire', '+ entire territory')}</div>
            </div>
          </div>
          <div className="cov-map reveal-up" style={{ '--d': '.1s' } as React.CSSProperties}>
            <div className="map-visual">
              <div className="map-circle outer" />
              <div className="map-circle middle" />
              <div className="map-circle inner" />
              <div className="map-center">
                <span className="mc-logo">ES</span>
                <span className="mc-label">{t('Paris', 'Paris')}</span>
              </div>
              {/* France dots */}
              <div className="map-dot" style={{ '--x': '48%', '--y': '30%', '--s': '12px' } as React.CSSProperties} title="Paris" />
              <div className="map-dot" style={{ '--x': '52%', '--y': '45%', '--s': '9px' } as React.CSSProperties} title="Lyon" />
              <div className="map-dot" style={{ '--x': '45%', '--y': '60%', '--s': '8px' } as React.CSSProperties} title="Marseille" />
              <div className="map-dot" style={{ '--x': '35%', '--y': '52%', '--s': '8px' } as React.CSSProperties} title="Bordeaux" />
              <div className="map-dot" style={{ '--x': '30%', '--y': '40%', '--s': '7px' } as React.CSSProperties} title="Nantes" />
              <div className="map-dot" style={{ '--x': '55%', '--y': '22%', '--s': '7px' } as React.CSSProperties} title="Lille" />
              <div className="map-dot" style={{ '--x': '60%', '--y': '35%', '--s': '7px' } as React.CSSProperties} title="Strasbourg" />
              <div className="map-dot" style={{ '--x': '55%', '--y': '58%', '--s': '7px' } as React.CSSProperties} title="Nice" />
              {/* Europe dots */}
              <div className="map-dot europe" style={{ '--x': '38%', '--y': '18%', '--s': '10px' } as React.CSSProperties} title="Londres" />
              <div className="map-dot europe" style={{ '--x': '54%', '--y': '14%', '--s': '8px' } as React.CSSProperties} title="Amsterdam" />
              <div className="map-dot europe" style={{ '--x': '50%', '--y': '8%', '--s': '8px' } as React.CSSProperties} title="Bruxelles" />
              <div className="map-dot europe" style={{ '--x': '65%', '--y': '20%', '--s': '9px' } as React.CSSProperties} title="Francfort" />
              <div className="map-dot europe" style={{ '--x': '68%', '--y': '30%', '--s': '8px' } as React.CSSProperties} title="Munich" />
              <div className="map-dot europe" style={{ '--x': '65%', '--y': '48%', '--s': '9px' } as React.CSSProperties} title="Milan" />
              <div className="map-dot europe" style={{ '--x': '62%', '--y': '56%', '--s': '8px' } as React.CSSProperties} title="Rome" />
              <div className="map-dot europe" style={{ '--x': '30%', '--y': '58%', '--s': '9px' } as React.CSSProperties} title="Madrid" />
              <div className="map-dot europe" style={{ '--x': '40%', '--y': '68%', '--s': '8px' } as React.CSSProperties} title="Barcelone" />
              <div className="map-dot europe" style={{ '--x': '62%', '--y': '38%', '--s': '8px' } as React.CSSProperties} title="Genève" />
              <div className="map-dot europe" style={{ '--x': '72%', '--y': '18%', '--s': '7px' } as React.CSSProperties} title="Hambourg" />
              <div className="map-dot europe" style={{ '--x': '75%', '--y': '10%', '--s': '8px' } as React.CSSProperties} title="Copenhague" />
              <div className="map-dot europe" style={{ '--x': '78%', '--y': '25%', '--s': '8px' } as React.CSSProperties} title="Stockholm" />
              <div className="map-dot europe" style={{ '--x': '80%', '--y': '38%', '--s': '7px' } as React.CSSProperties} title="Varsovie" />
              <div className="map-dot europe" style={{ '--x': '22%', '--y': '35%', '--s': '7px' } as React.CSSProperties} title="Dublin" />
              {/* Labels */}
              <div className="map-label" style={{ '--x': '42%', '--y': '31%' } as React.CSSProperties}>Paris</div>
              <div className="map-label small" style={{ '--x': '30%', '--y': '16%' } as React.CSSProperties}>Londres</div>
              <div className="map-label small" style={{ '--x': '67%', '--y': '42%' } as React.CSSProperties}>Milan</div>
              <div className="map-label small" style={{ '--x': '22%', '--y': '51%' } as React.CSSProperties}>Madrid</div>
            </div>
            <div className="map-legend">
              <div className="ml-item"><span className="ml-dot france" /><span>{t('France (antennes locales)', 'France (local offices)')}</span></div>
              <div className="ml-item"><span className="ml-dot europe" /><span>{t('Europe (partenaires certifiés)', 'Europe (certified partners)')}</span></div>
            </div>
          </div>
          <div className="cov-zone reveal-right" style={{ '--d': '.2s' } as React.CSSProperties}>
            <div className="cz-header">
              <div className="cz-flag">🌍</div>
              <h3>{t('Europe', 'Europe')}</h3>
            </div>
            <div className="cz-cities">
              <div className="cz-city"><span className="cc-dot eu" />Londres</div>
              <div className="cz-city"><span className="cc-dot eu" />Bruxelles</div>
              <div className="cz-city"><span className="cc-dot eu" />Amsterdam</div>
              <div className="cz-city"><span className="cc-dot eu" />Milan</div>
              <div className="cz-city"><span className="cc-dot eu" />Madrid</div>
              <div className="cz-city"><span className="cc-dot eu" />Barcelone</div>
              <div className="cz-city"><span className="cc-dot eu" />Genève</div>
              <div className="cz-city"><span className="cc-dot eu" />Francfort</div>
              <div className="cz-city"><span className="cc-dot eu" />Munich</div>
              <div className="cz-city"><span className="cc-dot eu" />Copenhague</div>
              <div className="cz-city"><span className="cc-dot eu" />Stockholm</div>
              <div className="cz-city"><span className="cc-dot eu" />Varsovie</div>
              <div className="cz-city plus">{t('+ 10 pays supplémentaires', '+ 10 additional countries')}</div>
            </div>
          </div>
        </div>
        <div className="cov-cta reveal-up">
          <p>{t(
            'Votre événement est hors de ces villes ? Contactez-nous, nous intervenons partout.',
            'Your event is outside these cities? Contact us, we operate everywhere.'
          )}</p>
          <a href="#contact" className="btn-gold">{t('Vérifier la disponibilité', 'Check availability')}</a>
        </div>
      </div>
    </section>
  )
}
