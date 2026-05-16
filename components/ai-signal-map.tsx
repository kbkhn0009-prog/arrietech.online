'use client'

import { motion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'

export function AISignalMap() {
  const { locale } = useI18n()
  const seededRandom = (seed: number) => {
    const x = Math.sin(seed) * 10000
    return x - Math.floor(x)
  }

  return (
    <section className="relative py-40 px-6 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-4xl mb-20">
          <div className="text-sm uppercase tracking-[0.3em] text-white/40 mb-6">
            {locale === 'ru' ? 'Behavioral restaurant intelligence' : 'Behavioral restaurant intelligence'}
          </div>
          <h2 className="text-5xl md:text-7xl font-light leading-tight">
            {locale === 'ru'
              ? 'ARRIE показывает, как guest behavior влияет на спрос и выручку по меню.'
              : 'ARRIE shows how guest behavior influences menu demand and revenue.'}
          </h2>
        </div>
        <div className="relative rounded-[40px] border border-white/10 bg-white/[0.03] min-h-[700px] overflow-hidden">
          {[...Array(18)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                x: [0, seededRandom(i * 17.17 + 3.31) * 120 - 60],
                y: [0, seededRandom(i * 29.91 + 8.12) * 120 - 60],
              }}
              transition={{ duration: 10 + i, repeat: Infinity, repeatType: 'mirror' }}
              className="absolute rounded-full bg-white/30 blur-sm"
              style={{
                width: `${8 + i}px`,
                height: `${8 + i}px`,
                top: `${seededRandom(i * 11.07 + 0.77) * 90}%`,
                left: `${seededRandom(i * 41.13 + 5.23) * 90}%`,
              }}
            />
          ))}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center max-w-2xl px-6">
              <div className="text-white/40 uppercase tracking-[0.3em] text-sm mb-6">ARRIE Signal Layer</div>
              <div className="text-4xl md:text-6xl font-light leading-tight">
                {locale === 'ru'
                  ? 'Menu dynamics. Guest behavior. Revenue visibility.'
                  : 'Menu dynamics. Guest behavior. Revenue visibility.'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}