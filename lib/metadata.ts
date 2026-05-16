import type { Metadata } from 'next'

export const siteMetadata: Metadata = {
  title: 'ARRIE — управление ресторанной сетью в реальном времени',
  description:
    'ARRIE помогает ресторанам понимать, как меню и поведение гостей влияют на спрос, выручку и прибыльность.',
  keywords: [
    'цифровое управление рестораном',
    'ресторанная аналитика',
    'menu intelligence',
    'управление сетью ресторанов',
    'аналитика поведения гостей',
    'контроль маржи ресторана',
    'управление меню ресторана',
    'рост выручки ресторана',
  ],
  openGraph: {
    title: 'ARRIE — управление ресторанной сетью в реальном времени',
    description: 'Платформа menu intelligence для управления спросом, выручкой и прибыльностью через меню.',
    type: 'website',
    url: 'https://arrietech.ru',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ARRIE — платформа для ресторанных сетей',
    description: 'Menu intelligence, guest behavior analytics и visibility по прибыльности позиций.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://arrietech.ru',
  },
}
