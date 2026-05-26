'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import { registerLenis, unregisterLenis } from '@/lib/scroll'

export function ImmersiveScrollEngine() {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) return

    const root = document.documentElement
    root.classList.add('lenis', 'lenis-smooth')

    const lenis = new Lenis({
      duration: 1.15,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.1,
    })
    registerLenis(lenis)

    let frame = 0
    function raf(time: number) {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frame)
      unregisterLenis()
      lenis.destroy()
      root.classList.remove('lenis', 'lenis-smooth')
    }
  }, [])

  return null
}
