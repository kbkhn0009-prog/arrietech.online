'use client'

import { motion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'

export function CinematicVideoHero() {
  const { locale } = useI18n()
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center px-6">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      >
        <source src="/assets/videos/hero-background.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/70" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4 }}
        className="relative z-10 max-w-6xl text-center"
      >
        <div className="text-sm uppercase tracking-[0.35em] text-white/40 mb-8">
          ARRIE Interface
        </div>
        <h1 className="text-6xl md:text-8xl xl:text-[9rem] font-light leading-[0.92] tracking-tight mb-10">
          {locale === 'ru' ? 'Управление ресторанной выручкой в реальном времени.' : 'Restaurant revenue management in real time.'}
        </h1>
        <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed mb-14">
          {locale === 'ru'
            ? 'ARRIE помогает принимать точные решения по меню, спросу и прибыльности на основе аналитики.'
            : 'ARRIE helps teams make precise decisions on menu, demand, and profitability through analytics.'}
        </p>
      </motion.div>
    </section>
  )
}