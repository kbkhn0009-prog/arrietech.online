import type { InsightCategoryId } from './types'
import type { Locale } from '@/lib/i18n'

export const CATEGORY_LABELS: Record<InsightCategoryId, Record<Locale, string>> = {
  'menu-intelligence': { ru: 'Интеллект меню', en: 'Menu Intelligence' },
  'revenue-dynamics': { ru: 'Динамика выручки', en: 'Revenue Dynamics' },
  'restaurant-ai': { ru: 'Операционный интеллект', en: 'Operational Intelligence' },
  'guest-behavior': { ru: 'Поведение гостей', en: 'Guest Behavior' },
  'hospitality-strategy': { ru: 'Стратегия HoReCa', en: 'Hospitality Strategy' },
}

export function categoryLabel(id: InsightCategoryId, locale: Locale) {
  return CATEGORY_LABELS[id][locale]
}
