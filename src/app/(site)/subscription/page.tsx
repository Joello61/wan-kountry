import SubscriptionClient from '@/components/home/subscription/SubscriptionClient';
import { Metadata } from 'next';

export const pricingMetadata: Metadata = {
  title:
    'Tarifs Indicatifs – Sites Web & Apps | Wan-Kountry',
  description:
    'Guide des tarifs du collectif Wan-Kountry : Site vitrine dès 120 000 FCFA, E-commerce à partir de 300 000 FCFA, Applications sur-mesure. Estimations flexibles, paiement échelonné possible.',
  keywords: [
    'tarifs développement web',
    'prix indicatif site vitrine FCFA',
    'coût e-commerce Cameroun',
    'devis application web',
    'collectif digital Afrique',
    'prix transparent web',
    'Wan-Kountry tarifs',
    'budget projet digital',
  ],
  authors: [{ name: 'Wan-Kountry', url: 'https://wankountry.com/' }],
  creator: 'Wan-Kountry',
  publisher: 'Wan-Kountry',
  category: 'Technology',
  metadataBase: new URL('https://wankountry.com/'),
  openGraph: {
    title: 'Tarifs Indicatifs Web – Sites et Apps | Wan-Kountry',
    description:
      'Estimations pour vos projets web : sites vitrines, e-commerce, applications sur-mesure. Guide fourni par notre collectif de jeunes diplômés passionnés.',
    url: 'https://wankountry.com/subscription',
    siteName: 'Wan-Kountry',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: 'https://wankountry.com/screenshots/desktop-home.png',
        width: 1200,
        height: 630,
        alt: 'Tarifs indicatifs développement web Wan-Kountry',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tarifs Indicatifs – Sites et Apps | Wan-Kountry',
    description:
      'Estimation pour vos projets digitaux : sites vitrines dès 120k FCFA, e-commerce à partir de 300k, apps sur-mesure. Guide flexible fourni par notre collectif.',
    creator: '@WanKountry',
    images: ['/images/pricing/pricing-preview.png'],
  },
  alternates: {
    canonical: 'https://wankountry.com/subscription',
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
      <SubscriptionClient />
    </main>
  );
}
