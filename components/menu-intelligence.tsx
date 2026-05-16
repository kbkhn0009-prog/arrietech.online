'use client'

import { motion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'
import { MenuFlowDiagram } from './ops/menu-flow-diagram'

export function MenuIntelligence() {
  const { t } = useI18n()

  return (
    <section id="menu" className="py-28 border-b border-white/10 px-6 scroll-mt-24">
      <div className="max-w-4xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="arrie-eyebrow text-sm mb-4">{t('menu.eyebrow') as string}</div>
          <h2 className="arrie-heading text-4xl md:text-6xl font-light leading-tight mb-4">
            {t('menu.title') as string}
          </h2>
          <p className="text-lg arrie-text-muted leading-relaxed max-w-2xl">{t('menu.subtitle') as string}</p>
        </motion.div>
      </div>
      <div className="max-w-7xl mx-auto">
        <MenuFlowDiagram />
      </div>
    </section>
  )
}
