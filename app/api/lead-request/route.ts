import { NextResponse } from 'next/server'
import { sendLeadEmail } from '@/lib/email/send-lead-email'

export const runtime = 'edge'

type LeadPayload = {
  requestType?: 'access' | 'implementation'
  restaurant?: string
  city?: string
  name?: string
  phone?: string
  locations?: string
  comment?: string
}

const PHONE_REGEX = /^[0-9+\-\s()]{7,20}$/

function normalize(value: unknown) {
  return typeof value === 'string' ? value.trim() : ''
}

function formatMessage(payload: Required<Omit<LeadPayload, 'requestType'>> & { requestType: string }) {
  const now = new Date().toLocaleString('ru-RU', { hour12: false })

  return [
    'Новая заявка ARRIE',
    '',
    `Тип запроса: ${payload.requestType}`,
    `Ресторан: ${payload.restaurant}`,
    `Город: ${payload.city}`,
    `Контакт: ${payload.name}`,
    `Телефон: ${payload.phone}`,
    `Количество точек: ${payload.locations || '-'}`,
    `Комментарий: ${payload.comment || '-'}`,
    '',
    `Дата: ${now}`,
  ].join('\n')
}

export async function POST(request: Request) {
  const token = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID

  if (!token || !chatId) {
    return NextResponse.json(
      { success: false, error: 'Telegram environment variables are not configured' },
      { status: 500 }
    )
  }

  let body: LeadPayload
  try {
    body = (await request.json()) as LeadPayload
  } catch {
    return NextResponse.json({ success: false, error: 'Invalid JSON body' }, { status: 400 })
  }

  const payload = {
    requestType:
      body.requestType === 'implementation' ? 'Обсудить внедрение' : 'Запросить доступ',
    restaurant: normalize(body.restaurant),
    city: normalize(body.city),
    name: normalize(body.name),
    phone: normalize(body.phone),
    locations: normalize(body.locations),
    comment: normalize(body.comment),
  }

  if (
    payload.restaurant.length < 2 ||
    payload.city.length < 2 ||
    payload.name.length < 2 ||
    !PHONE_REGEX.test(payload.phone)
  ) {
    return NextResponse.json({ success: false, error: 'Validation failed' }, { status: 400 })
  }

  const telegramResponse = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text: formatMessage(payload),
      disable_web_page_preview: true,
    }),
  })

  if (!telegramResponse.ok) {
    const details = await telegramResponse.text()
    return NextResponse.json(
      { success: false, error: 'Failed to send Telegram message', details },
      { status: 502 }
    )
  }

  try {
    await sendLeadEmail(payload)
  } catch (err) {
    console.error('[lead-request] email failed', err)
  }

  return NextResponse.json({ success: true })
}
