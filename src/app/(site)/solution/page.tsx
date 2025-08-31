import SolutionsClient from '@/components/home/solution/SolutionClient';
import { Metadata } from 'next';

export const solutionsMetadata: Metadata = {
  title: 'Solutions Web Modernes pour Entreprises – J3T-AGENCY Développeur',
  description:
    'Solutions web rapides, sécurisées et adaptées au marché local. Sites vitrines, e-commerce, applications personnalisées avec Mobile Money intégré.',
  keywords: [
    'solutions web modernes',
    'développement web entreprise',
    'transformation digitale Afrique',
    'Mobile Money intégration',
    'développeur fullstack',
    'solutions sur-mesure',
    'J3T-AGENCY solutions',
    'business digital Cameroun',
  ],
  authors: [{ name: 'J3T-AGENCY', url: 'https://j3t-agency.joeltech.dev/' }],
  creator: 'J3T-AGENCY',
  publisher: 'J3T-AGENCY',
  category: 'Technology',
  metadataBase: new URL('https://j3t-agency.joeltech.dev/'),
  openGraph: {
    title: 'Solutions Web Modernes pour Booster Votre Activité | J3T-AGENCY',
    description:
      'Développement fullstack indépendant : sites, e-commerces, apps web. Accompagnement entrepreneurs et associations dans leur transformation digitale.',
    url: 'https://j3t-agency.joeltech.dev//solution',
    siteName: 'J3T-AGENCY',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: 'https://j3t-agency.joeltech.dev/screenshots/desktop-home.png',
        width: 1200,
        height: 630,
        alt: 'Solutions web modernes J3T-AGENCY',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solutions Web Modernes pour Entreprises | J3T-AGENCY',
    description:
      'Transformation digitale : sites, e-commerce, apps. Mobile Money, mobile-first, accompagnement complet.',
    creator: '@J3T-AGENCY',
    images: ['https://j3t-agency.joeltech.dev/screenshots/desktop-home.png'],
  },
  alternates: {
    canonical: 'https://j3t-agency.joeltech.dev//solution',
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
      <SolutionsClient />
    </main>
  );
}
