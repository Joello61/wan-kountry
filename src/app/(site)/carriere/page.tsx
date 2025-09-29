import CareersSectionClient from '@/components/carriere/CarriereClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Carrière - Wan-Kountry | Rejoignez notre Initiative Digitale',
  description:
    'Rejoignez Wan-Kountry, une initiative digitale portée par trois jeunes diplômés : Fullstack & DevOps, Cloud & Data Analysis, Cybersécurité. Participez à nos projets web et solutions innovantes.',
  keywords: [
    'rejoindre Wan-Kountry',
    'carrière initiative digitale',
    'collaborer projet web',
    'fullstack DevOps',
    'cloud data analyst',
    'cybersécurité',
    'collectif jeunes diplômés',
    'projets digitaux innovants',
    'opportunités tech',
  ],
  authors: [{ name: 'Wan-Kountry', url: 'https://wankountry.com/' }],
  creator: 'Wan-Kountry',
  publisher: 'Wan-Kountry',
  category: 'Technology',
  metadataBase: new URL('https://wankountry.com/'),
  openGraph: {
    title: 'Rejoignez Wan-Kountry – Initiative Digitale Innovante',
    description:
      'Participez à notre projet collectif : développement web, cloud & data, cybersécurité. Rejoignez notre équipe de jeunes diplômés passionnés et créatifs.',
    url: 'https://wankountry.com/carriere',
    siteName: 'Wan-Kountry',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: 'https://wankountry.com/screenshots/desktop-home.png',
        width: 1200,
        height: 630,
        alt: 'Rejoindre Wan-Kountry – Initiative Digitale',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rejoignez Wan-Kountry – Initiative Digitale',
    description:
      'Participez à nos projets web et solutions innovantes. Collectif de trois jeunes diplômés : Fullstack & DevOps, Cloud & Data Analysis, Cybersécurité.',
    creator: '@WanKountry',
    images: ['https://wankountry.com/screenshots/desktop-home.png'],
  },
  alternates: {
    canonical: 'https://wankountry.com/carriere',
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
      <CareersSectionClient />
    </main>
  );
}
