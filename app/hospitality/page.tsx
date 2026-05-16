'use client'

import { useI18n } from '@/lib/i18n'

export default function HospitalityPage() {
  const { locale } = useI18n()

  return (
    <main className="min-h-screen bg-black text-white px-6 py-32">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-light leading-tight mb-12">
          {locale === 'ru'
            ? 'ARRIE для ресторанного бизнеса'
            : 'ARRIE for hospitality business'}
        </h1>
        <p className="text-2xl text-white/60 max-w-4xl leading-relaxed">
          {locale === 'ru'
            ? 'Платформа помогает ресторанам замечать изменения в спросе, понимать выбор гостей и управлять выручкой через меню в реальном времени.'
            : 'The platform helps restaurants detect demand shifts, understand guest choice, and manage revenue through menu decisions in real time.'}
        </p>
      </div>
    </main>
  )
}
