'use client'
import { useEffect, useRef, useState } from 'react'
import { useLang } from './LanguageProvider'

const galleryItems = [
  {
    src: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=900&q=85',
    alt: 'Gala',
    captionFr: 'Soirée de Gala · Paris',
    captionEn: 'Gala Evening · Paris',
    className: 'gal-item g-large reveal-up',
    delay: undefined,
  },
  {
    src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=85',
    alt: 'Salon',
    captionFr: 'Salon International',
    captionEn: 'International Fair',
    className: 'gal-item reveal-up',
    delay: '.05s',
  },
  {
    src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=85',
    alt: 'Event',
    captionFr: 'Événement Corporate',
    captionEn: 'Corporate Event',
    className: 'gal-item reveal-up',
    delay: '.1s',
  },
  {
    src: 'https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=600&q=85',
    alt: 'Accueil VIP',
    captionFr: 'Accueil VIP',
    captionEn: 'VIP Welcome',
    className: 'gal-item g-tall reveal-up',
    delay: '.15s',
  },
  {
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=85',
    alt: 'Dîner',
    captionFr: 'Dîner de Prestige',
    captionEn: 'Prestige Dinner',
    className: 'gal-item reveal-up',
    delay: '.2s',
  },
  {
    src: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&q=85',
    alt: 'Cocktail',
    captionFr: 'Cocktail Privé',
    captionEn: 'Private Cocktail',
    className: 'gal-item reveal-up',
    delay: '.25s',
  },
]

export default function Gallery() {
  const { t } = useLang()
  const sectionRef = useRef<HTMLElement>(null)
  const [lightbox, setLightbox] = useState<{ src: string; caption: string } | null>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const els = section.querySelectorAll('.reveal-up')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('in') }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (lightbox) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [lightbox])

  return (
    <section className="gallery section" id="gallery" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal-up">
          <div className="stag">{t('Galerie', 'Gallery')}</div>
          <h2 className="stitle center">{t("L'Univers Emma Shine", 'The Emma Shine World')}</h2>
          <div className="gline center" />
        </div>
        <div className="gal-grid">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className={item.className}
              style={item.delay ? { '--d': item.delay } as React.CSSProperties : undefined}
              onClick={() => setLightbox({ src: item.src, caption: t(item.captionFr, item.captionEn) })}
            >
              <img src={item.src} alt={item.alt} />
              <div className="gal-caption">
                <span>{t(item.captionFr, item.captionEn)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,.96)',
            zIndex: 9000,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
            cursor: 'pointer',
            animation: 'lbIn .3s ease',
          }}
          onClick={() => setLightbox(null)}
        >
          <img
            src={lightbox.src}
            style={{ maxWidth: '90vw', maxHeight: '80vh', objectFit: 'contain', boxShadow: '0 40px 100px rgba(0,0,0,.8)' }}
            alt={lightbox.caption}
          />
          <p style={{ fontSize: '.7rem', letterSpacing: '.3em', textTransform: 'uppercase', color: 'var(--g)' }}>
            {lightbox.caption} &nbsp;·&nbsp; {t('cliquer pour fermer', 'click to close')}
          </p>
        </div>
      )}
    </section>
  )
}
