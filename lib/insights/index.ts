import { INSIGHT_ARTICLES } from '@/content/insights/articles'
import type { Locale } from '@/lib/i18n'
import type { InsightArticle, InsightCategoryId } from './types'

export * from './types'
export { INSIGHT_CATEGORIES } from './types'
export { categoryLabel, CATEGORY_LABELS } from './categories'

export function getAllArticles() {
  return [...INSIGHT_ARTICLES].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
}

export function getArticleBySlug(slug: string): InsightArticle | undefined {
  return INSIGHT_ARTICLES.find((a) => a.slug === slug)
}

export function getFeaturedArticle(): InsightArticle | undefined {
  return INSIGHT_ARTICLES.find((a) => a.featured) ?? getAllArticles()[0]
}

export function getArticlesByCategory(category: InsightCategoryId) {
  return getAllArticles().filter((a) => a.category === category)
}

export function getArticleContent(article: InsightArticle, locale: Locale) {
  return locale === 'ru' ? article.ru : article.en
}

export function getRelatedArticles(slug: string, limit = 2) {
  const current = getArticleBySlug(slug)
  if (!current) return getAllArticles().slice(0, limit)
  return getAllArticles()
    .filter((a) => a.slug !== slug)
    .sort((a, b) => {
      const sameCat = a.category === current.category
      const sameCatB = b.category === current.category
      if (sameCat && !sameCatB) return -1
      if (!sameCat && sameCatB) return 1
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    })
    .slice(0, limit)
}

export function getAllSlugs() {
  return INSIGHT_ARTICLES.map((a) => a.slug)
}

export function formatInsightDate(iso: string, locale: Locale) {
  return new Date(iso).toLocaleDateString(locale === 'ru' ? 'ru-RU' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
