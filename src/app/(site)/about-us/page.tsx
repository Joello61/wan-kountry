import AboutSectionClient from '@/components/home/about-us/AboutUsClient';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'À Propos - Wan-Kountry | Une Initiative Digitale Innovante',
  description:
    'Wan-Kountry est un projet collectif porté par trois jeunes diplômés passionnés : développement fullstack & DevOps, cloud & data analysis, cybersécurité. Création de sites web, applications et solutions digitales modernes.',
  keywords: [
    'Wan-Kountry initiative digitale',
    'collectif digital Cameroun France',
    'projet web innovant',
    'fullstack DevOps',
    'cloud data analyst',
    'cybersécurité',
    'solutions digitales modernes',
    'jeunes diplômés numériques',
  ],
  authors: [{ name: 'Wan-Kountry', url: 'https://wankountry.com/' }],
  creator: 'Wan-Kountry',
  publisher: 'Wan-Kountry',
  category: 'Technology',
  metadataBase: new URL('https://wankountry.com/'),
  openGraph: {
    title: 'À propos de Wan-Kountry – Initiative digitale innovante',
    description:
      'Projet collectif porté par trois jeunes diplômés : Fullstack & DevOps, Cloud & Data Analysis, Cybersécurité. Création de sites, applications et solutions digitales modernes.',
    url: 'https://wankountry.com/about-us',
    siteName: 'Wan-Kountry',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: 'https://wankountry.com/screenshots/desktop-home.png',
        width: 1200,
        height: 630,
        alt: 'Wan-Kountry – Initiative digitale par trois jeunes diplômés',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'À propos de Wan-Kountry – Initiative digitale innovante',
    description:
      'Collectif de trois jeunes diplômés passionnés par le numérique : Fullstack & DevOps, Cloud & Data Analysis, Cybersécurité. Solutions digitales modernes et performantes.',
    creator: '@WanKountry',
    images: ['https://wankountry.com/screenshots/desktop-home.png'],
  },
  alternates: {
    canonical: 'https://wankountry.com/about-us',
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
      <AboutSectionClient />
    </main>
  );
}
