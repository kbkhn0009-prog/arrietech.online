'use client'

import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'
import { OVERLAY_TICK_COUNT, type OverlayTickId } from '@/lib/overlay-live-ticks'

const TICK_MS = 2000

function MetricRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-2 text-[0.65rem] leading-snug">
      <span className="arrie-text-faint shrink-0">{label}</span>
      <span className="arrie-heading font-light tabular-nums text-right">{value}</span>
    </div>
  )
}

function LiveTickPanel({ tick }: { tick: OverlayTickId }) {
  const { t } = useI18n()

  return (
    <motion.div
      key={tick}
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -4 }}
      transition={{ duration: 0.28 }}
      className="space-y-2"
    >
      <MetricRow label={t('overlay.row.menu') as string} value={t(`overlay.tick.${tick}.menu`) as string} />
      <MetricRow label={t('overlay.row.demand') as string} value={t(`overlay.tick.${tick}.demand`) as string} />
      <MetricRow label={t('overlay.row.margin') as string} value={t(`overlay.tick.${tick}.margin`) as string} />
      <p className="text-[0.62rem] leading-relaxed pt-2 border-t border-white/[0.08] arrie-text-muted">
        {t(`overlay.tick.${tick}.insight`) as string}
      </p>
    </motion.div>
  )
}

export function DynamicCommandOverlay() {
  const { t } = useI18n()
  const reduceMotion = useReducedMotion()
  const [hovering, setHovering] = useState(false)
  const [tick, setTick] = useState<OverlayTickId>(0)

  const stopHover = useCallback(() => {
    setHovering(false)
    setTick(0)
  }, [])

  useEffect(() => {
    if (!hovering || reduceMotion) return
    const id = window.setInterval(() => {
      setTick((prev) => ((prev + 1) % OVERLAY_TICK_COUNT) as OverlayTickId)
    }, TICK_MS)
    return () => window.clearInterval(id)
  }, [hovering, reduceMotion])

  return (
    <div
      className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-[250] w-[min(100vw-2rem,320px)] hidden lg:block outline-none"
      tabIndex={0}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={stopHover}
      onFocus={() => setHovering(true)}
      onBlur={stopHover}
      onClick={() => setHovering((h) => !h)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          setHovering((h) => !h)
        }
        if (e.key === 'Escape') stopHover()
      }}
    >
      <AnimatePresence>
        {hovering && (
          <motion.div
            role="tooltip"
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.22 }}
            className="absolute bottom-full right-0 mb-2 w-full rounded-xl border p-3 shadow-2xl"
            style={{
              borderColor: 'rgba(244,210,140,0.28)',
              background: 'linear-gradient(165deg, rgba(22,22,24,0.98) 0%, rgba(11,11,12,0.96) 100%)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <div className="flex items-center justify-between gap-2 mb-2.5">
              <span className="arrie-eyebrow text-[0.55rem]">{t('overlay.popup.title') as string}</span>
              <span className="flex items-center gap-1.5 text-[0.55rem] arrie-text-faint tabular-nums">
                {reduceMotion ? '—' : `${tick + 1}/${OVERLAY_TICK_COUNT}`}
              </span>
            </div>
            <AnimatePresence mode="wait">
              <LiveTickPanel tick={tick} />
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className={`rounded-[24px] arrie-panel glow-luminous backdrop-blur-2xl p-4 sm:p-5 transition-colors cursor-pointer ${
          hovering ? 'ring-1 ring-[rgba(244,210,140,0.25)]' : ''
        }`}
      >
        <div className="arrie-eyebrow text-xs sm:text-sm mb-3">{t('overlay.label') as string}</div>
        <div className="flex items-center gap-3">
          <motion.span
            animate={{ opacity: hovering && !reduceMotion ? [0.5, 1, 0.5] : [0.4, 1, 0.4] }}
            transition={{ duration: hovering ? 1 : 2, repeat: Infinity }}
            className="w-2 h-2 rounded-full shrink-0"
            style={{ background: '#F4D28C', boxShadow: '0 0 10px rgba(244, 210, 140, 0.45)' }}
          />
          <div className="arrie-text-muted text-sm">{t('overlay.status') as string}</div>
        </div>
        <p className="mt-3 arrie-text-faint text-xs leading-relaxed">{t('overlay.body') as string}</p>
        <p className="mt-2 text-[0.6rem] arrie-text-faint/80 tracking-wide">{t('overlay.hint') as string}</p>
      </div>
    </div>
  )
}
