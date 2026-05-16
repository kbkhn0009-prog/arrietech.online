'use client'

import { motion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'
import { HeroVisual } from './hero-visual'
import { LeadCTAButtons } from './lead-cta-buttons'

export function Hero() {
  const { t } = useI18n()
  const relationships = t('hero.relationships')
  const pills = Array.isArray(relationships) ? relationships.slice(0, 3) : []

  return (
    <section className="relative min-h-screen flex items-center border-b border-white/10 px-6 pt-16 sm:pt-[4.25rem] 2xl:pt-[6.75rem] overflow-hidden">
      <motion.div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background: `
            radial-gradient(ellipse 55% 70% at 78% 42%, rgba(244, 210, 140, 0.18), transparent 58%),
            radial-gradient(ellipse 40% 50% at 72% 50%, rgba(255, 255, 255, 0.06), transparent 55%)
          `,
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center w-full"
      >
        <div>
          <div className="arrie-eyebrow mb-6">ARRIE</div>

          <h1 className="arrie-heading text-5xl md:text-7xl font-light leading-[1.02] mb-6 tracking-tight">
            {t('hero.headline') as string}
          </h1>

          <p className="text-xl md:text-2xl arrie-text-muted leading-relaxed mb-8 max-w-2xl">
            {t('hero.subheadline') as string}
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            {pills.map((item) => (
              <div
                key={item}
                className="rounded-full arrie-panel-inner px-4 py-2 text-sm"
                style={{ color: 'var(--arrie-text)' }}
              >
                {item}
              </div>
            ))}
          </div>

          <LeadCTAButtons />
        </div>

        <HeroVisual />
      </motion.div>
    </section>
  )
}
