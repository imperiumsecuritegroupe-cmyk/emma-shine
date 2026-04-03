'use client'
import { useEffect, useRef } from 'react'

export default function Cursor() {
  const curRef = useRef<HTMLDivElement>(null)
  const folRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cur = curRef.current
    const fol = folRef.current
    if (!cur || !fol) return

    let mx = 0, my = 0, fx = 0, fy = 0
    let animId: number

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      cur.style.left = mx + 'px'
      cur.style.top = my + 'px'
    }

    const loop = () => {
      fx += (mx - fx) * 0.11
      fy += (my - fy) * 0.11
      fol.style.left = fx + 'px'
      fol.style.top = fy + 'px'
      animId = requestAnimationFrame(loop)
    }
    animId = requestAnimationFrame(loop)

    document.addEventListener('mousemove', onMouseMove)

    const hoverEls = document.querySelectorAll('a,button,.svc-card,.gal-item,.team-card')
    const onEnter = () => {
      cur.style.transform = 'translate(-50%,-50%) scale(2.5)'
      fol.style.transform = 'translate(-50%,-50%) scale(1.8)'
      fol.style.opacity = '.25'
    }
    const onLeave = () => {
      cur.style.transform = 'translate(-50%,-50%) scale(1)'
      fol.style.transform = 'translate(-50%,-50%) scale(1)'
      fol.style.opacity = '.7'
    }

    hoverEls.forEach((el) => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(animId)
      hoverEls.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])

  return (
    <>
      <div className="cursor" ref={curRef} />
      <div className="cursor-follower" ref={folRef} />
    </>
  )
}
