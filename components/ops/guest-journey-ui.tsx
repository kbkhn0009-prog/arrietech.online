'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'
import { menuCategoryImagePath } from '@/lib/menu-categories'
import { menuDishImagePath } from '@/lib/menu-dish-images'
import {
  CART_ITEMS,
  COMPARE_DISH,
  FEATURE_DISH,
  INTEREST_DISHES,
  ORDER_TOTAL,
  RECOMMENDATION_DISHES,
  UPSELL_SUGGESTION,
  VIEWED_DISHES,
  guestCategory,
  type GuestDish,
} from '@/lib/guest-journey-data'

const FLOW_SUB_KEYS = [
  'guest.step.interest.sub',
  'guest.step.menuView.sub',
  'guest.step.compare.sub',
  'guest.step.choice.sub',
  'guest.step.upsell.sub',
  'guest.step.order.sub',
] as const

function dishName(dish: GuestDish, locale: string) {
  return locale === 'ru' ? dish.nameRu : dish.nameEn
}

function DishThumb({
  dish,
  size = 'md',
  highlight,
}: {
  dish: GuestDish
  size?: 'sm' | 'md' | 'lg'
  highlight?: boolean
}) {
  const { locale } = useI18n()
  const dim = size === 'lg' ? 'h-20 w-20' : size === 'sm' ? 'h-10 w-10' : 'h-14 w-14'
  return (
    <motion.div
      className={`relative ${dim} shrink-0 overflow-hidden rounded-lg border`}
      style={{
        borderColor: highlight ? 'rgba(244,210,140,0.45)' : 'rgba(255,255,255,0.1)',
        boxShadow: highlight ? '0 0 20px rgba(244,210,140,0.12)' : undefined,
      }}
    >
      <Image src={menuDishImagePath(dish.image)} alt="" fill sizes="80px" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      <span className="sr-only">{dishName(dish, locale)}</span>
    </motion.div>
  )
}

function DishRow({
  dish,
  right,
  highlight,
}: {
  dish: GuestDish
  right: React.ReactNode
  highlight?: boolean
}) {
  const { locale } = useI18n()
  return (
    <div
      className="flex items-center gap-3 rounded-xl border px-3 py-2.5"
      style={{
        borderColor: highlight ? 'rgba(244,210,140,0.3)' : 'rgba(255,255,255,0.08)',
        background: highlight ? 'rgba(244,210,140,0.05)' : 'rgba(255,255,255,0.03)',
      }}
    >
      <DishThumb dish={dish} highlight={highlight} />
      <div className="min-w-0 flex-1">
        <div className="text-xs sm:text-sm arrie-heading font-light truncate">{dishName(dish, locale)}</div>
        <div className="text-[0.65rem] arrie-text-faint tabular-nums mt-0.5">{dish.price}</div>
      </div>
      <div className="shrink-0 text-right">{right}</div>
    </div>
  )
}

export function MenuInfluencePanel({ activeStep }: { activeStep: number }) {
  const { t, locale } = useI18n()
  const cat = guestCategory(FEATURE_DISH.categoryId)
  const catName = locale === 'ru' ? cat.nameRu : cat.nameEn

  const highlight = (minStep: number) => activeStep >= minStep

  return (
    <div className="relative">
      <motion.div className="arrie-text-faint text-[0.6rem] uppercase tracking-[0.18em] mb-1">
        {t('guest.influence.title') as string}
      </motion.div>
      <p className="text-[0.65rem] arrie-text-faint mb-4 leading-relaxed">{t('guest.influence.how') as string}</p>

      <div className="space-y-2.5">
        <InfluenceRow label={t('guest.influence.photo') as string} active={highlight(0)}>
          <DishThumb dish={FEATURE_DISH} size="sm" highlight />
        </InfluenceRow>

        <InfluenceRow label={t('guest.influence.visual') as string} active={highlight(0)}>
          <motion.div className="flex items-center gap-2 min-w-[5.5rem]">
            <div className="flex-1 h-1.5 rounded-full bg-white/[0.08] overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${FEATURE_DISH.visualEmphasis}%`,
                  background: 'linear-gradient(90deg, rgba(244,210,140,0.4), rgba(244,210,140,0.9))',
                }}
              />
            </div>
            <span className="text-[0.65rem] tabular-nums" style={{ color: 'var(--arrie-amber-glow)' }}>
              {FEATURE_DISH.visualEmphasis}%
            </span>
          </motion.div>
        </InfluenceRow>

        <InfluenceRow label={t('guest.influence.category') as string} active={highlight(0)}>
          <div className="flex items-center gap-2">
            <div className="relative h-9 w-9 rounded-md overflow-hidden border border-white/10">
              <Image src={menuCategoryImagePath(cat.image)} alt="" fill sizes="36px" className="object-cover" />
            </div>
            <span className="text-[0.65rem] arrie-text-muted leading-tight max-w-[5.5rem]">{catName}</span>
          </div>
        </InfluenceRow>

        <InfluenceRow label={t('guest.influence.price') as string} active={highlight(2)}>
          <span className="arrie-heading text-sm font-light tabular-nums">{FEATURE_DISH.price}</span>
        </InfluenceRow>

        <InfluenceRow label={t('guest.influence.recommendations') as string} active={highlight(4)}>
          <div className="flex -space-x-2">
            {RECOMMENDATION_DISHES.map((d) => (
              <DishThumb key={d.id} dish={d} size="sm" />
            ))}
          </div>
        </InfluenceRow>

        <InfluenceRow label={t('guest.influence.popularity') as string} active={highlight(0)}>
          <div className="text-right">
            <div className="text-sm arrie-heading tabular-nums font-light">{FEATURE_DISH.popularity}</div>
            <div className="text-[0.55rem] arrie-text-faint">{t('guest.popularity.label') as string}</div>
          </div>
        </InfluenceRow>

        <InfluenceRow label={t('guest.influence.time') as string} active={highlight(1)}>
          <div className="text-right">
            <div className="text-xs arrie-heading tabular-nums">{t('guest.time.now') as string}</div>
            <div className="text-[0.55rem] arrie-text-faint mt-0.5">{t('guest.time.evening') as string}</div>
          </div>
        </InfluenceRow>
      </div>
    </div>
  )
}

function InfluenceRow({
  label,
  active,
  children,
}: {
  label: string
  active: boolean
  children: React.ReactNode
}) {
  return (
    <div
      className="flex items-center justify-between gap-2 rounded-lg border px-2.5 py-2 transition-colors"
      style={{
        borderColor: active ? 'rgba(244,210,140,0.22)' : 'rgba(255,255,255,0.06)',
        background: active ? 'rgba(244,210,140,0.04)' : 'rgba(255,255,255,0.02)',
      }}
    >
      <span className="text-[0.65rem] sm:text-xs arrie-text-muted">{label}</span>
      {children}
    </div>
  )
}

export function GuestStepDetailPanel({ activeStep }: { activeStep: number }) {
  const { t, locale } = useI18n()
  const sub = t(FLOW_SUB_KEYS[activeStep]) as string

  return (
    <motion.div
      key={activeStep}
      className="mt-4 rounded-2xl border border-white/[0.1] p-4 sm:p-5 min-h-[220px] sm:min-h-[260px]"
      style={{ background: 'rgba(255,255,255,0.03)' }}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="arrie-text-faint text-[0.55rem] uppercase tracking-[0.16em]">{t('guest.step.detail') as string}</div>
        <div className="text-[0.6rem] arrie-text-faint">{sub}</div>
      </div>
      {activeStep === 0 && <StepInterest locale={locale} />}
      {activeStep === 1 && <StepMenuView locale={locale} />}
      {activeStep === 2 && <StepCompare locale={locale} />}
      {activeStep === 3 && <StepChoice locale={locale} />}
      {activeStep === 4 && <StepUpsell locale={locale} />}
      {activeStep === 5 && <StepOrder locale={locale} />}
    </motion.div>
  )
}

function StepInterest({ locale }: { locale: string }) {
  const { t } = useI18n()
  return (
    <ul className="space-y-2">
      {INTEREST_DISHES.map((d) => (
        <li key={d.id}>
          <DishRow
            dish={d}
            highlight={d.id === FEATURE_DISH.id}
            right={
              <div>
                <motion.div className="text-sm tabular-nums font-light" style={{ color: 'var(--arrie-amber-glow)' }}>
                  {d.interest}%
                </motion.div>
                <div className="text-[0.55rem] arrie-text-faint">{t('guest.interest.label') as string}</div>
              </div>
            }
          />
          <p className="text-[0.6rem] arrie-text-faint mt-1.5 ml-[3.75rem] leading-relaxed">
            {locale === 'ru' ? d.reasonRu : d.reasonEn}
          </p>
        </li>
      ))}
    </ul>
  )
}

function StepMenuView({ locale }: { locale: string }) {
  const { t } = useI18n()
  return (
    <ul className="space-y-2">
      {VIEWED_DISHES.map((d) => (
        <DishRow
          key={d.id}
          dish={d}
          highlight={d.id === FEATURE_DISH.id}
          right={
            <div className="text-right">
              <div className="text-sm tabular-nums arrie-heading font-light">{d.views}</div>
              <div className="text-[0.55rem] arrie-text-faint">{t('guest.views.label') as string}</div>
              <div className="text-[0.55rem] mt-1 tabular-nums" style={{ color: 'var(--arrie-amber-glow)' }}>
                {locale === 'ru' ? d.peakRu : d.peakEn}
              </div>
            </div>
          }
        />
      ))}
    </ul>
  )
}

function StepCompare({ locale }: { locale: string }) {
  const { t } = useI18n()
  const cat = guestCategory(FEATURE_DISH.categoryId)
  const catName = locale === 'ru' ? cat.nameRu : cat.nameEn
  const rows = [
    { label: t('guest.compare.price'), a: FEATURE_DISH.price, b: COMPARE_DISH.price },
    {
      label: t('guest.compare.popularity'),
      a: `${FEATURE_DISH.popularity}`,
      b: `${COMPARE_DISH.popularity}`,
    },
    {
      label: t('guest.compare.emphasis'),
      a: `${FEATURE_DISH.visualEmphasis}%`,
      b: `${COMPARE_DISH.visualEmphasis}%`,
    },
  ]

  return (
    <div>
      <p className="text-[0.65rem] arrie-text-faint mb-3">{t('guest.step.compare.sameCategory') as string}</p>
      <div className="flex items-stretch gap-2 sm:gap-3 mb-4">
        <CompareCard dish={FEATURE_DISH} locale={locale} selected />
        <div className="flex items-center text-[0.6rem] arrie-text-faint uppercase tracking-wider px-0.5">
          {t('guest.step.compare.vs') as string}
        </div>
        <CompareCard dish={COMPARE_DISH} locale={locale} />
      </div>
      <div className="text-[0.6rem] arrie-text-faint mb-2">{catName}</div>
      <div className="space-y-1.5">
        {rows.map((r) => (
          <div key={String(r.label)} className="grid grid-cols-[1fr_1fr_1fr] gap-2 text-[0.65rem]">
            <span className="arrie-text-faint">{r.label as string}</span>
            <span className="arrie-heading tabular-nums text-center">{r.a}</span>
            <span className="arrie-text-muted tabular-nums text-center">{r.b}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function CompareCard({ dish, locale, selected }: { dish: GuestDish; locale: string; selected?: boolean }) {
  return (
    <div
      className="flex-1 flex flex-col items-center rounded-xl border p-2.5"
      style={{
        borderColor: selected ? 'rgba(244,210,140,0.4)' : 'rgba(255,255,255,0.08)',
        background: selected ? 'rgba(244,210,140,0.06)' : 'rgba(255,255,255,0.02)',
      }}
    >
      <DishThumb dish={dish} size="lg" highlight={selected} />
      <p className="text-[0.65rem] arrie-heading text-center mt-2 leading-snug line-clamp-2">
        {dishName(dish, locale)}
      </p>
      <p className="text-[0.6rem] tabular-nums mt-1" style={{ color: selected ? 'var(--arrie-amber-glow)' : undefined }}>
        {dish.price}
      </p>
    </div>
  )
}

function StepChoice({ locale }: { locale: string }) {
  const { t } = useI18n()
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <DishThumb dish={FEATURE_DISH} size="lg" highlight />
      <p className="arrie-heading text-base sm:text-lg font-light mt-4 text-center">{dishName(FEATURE_DISH, locale)}</p>
      <p className="text-lg tabular-nums mt-1" style={{ color: 'var(--arrie-amber-glow)' }}>
        {FEATURE_DISH.price}
      </p>
      <span
        className="mt-3 text-[0.6rem] uppercase tracking-[0.2em] px-3 py-1 rounded-full border"
        style={{ borderColor: 'rgba(244,210,140,0.35)', color: 'var(--arrie-amber-glow)' }}
      >
        {t('guest.step.choice.confirmed') as string}
      </span>
    </div>
  )
}

function StepUpsell({ locale }: { locale: string }) {
  const { t } = useI18n()
  const cartTotal = CART_ITEMS.reduce((s, d) => s + parseInt(d.price.replace(/\D/g, ''), 10), 0)

  return (
    <div className="grid sm:grid-cols-2 gap-4">
      <div>
        <motion.div className="arrie-text-faint text-[0.55rem] uppercase tracking-wider mb-2">
          {t('guest.step.upsell.cart') as string}
        </motion.div>
        <ul className="space-y-2 mb-3">
          {CART_ITEMS.map((d) => (
            <DishRow key={d.id} dish={d} right={<span className="text-xs tabular-nums arrie-text-muted">{d.price}</span>} />
          ))}
        </ul>
        <div className="text-[0.65rem] arrie-text-faint border-t border-white/[0.08] pt-2 flex justify-between">
          <span>{t('guest.step.order.total') as string}</span>
          <span className="arrie-heading tabular-nums">{cartTotal.toLocaleString('ru-RU')} ₽</span>
        </div>
      </div>
      <div
        className="rounded-xl border p-3"
        style={{ borderColor: 'rgba(244,210,140,0.25)', background: 'rgba(244,210,140,0.05)' }}
      >
        <div className="arrie-eyebrow text-[0.55rem] mb-2">{t('guest.step.upsell.suggest') as string}</div>
        <div className="flex gap-3 items-start">
          <DishThumb dish={UPSELL_SUGGESTION} highlight />
          <div className="min-w-0">
            <p className="text-xs sm:text-sm arrie-heading font-light leading-snug">
              {dishName(UPSELL_SUGGESTION, locale)}
            </p>
            <p className="text-sm tabular-nums mt-1" style={{ color: 'var(--arrie-amber-glow)' }}>
              {UPSELL_SUGGESTION.price}
            </p>
            <p className="text-[0.6rem] arrie-text-faint mt-2 leading-relaxed">{t('guest.step.upsell.accept') as string}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function StepOrder({ locale }: { locale: string }) {
  const { t } = useI18n()
  const items = [...CART_ITEMS, UPSELL_SUGGESTION]

  return (
    <motion.div>
      <ul className="space-y-2 mb-4">
        {items.map((d, i) => (
          <DishRow
            key={d.id}
            dish={d}
            highlight={i === items.length - 1}
            right={<span className="text-xs tabular-nums">{d.price}</span>}
          />
        ))}
      </ul>
      <div
        className="flex items-center justify-between rounded-xl border px-4 py-3"
        style={{ borderColor: 'rgba(244,210,140,0.25)', background: 'rgba(244,210,140,0.04)' }}
      >
        <div>
          <div className="text-[0.6rem] arrie-text-faint uppercase tracking-wider">{t('guest.step.order.total') as string}</div>
          <div className="text-[0.55rem] arrie-text-faint mt-0.5">
            {items.length} {t('guest.step.order.positions') as string}
          </div>
        </div>
        <div className="arrie-heading text-xl sm:text-2xl font-light tabular-nums">{ORDER_TOTAL}</div>
      </div>
    </motion.div>
  )
}
