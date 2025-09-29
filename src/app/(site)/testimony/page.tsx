import TestimonySectionClient from '@/components/home/testimony/TestimonyClient';
import { Metadata } from 'next';

export const testimonialsMetadata: Metadata = {
  title: 'Témoignages Clients – Avis sur le Collectif Wan-Kountry',
  description:
    'Découvrez les avis authentiques de nos clients : entrepreneurs, associations, consultants. Projets web réalisés par notre collectif, satisfaction et respect des délais garantis.',
  keywords: [
    'témoignages collectif digital',
    'avis clients Wan-Kountry',
    'références projets web',
    'satisfaction client développement',
    'retours clients Cameroun',
    'success stories web',
    'portfolio témoignages',
    'collectif digital projets',
  ],
  authors: [{ name: 'Wan-Kountry', url: 'https://wankountry.com/' }],
  creator: 'Wan-Kountry',
  publisher: 'Wan-Kountry',
  category: 'Technology',
  metadataBase: new URL('https://wankountry.com/'),
  openGraph: {
    title: 'Témoignages Clients – Ils Nous Font Confiance | Wan-Kountry',
    description:
      'Retours authentiques de clients satisfaits : entrepreneurs, associations, PME. Projets réalisés par notre collectif de jeunes diplômés passionnés, avec expertise Fullstack, Cloud & Data et Cybersécurité.',
    url: 'https://wankountry.com/testimony',
    siteName: 'Wan-Kountry',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: 'https://wankountry.com/screenshots/desktop-home.png',
        width: 1200,
        height: 630,
        alt: 'Témoignages clients Wan-Kountry – Collectif digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Témoignages Clients – Collectif Wan-Kountry',
    description:
      'Avis authentiques : projets web réussis par notre collectif. Entrepreneurs et associations nous font confiance pour des solutions digitales performantes.',
    creator: '@WanKountry',
    images: ['https://wankountry.com/screenshots/desktop-home.png'],
  },
  alternates: {
    canonical: 'https://wankountry.com/testimony',
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
      <TestimonySectionClient />
    </main>
  );
}
