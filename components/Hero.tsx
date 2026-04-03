'use client'
import { useEffect, useRef, useState } from 'react'
import { useLang } from './LanguageProvider'

const slides = [
  "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=1920&q=85",
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&q=85",
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=85",
]

export default function Hero() {
  const { t } = useLang()
  const [currentSlide, setCurrentSlide] = useState(0)
  const particlesRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const goSlide = (n: number) => {
    setCurrentSlide((n + slides.length) % slides.length)
  }

  // Slideshow auto-advance
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5500)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  // Particles
  useEffect(() => {
    const pc = particlesRef.current
    if (!pc) return

    const particles: HTMLDivElement[] = []
    const timeouts: ReturnType<typeof setTimeout>[] = []

    function mkParticle() {
      if (!pc) return
      const p = document.createElement('div')
      p.className = 'particle'
      const s = 1 + Math.random() * 2.5
      p.style.cssText = `left:${Math.random() * 100}%;width:${s}px;height:${s}px;animation-duration:${7 + Math.random() * 10}s;animation-delay:${Math.random() * 4}s`
      pc.appendChild(p)
      particles.push(p)
      const t = setTimeout(() => {
        p.remove()
        const idx = particles.indexOf(p)
        if (idx > -1) particles.splice(idx, 1)
      }, 20000)
      timeouts.push(t)
    }

    for (let i = 0; i < 36; i++) {
      const t = setTimeout(mkParticle, Math.random() * 4000)
      timeouts.push(t)
    }
    const interval = setInterval(mkParticle, 700)

    return () => {
      clearInterval(interval)
      timeouts.forEach(clearTimeout)
      particles.forEach((p) => p.remove())
    }
  }, [])

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="hero">
      <div className="hero-slideshow" id="heroSlideshow">
        {slides.map((src, i) => (
          <div
            key={i}
            className={`slide${currentSlide === i ? ' active' : ''}`}
            style={{ backgroundImage: `url('${src}')` }}
          />
        ))}
      </div>
      <div className="hero-overlay" />
      <div className="hero-particles" id="particles" ref={particlesRef} />

      <div className="hero-content">
        <div className="hero-logo-brand reveal-hero">
          <img src="/emma-shine-logo.svg" alt="Emma Shine" className="hero-logo-svg" />
        </div>
        <div className="hero-eyebrow reveal-hero">
          <span className="eyebrow-line" />
          <span dangerouslySetInnerHTML={{ __html: t('Nouvelle agence du Groupe Imperium · France &amp; Europe', 'New agency of the Imperium Group · France &amp; Europe') }} />
          <span className="eyebrow-line" />
        </div>
        <h1 className="hero-title reveal-hero">
          <span className="ht-1">{t("L'Excellence", 'Excellence')}</span>
          <span className="ht-2">{t('à votre Service', 'at Your Service')}</span>
        </h1>
        <p className="hero-desc reveal-hero" dangerouslySetInnerHTML={{ __html: t(
          'Hôtesses &amp; Hôtes d\'accueil d\'exception pour vos événements professionnels et privés,<br>partout en France et en Europe.',
          'Exceptional hostesses &amp; hosts for your professional and private events, across France and Europe.'
        ) }} />
        <div className="hero-ctas reveal-hero">
          <a href="#contact" className="btn-gold">{t('Obtenir un devis', 'Get a quote')}</a>
          <a href="#services" className="btn-ghost">{t('Découvrir nos services', 'Discover our services')}</a>
        </div>
        <div className="hero-trust reveal-hero">
          <div className="trust-item">
            <span className="trust-num">10<sup>+</sup></span>
            <span>{t("Ans d'expérience dans nos équipes", 'Years of experience in our teams')}</span>
          </div>
          <div className="trust-sep" />
          <div className="trust-item">
            <span className="trust-num">150<sup>+</sup></span>
            <span>{t('Profils qualifiés disponibles', 'Qualified profiles available')}</span>
          </div>
          <div className="trust-sep" />
          <div className="trust-item">
            <span className="trust-num">20<sup>+</sup></span>
            <span>{t('Pays couverts en Europe', 'Countries covered in Europe')}</span>
          </div>
        </div>
      </div>

      <div className="hero-slide-ctrl">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`slide-dot${currentSlide === i ? ' active' : ''}`}
            data-idx={i}
            onClick={() => goSlide(i)}
          />
        ))}
      </div>
      <div className="hero-scroll-cue" onClick={scrollToAbout}>
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>{t('Défiler', 'Scroll')}</span>
      </div>
    </section>
  )
}
