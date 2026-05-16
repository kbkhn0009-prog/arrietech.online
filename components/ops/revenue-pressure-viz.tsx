'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'

const WAVES = [
  { labelKey: 'revenue.wave.high', h: 72, delay: 0 },
  { labelKey: 'revenue.wave.steady', h: 48, delay: 0.15 },
  { labelKey: 'revenue.wave.pressure', h: 56, delay: 0.3 },
]

export function RevenuePressureViz() {
  const { t } = useI18n()
  const reduceMotion = useReducedMotion()

  return (
    <div className="relative rounded-[36px] arrie-panel glow-luminous p-6 sm:p-8 min-h-[320px] overflow-hidden">
      <svg viewBox="0 0 400 120" className="w-full h-28 mb-8" aria-hidden preserveAspectRatio="none">
        <defs>
          <linearGradient id="revWave" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(244,210,140,0.2)" />
            <stop offset="100%" stopColor="rgba(244,210,140,0)" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0,80 Q50,40 100,55 T200,35 T300,50 T400,25 L400,120 L0,120 Z"
          fill="url(#revWave)"
          animate={reduceMotion ? undefined : { d: ['M0,80 Q50,40 100,55 T200,35 T300,50 T400,25 L400,120 L0,120 Z', 'M0,75 Q50,45 100,50 T200,40 T300,45 T400,30 L400,120 L0,120 Z', 'M0,80 Q50,40 100,55 T200,35 T300,50 T400,25 L400,120 L0,120 Z'] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.path
          d="M0,80 Q50,40 100,55 T200,35 T300,50 T400,25"
          fill="none"
          stroke="rgba(244,210,140,0.45)"
          strokeWidth="1"
          animate={reduceMotion ? undefined : { opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </svg>
      <motion.div
        className="grid grid-cols-3 gap-3 mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {WAVES.map((w) => (
          <motion.div
            key={w.labelKey}
            className="rounded-xl arrie-panel-inner p-3 flex flex-col items-center justify-end"
            style={{ minHeight: w.h }}
            animate={reduceMotion ? undefined : { height: [w.h - 4, w.h, w.h - 4] }}
            transition={{ duration: 5 + w.delay * 10, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="arrie-text-faint text-[0.6rem] uppercase tracking-wider text-center mt-auto">
              {t(w.labelKey) as string}
            </span>
          </motion.div>
        ))}
      </motion.div>
      <CategoryHeatmapInline />
    </div>
  )
}

function CategoryHeatmapInline() {
  const reduceMotion = useReducedMotion()
  const cells = Array.from({ length: 24 }, (_, i) => 0.15 + (Math.sin(i * 1.2) * 0.5 + 0.5) * 0.5)

  return (
    <motion.div className="grid grid-cols-8 gap-1" aria-hidden>
      {cells.map((intensity, i) => (
        <motion.div
          key={i}
          className="h-2 rounded-sm"
          style={{ background: `rgba(244,210,140,${intensity * 0.5})` }}
          animate={reduceMotion ? undefined : { opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3 + (i % 5), repeat: Infinity, delay: i * 0.05 }}
        />
      ))}
    </motion.div>
  )
}
