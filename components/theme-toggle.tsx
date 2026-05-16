'use client'

import { useEffect, useState } from 'react'
import { useI18n } from '@/lib/i18n'

export function ThemeToggle() {
  const { locale } = useI18n()
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  // initialize theme from localStorage or system preference
  useEffect(() => {
    const stored = window.localStorage.getItem('theme') as 'dark' | 'light' | null
    if (stored) {
      setTheme(stored)
      return
    }

    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initial = systemDark ? 'dark' : 'light'
    setTheme(initial)
  }, [])

  function toggle() {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
  }

  // apply/remove class and persist selection whenever `theme` changes
  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light-mode')
    } else {
      document.documentElement.classList.remove('light-mode')
    }
    try {
      window.localStorage.setItem('theme', theme)
    } catch {}
  }, [theme])

  return (
    <button
      onClick={toggle}
      aria-label={locale === 'ru' ? 'Переключить тему' : 'Toggle theme'}
      className="h-10 w-10 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-base transition-all duration-300 hover:bg-white/10 hover:border-white/20"
    >
      <span
        className={`transition-transform duration-300 ${
          theme === 'dark' ? 'rotate-0 scale-100' : 'rotate-180 scale-100'
        }`}
      >
        {theme === 'dark' ? '🌙' : '☀️'}
      </span>
    </button>
  )
}