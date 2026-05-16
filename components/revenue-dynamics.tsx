'use client'

import { motion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'
import { RevenueTelemetrySurface } from './ops/revenue-telemetry-surface'

export function RevenueDynamics() {
  const { t } = useI18n()

  return (
    <section id="revenue" className="py-28 border-b border-white/10 px-6 overflow-hidden scroll-mt-24">
      <motion.div
        className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <div className="arrie-eyebrow text-sm mb-4">{t('revenue.eyebrow') as string}</div>
        <h2 className="arrie-heading text-4xl md:text-6xl font-light leading-tight mb-4">
          {t('revenue.title') as string}
        </h2>
        <p className="text-lg arrie-text-muted leading-relaxed max-w-2xl mx-auto">{t('revenue.text') as string}</p>
      </motion.div>
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <RevenueTelemetrySurface />
      </motion.div>
    </section>
  )
}
