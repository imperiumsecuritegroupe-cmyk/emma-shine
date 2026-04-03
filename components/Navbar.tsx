'use client'
import { useEffect, useRef, useState } from 'react'
import { useLang } from './LanguageProvider'

export default function Navbar() {
  const { lang, toggle, t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar" ref={navRef}>
      <div className="nav-container">
        <a href="#hero" className="nav-logo">
          <img src="/emma-shine-logo.svg" alt="Emma Shine" className="nav-logo-svg" />
        </a>
        <ul className={`nav-links${menuOpen ? ' open' : ''}`} id="navLinks">
          <li><a href="#about" onClick={closeMenu}>{t("L'Agence", 'Agency')}</a></li>
          <li><a href="#services" onClick={closeMenu}>{t('Prestations', 'Services')}</a></li>
          <li><a href="#team" onClick={closeMenu}>{t('Nos Profils', 'Profiles')}</a></li>
          <li><a href="#coverage" onClick={closeMenu}>{t('Couverture', 'Coverage')}</a></li>
          <li><a href="#contact" onClick={closeMenu}>{t('Contact', 'Contact')}</a></li>
        </ul>
        <div className="nav-right">
          <button className="lang-toggle" onClick={toggle} aria-label="Toggle language">
            {lang === 'fr' ? 'EN' : 'FR'}
          </button>
          <a href="#contact" className="nav-cta">
            {t('Demande de devis', 'Get a quote')}
          </a>
          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            id="hamburger"
            aria-label="Menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  )
}
