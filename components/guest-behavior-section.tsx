'use client'

import { motion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'
import { GuestDecisionIntelligence } from './ops/guest-decision-intelligence'

export function GuestBehaviorSection() {
  const { t } = useI18n()

  return (
    <section id="guest" className="py-28 border-t border-white/10 px-6 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="max-w-3xl mb-10"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="arrie-eyebrow text-sm mb-4">{t('guest.eyebrow') as string}</div>
          <h2 className="arrie-heading text-4xl md:text-6xl font-light leading-tight mb-4">
            {t('guest.title') as string}
          </h2>
          <p className="text-lg arrie-text-muted leading-relaxed">{t('guest.body') as string}</p>
        </motion.div>
        <GuestDecisionIntelligence />
      </div>
    </section>
  )
}
