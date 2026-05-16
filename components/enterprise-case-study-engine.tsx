'use client'

import { motion } from 'framer-motion'
import { useI18n } from '@/lib/i18n'

export function EnterpriseCaseStudyEngine() {
  const { locale } = useI18n()
  const content = locale === 'ru'
    ? {
        eyebrow: 'Практические кейсы',
        title: 'Как команды используют ARRIE для роста выручки через меню.',
        label: 'ARRIE Interface',
        studies: [
          {
            title: 'Пересборка категорий меню',
            description: 'После изменения структуры категорий команда увидела более стабильный спрос на прибыльные позиции.',
          },
          {
            title: 'Коррекция ценовой логики',
            description: 'Аналитика показала, где корректировка цены усиливает маржу без потери интереса гостей.',
          },
          {
            title: 'Фокус на прибыльные позиции',
            description: 'Команда выделила позиции с лучшей юнит-экономикой и усилила их вклад в выручку.',
          },
        ],
      }
    : {
        eyebrow: 'Practical cases',
        title: 'How teams use ARRIE to grow revenue through better menu decisions.',
        label: 'ARRIE Interface',
        studies: [
          {
            title: 'Menu category restructuring',
            description: 'After redesigning category structure, demand shifted toward higher-margin items.',
          },
          {
            title: 'Pricing logic adjustment',
            description: 'Analytics revealed where price updates improve margin without harming guest demand.',
          },
          {
            title: 'Profit-focused item strategy',
            description: 'Teams identified items with stronger unit economics and increased their revenue share.',
          },
        ],
      }

  return (
    <section className="py-40 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mb-20">
          <div className="text-sm uppercase tracking-[0.3em] text-white/40 mb-6">{content.eyebrow}</div>
          <h2 className="text-5xl md:text-7xl font-light leading-tight">
            {content.title}
          </h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {content.studies.map((study) => (
            <div
              key={study.title}
              className="rounded-[36px] border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-10 min-h-[420px] flex flex-col justify-between"
            >
              <div>
                <div className="text-3xl font-light leading-tight mb-6">{study.title}</div>
                <p className="text-white/55 leading-relaxed">{study.description}</p>
              </div>
              <div className="pt-10 text-white/40 text-sm uppercase tracking-[0.2em]">{content.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}