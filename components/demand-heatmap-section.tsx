'use client'

import { motion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'
import { CategoryDemandMap } from './ops/category-grid'

export function DemandHeatmapSection() {
  const { t } = useI18n()

  return (
    <section id="demand" className="py-20 px-6 border-b border-white/10 scroll-mt-24">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="arrie-eyebrow text-sm mb-3">{t('heatmap.eyebrow') as string}</div>
        <h3 className="arrie-heading text-2xl md:text-3xl font-light mb-8">{t('heatmap.title') as string}</h3>
        <div className="rounded-[28px] arrie-panel p-6 sm:p-8">
          <CategoryDemandMap />
        </div>
      </motion.div>
    </section>
  )
}
