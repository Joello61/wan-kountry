import AboutSectionClient from '@/components/home/about-us/AboutUsClient';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'À Propos - J3T-AGENCY | Développeur Web Cameroun-France',
  description:
    'J3T-AGENCY, développeur web passionné. Formation Cameroun + France. Expert React, Symfony, Next.js. Code propre et solutions modernes.',
  keywords: [
    'J3T-AGENCY développeur',
    'développeur web Cameroun France',
    'parcours développeur web',
    'expert React Symfony',
    'développeur freelance expérience',
    'formation développeur Toulouse',
    'IUT Bandjoun informatique',
    'J3T-AGENCY histoire',
  ],
  authors: [{ name: 'J3T-AGENCY', url: 'https://j3t-agency.joeltech.dev/' }],
  creator: 'J3T-AGENCY',
  publisher: 'J3T-AGENCY',
  category: 'Technology',
  metadataBase: new URL('https://j3t-agency.joeltech.dev/'),
  openGraph: {
    title: 'À propos de J3T-AGENCY - J3T-AGENCY',
    description:
      'Développeur web passionné avec expertise Cameroun-France. Spécialisé en React, Next.js, Symfony. Code propre et solutions modernes.',
    url: 'https://j3t-agency.joeltech.dev//about-us',
    siteName: 'J3T-AGENCY',
    locale: 'fr_FR',
    type: 'profile',
    images: [
      {
        url: 'https://j3t-agency.joeltech.dev/screenshots/desktop-home.png',
        width: 1200,
        height: 630,
        alt: 'J3T-AGENCY - Développeur Web J3T-AGENCY',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'À propos de J3T-AGENCY - Développeur Web',
    description:
      "Parcours, compétences et valeurs d'un développeur web passionné (Cameroun + France).",
    creator: '@J3T-AGENCY',
    images: ['https://j3t-agency.joeltech.dev/screenshots/desktop-home.png'],
  },
  alternates: {
    canonical: 'https://j3t-agency.joeltech.dev//about-us',
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
