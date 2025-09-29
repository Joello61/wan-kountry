import AboutSectionClient from '@/components/home/about-us/AboutUsClient';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'À Propos - Wan-Kountry | Développeur Web Cameroun-France',
  description:
    'Wan-Kountry, développeur web passionné. Formation Cameroun + France. Expert React, Symfony, Next.js. Code propre et solutions modernes.',
  keywords: [
    'Wan-Kountry développeur',
    'développeur web Cameroun France',
    'parcours développeur web',
    'expert React Symfony',
    'développeur freelance expérience',
    'formation développeur Toulouse',
    'IUT Bandjoun informatique',
    'Wan-Kountry histoire',
  ],
  authors: [{ name: 'Wan-Kountry', url: 'https://wankountry.com/' }],
  creator: 'Wan-Kountry',
  publisher: 'Wan-Kountry',
  category: 'Technology',
  metadataBase: new URL('https://wankountry.com/'),
  openGraph: {
    title: 'À propos de Wan-Kountry - Wan-Kountry',
    description:
      'Développeur web passionné avec expertise Cameroun-France. Spécialisé en React, Next.js, Symfony. Code propre et solutions modernes.',
    url: 'https://wankountry.com//about-us',
    siteName: 'Wan-Kountry',
    locale: 'fr_FR',
    type: 'profile',
    images: [
      {
        url: 'https://wankountry.com/screenshots/desktop-home.png',
        width: 1200,
        height: 630,
        alt: 'Wan-Kountry - Développeur Web Wan-Kountry',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'À propos de Wan-Kountry - Développeur Web',
    description:
      "Parcours, compétences et valeurs d'un développeur web passionné (Cameroun + France).",
    creator: '@Wan-Kountry',
    images: ['https://wankountry.com/screenshots/desktop-home.png'],
  },
  alternates: {
    canonical: 'https://wankountry.com//about-us',
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
