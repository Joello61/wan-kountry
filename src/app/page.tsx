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
  title:
    'Wan-Kountry - Développeur Web Freelance | Sites Modernes Cameroun-France',
  description:
    'Développeur web expert créant sites vitrines, e-commerce et apps modernes. Mobile-first, Mobile Money, première livraison en 15 jours. Basé France, expertise Cameroun.',
  keywords: [
    'développeur web freelance',
    'site web moderne Cameroun',
    'mobile first développeur',
    'Mobile Money intégration',
    'site web rapide',
    'développeur React Symfony',
    'Wan-Kountry développeur',
    'site web 15 jours',
    'développeur fullstack France',
  ],
  authors: [{ name: 'Wan-Kountry', url: 'https://wan-kountry.joeltech.dev/' }],
  creator: 'Wan-Kountry',
  publisher: 'Wan-Kountry',
  category: 'Technology',
  metadataBase: new URL('https://wan-kountry.joeltech.dev/'),
  openGraph: {
    title: 'Wan-Kountry - Votre site web moderne avec première livraison en 15 jours',
    description:
      'Sites vitrines, e-commerce et applications web performants. Mobile-first, Mobile Money, support 24/7. Résultats garantis.',
    url: 'https://wan-kountry.joeltech.dev/',
    siteName: 'Wan-Kountry',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: 'https://wan-kountry.joeltech.dev/screenshots/desktop-home.png',
        width: 1200,
        height: 630,
        alt: 'Wan-Kountry - Développeur Web Moderne',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wan-Kountry - Sites web modernes avec première livraison en 15 jours',
    description:
      'Mobile-first, Mobile Money, ultra-rapide. Développeur web expert pour votre business.',
    creator: '@WanKountry',
    images: ['https://wan-kountry.joeltech.dev/screenshots/desktop-home.png'],
  },
  alternates: {
    canonical: 'https://wan-kountry.joeltech.dev/',
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
    google: 'your-google-verification-code', // À ajouter si vous avez Search Console
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