'use client'

import { motion } from 'framer-motion'

export function AIParticleRenderer() {
  const seededRandom = (seed: number) => {
    const x = Math.sin(seed) * 10000
    return x - Math.floor(x)
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 opacity-45">
      {[...Array(18)].map((_, index) => {
        const r1 = seededRandom(index * 12.9898 + 78.233)
        const r2 = seededRandom(index * 93.989 + 12.871)
        const r3 = seededRandom(index * 47.63 + 99.321)
        const r4 = seededRandom(index * 5.412 + 7.7)
        const warm = r3 > 0.4

        const animX = [0, r1 * 80 - 40, 0]
        const animY = [0, r2 * 80 - 40, 0]
        const size = 1.5 + r3 * 2.5
        const top = `${r4 * 100}%`
        const left = `${seededRandom(index * 31.11 + 3.14) * 100}%`

        return (
          <motion.div
            key={index}
            animate={{
              x: animX,
              y: animY,
              opacity: [0.04, warm ? 0.18 : 0.12, 0.04],
            }}
            transition={{
              duration: 16 + index * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute rounded-full blur-[1px]"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top,
              left,
              background: warm
                ? 'rgba(214, 161, 74, 0.55)'
                : 'rgba(94, 107, 136, 0.35)',
            }}
          />
        )
      })}
    </div>
  )
}
