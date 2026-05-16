'use client'

import { useState } from 'react'
import { useI18n } from '@/lib/i18n'

export function MobileNavigation() {
  const [open, setOpen] = useState(false)
  const { locale } = useI18n()

  return (
    <div className="md:hidden fixed top-4 right-4 z-[100]">
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full border border-white/10 bg-black/60 backdrop-blur-xl"
      >
        ☰
      </button>
      {open && (
        <div className="absolute right-0 mt-4 w-72 rounded-[28px] border border-white/10 bg-black/80 backdrop-blur-2xl p-6 space-y-6">
          <a href="#platform" className="block text-white/70">{locale === 'ru' ? 'Платформа' : 'Platform'}</a>
          <a href="#use-cases" className="block text-white/70">{locale === 'ru' ? 'Сценарии' : 'Use cases'}</a>
          <a href="#enterprise" className="block text-white/70">{locale === 'ru' ? 'Для сетей' : 'For chains'}</a>
          <a href="#vision" className="block text-white/70">{locale === 'ru' ? 'Подход' : 'Approach'}</a>
        </div>
      )}
    </div>
  )
}