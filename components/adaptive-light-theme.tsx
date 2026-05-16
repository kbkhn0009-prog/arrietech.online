'use client'

import { useEffect } from 'react'

export function AdaptiveLightTheme() {
  useEffect(() => {
    const stored = window.localStorage.getItem('theme')
    const preferLight = window.matchMedia('(prefers-color-scheme: light)').matches
    const shouldUseLight = stored ? stored === 'light' : preferLight

    if (shouldUseLight) {
      document.documentElement.classList.add('light-mode')
    } else {
      document.documentElement.classList.remove('light-mode')
    }
  }, [])

  return null
}