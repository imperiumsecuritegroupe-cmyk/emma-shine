'use client'
import { useEffect, useRef } from 'react'
import { useLang } from './LanguageProvider'

export default function ParallaxQuote() {
  const { t } = useLang()
  const bgRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const bg = bgRef.current
    const section = sectionRef.current
    if (!bg || !section) return

    const onScroll = () => {
      const r = section.getBoundingClientRect()
      bg.style.transform = `translateY(${-r.top * 0.28}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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

  return (
    <section className="pq-section" ref={sectionRef}>
      <div
        className="pq-bg"
        ref={bgRef}
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1920&q=85')" }}
      />
      <div className="pq-overlay" />
      <div className="pq-content reveal-up">
        <div className="pq-icon">&ldquo;</div>
        <blockquote>{t(
          "L'élégance n'est pas d'être remarquée, c'est d'être mémorable.",
          "Elegance is not about being noticed, it is about being remembered."
        )}</blockquote>
        <cite>— Giorgio Armani</cite>
        <div className="pq-stats">
          <div>
            <span>10<sup>+</sup></span>
            <p>{t("Ans d'expérience dans nos équipes", 'Years of team experience')}</p>
          </div>
          <div className="pqs-div" />
          <div>
            <span>150<sup>+</sup></span>
            <p>{t('Profils disponibles', 'Available profiles')}</p>
          </div>
          <div className="pqs-div" />
          <div>
            <span>20<sup>+</sup></span>
            <p>{t('Pays couverts', 'Countries covered')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
