'use client'
import { useEffect, useRef } from 'react'
import { useLang } from './LanguageProvider'

export default function Loader() {
  const { t } = useLang()
  const loaderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const loader = loaderRef.current
    if (!loader) return

    document.body.style.overflow = 'hidden'

    const timer = setTimeout(() => {
      loader.classList.add('gone')
      document.body.style.overflow = ''

      // Trigger hero animations
      const heroEls = document.querySelectorAll('.hero-content .reveal-hero')
      heroEls.forEach((el, i) => {
        setTimeout(() => el.classList.add('in'), 200 + i * 130)
      })
    }, 2400)

    return () => {
      clearTimeout(timer)
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <div className="loader" id="loader" ref={loaderRef}>
      <div className="loader-inner">
        <div className="loader-logo">
          <img src="/emma-shine-logo.svg" alt="Emma Shine" className="loader-logo-svg" />
        </div>
        <div className="loader-bar">
          <div className="loader-fill" />
        </div>
        <p className="loader-group">{t('Une société du Groupe Imperium', 'A company of the Imperium Group')}</p>
        <p className="loader-text">{t('L\'excellence en marche…', 'Excellence in motion…')}</p>
      </div>
    </div>
  )
}
