'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'

function Row({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 py-4 border-b border-white/[0.07] last:border-0">
      <span className="text-sm arrie-text-faint">{label}</span>
      <span
        className={`text-sm sm:text-base font-light leading-relaxed sm:text-right max-w-md ${highlight ? '' : 'arrie-heading'}`}
        style={highlight ? { color: 'var(--arrie-amber-glow)' } : undefined}
      >
        {value}
      </span>
    </div>
  )
}

export function PricingPolicyCorrection() {
  const { t } = useI18n()
  const reduceMotion = useReducedMotion()

  return (
    <section id="decisions" className="py-28 px-6 border-t border-white/10">
      <motion.div
        className="max-w-3xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="arrie-eyebrow text-sm mb-4">{t('decisions.eyebrow') as string}</div>
        <h2 className="arrie-heading text-4xl md:text-5xl font-light leading-tight mb-4">
          {t('decisions.title') as string}
        </h2>
        <p className="arrie-text-muted text-lg leading-relaxed">{t('decisions.subtitle') as string}</p>
      </motion.div>

      <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
        <motion.div
          className="rounded-[28px] arrie-panel glow-luminous p-6 sm:p-8"
          animate={reduceMotion ? undefined : { y: [0, -2, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Row label={t('decisions.recommendation') as string} value={t('decisions.recommendationValue') as string} />
          <Row label={t('decisions.why') as string} value={t('decisions.whyValue') as string} />
          <Row label={t('decisions.confidence') as string} value={t('decisions.confidenceValue') as string} />
          <Row label={t('decisions.verdict') as string} value={t('decisions.verdictValue') as string} highlight />
        </motion.div>

        <motion.div
          className="rounded-[28px] arrie-panel-inner border border-white/12 p-6 sm:p-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div className="arrie-eyebrow text-[0.65rem] mb-5">{t('sim.eyebrow') as string}</div>
          <h3 className="arrie-heading text-lg font-light mb-6">{t('sim.title') as string}</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-baseline">
              <span className="text-sm arrie-text-faint">{t('sim.demandRisk') as string}</span>
              <span className="arrie-heading text-sm">{t('sim.demandRiskValue') as string}</span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className="text-sm arrie-text-faint">{t('sim.margin') as string}</span>
              <span className="text-sm" style={{ color: 'var(--arrie-amber-glow)' }}>
                {t('sim.marginValue') as string}
              </span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className="text-sm arrie-text-faint">{t('sim.stability') as string}</span>
              <span className="arrie-heading text-sm">{t('sim.stabilityValue') as string}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
