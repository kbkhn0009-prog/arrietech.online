import Script from 'next/script'

/**
 * Cloudflare Web Analytics — privacy-friendly, works in RU without GA/PostHog.
 * Set NEXT_PUBLIC_CF_BEACON_TOKEN in env (from Cloudflare dashboard).
 */
export function CloudflareAnalytics() {
  const token = process.env.NEXT_PUBLIC_CF_BEACON_TOKEN
  if (!token) return null

  return (
    <Script
      id="cf-web-analytics"
      src="https://static.cloudflareinsights.com/beacon.min.js"
      data-cf-beacon={JSON.stringify({ token, spa: true })}
      strategy="lazyOnload"
    />
  )
}
