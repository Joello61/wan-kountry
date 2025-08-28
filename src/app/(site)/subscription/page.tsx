import SubscriptionClient from '@/components/home/subscription/SubscriptionClient';
import { Metadata } from 'next';

export const pricingMetadata: Metadata = {
  title: 'Tarifs Transparents – Sites Web & Apps dès 120 000 FCFA | JoelTech',
  description:
    'Découvrez nos tarifs : Site vitrine 120k FCFA, E-commerce 300k FCFA, Apps sur-mesure. Formules claires, paiement échelonné possible.',
  keywords: [
    'tarifs développement web',
    'prix site vitrine FCFA',
    'coût e-commerce Cameroun',
    'devis application web',
    'tarif développeur Afrique',
    'prix transparent web',
    'JoelTech tarifs',
    'budget site internet',
  ],
  authors: [{ name: 'JoelTech', url: 'https://j3t-agency.joeltech.dev/' }],
  creator: 'JoelTech',
  publisher: 'JoelTech',
  category: 'Technology',
  metadataBase: new URL('https://j3t-agency.joeltech.dev/'),
  openGraph: {
    title: 'Tarifs Web Transparents – Sites dès 120k FCFA | JoelTech',
    description:
      'Formules simples pour tous budgets : sites vitrines, e-commerce, apps sur-mesure. Paiement échelonné, devis gratuit sous 24h.',
    url: 'https://j3t-agency.joeltech.dev//subscription',
    siteName: 'JoelTech',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/images/screenshots/desktop-home.png',
        width: 1200,
        height: 630,
        alt: 'Tarifs développement web JoelTech',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tarifs Transparents Web – Sites dès 120k FCFA | JoelTech',
    description:
      'Prix clairs : Site vitrine 120k, E-commerce 300k, Apps sur-mesure. Paiement échelonné disponible.',
    creator: '@JoelTech',
    images: ['/images/pricing/pricing-preview.png'],
  },
  alternates: {
    canonical: 'https://j3t-agency.joeltech.dev//subscription',
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
