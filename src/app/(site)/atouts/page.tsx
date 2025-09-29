import AtoutsSectionClient from '@/components/home/atouts/AtoutsClient';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nos Atouts - Wan-Kountry | Initiative Digitale Innovante',
  description:
    'Découvrez nos atouts : mobile-first, paiements intégrés, performance extrême, technologies modernes. Collectif de 3 jeunes diplômés : Fullstack & DevOps, Cloud & Data Analysis, Cybersécurité. Solutions digitales performantes et innovantes.',
  keywords: [
    'atouts Wan-Kountry',
    'pourquoi choisir Wan-Kountry',
    'avantages projet digital',
    'mobile first expert',
    'paiements intégrés Mobile Money',
    'performance web optimisée',
    'technologies modernes React Symfony',
    'collectif digital Cameroun France',
    'solutions digitales innovantes',
  ],
  authors: [{ name: 'Wan-Kountry', url: 'https://wankountry.com/' }],
  creator: 'Wan-Kountry',
  publisher: 'Wan-Kountry',
  category: 'Technology',
  metadataBase: new URL('https://wankountry.com/'),
  openGraph: {
    title: 'Nos Atouts - Wan-Kountry, Initiative Digitale',
    description:
      'Mobile-first, paiements intégrés, performance extrême et technologies modernes. Collectif de 3 jeunes diplômés : Fullstack & DevOps, Cloud & Data Analysis, Cybersécurité.',
    url: 'https://wankountry.com/atouts',
    siteName: 'Wan-Kountry',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: 'https://wankountry.com/screenshots/desktop-home.png',
        width: 1200,
        height: 630,
        alt: 'Atouts Wan-Kountry – Initiative digitale par trois jeunes diplômés',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nos Atouts - Wan-Kountry',
    description:
      'Collectif de 3 jeunes diplômés passionnés : Fullstack & DevOps, Cloud & Data Analysis, Cybersécurité. Mobile-first, performance, technologies modernes.',
    creator: '@WanKountry',
    images: ['https://wankountry.com/screenshots/desktop-home.png'],
  },
  alternates: {
    canonical: 'https://wankountry.com/atouts',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function Page() {
  return (
    <main>
      <AtoutsSectionClient />
    </main>
  );
}
