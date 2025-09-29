import AtoutsSectionClient from '@/components/home/atouts/AtoutsClient';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mes Atouts - Wan-Kountry | Pourquoi me choisir comme développeur',
  description:
    "Découvrez nos atouts : mobile-first, paiements intégrés, performance extrême, tech modernes, vision internationale. 3+ ans d'expérience, 100% projets réussis.",
  keywords: [
    'atouts Wan-Kountry',
    'pourquoi choisir Wan-Kountry',
    'avantages développeur web',
    'mobile first expert',
    'paiements intégrés mobile money',
    'performance web optimisée',
    'technologies modernes React',
    'développeur international',
    'accompagnement projet web',
  ],
  authors: [{ name: 'Wan-Kountry', url: 'https://wankountry.com/' }],
  creator: 'Wan-Kountry',
  publisher: 'Wan-Kountry',
  category: 'Technology',
  metadataBase: new URL('https://wankountry.com/'),
  openGraph: {
    title: 'Mes atouts clés - Wan-Kountry Développeur Web',
    description:
      'Mobile-first, paiements intégrés, performance extrême, technologies modernes. Découvrez pourquoi me choisir pour votre projet web.',
    url: 'https://wankountry.com//atouts',
    siteName: 'Wan-Kountry',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: 'https://wankountry.com/screenshots/desktop-home.png',
        width: 1200,
        height: 630,
        alt: 'Atouts Wan-Kountry - Développeur Web Expert',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mes atouts de développeur web - Wan-Kountry',
    description:
      "Mobile-first, performance, tech modernes, vision internationale. 3+ ans d'expérience, 100% projets réussis.",
    creator: '@Wan-Kountry',
    images: ['https://wankountry.com/screenshots/desktop-home.png'],
  },
  alternates: {
    canonical: 'https://wankountry.com//atouts',
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
