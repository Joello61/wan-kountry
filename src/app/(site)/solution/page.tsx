import SolutionsClient from '@/components/home/solution/SolutionClient';
import { Metadata } from 'next';

export const solutionsMetadata: Metadata = {
  title: 'Solutions Web Modernes pour Entreprises – JoelTech Développeur',
  description:
    'Solutions web rapides, sécurisées et adaptées au marché local. Sites vitrines, e-commerce, applications personnalisées avec Mobile Money intégré.',
  keywords: [
    'solutions web modernes',
    'développement web entreprise',
    'transformation digitale Afrique',
    'Mobile Money intégration',
    'développeur fullstack',
    'solutions sur-mesure',
    'JoelTech solutions',
    'business digital Cameroun',
  ],
  authors: [{ name: 'JoelTech', url: 'https://j3t-agency.joeltech.dev/' }],
  creator: 'JoelTech',
  publisher: 'JoelTech',
  category: 'Technology',
  metadataBase: new URL('https://j3t-agency.joeltech.dev/'),
  openGraph: {
    title: 'Solutions Web Modernes pour Booster Votre Activité | JoelTech',
    description:
      'Développement fullstack indépendant : sites, e-commerces, apps web. Accompagnement entrepreneurs et associations dans leur transformation digitale.',
    url: 'https://j3t-agency.joeltech.dev//solutions',
    siteName: 'JoelTech',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/images/solutions/solutions-preview.png',
        width: 1200,
        height: 630,
        alt: 'Solutions web modernes JoelTech',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solutions Web Modernes pour Entreprises | JoelTech',
    description:
      'Transformation digitale : sites, e-commerce, apps. Mobile Money, mobile-first, accompagnement complet.',
    creator: '@JoelTech',
    images: ['/images/solutions/solutions-preview.png'],
  },
  alternates: {
    canonical: 'https://j3t-agency.joeltech.dev//solutions',
    languages: {
      'fr-FR': 'https://j3t-agency.joeltech.dev//fr/solutions',
      'en-US': 'https://j3t-agency.joeltech.dev//en/solutions',
    },
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
