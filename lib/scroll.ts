import type Lenis from 'lenis'

declare global {
  interface Window {
    __arrieLenis?: Lenis
  }
}

export function registerLenis(lenis: Lenis) {
  if (typeof window !== 'undefined') window.__arrieLenis = lenis
}

export function unregisterLenis() {
  if (typeof window !== 'undefined') delete window.__arrieLenis
}

export function scrollToTop() {
  if (typeof window === 'undefined') return
  const lenis = window.__arrieLenis
  if (lenis) {
    lenis.scrollTo(0, { duration: 1.1 })
    return
  }
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
