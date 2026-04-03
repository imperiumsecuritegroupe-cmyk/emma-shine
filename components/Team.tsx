'use client'
import { useEffect, useRef } from 'react'
import { useLang } from './LanguageProvider'

const teamMembers = [
  {
    name: 'Sofia M.',
    location: 'Paris · Monaco · Cannes',
    img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=85',
    langs: ['FR', 'EN', 'IT'],
    specFr: 'Hôtesse VIP · Protocole',
    specEn: 'VIP Hostess · Protocol',
    expFr: "7 ans d'expérience",
    expEn: '7 years experience',
    delay: '0s',
  },
  {
    name: 'Camille R.',
    location: 'Paris · Bordeaux · Madrid',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=85',
    langs: ['FR', 'EN', 'ES'],
    specFr: 'Brand Ambassador',
    specEn: 'Brand Ambassador',
    expFr: "5 ans d'expérience",
    expEn: '5 years experience',
    delay: '.1s',
  },
  {
    name: 'Emma L.',
    location: 'Lyon · Francfort · Berlin',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=85',
    langs: ['FR', 'EN', 'DE'],
    specFr: 'Hôtesse Événementielle',
    specEn: 'Event Hostess',
    expFr: "4 ans d'expérience",
    expEn: '4 years experience',
    delay: '.2s',
  },
  {
    name: 'Jade K.',
    location: 'Paris · Bruxelles · Amsterdam',
    img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&q=85',
    langs: ['FR', 'EN', 'NL'],
    specFr: 'Hôtesse Salon · Trilingue',
    specEn: 'Trade Show · Trilingual',
    expFr: "6 ans d'expérience",
    expEn: '6 years experience',
    delay: '.3s',
  },
]

export default function Team() {
  const { t } = useLang()
  const sectionRef = useRef<HTMLElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)

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

  // Counter animation for team-bottom stats
  useEffect(() => {
    const bottom = bottomRef.current
    if (!bottom) return
    const counterEls = bottom.querySelectorAll<HTMLElement>('[data-target]')

    function countUp(el: HTMLElement) {
      const target = Number(el.dataset.target)
      const dur = 2000
      const start = performance.now()
      const tick = (now: number) => {
        const p = Math.min((now - start) / dur, 1)
        el.textContent = String(Math.floor((1 - Math.pow(1 - p, 3)) * target))
        if (p < 1) requestAnimationFrame(tick)
        else el.textContent = String(target)
      }
      requestAnimationFrame(tick)
    }

    const co = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          countUp(e.target as HTMLElement)
          co.unobserve(e.target)
        }
      }),
      { threshold: 0.5 }
    )
    counterEls.forEach((el) => co.observe(el))
    return () => co.disconnect()
  }, [])

  return (
    <section className="team section" id="team" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal-up">
          <div className="stag">{t('Nos Talents', 'Our Talents')}</div>
          <h2 className="stitle center">{t("Des Profils d'Exception", 'Exceptional Profiles')}</h2>
          <div className="gline center" />
          <p className="ssub">{t(
            "Nos hôtesses et hôtes sont des professionnels aguerris, issus du monde de l'événementiel haut de gamme, rigoureusement sélectionnés pour leur expérience, leur présentation et leur maîtrise des codes du luxe.",
            "Our hostesses and hosts are seasoned professionals from the high-end events world, rigorously selected for their experience, presentation and mastery of luxury codes."
          )}</p>
        </div>
        <div className="team-grid">
          {teamMembers.map((m, i) => (
            <div
              key={i}
              className="team-card reveal-up"
              style={{ '--d': m.delay } as React.CSSProperties}
            >
              <div className="tc-img">
                <img src={m.img} alt={m.name} />
                <div className="tc-overlay">
                  <div className="tc-langs">
                    {m.langs.map((l) => <span key={l}>{l}</span>)}
                  </div>
                  <p className="tc-spec">{t(m.specFr, m.specEn)}</p>
                  <p className="tc-exp">{t(m.expFr, m.expEn)}</p>
                </div>
              </div>
              <div className="tc-info">
                <h4>{m.name}</h4>
                <span>{m.location}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="team-bottom reveal-up" ref={bottomRef}>
          <div className="tb-stat">
            <span><span data-target="150">150</span><sup>+</sup></span>
            <p>{t('Profils disponibles', 'Available profiles')}</p>
          </div>
          <div className="tb-stat">
            <span><span data-target="10">10</span><sup>+</sup></span>
            <p>{t("Ans d'expérience en moyenne", 'Average years of experience')}</p>
          </div>
          <div className="tb-stat">
            <span><span data-target="15">15</span><sup>+</sup></span>
            <p>{t('Langues maîtrisées', 'Languages mastered')}</p>
          </div>
          <a href="#contact" className="btn-gold">{t('Consulter les profils disponibles', 'Browse available profiles')}</a>
        </div>
      </div>
    </section>
  )
}
