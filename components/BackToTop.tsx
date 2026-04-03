'use client'
import { useEffect, useRef } from 'react'

export default function BackToTop() {
  const btnRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const btn = btnRef.current
    if (!btn) return

    const onScroll = () => {
      btn.classList.toggle('on', window.scrollY > 500)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button className="btop" id="btop" aria-label="Back to top" ref={btnRef} onClick={scrollTop}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20">
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  )
}
