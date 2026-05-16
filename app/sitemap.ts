import { MetadataRoute } from 'next'
import { getAllSlugs } from '@/lib/insights'
import { PRIMARY_SITE_URL, SECONDARY_SITE_URL, SITE_URLS } from '@/lib/site-config'

const PATHS: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[0]['changeFrequency'] }[] = [
  { path: '/', priority: 1, changeFrequency: 'weekly' },
  { path: '/privacy', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/terms', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/early-access', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/platform', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/technology', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/hospitality', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/enterprise', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/insights', priority: 0.85, changeFrequency: 'weekly' },
]

const INSIGHT_SLUGS = getAllSlugs()

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-05-16')

  const staticEntries = SITE_URLS.flatMap((base) =>
    PATHS.map((item) => ({
      url: `${base}${item.path === '/' ? '' : item.path}`,
      lastModified,
      changeFrequency: item.changeFrequency,
      priority: item.priority,
      alternates: {
        languages: {
          ru: `${PRIMARY_SITE_URL}${item.path === '/' ? '' : item.path}`,
          en: `${PRIMARY_SITE_URL}${item.path === '/' ? '' : item.path}`,
        },
      },
    }))
  )

  const articleEntries = SITE_URLS.flatMap((base) =>
    INSIGHT_SLUGS.map((slug) => ({
      url: `${base}/insights/${slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
      alternates: {
        languages: {
          ru: `${PRIMARY_SITE_URL}/insights/${slug}`,
          en: `${PRIMARY_SITE_URL}/insights/${slug}`,
        },
      },
    }))
  )

  return [...staticEntries, ...articleEntries]
}
