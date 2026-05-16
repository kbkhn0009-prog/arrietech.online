'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import { registerLenis, unregisterLenis } from '@/lib/scroll'

export function ImmersiveScrollEngine() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
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
    }
  }, [])

  return null
}
