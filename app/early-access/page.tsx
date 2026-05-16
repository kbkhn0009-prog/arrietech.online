'use client'

import { useI18n } from '@/lib/i18n'

export default function EarlyAccessPage() {
  const { locale } = useI18n()
  return (
    <main className="min-h-screen bg-black text-white px-6 py-32">
      <div className="max-w-3xl mx-auto">
        <div className="rounded-[40px] border border-white/10 bg-white/[0.03] p-12">
          <h1 className="text-5xl font-light mb-10">{locale === 'ru' ? 'Запрос раннего доступа' : 'Early access request'}</h1>
          <form className="space-y-6">
            <input placeholder={locale === 'ru' ? 'Имя и должность' : 'Name and role'} className="w-full rounded-2xl border border-white/10 bg-black/40 px-6 py-5" />
            <input placeholder={locale === 'ru' ? 'Название компании' : 'Company name'} className="w-full rounded-2xl border border-white/10 bg-black/40 px-6 py-5" />
            <input placeholder={locale === 'ru' ? 'Рабочий email' : 'Work email'} className="w-full rounded-2xl border border-white/10 bg-black/40 px-6 py-5" />
            <textarea placeholder={locale === 'ru' ? 'Кратко опишите ваши задачи по меню и выручке' : 'Briefly describe your menu and revenue goals'} className="w-full rounded-2xl border border-white/10 bg-black/40 px-6 py-5 min-h-[180px]" />
            <button className="w-full rounded-2xl bg-white text-black py-5 text-lg font-medium">
              {locale === 'ru' ? 'Отправить заявку' : 'Submit request'}
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}