export const INSIGHT_CATEGORIES = [
  'menu-intelligence',
  'revenue-dynamics',
  'restaurant-ai',
  'guest-behavior',
  'hospitality-strategy',
] as const

export type InsightCategoryId = (typeof INSIGHT_CATEGORIES)[number]

export type InsightBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'quote'; text: string; attribution?: string }
  | { type: 'insight'; text: string; title?: string }
  | { type: 'list'; items: string[] }

export type InsightLocaleContent = {
  title: string
  excerpt: string
  body: InsightBlock[]
}

export type InsightArticle = {
  /** URL slug — один для обеих локалей: /insights/[slug] */
  slug: string
  category: InsightCategoryId
  readingMinutes: number
  publishedAt: string
  featured?: boolean
  ru: InsightLocaleContent
  en: InsightLocaleContent
}
