'use client'

import { motion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'
import { RevenueCoordinationMap } from './ops/revenue-coordination-map'

export function SignalLayer() {
  const { t } = useI18n()

  return (
    <section id="network" className="relative py-28 border-b border-white/10 px-6 overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="max-w-3xl mb-12 text-center mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="arrie-eyebrow text-sm mb-4">{t('network.eyebrow') as string}</div>
          <h2 className="arrie-heading text-4xl md:text-6xl font-light leading-tight mb-4">
            {t('network.title') as string}
          </h2>
          <p className="arrie-text-muted text-lg">{t('network.tagline') as string}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[40px] arrie-panel glow-luminous p-4 sm:p-6 lg:p-8 overflow-hidden"
        >
          <RevenueCoordinationMap />
        </motion.div>
      </div>
    </section>
  )
}
