/** Menu categories from ai-resto-assistant demo (`lib/project-demo-menu.ts`). */
export interface MenuCategory {
  id: number
  nameRu: string
  nameEn: string
  image: string
  itemCount: number
  /** Simulated demand pressure 0–1 for landing visuals. */
  demand: number
}

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: 1,
    nameRu: 'Стартеры / Закуски',
    nameEn: 'Starters',
    image: 'starters.jpg',
    itemCount: 3,
    demand: 0.48,
  },
  {
    id: 2,
    nameRu: 'Мясное',
    nameEn: 'Mains',
    image: 'hot.jpg',
    itemCount: 7,
    demand: 0.92,
  },
  {
    id: 3,
    nameRu: 'Супы & Лапша',
    nameEn: 'Soups & noodles',
    image: 'soups.jpg',
    itemCount: 5,
    demand: 0.62,
  },
  {
    id: 4,
    nameRu: 'Рыба / Морепродукты',
    nameEn: 'Fish & seafood',
    image: 'seafood.jpg',
    itemCount: 1,
    demand: 0.35,
  },
  {
    id: 5,
    nameRu: 'Напитки',
    nameEn: 'Drinks',
    image: 'drinks.jpg',
    itemCount: 9,
    demand: 0.88,
  },
  {
    id: 6,
    nameRu: 'Десерты',
    nameEn: 'Desserts',
    image: 'desserts.jpg',
    itemCount: 7,
    demand: 0.78,
  },
]

/** Categories with clearly elevated demand (for demand-map highlight). */
export const HIGH_DEMAND_THRESHOLD = 0.75

export function menuCategoryImagePath(filename: string) {
  return `/images/menu-categories/${filename}`
}

export function isHighDemandCategory(demand: number) {
  return demand >= HIGH_DEMAND_THRESHOLD
}
