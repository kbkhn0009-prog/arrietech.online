'use client'

import { motion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'

export function PlatformSection() {
  const { t } = useI18n()
  const bullets = t('platform.bullets')
  const bulletItems = Array.isArray(bullets) ? bullets : []
  const cards = [
    { title: t('platform.card.1.title'), desc: t('platform.card.1.desc') },
    { title: t('platform.card.2.title'), desc: t('platform.card.2.desc') },
    { title: t('platform.card.3.title'), desc: t('platform.card.3.desc') },
  ]

  return (
    <section id="platform" className="py-28 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <div className="text-sm uppercase tracking-[0.3em] text-white/40 mb-4">
            {t('platform.eyebrow') as string}
          </div>
          <h3 className="text-4xl md:text-5xl font-light leading-tight mb-6">
            {t('platform.title') as string}
          </h3>
          <p className="text-lg text-white/60 leading-relaxed mb-8">
            {t('platform.text') as string}
          </p>
          <div className="space-y-4">
            {bulletItems.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                <div className="text-white/75">{item}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-5">
          {cards.map((card, index) => (
            <motion.div
              key={card.title as string}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-[28px] border border-white/10 bg-white/[0.03] p-7"
            >
              <h4 className="text-xl font-light mb-3">{card.title as string}</h4>
              <p className="text-white/55 leading-relaxed">{card.desc as string}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
