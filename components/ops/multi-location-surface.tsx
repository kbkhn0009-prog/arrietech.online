'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'

const LOCS = [
  { id: '1', state: 'stable' as const, x: 12, y: 28 },
  { id: '2', state: 'rising' as const, x: 32, y: 18 },
  { id: '3', state: 'pressure' as const, x: 52, y: 32 },
  { id: '4', state: 'stable' as const, x: 72, y: 22 },
  { id: '5', state: 'rising' as const, x: 22, y: 58 },
  { id: '6', state: 'stable' as const, x: 48, y: 62 },
  { id: '7', state: 'pressure' as const, x: 78, y: 55 },
]

export function MultiLocationSurface() {
  const { t } = useI18n()
  const reduceMotion = useReducedMotion()

  const stateLabel = (s: 'stable' | 'rising' | 'pressure') => {
    if (s === 'rising') return t('enterprise.loc.rising') as string
    if (s === 'pressure') return t('enterprise.loc.pressure') as string
    return t('enterprise.loc.stable') as string
  }

  const stateColor = (s: 'stable' | 'rising' | 'pressure') => {
    if (s === 'rising') return 'rgba(244, 210, 140, 0.55)'
    if (s === 'pressure') return 'rgba(255, 255, 255, 0.35)'
    return 'rgba(214, 161, 74, 0.35)'
  }

  return (
    <div className="relative rounded-[32px] arrie-panel glow-luminous min-h-[340px] p-6 sm:p-8 overflow-hidden">
      {LOCS.map((loc, i) => (
        <motion.div
          key={loc.id}
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-2xl arrie-panel-inner px-3 py-2.5 border border-white/10 min-w-[5.5rem]"
          style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
          animate={reduceMotion ? undefined : { y: [0, -3, 0] }}
          transition={{ duration: 6 + i, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-2 h-2 rounded-full mb-1.5" style={{ background: stateColor(loc.state) }} />
          <div className="text-[0.65rem] arrie-text-faint">LOC {loc.id}</div>
          <div className="text-xs arrie-heading font-light">{stateLabel(loc.state)}</div>
        </motion.div>
      ))}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full px-4 py-2 arrie-panel-inner text-[0.65rem] arrie-text-muted border border-white/10">
        {t('enterprise.sync') as string}
      </div>
    </div>
  )
}
