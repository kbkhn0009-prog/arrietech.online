'use client'

import { useId } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const NODES = [
  { x: 12, y: 22 },
  { x: 28, y: 12 },
  { x: 50, y: 8 },
  { x: 72, y: 14 },
  { x: 88, y: 28 },
  { x: 92, y: 50 },
  { x: 85, y: 72 },
  { x: 68, y: 88 },
  { x: 50, y: 92 },
  { x: 32, y: 86 },
  { x: 14, y: 68 },
  { x: 8, y: 48 },
]

const EDGES: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
  [7, 8],
  [8, 9],
  [9, 10],
  [10, 11],
  [11, 0],
  [2, 8],
  [0, 5],
  [4, 9],
  [1, 6],
  [3, 7],
  [2, 5],
  [10, 5],
  [1, 8],
]

function curve(x1: number, y1: number, x2: number, y2: number) {
  const mx = (x1 + x2) / 2
  const my = (y1 + y2) / 2 - 4
  return `M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`
}

export function ClosingTopology() {
  const reduceMotion = useReducedMotion()
  const gradId = useId().replace(/:/g, '')

  return (
    <motion.div className="absolute inset-0 pointer-events-none" aria-hidden>
      <div
        className="absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 45% 40% at 50% 48%, rgba(244,210,140,0.07) 0%, transparent 65%)',
        }}
        animate={reduceMotion ? undefined : { opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(244,210,140,0.08)" />
            <stop offset="50%" stopColor="rgba(244,210,140,0.35)" />
            <stop offset="100%" stopColor="rgba(244,210,140,0.1)" />
          </linearGradient>
        </defs>
        {EDGES.map(([a, b], i) => {
          const na = NODES[a]
          const nb = NODES[b]
          const d = curve(na.x, na.y, nb.x, nb.y)
          return (
            <g key={`${a}-${b}`}>
              <path d={d} fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.2" vectorEffect="non-scaling-stroke" />
              <motion.path
                d={d}
                fill="none"
                stroke={`url(#${gradId})`}
                strokeWidth="0.25"
                strokeLinecap="round"
                strokeDasharray="1.2 2.4"
                vectorEffect="non-scaling-stroke"
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        opacity: [0.08, 0.28, 0.08],
                        strokeDashoffset: [0, -8],
                      }
                }
                transition={{
                  opacity: { duration: 6 + (i % 4), repeat: Infinity, ease: 'easeInOut', delay: i * 0.15 },
                  strokeDashoffset: { duration: 14 + (i % 3), repeat: Infinity, ease: 'linear' },
                }}
              />
            </g>
          )
        })}
        {NODES.map((n, i) => (
          <motion.circle
            key={i}
            cx={n.x}
            cy={n.y}
            r="0.6"
            fill="rgba(244,210,140,0.35)"
            animate={reduceMotion ? undefined : { opacity: [0.2, 0.55, 0.2], r: [0.5, 0.7, 0.5] }}
            transition={{ duration: 4 + (i % 5), repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
          />
        ))}
        <motion.circle
          cx="50"
          cy="50"
          r="18"
          fill="none"
          stroke="rgba(244,210,140,0.06)"
          strokeWidth="0.15"
          animate={reduceMotion ? undefined : { opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </svg>
    </motion.div>
  )
}
