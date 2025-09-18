import TestimonySectionClient from '@/components/home/testimony/TestimonyClient';
import { Metadata } from 'next';

export const testimonialsMetadata: Metadata = {
  title: 'Témoignages Clients – Avis Développeur Web Wan-Kountry',
  description:
    'Découvrez les avis authentiques de nos clients : entrepreneurs, associations, consultants. 100% de satisfaction, projets livrés en temps et en heure.',
  keywords: [
    'témoignages développeur web',
    'avis clients Wan-Kountry',
    'références projets web',
    'satisfaction client développement',
    'retours clients Cameroun',
    'success stories web',
    'portfolio témoignages',
  ],
  authors: [{ name: 'Wan-Kountry', url: 'https://wan-kountry.joeltech.dev/' }],
  creator: 'Wan-Kountry',
  publisher: 'Wan-Kountry',
  category: 'Technology',
  metadataBase: new URL('https://wan-kountry.joeltech.dev/'),
  openGraph: {
    title: 'Témoignages Clients – Ils Me Font Confiance | Wan-Kountry',
    description:
      'Retours authentiques de clients satisfaits : entrepreneurs, associations, PME. 7+ projets réalisés, 100% de satisfaction, délais respectés.',
    url: 'https://wan-kountry.joeltech.dev//testimony',
    siteName: 'Wan-Kountry',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: 'https://wan-kountry.joeltech.dev/screenshots/desktop-home.png',
        width: 1200,
        height: 630,
        alt: 'Témoignages clients Wan-Kountry',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Témoignages Clients Développeur Web | Wan-Kountry',
    description:
      'Avis authentiques : 7+ projets, 100% satisfaction, délais respectés. Entrepreneurs et associations me font confiance.',
    creator: '@Wan-Kountry',
    images: ['https://wan-kountry.joeltech.dev/screenshots/desktop-home.png'],
  },
  alternates: {
    canonical: 'https://wan-kountry.joeltech.dev//testimony',
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
