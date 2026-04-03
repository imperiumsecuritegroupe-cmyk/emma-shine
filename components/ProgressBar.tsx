'use client'
import { useEffect, useRef } from 'react'

export default function ProgressBar() {
  const pbRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const pb = pbRef.current
    if (!pb) return

    const onScroll = () => {
      const pct =
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      pb.style.width = pct + '%'
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return <div className="progress-bar" id="progressBar" ref={pbRef} />
}
