import AboutSectionClient from '@/components/home/about-us/AboutUsClient';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'À Propos - JoelTech | Développeur Web Cameroun-France',
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
    'JoelTech histoire',
  ],
  authors: [{ name: 'JoelTech', url: 'https://j3t-agency.joeltech.dev/' }],
  creator: 'JoelTech',
  publisher: 'JoelTech',
  category: 'Technology',
  metadataBase: new URL('https://j3t-agency.joeltech.dev/'),
  openGraph: {
    title: 'À propos de J3T-AGENCY - JoelTech',
    description:
      'Développeur web passionné avec expertise Cameroun-France. Spécialisé en React, Next.js, Symfony. Code propre et solutions modernes.',
    url: 'https://j3t-agency.joeltech.dev//about-us',
    siteName: 'JoelTech',
    locale: 'fr_FR',
    type: 'profile',
    images: [
      {
        url: 'https://j3t-agency.joeltech.dev/screenshots/desktop-home.png',
        width: 1200,
        height: 630,
        alt: 'J3T-AGENCY - Développeur Web JoelTech',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'À propos de J3T-AGENCY - Développeur Web',
    description:
      "Parcours, compétences et valeurs d'un développeur web passionné (Cameroun + France).",
    creator: '@JoelTech',
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
