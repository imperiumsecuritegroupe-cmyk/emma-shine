import Cursor from '@/components/Cursor'
import Loader from '@/components/Loader'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Ribbon from '@/components/Ribbon'
import About from '@/components/About'
import Services from '@/components/Services'
import Process from '@/components/Process'
import Team from '@/components/Team'
import Coverage from '@/components/Coverage'
import ParallaxQuote from '@/components/ParallaxQuote'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import ProgressBar from '@/components/ProgressBar'

export default function Home() {
  return (
    <>
      <Cursor />
      <Loader />
      <ProgressBar />
      <Navbar />
      <main>
        <Hero />
        <Ribbon />
        <About />
        <Services />
        <Process />
        <Team />
        <Coverage />
        <ParallaxQuote />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
