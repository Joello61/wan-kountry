import ServicesSectionClient from '@/components/home/services/ServicesClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Services Web – Sites Vitrines, E-commerce & Apps Sur-Mesure | JoelTech',
  description:
    'Découvrez mes services : sites vitrines pro, boutiques e-commerce avec Mobile Money, applications sur-mesure et refonte express. Solutions adaptées au marché africain.',
  keywords: [
    'services développement web',
    'site vitrine professionnel',
    'e-commerce Mobile Money',
    'application web sur-mesure',
    'refonte site web',
    'site associatif',
    'développeur fullstack Cameroun',
    'JoelTech services',
    'création site web Afrique',
  ],
  authors: [{ name: 'JoelTech', url: 'https://j3t-agency.joeltech.dev/' }],
  creator: 'JoelTech',
  publisher: 'JoelTech',
  category: 'Technology',
  metadataBase: new URL('https://j3t-agency.joeltech.dev/'),
  openGraph: {
    title: 'Services Web Professionnels – Sites, E-commerce & Apps | JoelTech',
    description:
      'Sites vitrines qui convertissent, e-commerce avec Mobile Money intégré, applications sur-mesure. Solutions web modernes pour booster votre business en Afrique.',
    url: 'https://j3t-agency.joeltech.dev//services',
    siteName: 'JoelTech',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/images/services/services-preview.png',
        width: 1200,
        height: 630,
        alt: 'Services web JoelTech - Sites, E-commerce et Apps',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services Web Pro – Sites, E-commerce & Apps | JoelTech',
    description:
      'Sites vitrines, e-commerce Mobile Money, apps sur-mesure. Solutions web adaptées au marché africain.',
    creator: '@JoelTech',
    images: ['/images/services/services-preview.png'],
  },
  alternates: {
    canonical: 'https://j3t-agency.joeltech.dev//services',
    languages: {
      'fr-FR': 'https://j3t-agency.joeltech.dev//fr/services',
      'en-US': 'https://j3t-agency.joeltech.dev//en/services',
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
      <ServicesSectionClient />
    </main>
  );
}
