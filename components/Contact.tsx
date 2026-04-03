'use client'
import { useEffect, useRef, useState } from 'react'
import { useLang } from './LanguageProvider'

export default function Contact() {
  const { t } = useLang()
  const sectionRef = useRef<HTMLElement>(null)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [form, setForm] = useState({
    prenom: '', nom: '', email: '', tel: '', societe: '', ville: '',
    type: '', date: '', nb: '', message: '',
  })

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
    }, 900)
  }

  return (
    <section className="contact section" id="contact" ref={sectionRef}>
      <div className="contact-bg-shape" />
      <div className="container">
        <div className="contact-wrap">
          <div className="contact-left reveal-left">
            <div className="stag">{t('Nous contacter', 'Contact us')}</div>
            <h2 className="stitle">{t('Parlons de votre Projet', "Let's Talk About Your Project")}</h2>
            <div className="gline" />
            <p>{t(
              'Notre équipe vous répond dans les 24 heures ouvrées avec une proposition personnalisée adaptée à votre événement et votre budget.',
              'Our team will respond within 24 working hours with a personalised proposal tailored to your event and budget.'
            )}</p>
            <div className="cinfo-list">
              <div className="cinfo-item">
                <div className="ci-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
                </div>
                <div>
                  <strong>{t('Siège Social', 'Headquarters')}</strong>
                  <span>45 Bd de la Croisette<br />06400 Cannes</span>
                </div>
              </div>
              <div className="cinfo-item">
                <div className="ci-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
                </div>
                <div>
                  <strong>{t('Bureau Paris', 'Paris Office')}</strong>
                  <span>78 Avenue des Champs-Élysées<br />75008 Paris</span>
                </div>
              </div>
              <div className="cinfo-item">
                <div className="ci-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.5 12a19.79 19.79 0 01-3.07-8.67A2 2 0 013.44 1.5h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.91 9a16 16 0 006 6l.91-.91a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                </div>
                <div>
                  <strong>{t('Téléphone', 'Phone')}</strong>
                  <a href="tel:+33652624091">06 52 62 40 91</a>
                  <span>{t('Disponible 7j/7', 'Available 7 days/7')}</span>
                </div>
              </div>
              <div className="cinfo-item">
                <div className="ci-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <strong>Email</strong>
                  <a href="mailto:contact@emmashine.fr">contact@emmashine.fr</a>
                </div>
              </div>
            </div>
            <div className="csocial">
              <a href="#" aria-label="Instagram" className="cs-link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="cs-link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="3"/><path d="M7 10v7M7 7v.01M11 10v7M11 13a2 2 0 014 0v4"/></svg>
              </a>
              <a href="#" aria-label="Facebook" className="cs-link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 2h-3a4 4 0 00-4 4v3H8v4h3v8h4v-8h3l1-4h-4V6a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="#" aria-label="TikTok" className="cs-link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 12a4 4 0 104 4V4a5 5 0 005 5"/></svg>
              </a>
            </div>
          </div>
          <div className="contact-form-box reveal-right">
            {!submitted ? (
              <form className="c-form" onSubmit={handleSubmit}>
                <div className="cf-row">
                  <div className="cf-group">
                    <label>{t('Prénom *', 'First name *')}</label>
                    <input type="text" name="prenom" required placeholder="Marie" value={form.prenom} onChange={handleChange} />
                  </div>
                  <div className="cf-group">
                    <label>{t('Nom *', 'Last name *')}</label>
                    <input type="text" name="nom" required placeholder="Dupont" value={form.nom} onChange={handleChange} />
                  </div>
                </div>
                <div className="cf-row">
                  <div className="cf-group">
                    <label>{t('Email professionnel *', 'Business email *')}</label>
                    <input type="email" name="email" required placeholder="marie@societe.com" value={form.email} onChange={handleChange} />
                  </div>
                  <div className="cf-group">
                    <label>{t('Téléphone', 'Phone')}</label>
                    <input type="tel" name="tel" placeholder="+33 6 00 00 00 00" value={form.tel} onChange={handleChange} />
                  </div>
                </div>
                <div className="cf-row">
                  <div className="cf-group">
                    <label>{t('Société', 'Company')}</label>
                    <input type="text" name="societe" placeholder={t('Nom de votre société', 'Company name')} value={form.societe} onChange={handleChange} />
                  </div>
                  <div className="cf-group">
                    <label>{t('Ville / Pays', 'City / Country')}</label>
                    <input type="text" name="ville" placeholder="Paris, France" value={form.ville} onChange={handleChange} />
                  </div>
                </div>
                <div className="cf-group">
                  <label>{t('Type de prestation *', 'Service type *')}</label>
                  <select name="type" required value={form.type} onChange={handleChange}>
                    <option value="">{t('Choisissez une prestation…', 'Choose a service…')}</option>
                    <option value="salon">{t('Salon & Congrès', 'Trade Show & Congress')}</option>
                    <option value="gala">{t('Soirée de Gala / VIP', 'Gala Evening / VIP')}</option>
                    <option value="corporate">{t('Accueil Entreprise', 'Corporate Reception')}</option>
                    <option value="bilingue">{t('Profil Multilingue', 'Multilingual Profile')}</option>
                    <option value="brand">{t('Brand Ambassador', 'Brand Ambassador')}</option>
                    <option value="prive">{t('Événement Privé / Mariage', 'Private Event / Wedding')}</option>
                    <option value="autre">{t('Autre', 'Other')}</option>
                  </select>
                </div>
                <div className="cf-row">
                  <div className="cf-group">
                    <label>{t("Date de l'événement", 'Event date')}</label>
                    <input type="date" name="date" value={form.date} onChange={handleChange} />
                  </div>
                  <div className="cf-group">
                    <label>{t('Nombre de profils souhaités', 'Number of profiles needed')}</label>
                    <input type="number" name="nb" placeholder="ex: 4" min="1" value={form.nb} onChange={handleChange} />
                  </div>
                </div>
                <div className="cf-group">
                  <label>{t("Détails de votre événement", 'Event details')}</label>
                  <textarea name="message" rows={4} placeholder={t('Décrivez votre événement, vos besoins spécifiques, le lieu…', 'Describe your event, specific needs, venue…')} value={form.message} onChange={handleChange} />
                </div>
                <button
                  type="submit"
                  className="btn-gold full"
                  style={submitting ? { opacity: 0.6, pointerEvents: 'none' } : undefined}
                >
                  <span>{t('Envoyer ma demande de devis', 'Send my quote request')}</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
              </form>
            ) : (
              <div className="cf-success show">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                <span>{t('Message envoyé ! Nous vous répondons sous 24h.', 'Message sent! We will reply within 24 hours.')}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
