/** Dish photos from ai-resto-assistant demo menu (`public/images/dishes`). */
export const MENU_DISH_IMAGES = [
  'bbq_brisket.jpg',
  'beef_filet_with_rosemary.jpg',
  'teriyaki_salmon_steak.jpg',
  'chicken_shashlik_modern.jpg',
  'korean_beef_bulgogi.jpg',
  'lamb_cutlets_signature.jpg',
  'truffle_cream_chicken.jpg',
  'vegetable_grill_plate.jpg',
  'chicken_noodle_clean_broth.jpg',
  'tom_yum_signature.jpg',
  'italian_minestrone.jpg',
  'spicy_thai_noodles.jpg',
  'creamy_mushroom_supreme.jpg',
  'seafood_bisque.jpg',
  'berry_detox_garden.jpg',
  'mediterranean_fresh_bowl.jpg',
  'super_green_bowl.jpg',
  'crispy_oriental_crunch.jpg',
  'caramel_creme_brulee.jpg',
  'chocolate_lava_core.jpg',
  'lime_cheesecake_cloud.jpg',
  'matcha_mochi_ice.jpg',
  'berry_pistachio_parfait.jpg',
  'raspberry_negroni.jpg',
] as const

/** 6×4 grid — demand pressure per cell (0–1). */
export const DEMAND_PRESSURE_GRID = [
  [0.2, 0.45, 0.7, 0.35, 0.55, 0.25],
  [0.4, 0.85, 0.5, 0.65, 0.3, 0.5],
  [0.55, 0.4, 0.9, 0.45, 0.75, 0.35],
  [0.3, 0.6, 0.5, 0.8, 0.4, 0.6],
] as const

export function menuDishImagePath(filename: string) {
  return `/images/menu-dishes/${filename}`
}
