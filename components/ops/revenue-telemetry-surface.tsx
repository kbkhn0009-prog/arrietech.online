'use client'

import { useId } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { useI18n, type Locale } from '@/lib/i18n'
import { MENU_CATEGORIES } from '@/lib/menu-categories'

const METRIC_KEYS = [
  'avgCheck',
  'conversion',
  'profitable',
  'margin',
  'service',
  'categoryDemand',
] as const

function categoryLabel(nameRu: string, nameEn: string, locale: Locale) {
  return locale === 'ru' ? nameRu : nameEn
}

function TelemetryBackdrop() {
  return (
    <>
      <motion.div
        className="absolute inset-0 opacity-30 pointer-events-none"
        aria-hidden
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: '28px 28px',
        }}
      />
      <motion.div
        className="absolute top-0 right-0 w-2/3 h-1/2 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 80% 20%, rgba(244,210,140,0.07) 0%, transparent 55%)',
        }}
        animate={{ opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
    </>
  )
}

function RevenueTrajectory({ strokeId, reduceMotion }: { strokeId: string; reduceMotion: boolean | null }) {
  const pathD =
    'M 0 72 C 40 68, 80 52, 120 58 S 200 38, 260 44 S 340 28, 400 32'
  const areaD = `${pathD} L 400 100 L 0 100 Z`

  return (
    <svg viewBox="0 0 400 100" className="w-full h-[5.5rem] sm:h-24 mb-5" aria-hidden preserveAspectRatio="none">
      <defs>
        <linearGradient id={strokeId} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
          <stop offset="45%" stopColor="rgba(244,210,140,0.65)" />
          <stop offset="100%" stopColor="rgba(214,161,74,0.35)" />
        </linearGradient>
        <linearGradient id={`${strokeId}-fill`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(244,210,140,0.14)" />
          <stop offset="100%" stopColor="rgba(244,210,140,0)" />
        </linearGradient>
      </defs>
      <motion.path
        d={areaD}
        fill={`url(#${strokeId}-fill)`}
        animate={
          reduceMotion
            ? undefined
            : {
                d: [
                  areaD,
                  'M 0 74 C 40 70, 80 54, 120 60 S 200 40, 260 46 S 340 30, 400 34 L 400 100 L 0 100 Z',
                  areaD,
                ],
              }
        }
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.path
        d={pathD}
        fill="none"
        stroke={`url(#${strokeId})`}
        strokeWidth="1.25"
        vectorEffect="non-scaling-stroke"
        animate={
          reduceMotion
            ? undefined
            : {
                d: [
                  pathD,
                  'M 0 74 C 40 70, 80 54, 120 60 S 200 40, 260 46 S 340 30, 400 34',
                  pathD,
                ],
              }
        }
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      {!reduceMotion &&
        [0, 1, 2].map((i) => (
          <circle key={i} r="2.5" fill="rgba(244,210,140,0.85)">
            <animateMotion dur={`${4.5 + i * 0.8}s`} repeatCount="indefinite" path={pathD} begin={`${i * 1.2}s`} />
          </circle>
        ))}
    </svg>
  )
}

function CategoryActivity({ locale, reduceMotion }: { locale: Locale; reduceMotion: boolean | null }) {
  const { t } = useI18n()

  return (
    <div className="mb-4 sm:mb-0">
      <div className="arrie-text-faint text-[0.6rem] uppercase tracking-[0.16em] mb-2">
        {t('revenue.categoryActivity') as string}
      </div>
      <div className="grid grid-cols-6 gap-1.5">
        {MENU_CATEGORIES.map((cat, i) => (
          <div key={cat.id} className="flex flex-col gap-1 min-w-0">
            <motion.div
              className="rounded-sm origin-bottom"
              style={{
                height: `${28 + cat.demand * 36}px`,
                background: `linear-gradient(180deg, rgba(244,210,140,${0.15 + cat.demand * 0.35}) 0%, rgba(244,210,140,${0.05 + cat.demand * 0.1}) 100%)`,
                border: `1px solid rgba(244,210,140,${0.08 + cat.demand * 0.2})`,
              }}
              animate={reduceMotion ? undefined : { scaleY: [0.92, 1, 0.92] }}
              transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <span className="text-[0.45rem] sm:text-[0.5rem] arrie-text-faint truncate leading-tight">
              {categoryLabel(cat.nameRu, cat.nameEn, locale).split(/[\s/]/)[0]}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function MarginPressureStrip({ reduceMotion }: { reduceMotion: boolean | null }) {
  const { t } = useI18n()
  const zones = [0.35, 0.55, 0.72, 0.48, 0.62, 0.88, 0.52, 0.7]

  return (
    <div className="mb-4">
      <div className="arrie-text-faint text-[0.6rem] uppercase tracking-[0.16em] mb-2">
        {t('revenue.marginZone') as string}
      </div>
      <div className="flex gap-0.5 h-2 rounded-full overflow-hidden bg-white/[0.04]">
        {zones.map((z, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-sm"
            style={{ background: `rgba(244,210,140,${0.12 + z * 0.4})` }}
            animate={reduceMotion ? undefined : { opacity: [0.5, 0.85 + z * 0.15, 0.5] }}
            transition={{ duration: 3.5 + i * 0.2, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>
    </div>
  )
}

function ServiceLoadGauge({ reduceMotion }: { reduceMotion: boolean | null }) {
  const { t } = useI18n()
  const load = 0.68

  return (
    <div>
      <div className="arrie-text-faint text-[0.6rem] uppercase tracking-[0.16em] mb-2">
        {t('revenue.serviceLoad') as string}
      </div>
      <div className="relative h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{
            background: 'linear-gradient(90deg, rgba(244,210,140,0.35), rgba(214,161,74,0.55))',
          }}
          animate={reduceMotion ? undefined : { width: [`${load * 92}%`, `${load * 100}%`, `${load * 92}%`] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </div>
  )
}

function DemandShiftViz({ reduceMotion }: { reduceMotion: boolean | null }) {
  const { t } = useI18n()

  return (
    <motion.div className="mt-4 pt-4 border-t border-white/[0.06]">
      <div className="arrie-text-faint text-[0.6rem] uppercase tracking-[0.16em] mb-3">
        {t('revenue.demandShift') as string}
      </div>
      <div className="relative h-10 rounded-xl bg-white/[0.03] overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-[38%] rounded-l-xl bg-white/[0.06]" />
        <motion.div
          className="absolute inset-y-0 rounded-xl"
          style={{
            background: 'linear-gradient(90deg, rgba(244,210,140,0.12), rgba(244,210,140,0.28))',
            border: '1px solid rgba(244,210,140,0.2)',
          }}
          animate={reduceMotion ? undefined : { left: ['28%', '34%', '28%'], width: ['44%', '50%', '44%'] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        {!reduceMotion &&
          Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 w-1 h-1 rounded-full -translate-y-1/2"
              style={{ background: 'var(--arrie-amber-glow)' }}
              animate={{ left: ['15%', '75%'], opacity: [0, 1, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: i * 0.6, ease: 'easeInOut' }}
            />
          ))}
      </div>
    </motion.div>
  )
}

function ImpactTransition() {
  const { t } = useI18n()
  const before = t('revenue.before.items')
  const after = t('revenue.after.items')
  const beforeItems = Array.isArray(before) ? before : []
  const afterItems = Array.isArray(after) ? after : []

  return (
    <div className="mt-5 grid sm:grid-cols-2 gap-3">
      <div className="rounded-xl border border-white/[0.08] p-3 sm:p-4 bg-white/[0.02]">
        <div className="text-[0.6rem] uppercase tracking-[0.18em] arrie-text-faint mb-3">
          {t('revenue.impact.before') as string}
        </div>
        <ul className="space-y-2">
          {beforeItems.map((item) => (
            <li key={item} className="flex gap-2 text-[0.7rem] arrie-text-muted leading-snug">
              <span className="text-white/20 shrink-0">—</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-xl border border-[rgba(244,210,140,0.22)] p-3 sm:p-4 bg-[rgba(244,210,140,0.04)]">
        <div className="text-[0.6rem] uppercase tracking-[0.18em] mb-3" style={{ color: 'var(--arrie-amber-glow)' }}>
          {t('revenue.impact.after') as string}
        </div>
        <ul className="space-y-2">
          {afterItems.map((item) => (
            <li key={item} className="flex gap-2 text-[0.7rem] arrie-heading font-light leading-snug">
              <span className="shrink-0" style={{ color: 'var(--arrie-amber-glow)' }}>
                ·
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function LiveMetricsPanel() {
  const { t } = useI18n()

  return (
    <div className="grid grid-cols-2 gap-2 sm:gap-3">
      {METRIC_KEYS.map((key, i) => (
        <motion.div
          key={key}
          className="rounded-xl arrie-panel-inner px-3 py-2.5 sm:px-3.5 sm:py-3 border border-white/[0.08]"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
        >
          <div className="arrie-text-faint text-[0.55rem] sm:text-[0.6rem] uppercase tracking-wider mb-1 leading-tight">
            {t(`revenue.metric.${key}.label`) as string}
          </div>
          <div className="arrie-heading text-sm sm:text-base font-light tabular-nums leading-none mb-1">
            {t(`revenue.metric.${key}.value`) as string}
          </div>
          <div className="text-[0.6rem] sm:text-[0.65rem]" style={{ color: 'var(--arrie-amber-glow)' }}>
            {t(`revenue.metric.${key}.delta`) as string}
          </div>
        </motion.div>
      ))}
    </div>
  )
}

function RecommendationCard() {
  const { t } = useI18n()
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className="rounded-2xl border p-4 sm:p-5 relative overflow-hidden"
      style={{
        borderColor: 'rgba(244, 210, 140, 0.28)',
        background:
          'linear-gradient(165deg, rgba(255,255,255,0.1) 0%, rgba(255,248,240,0.05) 50%, rgba(11,11,12,0.4) 100%)',
      }}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.15 }}
    >
      {!reduceMotion && (
        <motion.div
          className="absolute -top-12 -right-12 w-32 h-32 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(244,210,140,0.12) 0%, transparent 70%)' }}
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      )}
      <div className="arrie-eyebrow text-[0.65rem] mb-3">{t('revenue.rec.title') as string}</div>
      <p className="text-sm arrie-heading font-light leading-relaxed mb-3">{t('revenue.rec.action') as string}</p>
      <p className="text-xs arrie-text-muted leading-relaxed mb-4">
        <span className="arrie-text-faint uppercase tracking-wider text-[0.6rem] mr-2">
          {t('revenue.rec.forecastLabel') as string}
        </span>
        {t('revenue.rec.forecast') as string}
      </p>
      <div className="flex flex-wrap gap-4 text-[0.7rem]">
        <div>
          <span className="arrie-text-faint block text-[0.6rem] uppercase tracking-wider mb-0.5">
            {t('revenue.rec.confidence') as string}
          </span>
          <span className="arrie-heading tabular-nums">{t('revenue.rec.confidenceValue') as string}</span>
        </div>
        <div>
          <span className="arrie-text-faint block text-[0.6rem] uppercase tracking-wider mb-0.5">
            {t('revenue.rec.status') as string}
          </span>
          <span className="arrie-heading font-light" style={{ color: 'var(--arrie-amber-glow)' }}>
            {t('revenue.rec.statusValue') as string}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export function RevenueTelemetrySurface() {
  const { t, locale } = useI18n()
  const reduceMotion = useReducedMotion()
  const gradId = useId().replace(/:/g, '')

  return (
    <div className="grid lg:grid-cols-[1.35fr_1fr] gap-5 lg:gap-6">
      <motion.div
        className="relative rounded-[32px] arrie-panel glow-luminous p-5 sm:p-7 lg:p-8 overflow-hidden min-h-[420px]"
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <TelemetryBackdrop />
        <div className="relative z-10">
          <div className="flex items-center justify-between gap-3 mb-1">
            <span className="arrie-text-faint text-[0.6rem] uppercase tracking-[0.18em]">
              {t('revenue.trajectory') as string}
            </span>
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.55rem] uppercase tracking-[0.14em]"
              style={{
                color: 'var(--arrie-amber-glow)',
                background: 'rgba(244, 210, 140, 0.1)',
                border: '1px solid rgba(244, 210, 140, 0.22)',
              }}
            >
              <motion.span
                className="w-1.5 h-1.5 rounded-full bg-[var(--arrie-amber-glow)]"
                animate={reduceMotion ? undefined : { opacity: [1, 0.35, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              {t('revenue.live') as string}
            </span>
          </div>

          <RevenueTrajectory strokeId={gradId} reduceMotion={reduceMotion} />

          <div className="grid sm:grid-cols-2 gap-4 mb-1">
            <CategoryActivity locale={locale} reduceMotion={reduceMotion} />
            <div className="flex flex-col justify-between gap-4">
              <MarginPressureStrip reduceMotion={reduceMotion} />
              <ServiceLoadGauge reduceMotion={reduceMotion} />
            </div>
          </div>

          <DemandShiftViz reduceMotion={reduceMotion} />
          <ImpactTransition />
        </div>
      </motion.div>

      <div className="flex flex-col gap-4 lg:gap-5">
        <motion.div
          initial={{ opacity: 0, x: 12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.08 }}
        >
          <LiveMetricsPanel />
        </motion.div>
        <RecommendationCard />
      </div>
    </div>
  )
}
