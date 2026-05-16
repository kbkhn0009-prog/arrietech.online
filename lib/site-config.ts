/** Canonical marketing domains for ARRIE. */
export const SITE_HOSTS = ['arrietech.ru', 'arrietech.online', 'www.arrietech.ru', 'www.arrietech.online'] as const

export const PRIMARY_SITE_URL = 'https://arrietech.ru'
export const SECONDARY_SITE_URL = 'https://arrietech.online'

export const SITE_URLS = [PRIMARY_SITE_URL, SECONDARY_SITE_URL] as const

export function siteUrlFromHost(host: string | null | undefined): string {
  if (!host) return PRIMARY_SITE_URL
  const h = host.toLowerCase().split(':')[0]
  if (h === 'arrietech.online' || h === 'www.arrietech.online') return SECONDARY_SITE_URL
  return PRIMARY_SITE_URL
}

export function absoluteUrl(path: string, base: string = PRIMARY_SITE_URL): string {
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${base.replace(/\/$/, '')}${normalized}`
}
