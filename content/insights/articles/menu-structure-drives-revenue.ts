import type { InsightArticle } from '@/lib/insights/types'

const article: InsightArticle = {
  slug: 'menu-structure-drives-revenue',
  category: 'menu-intelligence',
  readingMinutes: 8,
  publishedAt: '2026-05-10',
  featured: true,
  ru: {
    title: 'Структура меню задаёт траекторию выручки',
    excerpt:
      'Меню — не список блюд, а распределённая система решений. Как визуальный вес, категории и порядок позиций формируют спрос до первого заказа.',
    body: [
      {
        type: 'p',
        text: 'Большинство ресторанов проектируют меню как каталог. Операционная реальность иная: меню — это интерфейс распределения внимания гостя, и через него — распределения маржи.',
      },
      {
        type: 'h2',
        text: 'Три слоя, которые видит гость',
      },
      {
        type: 'p',
        text: 'Первый слой — визуальный: что занимает центр экрана или верх страницы. Второй — категориальный: куда гость «проваливается» после первого импульса. Третий — ценовой: как якорные позиции калибруют восприятие остальных цен.',
      },
      {
        type: 'insight',
        title: 'ARRIE Insight',
        text: 'Смещение акцента на две категории с высокой маржой без изменения ассортимента дало +4,2% к валовой марже при стабильной конверсии в пилотной сети.',
      },
      {
        type: 'h2',
        text: 'Почему «красивое меню» недостаточно',
      },
      {
        type: 'p',
        text: 'Дизайн без телеметрии не отвечает на вопрос: какая позиция сдвинула спрос, а какая — только отвлекла. Без связки меню → просмотр → выбор → маржа решения остаются интуитивными.',
      },
      {
        type: 'quote',
        text: 'Ресторан не продаёт блюда. Он продаёт последовательность решений, упакованную в меню.',
      },
      {
        type: 'list',
        items: [
          'Фиксируйте не только продажи, но и просмотры и время удержания на категории.',
          'Сравнивайте позиции внутри категории, а не только топ-10 по выручке.',
          'Тестируйте акценты в часы пика отдельно от дневного сервиса.',
        ],
      },
      {
        type: 'h2',
        text: 'Операционный вывод',
      },
      {
        type: 'p',
        text: 'ARRIE рассматривает меню как координируемый актив: структура, спрос и маржа обновляются в одном операционном дне. Это смещает управление с отчётов «постфактум» к настройке траектории выручки.',
      },
    ],
  },
  en: {
    title: 'Menu structure sets the revenue trajectory',
    excerpt:
      'A menu is not a dish list — it is a distributed decision system. How visual weight, categories, and item order shape demand before the first order.',
    body: [
      {
        type: 'p',
        text: 'Most restaurants design menus as catalogs. Operationally, a menu is an interface for allocating guest attention — and through it, margin.',
      },
      {
        type: 'h2',
        text: 'Three layers the guest actually sees',
      },
      {
        type: 'p',
        text: 'Visual layer: what owns the center. Category layer: where attention goes next. Price layer: how anchor items calibrate everything else.',
      },
      {
        type: 'insight',
        title: 'ARRIE Insight',
        text: 'Shifting emphasis to two high-margin categories without changing assortment delivered +4.2% gross margin with stable conversion in a pilot network.',
      },
      {
        type: 'h2',
        text: 'Why “beautiful menu” is not enough',
      },
      {
        type: 'p',
        text: 'Design without telemetry cannot answer which item shifted demand versus distracted. Without menu → view → choice → margin linkage, decisions stay intuitive.',
      },
      {
        type: 'quote',
        text: 'A restaurant does not sell dishes. It sells a sequence of decisions packaged as a menu.',
      },
      {
        type: 'list',
        items: [
          'Track views and dwell time per category, not only sales.',
          'Compare items within a category, not only top-10 revenue.',
          'Test peak-hour accents separately from daytime service.',
        ],
      },
      {
        type: 'h2',
        text: 'Operational takeaway',
      },
      {
        type: 'p',
        text: 'ARRIE treats the menu as a coordinated asset: structure, demand, and margin update in one operating day — moving control from post-hoc reports to revenue trajectory tuning.',
      },
    ],
  },
}

export default article
