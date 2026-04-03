'use client'
import { useEffect, useRef } from 'react'
import { useLang } from './LanguageProvider'

export default function Process() {
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
    <section className="process section" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal-up">
          <div className="stag">{t('Notre Méthode', 'Our Method')}</div>
          <h2 className="stitle center">{t('De votre Brief à l\'Événement', 'From Your Brief to the Event')}</h2>
          <div className="gline center" />
        </div>
        <div className="process-row">
          <div className="proc-step reveal-up">
            <div className="ps-num">01</div>
            <div className="ps-icon">
              <svg viewBox="0 0 40 40" fill="none"><path d="M8 32V16l12-10 12 10v16" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><rect x="15" y="22" width="10" height="10" stroke="currentColor" strokeWidth="1.5"/></svg>
            </div>
            <h4>{t('Brief & Analyse', 'Brief & Analysis')}</h4>
            <p>{t(
              'Vous nous partagez votre événement, vos attentes et votre image de marque. Nous analysons chaque détail.',
              'You share your event, expectations and brand image. We analyse every detail.'
            )}</p>
          </div>
          <div className="proc-connector reveal-up" style={{ '--d': '.1s' } as React.CSSProperties}>
            <span />
          </div>
          <div className="proc-step reveal-up" style={{ '--d': '.1s' } as React.CSSProperties}>
            <div className="ps-num">02</div>
            <div className="ps-icon">
              <svg viewBox="0 0 40 40" fill="none"><circle cx="20" cy="16" r="7" stroke="currentColor" strokeWidth="1.5"/><path d="M8 34c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </div>
            <h4>{t('Sélection des Profils', 'Profile Selection')}</h4>
            <p>{t(
              'Parmi nos 150+ profils certifiés, nous vous proposons une shortlist correspondant exactement à vos critères.',
              'From our 150+ certified profiles, we propose a shortlist matching exactly your criteria.'
            )}</p>
          </div>
          <div className="proc-connector reveal-up" style={{ '--d': '.2s' } as React.CSSProperties}>
            <span />
          </div>
          <div className="proc-step reveal-up" style={{ '--d': '.2s' } as React.CSSProperties}>
            <div className="ps-num">03</div>
            <div className="ps-icon">
              <svg viewBox="0 0 40 40" fill="none"><path d="M10 20h20M10 14h20M10 26h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </div>
            <h4>{t('Validation & Briefing', 'Validation & Briefing')}</h4>
            <p>{t(
              'Vous validez votre équipe. Nous assurons un briefing approfondi sur votre marque, le protocole et les missions.',
              'You validate your team. We provide in-depth briefing on your brand, protocol and missions.'
            )}</p>
          </div>
          <div className="proc-connector reveal-up" style={{ '--d': '.3s' } as React.CSSProperties}>
            <span />
          </div>
          <div className="proc-step reveal-up" style={{ '--d': '.3s' } as React.CSSProperties}>
            <div className="ps-num">04</div>
            <div className="ps-icon">
              <svg viewBox="0 0 40 40" fill="none"><path d="M20 6l3.5 10H34l-8.5 6.5 3.5 10L20 26l-9 6.5 3.5-10L6 16h10.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>
            </div>
            <h4>{t('Jour J & Suivi', 'Event Day & Follow-up')}</h4>
            <p>{t(
              "Votre équipe est irréprochable. Un coordinateur Emma Shine, fort d'une solide expérience terrain, est disponible en temps réel tout au long de votre événement.",
              "Your team is impeccable. An Emma Shine coordinator, with solid field experience, is available in real time throughout your event."
            )}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
