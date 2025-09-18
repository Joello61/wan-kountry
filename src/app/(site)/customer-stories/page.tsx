import CustomerStoriesClient from '@/components/home/customer-stories/CustomerStoriesClient';
import { Metadata } from 'next';

export const customerStoriesMetadata: Metadata = {
  title: 'Histoires Clients – Success Stories & Témoignages | Wan-Kountry',
  description:
    'Découvrez les success stories de nos clients : Marie K. (Mode & Style), Paul N. (Consultant), Sarah M. (TechStart). Projets transformés en succès digitaux.',
  keywords: [
    'success stories clients',
    'histoires clients Wan-Kountry',
    "cas d'étude web",
    'témoignages détaillés',
    'transformations digitales',
    "retours d'expérience clients",
    'projets réussis développement',
  ],
  authors: [{ name: 'Wan-Kountry', url: 'https://wan-kountry.joeltech.dev/' }],
  creator: 'Wan-Kountry',
  publisher: 'Wan-Kountry',
  category: 'Technology',
  metadataBase: new URL('https://wan-kountry.joeltech.dev/'),
  openGraph: {
    title: 'Success Stories Clients – Transformations Digitales | Wan-Kountry',
    description:
      "Comment j'ai transformé les idées de nos clients en succès digitaux. Témoignages détaillés de Marie K., Paul N., Sarah M. et plus encore.",
    url: 'https://wan-kountry.joeltech.dev//customer-stories',
    siteName: 'Wan-Kountry',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: 'https://wan-kountry.joeltech.dev/screenshots/desktop-home.png',
        width: 1200,
        height: 630,
        alt: 'Success stories clients Wan-Kountry',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Success Stories Clients | Wan-Kountry',
    description:
      'Transformations digitales réussies : boutiques en ligne, consultants, associations. 100% satisfaction client.',
    creator: '@Wan-Kountry',
    images: ['/images/stories/customer-stories-preview.png'],
  },
  alternates: {
    canonical: 'https://wan-kountry.joeltech.dev//customer-stories',
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
