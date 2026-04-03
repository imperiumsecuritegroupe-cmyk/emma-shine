'use client'
import { useLang } from './LanguageProvider'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className="footer">
      <div className="footer-body">
        <div className="container footer-grid">
          <div className="fg-brand">
            <div className="footer-logo">
              <img src="/emma-shine-logo.svg" alt="Emma Shine" className="footer-logo-svg" />
            </div>
            <p>{t(
              "Nouvelle agence d'accueil haut de gamme du Groupe Imperium, présente dans toute la France et en Europe. Des équipes expérimentées, une ambition sans limite.",
              "New premium hospitality agency of the Imperium Group, present throughout France and Europe. Experienced teams, limitless ambition."
            )}</p>
            <div className="fg-social">
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="3"/><path d="M7 10v7M7 7v.01M11 10v7M11 13a2 2 0 014 0v4"/></svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 2h-3a4 4 0 00-4 4v3H8v4h3v8h4v-8h3l1-4h-4V6a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="#" aria-label="TikTok">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 12a4 4 0 104 4V4a5 5 0 005 5"/></svg>
              </a>
            </div>
          </div>
          <div className="fg-col">
            <h6>{t('Prestations', 'Services')}</h6>
            <ul>
              <li><a href="#services">{t('Salons & Congrès', 'Trade Shows')}</a></li>
              <li><a href="#services">{t('Soirées & Galas VIP', 'VIP Galas')}</a></li>
              <li><a href="#services">{t('Accueil Entreprise', 'Corporate Reception')}</a></li>
              <li><a href="#services">{t('Profils Multilingues', 'Multilingual Profiles')}</a></li>
              <li><a href="#services">{t('Brand Ambassadors', 'Brand Ambassadors')}</a></li>
              <li><a href="#services">{t('Mariages & Privés', 'Weddings & Private')}</a></li>
            </ul>
          </div>
          <div className="fg-col">
            <h6>{t('Couverture', 'Coverage')}</h6>
            <ul>
              <li><a href="#coverage">Paris · Lyon · Marseille</a></li>
              <li><a href="#coverage">Bordeaux · Nice · Cannes</a></li>
              <li><a href="#coverage">Monaco · Toulouse · Lille</a></li>
              <li><a href="#coverage">{t('Londres · Milan · Madrid', 'London · Milan · Madrid')}</a></li>
              <li><a href="#coverage">Genève · Bruxelles</a></li>
              <li><a href="#coverage">{t('+ 20 pays européens', '+ 20 European countries')}</a></li>
            </ul>
          </div>
          <div className="fg-col">
            <h6>{t('Contact', 'Contact')}</h6>
            <ul>
              <li>45 Bd de la Croisette, 06400 Cannes</li>
              <li>78 Av. des Champs-Élysées, 75008 Paris</li>
              <li><a href="tel:+33652624091">06 52 62 40 91</a></li>
              <li><a href="mailto:contact@emmashine.fr">contact@emmashine.fr</a></li>
            </ul>
            <div className="fg-avail">
              <div className="fa-dot" />
              <span>{t('Disponible 7j/7 · 24h/24', 'Available 7/7 · 24/7')}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-base">
        <div className="container footer-base-inner">
          <p>
            © 2025 Emma Shine —{' '}
            {t('Une société du Groupe Imperium · Tous droits réservés', 'A company of the Imperium Group · All rights reserved')}
          </p>
          <div className="fb-links">
            <a href="#">{t('Mentions légales', 'Legal notice')}</a>
            <a href="#">{t('Confidentialité', 'Privacy')}</a>
            <a href="#">{t('CGV', 'T&C')}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
