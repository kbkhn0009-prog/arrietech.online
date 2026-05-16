'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'

const NODES = [
  { id: 'menu', x: 50, y: 18, labelKey: 'network.node.menu' },
  { id: 'cat', x: 22, y: 42, labelKey: 'network.node.categories' },
  { id: 'guest', x: 78, y: 42, labelKey: 'network.node.guest' },
  { id: 'demand', x: 35, y: 68, labelKey: 'network.node.demand' },
  { id: 'margin', x: 65, y: 68, labelKey: 'network.node.margin' },
  { id: 'rev', x: 50, y: 88, labelKey: 'network.node.revenue' },
] as const

const EDGES: [string, string][] = [
  ['menu', 'cat'],
  ['menu', 'guest'],
  ['cat', 'demand'],
  ['guest', 'demand'],
  ['demand', 'margin'],
  ['margin', 'rev'],
  ['cat', 'rev'],
]

export function MenuRevenueNetwork() {
  const { t } = useI18n()
  const reduceMotion = useReducedMotion()
  const nodeMap = Object.fromEntries(NODES.map((n) => [n.id, n]))

  return (
    <div className="relative w-full aspect-[4/3] max-h-[520px]">
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" aria-hidden>
        {EDGES.map(([a, b]) => {
          const na = nodeMap[a]
          const nb = nodeMap[b]
          return (
            <motion.line
              key={`${a}-${b}`}
              x1={na.x}
              y1={na.y}
              x2={nb.x}
              y2={nb.y}
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="0.35"
              animate={reduceMotion ? undefined : { opacity: [0.15, 0.35, 0.15] }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.2 }}
            />
          )
        })}
      </svg>
      {NODES.map((node, i) => (
        <motion.div
          key={node.id}
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border px-3 py-2 arrie-panel-inner text-center"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            borderColor: i === 0 || i === 5 ? 'rgba(244,210,140,0.35)' : 'rgba(255,255,255,0.14)',
          }}
          animate={reduceMotion ? undefined : { y: [0, -2, 0] }}
          transition={{ duration: 5 + i, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-[0.65rem] sm:text-xs arrie-text-muted whitespace-nowrap">
            {t(node.labelKey) as string}
          </span>
        </motion.div>
      ))}
    </div>
  )
}
