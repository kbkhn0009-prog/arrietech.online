'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'
import { ClosingTopology } from './ops/closing-topology'
import { LeadCTAButtons } from './lead-cta-buttons'

const MICRO_WORDS = [
  { key: 'closing.word.menu', angle: -90 },
  { key: 'closing.word.demand', angle: -38 },
  { key: 'closing.word.margin', angle: 12 },
  { key: 'closing.word.guest', angle: 58 },
  { key: 'closing.word.delivery', angle: 128 },
  { key: 'closing.word.revenue', angle: 168 },
  { key: 'closing.word.coordination', angle: -142 },
] as const

const RADIUS = 42

function MicroWordRing() {
  const { t } = useI18n()
  const reduceMotion = useReducedMotion()

  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden>
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
        {MICRO_WORDS.map((w) => {
          const rad = (w.angle * Math.PI) / 180
          const x2 = 50 + RADIUS * Math.cos(rad)
          const y2 = 50 + RADIUS * Math.sin(rad)
          return (
            <line
              key={`line-${w.key}`}
              x1="50"
              y1="50"
              x2={x2}
              y2={y2}
              stroke="rgba(255,255,255,0.04)"
              strokeWidth="0.15"
              vectorEffect="non-scaling-stroke"
            />
          )
        })}
      </svg>
      {MICRO_WORDS.map((w, i) => {
        const rad = (w.angle * Math.PI) / 180
        const x = 50 + RADIUS * Math.cos(rad)
        const y = 50 + RADIUS * Math.sin(rad)
        return (
          <motion.span
            key={w.key}
            className="absolute -translate-x-1/2 -translate-y-1/2 text-[0.5rem] sm:text-[0.55rem] uppercase tracking-[0.28em] arrie-text-faint whitespace-nowrap"
            style={{ left: `${x}%`, top: `${y}%` }}
            animate={reduceMotion ? undefined : { opacity: [0.18, 0.38, 0.18] }}
            transition={{ duration: 5 + i * 0.4, repeat: Infinity, ease: 'easeInOut' }}
          >
            {t(w.key) as string}
          </motion.span>
        )
      })}
    </div>
  )
}

export function CinematicClosing() {
  const { t } = useI18n()
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="closing"
      className="relative min-h-[100vh] flex flex-col items-center justify-center px-6 py-28 overflow-hidden border-t border-white/[0.06] bg-[#080809]"
    >
      <ClosingTopology />
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(11,11,12,0.4) 50%, rgba(11,11,12,0.85) 100%)',
        }}
      />

      <motion.div
        className="relative z-10 w-full max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative min-h-[280px] sm:min-h-[320px] flex items-center justify-center mb-10 sm:mb-12">
          <MicroWordRing />
          <motion.div
            className="relative"
            animate={reduceMotion ? undefined : { scale: [1, 1.008, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          >
            {!reduceMotion && (
              <motion.div
                className="absolute -inset-16 sm:-inset-20 rounded-full pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(244,210,140,0.08) 0%, transparent 70%)',
                }}
                animate={{ opacity: [0.4, 0.75, 0.4] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
            )}
            <h2
              className="relative text-[3.5rem] sm:text-[5.5rem] md:text-[7rem] font-light tracking-[0.35em] sm:tracking-[0.42em] pl-[0.35em] leading-none select-none"
              style={{
                background: 'linear-gradient(165deg, #f0ebe3 0%, #a89f92 42%, #d4c4a8 68%, #8e8880 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 48px rgba(244,210,140,0.12))',
              }}
            >
              ARRIE
            </h2>
          </motion.div>
        </div>

        <motion.p
          className="text-[0.65rem] sm:text-xs uppercase tracking-[0.32em] arrie-text-muted mb-3 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {t('closing.tagline') as string}
        </motion.p>
        <motion.p
          className="text-sm sm:text-base arrie-text-faint tracking-wide mb-12 sm:mb-14 max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.28, duration: 0.8 }}
        >
          {t('closing.taglineRu') as string}
        </motion.p>

        <motion.p
          className="arrie-heading text-xl sm:text-2xl md:text-3xl font-light leading-relaxed mb-14 sm:mb-16 max-w-2xl mx-auto whitespace-pre-line"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.9 }}
        >
          {t('closing.statement') as string}
        </motion.p>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45, duration: 0.8 }}
        >
          <LeadCTAButtons tone="enterprise" />
        </motion.div>
      </motion.div>
    </section>
  )
}
