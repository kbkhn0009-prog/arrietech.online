'use client'

import { useEffect, useRef } from 'react'

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  active: boolean
}

const NODE_ACTIVE = '#F4D28C'
const NODE_SOFT = 'rgba(255, 255, 255, 0.35)'

export function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight
    let animationFrameId = 0

    canvas.width = width
    canvas.height = height

    const particles: Particle[] = Array.from({ length: 48 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.08,
      vy: (Math.random() - 0.5) * 0.08,
      active: Math.random() > 0.55,
    }))

    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      particles.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1

        const pulse = 0.9 + Math.sin(Date.now() * 0.0008 + i) * 0.1
        ctx.beginPath()
        ctx.arc(p.x, p.y, (p.active ? 1.4 : 1) * pulse, 0, Math.PI * 2)
        ctx.fillStyle = p.active ? NODE_ACTIVE : NODE_SOFT
        ctx.globalAlpha = p.active ? 0.55 : 0.25
        ctx.fill()
        ctx.globalAlpha = 1

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 160) {
            const t = 1 - dist / 160
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            if (p.active || p2.active) {
              ctx.strokeStyle = `rgba(214, 161, 74, ${0.04 + t * 0.12})`
            } else {
              ctx.strokeStyle = `rgba(255, 255, 255, ${0.02 + t * 0.08})`
            }
            ctx.lineWidth = 0.45
            ctx.stroke()
          }
        }
      })

      animationFrameId = window.requestAnimationFrame(animate)
    }

    animate()

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }

    window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('resize', resize)
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1] h-full w-full bg-transparent opacity-[0.38]"
    />
  )
}
