import RealisationSectionClient from '@/components/home/realisations/RealisationClient';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio - Wan-Kountry | Mes Réalisations Web et Applications',
  description:
    'Découvrez nos projets : TaskFlow, EventHive, WeFund, Bocobi. Applications web, ERP, fintech, e-santé. Résultats concrets et technologies modernes.',
  keywords: [
    'portfolio Wan-Kountry',
    'projets développeur web',
    'réalisations sites web',
    'applications web portfolio',
    'TaskFlow gestion tâches',
    'EventHive événements',
    'WeFund crowdfunding',
    'Bocobi e-santé',
    'ERP web application',
    'projets React Angular',
  ],
  authors: [{ name: 'Wan-Kountry', url: 'https://wankountry.com/' }],
  creator: 'Wan-Kountry',
  publisher: 'Wan-Kountry',
  category: 'Technology',
  metadataBase: new URL('https://wankountry.com/'),
  openGraph: {
    title: 'Portfolio Wan-Kountry - Mes Réalisations Web',
    description:
      '9 projets concrets : gestion de tâches, événementiel, crowdfunding, e-santé, ERP. Chaque création raconte une histoire de succès.',
    url: 'https://wankountry.com//realisations',
    siteName: 'Wan-Kountry',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: 'https://wankountry.com/screenshots/desktop-home.png',
        width: 1200,
        height: 630,
        alt: 'Portfolio Wan-Kountry - Réalisations Web',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio Wan-Kountry - Projets Web Concrets',
    description:
      'TaskFlow, EventHive, WeFund, Bocobi... Découvrez nos réalisations web avec résultats mesurables.',
    creator: '@Wan-Kountry',
    images: ['https://wankountry.com/screenshots/desktop-home.png'],
  },
  alternates: {
    canonical: 'https://wankountry.com//realisations',
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
