import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Heal with Izabela | Gut Health, Sleep & Wellness Coaching',
  description:
    'Personalised 1:1 wellness coaching, retreats and digital programs for gut health, sleep, inflammation and cortisol. For people who have tried everything and are ready to actually fix it.',
  keywords: [
    'gut health coach',
    'sleep coaching',
    'inflammation reduction',
    'cortisol balance',
    'wellness coach',
    'detox programs',
    'health coaching for women',
    'health coaching for men',
    'holistic health coach',
    'energy and wellness coaching',
  ],
  openGraph: {
    title: 'Heal with Izabela | Gut Health, Sleep & Wellness Coaching',
    description:
      'Personalised 1:1 wellness coaching, retreats and digital programs. For those done with quick fixes — ready to actually heal.',
    url: 'https://healwithizabela.com',
    siteName: 'Heal with Izabela',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Heal with Izabela | Gut Health, Sleep & Wellness Coaching',
    description:
      'Personalised 1:1 wellness coaching, retreats and digital programs. For those done with quick fixes — ready to actually heal.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://healwithizabela.com',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://healwithizabela.com/#izabela',
      name: 'Izabela',
      jobTitle: 'Health & Wellness Coach',
      description:
        'Wellness coach specialising in gut health, sleep optimisation, inflammation reduction and cortisol balance. Also an architect and interior designer with a focus on wellness spaces.',
      url: 'https://healwithizabela.com',
    },
    {
      '@type': 'HealthAndBeautyBusiness',
      '@id': 'https://healwithizabela.com/#business',
      name: 'Heal with Izabela',
      description:
        '1:1 wellness coaching, retreats and digital programs for gut health, sleep, inflammation and high cortisol. Personalised protocols for real results.',
      url: 'https://healwithizabela.com',
      founder: { '@id': 'https://healwithizabela.com/#izabela' },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Wellness Programs',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: '1:1 Wellness Coaching',
              description:
                'Personalised health protocol for gut health, sleep, inflammation and cortisol. Work directly with Izabela.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Wellness Retreats',
              description:
                'Immersive wellness retreats in curated locations. Deep reset for gut, sleep and energy.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Digital Wellness Programs',
              description:
                'Self-paced guides and protocols for gut health, detox, sleep and inflammation reduction.',
            },
          },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How is Heal with Izabela different from other wellness coaches?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most coaches sell generic information. Heal with Izabela builds personalised protocols based on your specific symptoms, history and lifestyle — addressing gut health, sleep, inflammation and cortisol together, not in isolation.',
          },
        },
        {
          '@type': 'Question',
          name: 'What conditions does Heal with Izabela help with?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Gut issues (bloating, IBS, food sensitivities), poor sleep and insomnia, chronic inflammation, high cortisol and burnout, low energy, and desire to detox and reset the body.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does it take to see results with wellness coaching?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most clients notice meaningful changes within 4–8 weeks. Full protocols are typically 3–6 months depending on the complexity of symptoms and individual response.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does Heal with Izabela offer online coaching?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. 1:1 coaching is available online worldwide. Retreats are held in person at curated locations. Digital products are self-paced and accessible immediately.',
          },
        },
        {
          '@type': 'Question',
          name: 'Who is wellness coaching with Izabela for?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Men and women aged 32–55 who are dealing with gut problems, disrupted sleep, inflammation, high cortisol or low energy — and are ready to take a committed, personalised approach to fixing it.',
          },
        },
      ],
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
