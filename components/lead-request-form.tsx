'use client'

import { motion } from 'framer-motion'
import { FormEvent, useMemo, useState } from 'react'
import { trackEvent } from '@/lib/analytics/track-client'
import { useI18n } from '@/lib/i18n'

type RequestType = 'access' | 'implementation'

type LeadRequestFormProps = {
  requestType: RequestType
  onSuccess?: () => void
}

type FormState = {
  restaurant: string
  city: string
  name: string
  phone: string
  locations: string
  comment: string
}

const PHONE_REGEX = /^[0-9+\-\s()]{7,20}$/

export function LeadRequestForm({ requestType, onSuccess }: LeadRequestFormProps) {
  const { locale } = useI18n()
  const [form, setForm] = useState<FormState>({
    restaurant: '',
    city: '',
    name: '',
    phone: '',
    locations: '',
    comment: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const labels = useMemo(
    () =>
      locale === 'ru'
        ? {
            restaurant: 'Имя ресторана / сети',
            city: 'Город',
            name: 'Имя контактного лица',
            phone: 'Телефон',
            locations: 'Количество точек (optional)',
            comment: 'Комментарий / задача (optional)',
            submit: 'Отправить запрос',
            sending: 'Отправляем...',
            success: 'Запрос отправлен. Команда ARRIE свяжется с вами.',
            invalid: 'Проверьте обязательные поля и формат телефона.',
            failed: 'Не удалось отправить запрос. Попробуйте снова.',
          }
        : {
            restaurant: 'Restaurant / chain name',
            city: 'City',
            name: 'Contact person',
            phone: 'Phone',
            locations: 'Number of locations (optional)',
            comment: 'Comment / request (optional)',
            submit: 'Send request',
            sending: 'Sending...',
            success: 'Request sent. ARRIE team will contact you soon.',
            invalid: 'Please check required fields and phone format.',
            failed: 'Unable to send request. Please try again.',
          },
    [locale]
  )

  const valid = useMemo(() => {
    const requiredFilled =
      form.restaurant.trim().length > 1 &&
      form.city.trim().length > 1 &&
      form.name.trim().length > 1 &&
      PHONE_REGEX.test(form.phone.trim())

    if (!requiredFilled) return false
    if (form.locations.trim().length > 0 && !/^\d{1,5}$/.test(form.locations.trim())) return false
    return true
  }, [form])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(null)

    if (!valid) {
      setError(labels.invalid)
      return
    }

    setSubmitting(true)
    try {
      const response = await fetch('/api/lead-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          requestType,
          restaurant: form.restaurant.trim(),
          city: form.city.trim(),
          name: form.name.trim(),
          phone: form.phone.trim(),
          locations: form.locations.trim(),
          comment: form.comment.trim(),
        }),
      })

      if (!response.ok) throw new Error('Request failed')

      trackEvent(requestType === 'access' ? 'early_access_submit' : 'demo_request_submit', {
        locale,
        meta: { restaurant: form.restaurant.trim() },
      })

      setSuccess(true)
      onSuccess?.()
    } catch {
      setError(labels.failed)
    } finally {
      setSubmitting(false)
    }
  }

  if (success) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-3xl border border-emerald-200/30 bg-emerald-500/10 p-8 text-center"
      >
        <div className="mx-auto mb-4 h-12 w-12 rounded-full border border-emerald-200/40 bg-emerald-500/20 flex items-center justify-center text-emerald-100">
          ✓
        </div>
        <p className="text-lg text-emerald-100">{labels.success}</p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        value={form.restaurant}
        onChange={(event) => setForm((prev) => ({ ...prev, restaurant: event.target.value }))}
        placeholder={labels.restaurant}
        className="w-full rounded-3xl border border-white/15 bg-black/30 px-5 py-4 text-white placeholder:text-white/45 outline-none focus:border-white/40 focus:bg-black/40 transition-all"
        required
      />
      <input
        value={form.city}
        onChange={(event) => setForm((prev) => ({ ...prev, city: event.target.value }))}
        placeholder={labels.city}
        className="w-full rounded-3xl border border-white/15 bg-black/30 px-5 py-4 text-white placeholder:text-white/45 outline-none focus:border-white/40 focus:bg-black/40 transition-all"
        required
      />
      <input
        value={form.name}
        onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
        placeholder={labels.name}
        className="w-full rounded-3xl border border-white/15 bg-black/30 px-5 py-4 text-white placeholder:text-white/45 outline-none focus:border-white/40 focus:bg-black/40 transition-all"
        required
      />
      <input
        value={form.phone}
        onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))}
        placeholder={labels.phone}
        className="w-full rounded-3xl border border-white/15 bg-black/30 px-5 py-4 text-white placeholder:text-white/45 outline-none focus:border-white/40 focus:bg-black/40 transition-all"
        required
      />
      <input
        value={form.locations}
        onChange={(event) => setForm((prev) => ({ ...prev, locations: event.target.value }))}
        placeholder={labels.locations}
        className="w-full rounded-3xl border border-white/15 bg-black/30 px-5 py-4 text-white placeholder:text-white/45 outline-none focus:border-white/40 focus:bg-black/40 transition-all"
      />
      <textarea
        value={form.comment}
        onChange={(event) => setForm((prev) => ({ ...prev, comment: event.target.value }))}
        placeholder={labels.comment}
        className="w-full min-h-[120px] rounded-3xl border border-white/15 bg-black/30 px-5 py-4 text-white placeholder:text-white/45 outline-none focus:border-white/40 focus:bg-black/40 transition-all resize-y"
      />

      {error ? <p className="text-sm text-rose-300">{error}</p> : null}

      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-3xl border border-white/10 bg-white text-black py-4 text-base font-medium transition-all hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? labels.sending : labels.submit}
      </button>
    </form>
  )
}
