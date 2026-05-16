import type { InsightArticle } from '@/lib/insights/types'

const article: InsightArticle = {
  slug: 'hospitality-decision-architecture',
  category: 'hospitality-strategy',
  readingMinutes: 7,
  publishedAt: '2026-04-28',
  ru: {
    title: 'Архитектура решений в современном ресторане',
    excerpt:
      'Управление рестораном — это не набор отделов, а цепочка согласованных решений. Как выстроить контур, где меню, смена и выручка говорят на одном языке.',
    body: [
      {
        type: 'p',
        text: 'Ресторан принимает сотни микрорешений в смену: что подсветить, что готовить заранее, что предложить к основному, когда замедлить подачу. Без общей архитектуры они конфликтуют.',
      },
      {
        type: 'h2',
        text: 'Четыре узла координации',
      },
      {
        type: 'list',
        items: [
          'Меню — что видит гость и в каком порядке.',
          'Спрос — куда давит поток в конкретный час.',
          'Гость — как формируется выбор и чек.',
          'Маржа — что остаётся после смены.',
        ],
      },
      {
        type: 'quote',
        text: 'Стратегия ресторана живёт не в презентации. Она живёт в согласованности решений за одну ночь.',
      },
      {
        type: 'p',
        text: 'ARRIE позиционируется как операционная инфраструктура для этой архитектуры — не как витрина технологий, а как слой, где связи видны целиком.',
      },
    ],
  },
  en: {
    title: 'Decision architecture in a modern restaurant',
    excerpt:
      'Running a restaurant is not departments — it is a chain of aligned decisions. Building a loop where menu, shift, and revenue speak one language.',
    body: [
      {
        type: 'p',
        text: 'A restaurant makes hundreds of micro-decisions per shift: what to highlight, what to prep, what to pair, when to slow service. Without shared architecture, they conflict.',
      },
      {
        type: 'h2',
        text: 'Four coordination nodes',
      },
      {
        type: 'list',
        items: [
          'Menu — what the guest sees and in what order.',
          'Demand — where flow pressures in a given hour.',
          'Guest — how choice and check form.',
          'Margin — what remains after the shift.',
        ],
      },
      {
        type: 'quote',
        text: 'Restaurant strategy does not live in a deck. It lives in the coherence of decisions across one night.',
      },
      {
        type: 'p',
        text: 'ARRIE is positioned as operational infrastructure for that architecture — not a tech showcase, but a layer where relationships are visible whole.',
      },
    ],
  },
}

export default article
