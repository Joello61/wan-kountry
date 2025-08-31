import RealisationSectionClient from '@/components/home/realisations/RealisationClient';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio - J3T-AGENCY | Mes Réalisations Web et Applications',
  description:
    'Découvrez nos projets : TaskFlow, EventHive, WeFund, Bocobi. Applications web, ERP, fintech, e-santé. Résultats concrets et technologies modernes.',
  keywords: [
    'portfolio J3T-AGENCY',
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
  authors: [{ name: 'J3T-AGENCY', url: 'https://j3t-agency.joeltech.dev/' }],
  creator: 'J3T-AGENCY',
  publisher: 'J3T-AGENCY',
  category: 'Technology',
  metadataBase: new URL('https://j3t-agency.joeltech.dev/'),
  openGraph: {
    title: 'Portfolio J3T-AGENCY - Mes Réalisations Web',
    description:
      '9 projets concrets : gestion de tâches, événementiel, crowdfunding, e-santé, ERP. Chaque création raconte une histoire de succès.',
    url: 'https://j3t-agency.joeltech.dev//realisations',
    siteName: 'J3T-AGENCY',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: 'https://j3t-agency.joeltech.dev/screenshots/desktop-home.png',
        width: 1200,
        height: 630,
        alt: 'Portfolio J3T-AGENCY - Réalisations Web',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio J3T-AGENCY - Projets Web Concrets',
    description:
      'TaskFlow, EventHive, WeFund, Bocobi... Découvrez nos réalisations web avec résultats mesurables.',
    creator: '@J3T-AGENCY',
    images: ['https://j3t-agency.joeltech.dev/screenshots/desktop-home.png'],
  },
  alternates: {
    canonical: 'https://j3t-agency.joeltech.dev//realisations',
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
