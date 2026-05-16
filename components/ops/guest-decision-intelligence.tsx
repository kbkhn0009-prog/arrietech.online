'use client'

import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'
import { GuestStepDetailPanel, MenuInfluencePanel } from './guest-journey-ui'

const FLOW_STEPS = [
  'guest.flow.interest',
  'guest.flow.menuView',
  'guest.flow.compare',
  'guest.flow.choice',
  'guest.flow.upsell',
  'guest.flow.order',
] as const

const IMPACT_ROWS = [
  { label: 'guest.impact.avgCheck', value: 'guest.impact.avgCheckValue', delta: 'guest.impact.avgCheckDelta' },
  { label: 'guest.impact.conversion', value: 'guest.impact.conversionValue', delta: 'guest.impact.conversionDelta' },
  { label: 'guest.impact.upsell', value: 'guest.impact.upsellValue', delta: 'guest.impact.upsellDelta' },
  { label: 'guest.impact.profitable', value: 'guest.impact.profitableValue', delta: 'guest.impact.profitableDelta' },
] as const

const TOP_KPIS = [
  { label: 'guest.kpi.conversion', val: 'guest.kpi.conversionVal', delta: 'guest.kpi.conversionDelta' },
  { label: 'guest.kpi.avgCheck', val: 'guest.kpi.avgCheckVal', delta: 'guest.kpi.avgCheckDelta' },
  { label: 'guest.kpi.upsell', val: 'guest.kpi.upsellVal', delta: 'guest.kpi.upsellDelta' },
  { label: 'guest.kpi.profitable', val: 'guest.kpi.profitableVal', delta: 'guest.kpi.profitableDelta' },
] as const

function TelemetryBg() {
  return (
    <div
      className="absolute inset-0 pointer-events-none opacity-25"
      aria-hidden
      style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '32px 32px',
      }}
    />
  )
}

function TopKpiStrip() {
  const { t } = useI18n()
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 mb-6 relative z-10">
      {TOP_KPIS.map((k, i) => (
        <motion.div
          key={k.label}
          className="rounded-xl arrie-panel-inner border border-white/[0.08] px-3 py-2.5 sm:py-3"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
        >
          <div className="arrie-text-faint text-[0.55rem] sm:text-[0.6rem] uppercase tracking-wider mb-1">
            {t(k.label) as string}
          </div>
          <div className="arrie-heading text-sm sm:text-base font-light tabular-nums">{t(k.val) as string}</div>
          <div className="text-[0.6rem] sm:text-[0.65rem] mt-0.5" style={{ color: 'var(--arrie-amber-glow)' }}>
            {t(k.delta) as string}
          </div>
        </motion.div>
      ))}
    </div>
  )
}

function DecisionFlowColumn({
  activeStep,
  setActiveStep,
}: {
  activeStep: number
  setActiveStep: (n: number) => void
}) {
  const { t } = useI18n()
  const reduceMotion = useReducedMotion()

  return (
    <div className="relative">
      <div className="arrie-text-faint text-[0.6rem] uppercase tracking-[0.18em] mb-3 lg:hidden">
        {t('guest.step.detail') as string}
      </div>
      <div className="flex flex-col gap-2 sm:gap-2.5 relative z-10">
        {FLOW_STEPS.map((key, i) => {
          const active = i === activeStep
          return (
            <motion.button
              key={key}
              type="button"
              className="relative w-full text-left rounded-xl border px-3 py-2.5 sm:py-3 transition-colors"
              style={{
                borderColor: active ? 'rgba(244,210,140,0.45)' : 'rgba(255,255,255,0.1)',
                background: active
                  ? 'linear-gradient(165deg, rgba(255,255,255,0.12) 0%, rgba(244,210,140,0.06) 100%)'
                  : 'rgba(255,255,255,0.04)',
                boxShadow: active ? '0 0 24px rgba(244,210,140,0.1)' : undefined,
              }}
              onMouseEnter={() => setActiveStep(i)}
              onFocus={() => setActiveStep(i)}
              onClick={() => setActiveStep(i)}
              animate={reduceMotion || active ? undefined : { opacity: [0.7, 0.9, 0.7] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
            >
              <div className="flex items-center gap-2">
                <span
                  className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[0.55rem] tabular-nums"
                  style={{
                    background: active ? 'rgba(244,210,140,0.2)' : 'rgba(255,255,255,0.06)',
                    color: active ? 'var(--arrie-amber-glow)' : 'var(--arrie-text-faint)',
                  }}
                >
                  {i + 1}
                </span>
                <span className={`text-xs sm:text-sm font-light ${active ? 'arrie-heading' : 'arrie-text-muted'}`}>
                  {t(key) as string}
                </span>
              </div>
            </motion.button>
          )
        })}
      </div>
      <GuestStepDetailPanel activeStep={activeStep} />
    </div>
  )
}

function ImpactColumn() {
  const { t } = useI18n()

  return (
    <div>
      <div className="arrie-text-faint text-[0.6rem] uppercase tracking-[0.18em] mb-4">
        {t('guest.impact.title') as string}
      </div>
      <div className="space-y-2.5">
        {IMPACT_ROWS.map((row, i) => (
          <motion.div
            key={row.label}
            className="rounded-xl border border-white/[0.1] px-3 py-2.5 sm:py-3"
            style={{ background: 'rgba(255,255,255,0.04)' }}
            initial={{ opacity: 0, x: 8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + i * 0.06 }}
          >
            <div className="arrie-text-faint text-[0.6rem] uppercase tracking-wider mb-1">{t(row.label) as string}</div>
            <div className="flex items-baseline justify-between gap-2">
              <span className="arrie-heading text-base sm:text-lg font-light tabular-nums">{t(row.value) as string}</span>
              <span className="text-[0.65rem] sm:text-xs" style={{ color: 'var(--arrie-amber-glow)' }}>
                {t(row.delta) as string}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function InsightBar() {
  const { t } = useI18n()

  return (
    <motion.div
      className="relative z-10 mt-6 rounded-xl border p-4 sm:p-5"
      style={{
        borderColor: 'rgba(244,210,140,0.22)',
        background: 'linear-gradient(90deg, rgba(244,210,140,0.06) 0%, rgba(11,11,12,0.5) 100%)',
      }}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="arrie-eyebrow text-[0.65rem] mb-2">{t('guest.insight.title') as string}</div>
      <p className="text-sm arrie-text-muted leading-relaxed mb-2">{t('guest.insight.body') as string}</p>
      <p className="text-sm font-light" style={{ color: 'var(--arrie-amber-glow)' }}>
        {t('guest.insight.effect') as string}
      </p>
    </motion.div>
  )
}

export function GuestDecisionIntelligence() {
  const [activeStep, setActiveStep] = useState(0)
  const reduceMotion = useReducedMotion()

  return (
    <div className="relative rounded-[36px] arrie-panel glow-luminous p-5 sm:p-7 lg:p-8 overflow-hidden">
      <TelemetryBg />
      {!reduceMotion && (
        <motion.div
          className="absolute top-1/2 left-[20%] right-[20%] h-px pointer-events-none hidden lg:block"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(244,210,140,0.2), transparent)' }}
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      )}
      <TopKpiStrip />
      <div className="relative z-10 grid lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.35fr)_minmax(0,0.9fr)] gap-6 lg:gap-8 items-start">
        <MenuInfluencePanel activeStep={activeStep} />
        <DecisionFlowColumn activeStep={activeStep} setActiveStep={setActiveStep} />
        <ImpactColumn />
      </div>
      <InsightBar />
    </div>
  )
}
