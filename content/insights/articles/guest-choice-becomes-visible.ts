import type { InsightArticle } from '@/lib/insights/types'

const article: InsightArticle = {
  slug: 'guest-choice-becomes-visible',
  category: 'guest-behavior',
  readingMinutes: 7,
  publishedAt: '2026-05-08',
  ru: {
    title: 'Когда выбор гостя становится видимым',
    excerpt:
      'Интерес, сравнение, допродажа — не магия CRM, а наблюдаемая цепочка. Что меняется, когда ресторан видит путь гостя к заказу.',
    body: [
      {
        type: 'p',
        text: 'Гость редко сообщает, почему выбрал именно эту позицию. Но его поведение в меню оставляет след: интерес → просмотр → сравнение → выбор → дополнение чека.',
      },
      {
        type: 'h2',
        text: 'Невидимая работа до заказа',
      },
      {
        type: 'p',
        text: 'До оплаты происходит основная «работа» меню: гость отсеивает, сравнивает внутри категории, реагирует на фото и цену. Без этой фазы аналитика продаж видит только результат, не механизм.',
      },
      {
        type: 'insight',
        text: 'Позиции с высоким интересом и низкой конверсией — не провал блюда, а сигнал о барьере: цена, описание, визуал или контекст подачи.',
      },
      {
        type: 'h2',
        text: 'Сравнение внутри категории',
      },
      {
        type: 'p',
        text: 'Гость почти всегда сравнивает 2–3 позиции в одной категории перед выбором. Если ресторан не видит эту развилку, он оптимизирует ассортимент вслепую.',
      },
      {
        type: 'quote',
        attribution: 'Операционная рамка ARRIE',
        text: 'Конверсия — это не свойство блюда. Это свойство пути к блюду.',
      },
      {
        type: 'p',
        text: 'Координация допродажи на этапе корзины — отдельный операционный слой: что уже выбрано, что маржинально совместимо, что не перегрузит кухню в пик.',
      },
    ],
  },
  en: {
    title: 'When guest choice becomes visible',
    excerpt:
      'Interest, comparison, upsell — not CRM magic, but an observable chain. What changes when a restaurant sees the path to order.',
    body: [
      {
        type: 'p',
        text: 'Guests rarely explain why they chose an item. Behavior in the menu leaves a trace: interest → browse → compare → choose → add to check.',
      },
      {
        type: 'h2',
        text: 'Invisible work before payment',
      },
      {
        type: 'p',
        text: 'Before payment, the menu does most of its work: filtering, in-category comparison, reacting to photo and price. Sales-only analytics sees outcomes, not mechanism.',
      },
      {
        type: 'insight',
        text: 'High interest with low conversion is not dish failure — it signals a barrier: price, copy, visual, or service context.',
      },
      {
        type: 'h2',
        text: 'Comparison inside a category',
      },
      {
        type: 'p',
        text: 'Guests typically compare 2–3 items in one category before choosing. Without seeing that fork, assortment optimization stays blind.',
      },
      {
        type: 'quote',
        attribution: 'ARRIE operating frame',
        text: 'Conversion is not a property of a dish. It is a property of the path to the dish.',
      },
      {
        type: 'p',
        text: 'Cart-stage upsell coordination is its own layer: what is already chosen, what is margin-compatible, what will not break peak kitchen flow.',
      },
    ],
  },
}

export default article
