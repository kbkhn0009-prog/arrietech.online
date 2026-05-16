'use client'

import { motion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'
import { LeadCTAButtons } from './lead-cta-buttons'

const TOP_IDX = [0, 1, 2, 3, 4] as const
/** Согласовано с Hero: доля допродаж 19%; 232 показа → ~44 принято */
const UPSELL_PCT = 19

export function VisionSection() {
  const { t } = useI18n()

  return (
    <section id="vision" className="py-28 px-6 border-t border-white/10">
      <motion.div
        className="max-w-4xl mx-auto text-center mb-12 md:mb-14"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <div className="arrie-eyebrow text-sm mb-4">{t('vision.eyebrow') as string}</div>
        <h3 className="arrie-heading text-4xl md:text-6xl font-light leading-tight mb-6">
          {t('vision.headline') as string}
        </h3>
        <p className="text-lg arrie-text-muted leading-relaxed max-w-2xl mx-auto">
          {t('vision.body') as string}
        </p>
      </motion.div>

      <motion.div
        className="max-w-5xl mx-auto mb-12 md:mb-14 rounded-[32px] border backdrop-blur-xl p-6 sm:p-8 glow-luminous text-left"
        style={{
          borderColor: 'rgba(255, 255, 255, 0.18)',
          background: `linear-gradient(
            168deg,
            rgba(255, 255, 255, 0.14) 0%,
            rgba(255, 248, 240, 0.07) 50%,
            rgba(255, 255, 255, 0.05) 100%
          )`,
        }}
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.75, delay: 0.05 }}
      >
        <h4 className="arrie-heading text-xl sm:text-2xl font-light mb-2">{t('vision.guest.title') as string}</h4>
        <p className="arrie-text-faint text-sm leading-relaxed mb-5 max-w-2xl">{t('vision.guest.hint') as string}</p>
        <div
          className="rounded-2xl border px-4 py-3.5 mb-8 arrie-text-faint text-sm"
          style={{
            borderColor: 'rgba(255, 255, 255, 0.12)',
            background: 'rgba(255, 255, 255, 0.05)',
          }}
        >
          {t('vision.guest.placeholder') as string}
        </div>

        <div className="grid md:grid-cols-3 gap-4 lg:gap-5">
          <div className="rounded-2xl arrie-panel-inner p-5 flex flex-col">
            <div className="arrie-text-faint text-[0.65rem] uppercase tracking-[0.14em] mb-3">
              {t('vision.guest.avgLabel') as string}
            </div>
            <div className="arrie-heading text-3xl sm:text-4xl font-light tabular-nums mb-2">
              {t('vision.guest.avgValue') as string}
            </div>
            <p className="arrie-text-muted text-xs leading-relaxed mt-auto">{t('vision.guest.avgSub') as string}</p>
          </div>

          <div className="rounded-2xl arrie-panel-inner p-5 flex flex-col">
            <div className="arrie-text-faint text-[0.65rem] uppercase tracking-[0.14em] mb-3">
              {t('vision.guest.upsellLabel') as string}
            </div>
            <div
              className="text-3xl sm:text-4xl font-light tabular-nums mb-2"
              style={{ color: 'var(--arrie-amber-glow)' }}
            >
              {UPSELL_PCT}%
            </div>
            <p className="arrie-text-muted text-xs leading-relaxed mt-auto">{t('vision.guest.upsellSub') as string}</p>
          </div>

          <div className="rounded-2xl arrie-panel-inner p-5 md:col-span-3 lg:col-span-1 flex flex-col">
            <div className="arrie-text-faint text-[0.65rem] uppercase tracking-[0.14em] mb-4">
              {t('vision.guest.topLabel') as string}
            </div>
            <ul className="space-y-2.5 flex-1">
              {TOP_IDX.map((i) => (
                <li key={i} className="flex justify-between gap-3 text-sm">
                  <span className="arrie-text-muted leading-snug">{t(`vision.guest.dish.${i}`) as string}</span>
                  <span className="arrie-heading tabular-nums shrink-0 font-light">
                    {t(`vision.guest.price.${i}`) as string}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

      <div className="flex justify-center">
        <LeadCTAButtons />
      </div>
    </section>
  )
}
