import type { Metadata } from 'next'
import { Cormorant_Garamond, Montserrat, Playfair_Display } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/components/LanguageProvider'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-cormorant',
  display: 'swap',
})
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
})
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Emma Shine — Agence d'Hôtesses & Hôtes de Prestige | Groupe Imperium",
  description:
    "Emma Shine, agence d'hôtesses et hôtes haut de gamme présente dans toute la France et en Europe. Une société du Groupe Imperium. Excellence, élégance et protocole pour vos événements d'exception.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${cormorant.variable} ${montserrat.variable} ${playfair.variable}`}
    >
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
