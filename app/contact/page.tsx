'use client'

import { useI18n } from '@/lib/i18n'

export default function ContactPage() {
  const { locale } = useI18n()
  return (
    <main className="min-h-screen bg-black text-white px-6 py-32">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
        <div>
          <div className="text-sm uppercase tracking-[0.3em] text-white/40 mb-6">{locale === 'ru' ? 'Контакты' : 'Contact'}</div>
          <h1 className="text-6xl md:text-8xl font-light leading-tight mb-10">
            {locale === 'ru' ? 'Обсудим, как ARRIE усилит решения по меню и выручке.' : 'Let us discuss how ARRIE can strengthen your menu and revenue decisions.'}
          </h1>
          <p className="text-xl text-white/60 leading-relaxed">
            {locale === 'ru'
              ? 'Сейчас мы подключаем рестораны и сети, которые хотят перейти к data-driven menu engineering.'
              : 'We are onboarding restaurants and chains ready to move to data-driven menu engineering.'}
          </p>
        </div>
        <form className="rounded-[40px] border border-white/10 bg-white/[0.03] p-10 space-y-6">
          <input placeholder={locale === 'ru' ? 'Имя и должность' : 'Name and role'} className="w-full rounded-2xl border border-white/10 bg-black/40 px-6 py-5" />
          <input placeholder={locale === 'ru' ? 'Название компании' : 'Company name'} className="w-full rounded-2xl border border-white/10 bg-black/40 px-6 py-5" />
          <input placeholder={locale === 'ru' ? 'Рабочий email' : 'Work email'} className="w-full rounded-2xl border border-white/10 bg-black/40 px-6 py-5" />
          <textarea placeholder={locale === 'ru' ? 'Опишите ваш запрос: количество локаций, цели, задачи по меню' : 'Tell us about your request: number of locations, goals, and menu challenges'} className="w-full rounded-2xl border border-white/10 bg-black/40 px-6 py-5 min-h-[220px]" />
          <button className="w-full rounded-2xl bg-white text-black py-5 text-lg font-medium">
            {locale === 'ru' ? 'Отправить заявку' : 'Submit request'}
          </button>
        </form>
      </div>
    </main>
  )
}