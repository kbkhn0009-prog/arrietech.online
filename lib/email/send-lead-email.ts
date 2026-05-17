type LeadEmailPayload = {
  requestType: string
  restaurant: string
  city: string
  name: string
  phone: string
  locations: string
  comment: string
}

function buildLeadEmailText(payload: LeadEmailPayload) {
  return [
    'Новая заявка ARRIE',
    '',
    `Тип: ${payload.requestType}`,
    `Ресторан: ${payload.restaurant}`,
    `Город: ${payload.city}`,
    `Контакт: ${payload.name}`,
    `Телефон: ${payload.phone}`,
    `Точек: ${payload.locations || '-'}`,
    `Комментарий: ${payload.comment || '-'}`,
    '',
    `Время: ${new Date().toLocaleString('ru-RU', { hour12: false })}`,
  ].join('\n')
}

/** Edge-safe email via Resend HTTP API (Cloudflare Pages / Edge runtime). */
async function sendViaResend(payload: LeadEmailPayload, text: string) {
  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.LEAD_EMAIL || 'arrietech.ru@gmail.com'
  const from = process.env.RESEND_FROM || process.env.SMTP_FROM

  if (!apiKey || !from) {
    return { sent: false as const, reason: 'resend_not_configured' as const }
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: `ARRIE · ${payload.requestType}`,
      text,
    }),
  })

  if (!response.ok) {
    const details = await response.text()
    throw new Error(`Resend failed: ${response.status} ${details}`)
  }

  return { sent: true as const }
}

/**
 * Sends lead notification email. Uses Resend (fetch) — compatible with Edge / Cloudflare.
 * SMTP/nodemailer is not used (Node-only modules break Edge bundles).
 */
export async function sendLeadEmail(payload: LeadEmailPayload) {
  const text = buildLeadEmailText(payload)
  return sendViaResend(payload, text)
}
