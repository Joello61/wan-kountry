import CareersSectionClient from '@/components/carriere/CarriereClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Carrière - Wan-Kountry | Mon Parcours et Évolution Professionnelle',
  description:
    "Découvrez mon évolution professionnelle : de débutant passionné à développeur expert. Formation, expériences, défis relevés et perspectives d'avenir.",
  keywords: [
    'carrière Wan-Kountry',
    'parcours développeur web',
    'évolution professionnelle tech',
    'expérience développeur Cameroun France',
    'formation développeur web',
    'croissance professionnelle IT',
    'compétences acquises développement',
    'étapes carrière développeur',
    'expertise technique évolution',
    'développeur freelance parcours',
  ],
  authors: [{ name: 'Wan-Kountry', url: 'https://wan-kountry.joeltech.dev/' }],
  creator: 'Wan-Kountry',
  publisher: 'Wan-Kountry',
  category: 'Technology',
  metadataBase: new URL('https://wan-kountry.joeltech.dev/'),
  openGraph: {
    title: 'Mon Parcours Carrière - Wan-Kountry Développeur',
    description:
      'De mes premiers pas en programmation à mes projets actuels. Découvrez mon évolution, mes apprentissages et ma vision du développement web.',
    url: 'https://wan-kountry.joeltech.dev/carriere',
    siteName: 'Wan-Kountry',
    locale: 'fr_FR',
    type: 'profile',
    images: [
      {
        url: 'https://wan-kountry.joeltech.dev/screenshots/desktop-home.png',
        width: 1200,
        height: 630,
        alt: 'Carrière Wan-Kountry - Parcours Développeur Web',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mon Parcours Carrière - Wan-Kountry',
    description:
      "Formation, expériences, défis relevés. Découvrez l'évolution d'un développeur passionné du Cameroun vers la France.",
    creator: '@Wan-Kountry',
    images: ['https://wan-kountry.joeltech.dev/screenshots/desktop-home.png'],
  },
  alternates: {
    canonical: 'https://wan-kountry.joeltech.dev/carriere',
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
