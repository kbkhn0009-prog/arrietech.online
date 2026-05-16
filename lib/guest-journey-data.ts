import { MENU_CATEGORIES } from '@/lib/menu-categories'

export interface GuestDish {
  id: string
  image: string
  nameRu: string
  nameEn: string
  price: string
  categoryId: number
  /** Orders per day (demo). */
  popularity: number
  visualEmphasis: number
}

export const FEATURE_DISH: GuestDish = {
  id: 'filet',
  image: 'beef_filet_with_rosemary.jpg',
  nameRu: 'Филе говядины с розмарином',
  nameEn: 'Beef fillet with rosemary',
  price: '1 890 ₽',
  categoryId: 2,
  popularity: 87,
  visualEmphasis: 92,
}

export const COMPARE_DISH: GuestDish = {
  id: 'lamb',
  image: 'lamb_cutlets_signature.jpg',
  nameRu: 'Бараньи котлеты',
  nameEn: 'Lamb cutlets',
  price: '1 650 ₽',
  categoryId: 2,
  popularity: 71,
  visualEmphasis: 78,
}

export const INTEREST_DISHES: (GuestDish & { interest: number; reasonRu: string; reasonEn: string })[] = [
  {
    ...FEATURE_DISH,
    interest: 94,
    reasonRu: 'Фото + категория «Мясное» · вечерний спрос',
    reasonEn: 'Photo + “Mains” category · evening demand',
  },
  {
    id: 'salmon',
    image: 'teriyaki_salmon_steak.jpg',
    nameRu: 'Стейк лосося терияки',
    nameEn: 'Teriyaki salmon steak',
    price: '1 420 ₽',
    categoryId: 2,
    popularity: 76,
    visualEmphasis: 85,
    interest: 81,
    reasonRu: 'Визуальный акцент · высокая маржа',
    reasonEn: 'Visual emphasis · strong margin',
  },
  {
    id: 'cheesecake',
    image: 'lime_cheesecake_cloud.jpg',
    nameRu: 'Лаймовый чизкейк',
    nameEn: 'Lime cheesecake',
    price: '480 ₽',
    categoryId: 6,
    popularity: 68,
    visualEmphasis: 74,
    interest: 72,
    reasonRu: 'Десерт после основного · допродажа',
    reasonEn: 'Post-main dessert · upsell path',
  },
]

export const VIEWED_DISHES: (GuestDish & { views: number; peakRu: string; peakEn: string })[] = [
  { ...FEATURE_DISH, views: 12, peakRu: '19:10–19:40', peakEn: '7:10–7:40 PM' },
  {
    id: 'bbq',
    image: 'bbq_brisket.jpg',
    nameRu: 'BBQ брискет',
    nameEn: 'BBQ brisket',
    price: '1 290 ₽',
    categoryId: 2,
    popularity: 79,
    visualEmphasis: 80,
    views: 9,
    peakRu: '18:50–19:20',
    peakEn: '6:50–7:20 PM',
  },
  {
    id: 'lemonade',
    image: 'berry_detox_garden.jpg',
    nameRu: 'Ягодный детокс',
    nameEn: 'Berry detox',
    price: '390 ₽',
    categoryId: 5,
    popularity: 62,
    visualEmphasis: 65,
    views: 7,
    peakRu: '19:25–19:55',
    peakEn: '7:25–7:55 PM',
  },
]

export const RECOMMENDATION_DISHES: GuestDish[] = [
  {
    id: 'parfait',
    image: 'berry_pistachio_parfait.jpg',
    nameRu: 'Парфе ягода–фисташка',
    nameEn: 'Berry pistachio parfait',
    price: '520 ₽',
    categoryId: 6,
    popularity: 74,
    visualEmphasis: 88,
  },
  {
    id: 'brulee',
    image: 'caramel_creme_brulee.jpg',
    nameRu: 'Карамельный крем-брюле',
    nameEn: 'Caramel crème brûlée',
    price: '450 ₽',
    categoryId: 6,
    popularity: 69,
    visualEmphasis: 82,
  },
]

export const CART_ITEMS: GuestDish[] = [
  FEATURE_DISH,
  {
    id: 'drink',
    image: 'raspberry_negroni.jpg',
    nameRu: 'Малиновый негрони',
    nameEn: 'Raspberry negroni',
    price: '590 ₽',
    categoryId: 5,
    popularity: 55,
    visualEmphasis: 70,
  },
]

export const UPSELL_SUGGESTION = RECOMMENDATION_DISHES[0]

export function guestCategory(categoryId: number) {
  return MENU_CATEGORIES.find((c) => c.id === categoryId)!
}

export const ORDER_TOTAL = '2 960 ₽'
