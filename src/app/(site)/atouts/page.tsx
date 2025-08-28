import AtoutsSectionClient from '@/components/home/atouts/AtoutsClient';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mes Atouts - JoelTech | Pourquoi me choisir comme développeur',
  description:
    "Découvrez nos atouts : mobile-first, paiements intégrés, performance extrême, tech modernes, vision internationale. 3+ ans d'expérience, 100% projets réussis.",
  keywords: [
    'atouts JoelTech',
    'pourquoi choisir JoelTech',
    'avantages développeur web',
    'mobile first expert',
    'paiements intégrés mobile money',
    'performance web optimisée',
    'technologies modernes React',
    'développeur international',
    'accompagnement projet web',
  ],
  authors: [{ name: 'JoelTech', url: 'https://j3t-agency.joeltech.dev/' }],
  creator: 'JoelTech',
  publisher: 'JoelTech',
  category: 'Technology',
  metadataBase: new URL('https://j3t-agency.joeltech.dev/'),
  openGraph: {
    title: 'Mes atouts clés - JoelTech Développeur Web',
    description:
      'Mobile-first, paiements intégrés, performance extrême, technologies modernes. Découvrez pourquoi me choisir pour votre projet web.',
    url: 'https://j3t-agency.joeltech.dev//atouts',
    siteName: 'JoelTech',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: 'https://j3t-agency.joeltech.dev/screenshots/desktop-home.png',
        width: 1200,
        height: 630,
        alt: 'Atouts JoelTech - Développeur Web Expert',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mes atouts de développeur web - JoelTech',
    description:
      "Mobile-first, performance, tech modernes, vision internationale. 3+ ans d'expérience, 100% projets réussis.",
    creator: '@JoelTech',
    images: ['https://j3t-agency.joeltech.dev/screenshots/desktop-home.png'],
  },
  alternates: {
    canonical: 'https://j3t-agency.joeltech.dev//atouts',
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
      <AtoutsSectionClient />
    </main>
  );
}
