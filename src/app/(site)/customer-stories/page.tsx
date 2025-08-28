import CustomerStoriesClient from '@/components/home/customer-stories/CustomerStoriesClient';
import { Metadata } from 'next';

export const customerStoriesMetadata: Metadata = {
  title: 'Histoires Clients – Success Stories & Témoignages | JoelTech',
  description:
    'Découvrez les success stories de mes clients : Marie K. (Mode & Style), Paul N. (Consultant), Sarah M. (TechStart). Projets transformés en succès digitaux.',
  keywords: [
    'success stories clients',
    'histoires clients JoelTech',
    "cas d'étude web",
    'témoignages détaillés',
    'transformations digitales',
    "retours d'expérience clients",
    'projets réussis développement',
  ],
  authors: [{ name: 'JoelTech', url: 'https://j3t-agency.joeltech.dev/' }],
  creator: 'JoelTech',
  publisher: 'JoelTech',
  category: 'Technology',
  metadataBase: new URL('https://j3t-agency.joeltech.dev/'),
  openGraph: {
    title: 'Success Stories Clients – Transformations Digitales | JoelTech',
    description:
      "Comment j'ai transformé les idées de mes clients en succès digitaux. Témoignages détaillés de Marie K., Paul N., Sarah M. et plus encore.",
    url: 'https://j3t-agency.joeltech.dev//histoires-clients',
    siteName: 'JoelTech',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/images/stories/customer-stories-preview.png',
        width: 1200,
        height: 630,
        alt: 'Success stories clients JoelTech',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Success Stories Clients | JoelTech',
    description:
      'Transformations digitales réussies : boutiques en ligne, consultants, associations. 100% satisfaction client.',
    creator: '@JoelTech',
    images: ['/images/stories/customer-stories-preview.png'],
  },
  alternates: {
    canonical: 'https://j3t-agency.joeltech.dev//histoires-clients',
    languages: {
      'fr-FR': 'https://j3t-agency.joeltech.dev//fr/histoires-clients',
      'en-US': 'https://j3t-agency.joeltech.dev//en/customer-stories',
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
      <CustomerStoriesClient />
    </main>
  );
}
