import ServicesSectionClient from '@/components/home/services/ServicesClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Services Web – Sites Vitrines, E-commerce & Apps Sur-Mesure | Wan-Kountry',
  description:
    'Découvrez les services du collectif Wan-Kountry : sites vitrines pro, boutiques e-commerce avec Mobile Money, applications sur-mesure et refonte express. Solutions digitales innovantes adaptées au marché africain.',
  keywords: [
    'services développement web',
    'site vitrine collectif',
    'e-commerce Mobile Money',
    'application web sur-mesure',
    'refonte site web',
    'site associatif',
    'collectif digital Cameroun',
    'Wan-Kountry services',
    'solutions web Afrique',
  ],
  authors: [{ name: 'Wan-Kountry', url: 'https://wankountry.com/' }],
  creator: 'Wan-Kountry',
  publisher: 'Wan-Kountry',
  category: 'Technology',
  metadataBase: new URL('https://wankountry.com/'),
  openGraph: {
    title:
      'Services Web – Sites, E-commerce & Apps | Wan-Kountry',
    description:
      'Sites vitrines, e-commerce avec Mobile Money, applications sur-mesure. Services proposés par notre collectif de jeunes diplômés passionnés et complémentaires.',
    url: 'https://wankountry.com/services',
    siteName: 'Wan-Kountry',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: 'https://wankountry.com/screenshots/desktop-home.png',
        width: 1200,
        height: 630,
        alt: 'Services web Wan-Kountry – Sites, E-commerce et Apps',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services Web – Sites, E-commerce & Apps | Wan-Kountry',
    description:
      'Sites vitrines, e-commerce Mobile Money, apps sur-mesure. Services proposés par notre collectif de jeunes diplômés passionnés.',
    creator: '@WanKountry',
    images: ['https://wankountry.com/screenshots/desktop-home.png'],
  },
  alternates: {
    canonical: 'https://wankountry.com/services',
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
      <ServicesSectionClient />
    </main>
  );
}
