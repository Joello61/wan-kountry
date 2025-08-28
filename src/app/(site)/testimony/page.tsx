import TestimonySectionClient from '@/components/home/testimony/TestimonyClient';
import { Metadata } from 'next';

export const testimonialsMetadata: Metadata = {
  title: 'Témoignages Clients – Avis Développeur Web JoelTech',
  description:
    'Découvrez les avis authentiques de nos clients : entrepreneurs, associations, consultants. 100% de satisfaction, projets livrés en temps et en heure.',
  keywords: [
    'témoignages développeur web',
    'avis clients JoelTech',
    'références projets web',
    'satisfaction client développement',
    'retours clients Cameroun',
    'success stories web',
    'portfolio témoignages',
  ],
  authors: [{ name: 'JoelTech', url: 'https://j3t-agency.joeltech.dev/' }],
  creator: 'JoelTech',
  publisher: 'JoelTech',
  category: 'Technology',
  metadataBase: new URL('https://j3t-agency.joeltech.dev/'),
  openGraph: {
    title: 'Témoignages Clients – Ils Me Font Confiance | JoelTech',
    description:
      'Retours authentiques de clients satisfaits : entrepreneurs, associations, PME. 7+ projets réalisés, 100% de satisfaction, délais respectés.',
    url: 'https://j3t-agency.joeltech.dev//testimony',
    siteName: 'JoelTech',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: 'https://j3t-agency.joeltech.dev/screenshots/desktop-home.png',
        width: 1200,
        height: 630,
        alt: 'Témoignages clients JoelTech',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Témoignages Clients Développeur Web | JoelTech',
    description:
      'Avis authentiques : 7+ projets, 100% satisfaction, délais respectés. Entrepreneurs et associations me font confiance.',
    creator: '@JoelTech',
    images: ['https://j3t-agency.joeltech.dev/screenshots/desktop-home.png'],
  },
  alternates: {
    canonical: 'https://j3t-agency.joeltech.dev//testimony',
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
