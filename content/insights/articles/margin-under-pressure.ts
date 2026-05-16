import type { InsightArticle } from '@/lib/insights/types'

const article: InsightArticle = {
  slug: 'margin-under-pressure',
  category: 'revenue-dynamics',
  readingMinutes: 6,
  publishedAt: '2026-05-02',
  ru: {
    title: 'Маржа под давлением спроса: как читать сигнал',
    excerpt:
      'Когда выручка растёт, а маржа падает — это не парадокс, а рассинхронизация. Какие сигналы смотреть до того, как проблема станет отчётом.',
    body: [
      {
        type: 'p',
        text: 'Рост выручки без контроля маржи — классический сценарий вечернего сервиса: спрос концентрируется на позициях с низкой валовой маржой, кухня перегружена, допродажа «ломается».',
      },
      {
        type: 'h2',
        text: 'Три ранних индикатора',
      },
      {
        type: 'list',
        items: [
          'Спрос смещается в одну категорию быстрее, чем меняется акцент меню.',
          'Средний чек растёт за счёт объёма, не за счёт структуры.',
          'Доля «тяжёлых» для кухни позиций растёт в пик без перераспределения.',
        ],
      },
      {
        type: 'insight',
        text: 'Перераспределение акцента на маржинальные позиции в категории часто даёт +3–5% к валовой марже без снижения конверсии — если сделано до пика, а не после.',
      },
      {
        type: 'p',
        text: 'ARRIE связывает динамику выручки с маржой в реальном операционном окне — не раз в неделю на планёрке.',
      },
    ],
  },
  en: {
    title: 'Margin under demand pressure: reading the signal',
    excerpt:
      'When revenue rises but margin falls — not a paradox, a desync. Which signals to watch before it becomes a report.',
    body: [
      {
        type: 'p',
        text: 'Revenue growth without margin control is a classic peak-service pattern: demand clusters on lower-margin items, kitchen overloads, upsell breaks.',
      },
      {
        type: 'h2',
        text: 'Three early indicators',
      },
      {
        type: 'list',
        items: [
          'Demand shifts into one category faster than menu emphasis adapts.',
          'Average check rises from volume, not structure.',
          'Share of kitchen-heavy items grows at peak without redistribution.',
        ],
      },
      {
        type: 'insight',
        text: 'Redistributing emphasis to margin-positive items within a category often yields +3–5% gross margin without conversion loss — if done before peak, not after.',
      },
      {
        type: 'p',
        text: 'ARRIE links revenue dynamics to margin in a live operating window — not once a week in a meeting.',
      },
    ],
  },
}

export default article
