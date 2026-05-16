import type { Metadata } from 'next'
import { CloudflareAnalytics } from '@/components/analytics/cloudflare-analytics'
import { I18nProvider } from '@/lib/i18n'
import { PRIMARY_SITE_URL, SECONDARY_SITE_URL } from '@/lib/site-config'
import { AdaptiveLightTheme } from '@/components/adaptive-light-theme'
import { ImmersiveScrollEngine } from '@/components/immersive-scroll-engine'
import { LeadCaptureProvider } from '@/components/lead-capture-provider'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(PRIMARY_SITE_URL),
  title: {
    default: 'ARRIE — система управления ресторанной выручкой в реальном времени',
    template: '%s | ARRIE',
  },
  description:
    'ARRIE — интеллектуальная система управления рестораном, меню и выручкой в реальном времени. Анализ поведения гостей, управление спросом, цифровое меню, автоматизация ресторанов и ресторанных сетей.',
  keywords: [
    'автоматизация ресторана',
    'автоматизация кафе',
    'система для ресторана',
    'управление рестораном',
    'управление выручкой ресторана',
    'ресторанная аналитика',
    'цифровое меню',
    'qr меню',
    'интерактивное меню',
    'умная система для ресторанов',
    'система управления кафе',
    'система управления ресторанной сетью',
    'ресторанный софт',
    'программа для ресторана',
    'увеличение выручки ресторана',
    'управление спросом ресторана',
    'гостевой опыт ресторан',
    'поведение гостей',
    'инженерия меню',
    'ресторанные технологии',
    'автоматизация horeca',
    'автоматизация ресторанных процессов',
    'управление выручкой ресторана',
    'платформа управления ресторанной сетью',
    'аналитика ресторана',
    'умная система ресторана',
    'экосистема ресторанной сети',
    'цифровая платформа ресторана',
    'crm для ресторанной сети',
    'аналитика по локациям',
  ],
  authors: [{ name: 'ARRIE', url: PRIMARY_SITE_URL }],
  creator: 'ARRIE',
  publisher: 'ARRIE',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: PRIMARY_SITE_URL,
    languages: {
      ru: PRIMARY_SITE_URL,
      en: PRIMARY_SITE_URL,
      'x-default': PRIMARY_SITE_URL,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    alternateLocale: ['en_US'],
    url: PRIMARY_SITE_URL,
    siteName: 'ARRIE',
    title: 'ARRIE — система управления ресторанной выручкой в реальном времени',
    description:
      'Интеллектуальная система для ресторанов и ресторанных сетей. Управление меню, поведением гостей и выручкой в реальном времени.',
    images: [
      {
        url: `${PRIMARY_SITE_URL}/og-cover.jpg`,
        width: 1200,
        height: 630,
        alt: 'ARRIE',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ARRIE — система управления ресторанной выручкой',
    description:
      'Платформа для управления меню, поведением гостей и выручкой ресторана в реальном времени.',
    images: [`${PRIMARY_SITE_URL}/og-cover.jpg`],
  },
  category: 'Ресторанные технологии',
  applicationName: 'ARRIE',
  referrer: 'origin-when-cross-origin',
  other: {
    'ai-platform': 'платформа управления ресторанной выручкой',
    'business-type': 'технологии для ресторанного бизнеса',
    coverage: 'Россия и СНГ',
    'target-market': 'Ресторанные сети, кафе, сервис доставки',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('theme');
                  var isLight = stored ? stored === 'light' : window.matchMedia('(prefers-color-scheme: light)').matches;
                  if (isLight) document.documentElement.classList.add('light-mode');
                  else document.documentElement.classList.remove('light-mode');
                } catch (e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'ARRIE',
              description: 'Интеллектуальная система управления ресторанной выручкой',
              url: PRIMARY_SITE_URL,
              sameAs: [SECONDARY_SITE_URL],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <CloudflareAnalytics />
        <I18nProvider>
          <AdaptiveLightTheme />
          <ImmersiveScrollEngine />
          <LeadCaptureProvider>{children}</LeadCaptureProvider>
        </I18nProvider>
      </body>
    </html>
  )
}
