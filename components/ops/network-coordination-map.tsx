'use client'

import { useId } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'

const NET_METRICS = [
  'enterprise.net.locations',
  'enterprise.net.coverage',
  'enterprise.net.profitableDemand',
  'enterprise.net.revenueGrowth',
  'enterprise.net.avgMargin',
  'enterprise.net.rollout',
] as const

const LOCATIONS = [
  { id: 'center', nameKey: 'enterprise.loc.center', check: '1 780 ₽', growth: '+16%', margin: '31%', x: 50, y: 14 },
  { id: 'north', nameKey: 'enterprise.loc.north', check: '1 640 ₽', growth: '+12%', margin: '30%', x: 78, y: 28 },
  { id: 'east', nameKey: 'enterprise.loc.east', check: '1 720 ₽', growth: '+14%', margin: '31%', x: 82, y: 52 },
  { id: 'south', nameKey: 'enterprise.loc.south', check: '1 690 ₽', growth: '+10%', margin: '29%', x: 62, y: 78 },
  { id: 'west', nameKey: 'enterprise.loc.west', check: '1 610 ₽', growth: '+9%', margin: '28%', x: 22, y: 72 },
  { id: 'suburb', nameKey: 'enterprise.loc.suburb', check: '1 580 ₽', growth: '+8%', margin: '28%', x: 18, y: 38 },
] as const

function TopologyBg() {
  return (
    <>
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        aria-hidden
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 40% at 50% 45%, rgba(244,210,140,0.08) 0%, transparent 60%)',
        }}
      />
    </>
  )
}

function NetworkMetricsColumn() {
  const { t } = useI18n()

  return (
    <div className="space-y-2">
      {NET_METRICS.map((key, i) => (
        <motion.div
          key={key}
          className="rounded-xl border border-white/[0.08] px-3 py-2.5 sm:py-3"
          style={{ background: 'rgba(255,255,255,0.04)' }}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
        >
          <div className="text-xs sm:text-sm arrie-heading font-light leading-snug">{t(key) as string}</div>
        </motion.div>
      ))}
    </div>
  )
}

function MobileLocationsList() {
  const { t } = useI18n()

  return (
    <div className="lg:hidden space-y-2.5 w-full mb-4">
      <div
        className="rounded-2xl border px-4 py-3 text-center"
        style={{
          borderColor: 'rgba(244,210,140,0.35)',
          background: 'linear-gradient(165deg, rgba(255,255,255,0.12) 0%, rgba(244,210,140,0.06) 100%)',
        }}
      >
        <div className="arrie-eyebrow text-[0.55rem] mb-1">ARRIE</div>
        <div className="text-xs arrie-heading font-light">{t('enterprise.hub') as string}</div>
      </div>
      {LOCATIONS.map((loc) => (
        <div
          key={loc.id}
          className="rounded-xl border px-3 py-2.5 w-full"
          style={{ borderColor: 'rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.05)' }}
        >
          <div className="text-xs arrie-heading font-light mb-1">{t(loc.nameKey) as string}</div>
          <div className="flex flex-wrap gap-x-3 gap-y-0.5 text-[0.65rem]">
            <span className="arrie-text-faint">{t('enterprise.loc.check') as string}</span>
            <span className="arrie-heading tabular-nums">{loc.check}</span>
            <span style={{ color: 'var(--arrie-amber-glow)' }}>
              {loc.growth} · {loc.margin} {t('enterprise.loc.margin') as string}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

function CoordinationMap() {
  const { t } = useI18n()
  const reduceMotion = useReducedMotion()
  const gradId = useId().replace(/:/g, '')

  return (
    <div className="relative hidden lg:block w-full min-h-[380px] overflow-hidden">
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden>
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(244,210,140,0.15)" />
            <stop offset="100%" stopColor="rgba(244,210,140,0.45)" />
          </linearGradient>
        </defs>
        {LOCATIONS.map((loc, li) => (
          <motion.line
            key={`hub-${loc.id}`}
            x1="50"
            y1="48"
            x2={loc.x}
            y2={loc.y + 4}
            stroke="rgba(244,210,140,0.15)"
            strokeWidth="0.35"
            vectorEffect="non-scaling-stroke"
            animate={reduceMotion ? undefined : { opacity: [0.12, 0.35, 0.12] }}
            transition={{ duration: 4, repeat: Infinity, delay: li * 0.3 }}
          />
        ))}
        {LOCATIONS.map((loc, i) => {
          const next = LOCATIONS[(i + 1) % LOCATIONS.length]
          return (
            <motion.line
              key={`ring-${loc.id}`}
              x1={loc.x}
              y1={loc.y + 4}
              x2={next.x}
              y2={next.y + 4}
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="0.2"
              vectorEffect="non-scaling-stroke"
              animate={reduceMotion ? undefined : { opacity: [0.05, 0.15, 0.05] }}
              transition={{ duration: 6, repeat: Infinity, delay: i * 0.4 }}
            />
          )
        })}
      </svg>

      <motion.div
        className="absolute left-1/2 top-[48%] -translate-x-1/2 -translate-y-1/2 z-20 rounded-2xl border px-4 py-3 text-center min-w-[7rem]"
        style={{
          borderColor: 'rgba(244,210,140,0.35)',
          background: 'linear-gradient(165deg, rgba(255,255,255,0.14) 0%, rgba(244,210,140,0.08) 100%)',
          boxShadow: '0 0 40px rgba(244,210,140,0.12)',
        }}
        animate={reduceMotion ? undefined : { scale: [1, 1.02, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="arrie-eyebrow text-[0.55rem] mb-1">ARRIE</div>
        <div className="text-xs arrie-heading font-light">{t('enterprise.hub') as string}</div>
      </motion.div>

      {LOCATIONS.map((loc, i) => {
        const shiftX = loc.x > 55 ? -12 : loc.x < 30 ? 6 : 0
        return (
        <motion.div
          key={loc.id}
          className="absolute z-10 -translate-x-1/2 -translate-y-1/2 w-[7.75rem] max-w-[42vw]"
          style={{ left: `calc(${loc.x}% + ${shiftX}px)`, top: `${loc.y}%` }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 + i * 0.06 }}
        >
          <motion.div
            className="rounded-xl border backdrop-blur-xl px-2.5 py-2 sm:px-3 sm:py-2.5 text-center"
            style={{
              borderColor: 'rgba(255,255,255,0.14)',
              background: 'rgba(255,255,255,0.06)',
            }}
            animate={reduceMotion ? undefined : { y: [0, -2, 0] }}
            transition={{ duration: 5 + i, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="text-[0.65rem] sm:text-xs arrie-heading font-light leading-tight mb-1">
              {t(loc.nameKey) as string}
            </div>
            <div className="text-[0.6rem] arrie-text-faint mb-0.5">{t('enterprise.loc.check') as string}</div>
            <div className="text-sm arrie-heading font-light tabular-nums">{loc.check}</div>
            <div className="text-[0.6rem] mt-0.5" style={{ color: 'var(--arrie-amber-glow)' }}>
              {loc.growth} · {loc.margin} {t('enterprise.loc.margin') as string}
            </div>
          </motion.div>
        </motion.div>
        )
      })}
    </div>
  )
}

function SyncPanel() {
  const { t } = useI18n()

  const rows = [
    { label: 'enterprise.sync.menuLabel', value: 'enterprise.sync.menuValue' },
    { label: 'enterprise.sync.effectLabel', value: 'enterprise.sync.effectValue' },
    { label: 'enterprise.sync.speedLabel', value: 'enterprise.sync.speedValue', extra: 'enterprise.sync.speedDelta' },
    { label: 'enterprise.sync.statusLabel', value: 'enterprise.sync.statusValue' },
  ] as const

  return (
    <div className="rounded-2xl border border-white/[0.1] p-4 sm:p-5 h-full" style={{ background: 'rgba(255,255,255,0.04)' }}>
      <div className="arrie-eyebrow text-[0.65rem] mb-4">{t('enterprise.sync.title') as string}</div>
      <div className="space-y-4">
        {rows.map((row) => (
          <div key={row.label}>
            <div className="arrie-text-faint text-[0.6rem] uppercase tracking-wider mb-1">{t(row.label) as string}</div>
            <p className="text-xs sm:text-sm arrie-text-muted leading-relaxed">{t(row.value) as string}</p>
            {'extra' in row && (
              <p className="text-[0.65rem] mt-1" style={{ color: 'var(--arrie-amber-glow)' }}>
                {t(row.extra) as string}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function CoordinationInsight() {
  const { t } = useI18n()

  return (
    <motion.div
      className="mt-5 rounded-xl border p-4 sm:p-5"
      style={{
        borderColor: 'rgba(244,210,140,0.22)',
        background: 'linear-gradient(90deg, rgba(244,210,140,0.06) 0%, transparent 100%)',
      }}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="arrie-eyebrow text-[0.65rem] mb-2">{t('enterprise.insight.title') as string}</div>
      <p className="text-sm arrie-text-muted mb-2">{t('enterprise.insight.body') as string}</p>
      <p className="text-sm arrie-heading font-light mb-2">{t('enterprise.insight.recommendation') as string}</p>
      <p className="text-sm" style={{ color: 'var(--arrie-amber-glow)' }}>{t('enterprise.insight.forecast') as string}</p>
    </motion.div>
  )
}

export function NetworkCoordinationMap() {
  return (
    <div className="relative rounded-[36px] arrie-panel glow-luminous p-5 sm:p-7 lg:p-8 overflow-hidden">
      <TopologyBg />
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[minmax(0,200px)_1fr_minmax(0,240px)] gap-6 lg:gap-8 items-start">
        <NetworkMetricsColumn />
        <div className="min-w-0 w-full overflow-hidden">
          <MobileLocationsList />
          <CoordinationMap />
        </div>
        <SyncPanel />
      </div>
      <CoordinationInsight />
    </div>
  )
}
