import AboutSectionClient from '@/components/home/about-us/AboutUsClient';
import AtoutsSectionClient from '@/components/home/atouts/AtoutsClient';
import FaqClient from '@/components/home/faq/FaqClient';
import HeroSectionClient from '@/components/home/hero/HeroClient';
import RealisationSectionClient from '@/components/home/realisations/RealisationClient';
import ServicesSectionClient from '@/components/home/services/ServicesClient';
import SubscriptionClient from '@/components/home/subscription/SubscriptionClient';
import TestimonySectionClient from '@/components/home/testimony/TestimonyClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wan-Kountry – Une Initiative pour accompagner vos projets digitaux',
  description:
    'Wan-Kountry est un projet collectif porté par trois jeunes diplômés : Fullstack & DevOps, Cloud & Data Analysis, Cybersécurité. Création de sites web, applications et solutions digitales modernes, Mobile-first.',
  keywords: [
    'Wan-Kountry initiative digitale',
    'collectif digital Cameroun France',
    'fullstack DevOps',
    'cloud data analyst',
    'cybersécurité',
    'solutions digitales modernes',
    'sites web et applications',
  ],
  authors: [{ name: 'Wan-Kountry', url: 'https://wankountry.com/' }],
  creator: 'Wan-Kountry',
  publisher: 'Wan-Kountry',
  category: 'Technology',
  metadataBase: new URL('https://wankountry.com/'),
  openGraph: {
    title: 'Wan-Kountry – Une Initiative pour accompagner vos projets digitaux',
    description:
      'Projet collectif porté par trois jeunes diplômés : Fullstack & DevOps, Cloud & Data Analysis, Cybersécurité. Création de sites, applications et solutions digitales modernes.',
    url: 'https://wankountry.com/',
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
    title: 'Wan-Kountry – Une Initiative pour accompagner vos projets digitaux',
    description:
      'Collectif de trois jeunes diplômés passionnés par le numérique : Fullstack & DevOps, Cloud & Data Analysis, Cybersécurité. Solutions digitales modernes et performantes.',
    creator: '@WanKountry',
    images: ['https://wankountry.com/screenshots/desktop-home.png'],
  },
  alternates: {
    canonical: 'https://wankountry.com/',
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
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function Home() {
  return (
    <main role="main">
      {/* Hero Section */}
      <HeroSectionClient />

      {/* À Propos */}
      <AboutSectionClient />

      {/* Services */}
      <ServicesSectionClient />

      {/* Atouts */}
      <AtoutsSectionClient />

      {/* Réalisations */}
      <RealisationSectionClient />

      {/* Témoignages */}
      <TestimonySectionClient />

      {/* Tarifs */}
      <SubscriptionClient />

      {/* FAQ */}
      <FaqClient />
    </main>
  );
}
