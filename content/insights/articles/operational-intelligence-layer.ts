import type { InsightArticle } from '@/lib/insights/types'

const article: InsightArticle = {
  slug: 'operational-intelligence-layer',
  category: 'restaurant-ai',
  readingMinutes: 9,
  publishedAt: '2026-05-05',
  ru: {
    title: 'Операционный слой вместо ещё одного дашборда',
    excerpt:
      'Почему ресторану нужна координация меню, спроса и маржи в одном контуре — а не десятый отчёт с графиками.',
    body: [
      {
        type: 'p',
        text: 'Индустрия переполнена «аналитикой». Большинство инструментов отвечают на вопрос: что уже произошло. Операционный интеллект отвечает: что согласовано сейчас и куда движется смена.',
      },
      {
        type: 'h2',
        text: 'Разница между отчётом и слоем',
      },
      {
        type: 'list',
        items: [
          'Отчёт фиксирует прошлое.',
          'Слой связывает меню, спрос, гостя и маржу в текущем дне.',
          'Решение возникает из связей, а не из изолированной метрики.',
        ],
      },
      {
        type: 'insight',
        title: 'ARRIE Insight',
        text: 'ARRIE — не «ИИ-официант». Это инфраструктура координации выручки: видеть взаимосвязи, которые раньше оставались неявными.',
      },
      {
        type: 'h2',
        text: 'Категория, которую мы создаём',
      },
      {
        type: 'p',
        text: 'Ресторанная выручка — это не линейный KPI. Это сеть: категория тянет спрос, спрос давит кухню, кухня влияет на скорость, скорость влияет на повторный заказ в тот же визит.',
      },
      {
        type: 'quote',
        text: 'Дашборд показывает острова. Операционный слой показывает мосты между ними.',
      },
    ],
  },
  en: {
    title: 'An operational layer instead of another dashboard',
    excerpt:
      'Why restaurants need menu, demand, and margin coordinated in one loop — not a tenth chart report.',
    body: [
      {
        type: 'p',
        text: 'Hospitality is saturated with “analytics.” Most tools answer what already happened. Operational intelligence answers what is aligned now and where the shift is heading.',
      },
      {
        type: 'h2',
        text: 'Report vs layer',
      },
      {
        type: 'list',
        items: [
          'A report records the past.',
          'A layer links menu, demand, guest, and margin in the current day.',
          'Decisions emerge from relationships, not isolated metrics.',
        ],
      },
      {
        type: 'insight',
        title: 'ARRIE Insight',
        text: 'ARRIE is not an “AI waiter.” It is revenue coordination infrastructure: making hidden relationships visible.',
      },
      {
        type: 'h2',
        text: 'The category we are building',
      },
      {
        type: 'p',
        text: 'Restaurant revenue is not a linear KPI. It is a network: category pulls demand, demand pressures kitchen, kitchen affects speed, speed affects same-visit reorder.',
      },
      {
        type: 'quote',
        text: 'A dashboard shows islands. An operational layer shows the bridges.',
      },
    ],
  },
}

export default article
