import nodemailer from 'nodemailer'

type LeadEmailPayload = {
  requestType: string
  restaurant: string
  city: string
  name: string
  phone: string
  locations: string
  comment: string
}

export async function sendLeadEmail(payload: LeadEmailPayload) {
  const host = process.env.SMTP_HOST
  const port = Number(process.env.SMTP_PORT || 587)
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  const to = process.env.LEAD_EMAIL || 'arrietech.ru@gmail.com'

  if (!host || !user || !pass) {
    return { sent: false, reason: 'smtp_not_configured' as const }
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  })

  const text = [
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

  await transporter.sendMail({
    from: process.env.SMTP_FROM || `ARRIE <${user}>`,
    to,
    subject: `ARRIE · ${payload.requestType}`,
    text,
  })

  return { sent: true as const }
}
