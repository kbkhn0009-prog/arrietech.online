export type LegalSection = {
  title: string
  paragraphs: string[]
  bullets?: string[]
}

export type LegalPageContent = {
  title: string
  updated: string
  intro: string
  sections: LegalSection[]
}

export const privacyContent: Record<'ru' | 'en', LegalPageContent> = {
  ru: {
    title: 'Политика конфиденциальности',
    updated: '16 мая 2026',
    intro:
      'Настоящая Политика определяет порядок обработки персональных данных пользователей сайта ARRIE (arrietech.ru) в соответствии с Федеральным законом № 152-ФЗ «О персональных данных».',
    sections: [
      {
        title: '1. Общие положения',
        paragraphs: [
          'Оператор персональных данных — правообладатель платформы ARRIE. Политика распространяется на всех посетителей сайта, а также на лиц, направляющие заявки на ранний доступ, демо-доступ или обратную связь.',
          'Используя сайт и отправляя формы, вы подтверждаете ознакомление с настоящей Политикой. Если вы не согласны с условиями — воздержитесь от передачи данных.',
        ],
      },
      {
        title: '2. Какие данные собираются',
        paragraphs: ['Мы можем обрабатывать следующие категории данных:'],
        bullets: [
          'имя и фамилия (при указании в форме);',
          'номер телефона;',
          'адрес электронной почты;',
          'название ресторана или сети;',
          'содержание сообщения в заявке;',
          'технические данные: IP-адрес, тип браузера, язык, cookies, данные об устройстве и сессии.',
        ],
      },
      {
        title: '3. Цели обработки данных',
        paragraphs: [
          'Персональные данные обрабатываются исключительно для:',
          'Данные не продаются и не передаются для сторонней рекламной рассылки.',
        ],
        bullets: [
          'обработки заявок на ранний доступ, демо и внедрение;',
          'связи с вами по вопросам платформы ARRIE;',
          'подготовки коммерческих и технических предложений;',
          'улучшения работы сайта и аналитики посещаемости;',
          'исполнения требований законодательства РФ.',
        ],
      },
      {
        title: '4. Правовые основания обработки',
        paragraphs: [
          'Обработка осуществляется на основании согласия субъекта персональных данных (ст. 6 152-ФЗ), необходимости исполнения договора или преддоговорных действий по вашей инициативе, а также законных интересов оператора при условии соблюдения ваших прав.',
        ],
      },
      {
        title: '5. Хранение и защита данных',
        paragraphs: [
          'Данные хранятся не дольше, чем это необходимо для целей обработки, если иной срок не установлен законом. Применяются организационные и технические меры: ограничение доступа, шифрование каналов передачи (HTTPS), резервное копирование, журналирование обращений.',
          'Доступ к данным имеют только уполномоченные лица, связанные обязательством конфиденциальности.',
        ],
      },
      {
        title: '6. Передача третьим лицам',
        paragraphs: [
          'Мы не продаём персональные данные. Передача возможна только поставщикам инфраструктуры (хостинг, почтовые сервисы, аналитика) при условии договоров о конфиденциальности и только в объёме, необходимом для работы сайта и связи с вами.',
          'Передача государственным органам — только по основаниям, предусмотренным законодательством РФ.',
        ],
      },
      {
        title: '7. Cookies и аналитика',
        paragraphs: [
          'Сайт может использовать cookies и аналогичные технологии для сохранения языка интерфейса, темы оформления и сбора обезличенной статистики посещений. Вы можете ограничить cookies в настройках браузера; при этом часть функций сайта может работать ограниченно.',
        ],
      },
      {
        title: '8. Права пользователя',
        paragraphs: [
          'В соответствии с 152-ФЗ вы вправе:',
          'Для реализации прав направьте запрос на контактный email. Срок ответа — до 30 дней, если иное не установлено законом.',
        ],
        bullets: [
          'получать информацию об обработке ваших данных;',
          'требовать уточнения, блокирования или уничтожения данных;',
          'отозвать согласие на обработку;',
          'обжаловать действия оператора в Роскомнадзор или в суд.',
        ],
      },
      {
        title: '9. Контактная информация',
        paragraphs: [
          'По вопросам персональных данных и удаления информации:',
          'Email: arrietech.ru@gmail.com',
          'Мы рассмотрим обращение и сообщим результат в разумный срок.',
        ],
      },
    ],
  },
  en: {
    title: 'Privacy Policy',
    updated: '16 May 2026',
    intro:
      'This Policy describes how ARRIE (arrietech.ru) processes personal data in accordance with applicable data protection law, including Russian Federal Law No. 152-FZ on Personal Data where applicable.',
    sections: [
      {
        title: '1. General',
        paragraphs: [
          'The data controller is the rights holder of the ARRIE platform. This Policy applies to all website visitors and to anyone submitting early access, demo, or contact requests.',
          'By using the site and submitting forms, you confirm that you have read this Policy. If you do not agree, please do not submit personal data.',
        ],
      },
      {
        title: '2. Data we collect',
        paragraphs: ['We may process the following categories:'],
        bullets: [
          'name (when provided in a form);',
          'phone number;',
          'email address;',
          'restaurant or chain name;',
          'message content in your request;',
          'technical data: IP address, browser type, language, cookies, device and session data.',
        ],
      },
      {
        title: '3. Purposes of processing',
        paragraphs: [
          'Personal data is used only to:',
          'Data is not sold and is not shared for third-party advertising.',
        ],
        bullets: [
          'process early access, demo, and implementation requests;',
          'contact you regarding ARRIE;',
          'prepare commercial and technical proposals;',
          'improve the website and measure traffic;',
          'comply with applicable law.',
        ],
      },
      {
        title: '4. Legal bases',
        paragraphs: [
          'Processing is based on your consent, steps prior to a contract at your request, and legitimate interests of the controller where your rights are not overridden.',
        ],
      },
      {
        title: '5. Storage and security',
        paragraphs: [
          'Data is retained only as long as needed for the purposes above or as required by law. We apply organizational and technical safeguards: access control, HTTPS, backups, and logging.',
          'Only authorized personnel bound by confidentiality may access personal data.',
        ],
      },
      {
        title: '6. Third parties',
        paragraphs: [
          'We do not sell personal data. Data may be shared with infrastructure providers (hosting, email, analytics) under confidentiality obligations and only as needed to operate the site and communicate with you.',
          'Disclosure to authorities occurs only where required by law.',
        ],
      },
      {
        title: '7. Cookies and analytics',
        paragraphs: [
          'The site may use cookies to store language and theme preferences and to collect anonymized visit statistics. You can restrict cookies in your browser; some features may then be limited.',
        ],
      },
      {
        title: '8. Your rights',
        paragraphs: [
          'You may have the right to:',
          'Contact us at the email below to exercise your rights. We will respond within a reasonable time, up to 30 days where applicable.',
        ],
        bullets: [
          'obtain information about processing;',
          'request correction, restriction, or deletion;',
          'withdraw consent;',
          'lodge a complaint with a supervisory authority.',
        ],
      },
      {
        title: '9. Contact',
        paragraphs: [
          'For privacy requests and data deletion:',
          'Email: arrietech.ru@gmail.com',
        ],
      },
    ],
  },
}

export const termsContent: Record<'ru' | 'en', LegalPageContent> = {
  ru: {
    title: 'Условия использования',
    updated: '16 мая 2026',
    intro:
      'Настоящие Условия регулируют использование сайта и сервисов ARRIE. Продолжая использовать сайт, вы принимаете эти Условия.',
    sections: [
      {
        title: '1. Общие положения',
        paragraphs: [
          'Сайт arrietech.ru и платформа ARRIE принадлежат правообладателю технологии ARRIE. Условия распространяются на всех посетителей и пользователей, включая участников программы раннего доступа и демо.',
        ],
      },
      {
        title: '2. Описание платформы ARRIE',
        paragraphs: [
          'ARRIE — программная платформа координации ресторанной выручки: меню, спрос, поведение гостей, маржа и операционные сигналы в едином слое. Функциональность может предоставляться поэтапно, в том числе в формате раннего доступа или демонстрации.',
        ],
      },
      {
        title: '3. Ограничение ответственности',
        paragraphs: [
          'Материалы сайта носят информационный характер и не являются индивидуальной финансовой или юридической консультацией. Оператор не гарантирует конкретный коммерческий результат от использования демо-данных или пилотных сценариев.',
          'Сервис предоставляется «как есть» в рамках доступной на момент обращения версии. Перерывы в работе возможны по техническим причинам.',
        ],
      },
      {
        title: '4. Интеллектуальная собственность',
        paragraphs: [
          'ARRIE, включая интерфейс, визуальные материалы, тексты, логику координации и программный код, является объектом интеллектуальной собственности правообладателя.',
          'Копирование, воспроизведение, распространение или создание производных продуктов без письменного согласия запрещено.',
        ],
      },
      {
        title: '5. Ограничения использования',
        paragraphs: ['Пользователю запрещается:'],
        bullets: [
          'обходить технические ограничения и меры безопасности;',
          'использовать сайт для незаконных целей;',
          'извлекать данные автоматизированными средствами без согласия;',
          'выдавать материалы ARRIE за продукт третьих лиц.',
        ],
      },
      {
        title: '6. Early Access и демо-доступ',
        paragraphs: [
          'Заявка на ранний доступ или демо не создаёт обязательства по заключению договора до подписания отдельного соглашения. Оператор вправе отказать в доступе без объяснения причин.',
          'Демо-функции, метрики и интерфейс могут изменяться, дополняться или ограничиваться без предварительного уведомления.',
        ],
      },
      {
        title: '7. Изменение функциональности',
        paragraphs: [
          'Платформа ARRIE развивается. Оператор вправе обновлять сайт, условия, состав функций и визуальные материалы. Актуальная версия Условий публикуется на этой странице.',
        ],
      },
      {
        title: '8. Контактная информация',
        paragraphs: ['По вопросам использования сайта и платформы:', 'Email: arrietech.ru@gmail.com'],
      },
    ],
  },
  en: {
    title: 'Terms of Use',
    updated: '16 May 2026',
    intro:
      'These Terms govern use of the ARRIE website and related services. By continuing to use the site, you accept these Terms.',
    sections: [
      {
        title: '1. General',
        paragraphs: [
          'The arrietech.ru website and ARRIE platform are operated by the rights holder of ARRIE technology. These Terms apply to all visitors and users, including early access and demo participants.',
        ],
      },
      {
        title: '2. ARRIE platform',
        paragraphs: [
          'ARRIE is a restaurant revenue coordination platform connecting menu structure, demand, guest behavior, margin, and operational signals. Features may be rolled out in phases, including early access or demonstration modes.',
        ],
      },
      {
        title: '3. Limitation of liability',
        paragraphs: [
          'Site materials are informational and do not constitute individual financial or legal advice. No specific commercial outcome is guaranteed from demo data or pilot scenarios.',
          'The service is provided “as is” for the version available at the time of access. Downtime may occur for technical reasons.',
        ],
      },
      {
        title: '4. Intellectual property',
        paragraphs: [
          'ARRIE, including interface, visuals, copy, coordination logic, and software, is intellectual property of the rights holder.',
          'Copying, redistribution, or derivative works without written consent are prohibited.',
        ],
      },
      {
        title: '5. Acceptable use',
        paragraphs: ['You must not:'],
        bullets: [
          'circumvent security or technical restrictions;',
          'use the site for unlawful purposes;',
          'scrape or harvest data without permission;',
          'present ARRIE materials as a third-party product.',
        ],
      },
      {
        title: '6. Early access and demo',
        paragraphs: [
          'Applying for early access or demo does not create a contractual obligation until a separate agreement is signed. Access may be declined at the operator’s discretion.',
          'Demo features, metrics, and interface may change, expand, or be limited without prior notice.',
        ],
      },
      {
        title: '7. Changes',
        paragraphs: [
          'ARRIE is evolving. The operator may update the site, these Terms, features, and materials. The current version is published on this page.',
        ],
      },
      {
        title: '8. Contact',
        paragraphs: ['For questions about the site and platform:', 'Email: arrietech.ru@gmail.com'],
      },
    ],
  },
}
