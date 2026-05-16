'use client'

import type { ArrieEventName, ArrieEventPayload } from './events'

type TrackOptions = {
  locale?: string
  meta?: Record<string, string>
}

/** Fire-and-forget — does not block UI or animations. */
export function trackEvent(event: ArrieEventName, options: TrackOptions = {}) {
  if (typeof window === 'undefined') return

  const body: ArrieEventPayload = {
    event,
    locale: options.locale,
    path: window.location.pathname,
    referrer: document.referrer || undefined,
    meta: options.meta,
  }

  const send = () => {
    try {
      const blob = new Blob([JSON.stringify(body)], { type: 'application/json' })
      if (navigator.sendBeacon?.('/api/events', blob)) return
    } catch {
      /* sendBeacon unsupported */
    }

    fetch('/api/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      keepalive: true,
    }).catch(() => {
      /* analytics must never break UX */
    })
  }

  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(send, { timeout: 2000 })
  } else {
    setTimeout(send, 0)
  }
}
