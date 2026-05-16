'use client'

import { useI18n } from '@/lib/i18n'

export default function UseCasesPage() {
  const { locale } = useI18n()
  const items = locale === 'ru'
    ? [
        'Усиление спроса на прибыльные позиции',
        'Коррекция структуры категорий меню',
        'Снижение доли низкомаржинальных блюд',
        'Оценка влияния цены на выбор гостей',
        'Аналитика поведения гостей по сегментам',
        'Принятие решений по menu engineering на данных',
      ]
    : [
        'Increase demand for profitable items',
        'Optimize menu category structure',
        'Reduce low-margin item share',
        'Measure pricing impact on guest choice',
        'Analyze guest behavior by segments',
        'Drive menu engineering decisions with data',
      ]
  return (
    <main className="min-h-screen bg-black text-white px-6 py-32">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-light mb-20">{locale === 'ru' ? 'Сценарии применения' : 'Use cases'}</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item) => (
            <div key={item} className="rounded-[32px] border border-white/10 bg-white/[0.03] p-10 min-h-[260px] flex items-end">
              <div className="text-3xl font-light">{item}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}