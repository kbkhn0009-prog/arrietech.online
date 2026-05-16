'use client'

import type { CSSProperties } from 'react'
import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'
import { CategoryBreakdown } from './ops/category-grid'

function HeroSparkline() {
  return (
    <svg viewBox="0 0 160 44" className="w-full h-11 mt-3" aria-hidden preserveAspectRatio="none">
      <defs>
        <linearGradient id="heroSpark" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(244, 210, 140, 0.18)" />
          <stop offset="100%" stopColor="rgba(244, 210, 140, 0)" />
        </linearGradient>
      </defs>
      <path
        d="M0,34 C24,36 28,18 48,22 C66,26 72,10 90,14 C106,18 112,8 128,12 C138,15 146,6 160,8 L160,44 L0,44 Z"
        fill="url(#heroSpark)"
      />
      <path
        d="M0,34 C24,36 28,18 48,22 C66,26 72,10 90,14 C106,18 112,8 128,12 C138,15 146,6 160,8"
        fill="none"
        stroke="rgba(244, 210, 140, 0.4)"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}

const surfaceStyle: CSSProperties = {
  borderColor: 'rgba(255, 255, 255, 0.2)',
  background: `linear-gradient(
    168deg,
    rgba(255, 255, 255, 0.22) 0%,
    rgba(255, 248, 240, 0.11) 45%,
    rgba(255, 255, 255, 0.07) 100%
  )`,
}

export function HeroVisual() {
  const { t } = useI18n()
  const reduceMotion = useReducedMotion()
  const [pulse, setPulse] = useState(false)

  useEffect(() => {
    const id = setInterval(() => setPulse((p) => !p), 4000)
    return () => clearInterval(id)
  }, [])

  const float = (offset: number, duration: number) =>
    reduceMotion
      ? {}
      : {
          animate: { y: [0, offset, 0] },
          transition: { duration, repeat: Infinity, ease: 'easeInOut' as const },
        }

  const kpis = [
    { label: t('hero.ui.avg') as string, value: '1 780' },
    { label: t('hero.ui.conv') as string, value: '0.49' },
    { label: t('hero.ui.upsell') as string, value: '19%' },
    { label: t('hero.ui.pressure') as string, value: '1.12' },
  ]

  return (
    <div className="relative w-full max-w-xl lg:max-w-[420px] xl:max-w-[440px] lg:ml-auto lg:mr-0 mx-auto">
      <div
        className="pointer-events-none absolute -inset-12 rounded-[56px] blur-3xl opacity-95"
        aria-hidden
        style={{
          background:
            'radial-gradient(ellipse 55% 50% at 45% 25%, rgba(244, 210, 140, 0.14), transparent 60%), radial-gradient(ellipse 45% 40% at 75% 70%, rgba(255, 255, 255, 0.06), transparent 55%)',
        }}
      />

      <div
        className="relative z-[1] mb-3 flex flex-wrap items-center gap-2 justify-end"
        {...float(-4, 18)}
      >
        <span
          className="rounded-full px-3.5 py-1.5 text-[0.65rem] uppercase tracking-[0.22em] border backdrop-blur-md"
          style={{
            color: 'var(--arrie-text-muted)',
            borderColor: 'rgba(214, 161, 74, 0.22)',
            background: 'rgba(255, 255, 255, 0.06)',
          }}
        >
          {t('hero.ui.badge') as string}
        </span>
        <div className="rounded-2xl arrie-panel-inner px-3 py-2 max-w-[min(100%,20rem)]">
          <p className="text-[0.7rem] leading-snug arrie-text-muted">{t('hero.ui.ambient') as string}</p>
        </div>
      </div>

      <motion.div
        className="relative z-[3]"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <div {...float(5, 22)}>
          <div className="rounded-[32px] p-6 sm:p-7 glow-luminous border backdrop-blur-2xl" style={surfaceStyle}>
            <div className="arrie-eyebrow text-[0.7rem] mb-5">{t('hero.ui.liveEyebrow') as string}</div>
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
              {kpis.map((k) => (
                <div key={k.label} className="rounded-2xl arrie-panel-inner px-4 py-3.5">
                  <div className="arrie-text-faint text-[0.65rem] uppercase tracking-[0.12em] mb-1.5">{k.label}</div>
                  <div className="arrie-heading text-xl sm:text-2xl font-light tabular-nums leading-none">{k.value}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
              <span className="arrie-text-faint text-[0.65rem] uppercase tracking-wider">{t('hero.ui.upliftLabel')}</span>
              <motion.span
                className="arrie-heading text-lg font-light tabular-nums"
                style={{ color: 'var(--arrie-amber-glow)' }}
                animate={pulse ? { opacity: [1, 0.7, 1] } : undefined}
                transition={{ duration: 0.8 }}
              >
                +14.8%
              </motion.span>
            </div>
            <div className="mt-4">
              <div className="arrie-text-faint text-[0.6rem] uppercase tracking-wider mb-2">
                {t('hero.ui.heatmapLabel') as string}
              </div>
              <CategoryBreakdown />
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="relative z-[4] -mt-5 ml-1 sm:ml-4 max-w-[95%]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.15 }}
      >
        <div {...float(-3, 20)}>
          <div className="rounded-2xl p-5 sm:p-6 border backdrop-blur-xl arrie-panel">
            <div className="arrie-eyebrow text-[0.65rem] mb-3">{t('hero.ui.reasonEyebrow') as string}</div>
            <p className="text-sm sm:text-[0.95rem] leading-relaxed arrie-text-muted">{t('hero.ui.reasonBody') as string}</p>
            <p className="mt-3 text-[0.7rem] arrie-text-faint">{t('hero.ui.pricingNote')}</p>
          </div>
        </div>
      </motion.div>

      <div className="relative z-[2] mt-5 grid grid-cols-1 gap-3 sm:grid-cols-5 sm:gap-3">
        <motion.div
          className="sm:col-span-3 rounded-2xl arrie-panel-inner border border-white/12 p-4 sm:p-5 backdrop-blur-lg"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
        >
          <div className="flex justify-between items-baseline gap-2 mb-0.5">
            <span className="arrie-eyebrow text-[0.6rem]">{t('hero.ui.graphLabel') as string}</span>
            <span className="text-[0.65rem] arrie-text-faint">{t('hero.ui.graphHint') as string}</span>
          </div>
          <HeroSparkline />
        </motion.div>
        <motion.div
          className="sm:col-span-2 rounded-2xl border p-4 sm:p-5 backdrop-blur-xl flex flex-col justify-center"
          style={{
            borderColor: 'rgba(214, 161, 74, 0.2)',
            background:
              'linear-gradient(160deg, rgba(255,255,255,0.1) 0%, rgba(255,248,240,0.05) 100%)',
          }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32, duration: 0.6 }}
        >
          <div className="arrie-eyebrow text-[0.6rem] mb-2">{t('hero.ui.simEyebrow') as string}</div>
          <p className="text-sm leading-snug arrie-text-muted mb-3">{t('hero.ui.simVerdict') as string}</p>
          <div className="flex items-center justify-between gap-2">
            <span className="text-[0.65rem] arrie-text-faint uppercase tracking-wider">{t('hero.ui.confidence')}</span>
            <span className="arrie-heading text-base font-light tabular-nums">83%</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
