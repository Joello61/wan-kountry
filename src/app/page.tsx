import AboutSectionClient from '@/components/home/about-us/AboutUsClient';
import AtoutsSectionClient from '@/components/home/atouts/AtoutsClient';
import CustomerStoriesClient from '@/components/home/customer-stories/CustomerStoriesClient';
import FaqClient from '@/components/home/faq/FaqClient';
import HeroSectionClient from '@/components/home/hero/HeroClient';
import RealisationSectionClient from '@/components/home/realisations/RealisationClient';
import ServicesSectionClient from '@/components/home/services/ServicesClient';
import SolutionsClient from '@/components/home/solution/SolutionClient';
import SubscriptionClient from '@/components/home/subscription/SubscriptionClient';
import TestimonySectionClient from '@/components/home/testimony/TestimonyClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'J3T-AGENCY - Développeur Web Freelance | Sites Modernes Cameroun-France',
  description:
    'Développeur web expert créant sites vitrines, e-commerce et apps modernes. Mobile-first, Mobile Money, une première livraison en 15 jours. Basé France, expertise Cameroun.',
  keywords: [
    'développeur web freelance',
    'site web moderne Cameroun',
    'mobile first développeur',
    'Mobile Money intégration',
    'site web rapide',
    'développeur React Symfony',
    'J3T-AGENCY développeur',
    'site web 15 jours',
    'développeur fullstack France',
  ],
  authors: [{ name: 'J3T-AGENCY', url: 'https://j3t-agency.joeltech.dev/' }],
  creator: 'J3T-AGENCY',
  publisher: 'J3T-AGENCY',
  category: 'Technology',
  metadataBase: new URL('https://j3t-agency.joeltech.dev/'),
  openGraph: {
    title: 'J3T-AGENCY - Votre site web moderne avec un premier résultat en 15 jours',
    description:
      'Sites vitrines, e-commerce et applications web performants. Mobile-first, Mobile Money, support 24/7. Résultats garantis.',
    url: 'https://j3t-agency.joeltech.dev/',
    siteName: 'J3T-AGENCY',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: 'https://j3t-agency.joeltech.dev/screenshots/desktop-home.png',
        width: 1200,
        height: 630,
        alt: 'J3T-AGENCY - Développeur Web Moderne',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'J3T-AGENCY - Sites web modernes avec un premier résultat en 15 jours',
    description:
      'Mobile-first, Mobile Money, ultra-rapide. Développeur web expert pour votre business.',
    creator: '@J3T-AGENCY',
    images: ['https://j3t-agency.joeltech.dev/screenshots/desktop-home.png'],
  },
  alternates: {
    canonical: 'https://j3t-agency.joeltech.dev/',
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

export default function Home() {
  return (
    <main>
      {/* ---------------------Hero section Starts-----------------  */}
      <HeroSectionClient />
      {/* ---------------------Hero section Ends-----------------  */}

      {/* ---------------------Web result section Starts-----------------  */}
      <AboutSectionClient />
      {/* ---------------------Web result section Ends-----------------  */}

      {/* ---------------------Innovation section Starts-----------------  */}
      <ServicesSectionClient />
      {/* ---------------------Innovation section Ends-----------------  */}

      {/* ---------------------Atouts section Starts-----------------  */}
      <AtoutsSectionClient />
      {/* ---------------------Atouts section Ends-----------------  */}

      {/* ---------------------Online presence section Starts-----------------  */}
      <RealisationSectionClient />
      {/* ---------------------Online presence section Ends-----------------  */}

      {/* ---------------------Creative mind section Starts-----------------  */}
      <TestimonySectionClient />
      {/* ---------------------Creative mind section Ends-----------------  */}

      {/* ---------------------Customer Stories section Starts-----------------  */}
      <CustomerStoriesClient />
      {/* ---------------------Customer Stories section Ends-----------------  */}

      {/* ---------------------Subscription section Starts-----------------  */}
      <SubscriptionClient />
      {/* ---------------------Subscription section Ends-----------------  */}

      {/* ---------------------Faq section Starts-----------------  */}
      <FaqClient />
      {/* ---------------------Faq section Ends-----------------  */}

      {/* ---------------------Solutions section Starts-----------------  */}
      <SolutionsClient />
      {/* ---------------------Solutions section Ends-----------------  */}
    </main>
  );
}
