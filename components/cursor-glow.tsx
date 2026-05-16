'use client'

import { useEffect, useState } from 'react'

export function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[999] hidden lg:block"
      style={{
        background: `radial-gradient(520px at ${pos.x}px ${pos.y}px, rgba(214, 161, 74, 0.09), rgba(94, 107, 136, 0.04) 35%, transparent 55%)`,
      }}
    />
  )
}
