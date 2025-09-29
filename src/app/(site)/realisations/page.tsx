import RealisationSectionClient from '@/components/home/realisations/RealisationClient';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio - Wan-Kountry | Nos Réalisations Web et Applications',
  description:
    'Découvrez les projets du collectif Wan-Kountry : TaskFlow, EventHive, WeFund, Bocobi. Applications web, ERP, fintech, e-santé. Solutions concrètes, performantes et innovantes.',
  keywords: [
    'portfolio Wan-Kountry',
    'projets collectif digital',
    'réalisations sites web',
    'applications web portfolio',
    'TaskFlow gestion tâches',
    'EventHive événements',
    'WeFund crowdfunding',
    'Bocobi e-santé',
    'ERP web application',
    'projets React Angular',
    'solutions digitales innovantes',
  ],
  authors: [{ name: 'Wan-Kountry', url: 'https://wankountry.com/' }],
  creator: 'Wan-Kountry',
  publisher: 'Wan-Kountry',
  category: 'Technology',
  metadataBase: new URL('https://wankountry.com/'),
  openGraph: {
    title: 'Portfolio Wan-Kountry – Réalisations du Collectif',
    description:
      '9 projets concrets réalisés par notre collectif : gestion de tâches, événementiel, crowdfunding, e-santé, ERP. Chaque création reflète notre expertise Fullstack, Cloud & Data, et Cybersécurité.',
    url: 'https://wankountry.com/realisations',
    siteName: 'Wan-Kountry',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: 'https://wankountry.com/screenshots/desktop-home.png',
        width: 1200,
        height: 630,
        alt: 'Portfolio Wan-Kountry – Réalisations du Collectif',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio Wan-Kountry – Nos Projets Web',
    description:
      'TaskFlow, EventHive, WeFund, Bocobi... Découvrez nos réalisations web, ERP et applications innovantes, réalisées par notre collectif de trois profils complémentaires.',
    creator: '@WanKountry',
    images: ['https://wankountry.com/screenshots/desktop-home.png'],
  },
  alternates: {
    canonical: 'https://wankountry.com/realisations',
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
      <RealisationSectionClient />
    </main>
  );
}
