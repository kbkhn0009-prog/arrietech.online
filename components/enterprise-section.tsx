'use client'

import { motion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'
import { NetworkCoordinationMap } from './ops/network-coordination-map'

export function EnterpriseSection() {
  const { t } = useI18n()

  return (
    <section id="enterprise" className="py-28 px-6 border-t border-white/10 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="arrie-eyebrow text-sm mb-4">{t('enterprise.eyebrow') as string}</div>
          <h3 className="arrie-heading text-4xl md:text-6xl font-light leading-tight mb-4">
            {t('enterprise.title') as string}
          </h3>
          <p className="text-lg arrie-text-muted leading-relaxed">{t('enterprise.text') as string}</p>
        </motion.div>
        <NetworkCoordinationMap />
      </div>
    </section>
  )
}
