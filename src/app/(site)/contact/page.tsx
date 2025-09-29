import ContactForm from '@/components/contact/ContactForm';
import FaqClient from '@/components/home/faq/FaqClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - Wan-Kountry | Parlons de votre projet digital',
  description:
    'Contactez Wan-Kountry, initiative digitale portée par trois jeunes diplômés : Fullstack & DevOps, Cloud & Data Analysis, Cybersécurité. Formulaire, WhatsApp ou email pour échanger sur votre projet.',
  keywords: [
    'contact Wan-Kountry',
    'devis site web gratuit',
    'consultation projet digital',
    'projet web Cameroun France',
    'collectif digital contact',
    'WhatsApp contact Wan-Kountry',
    'formulaire contact web',
    'Wan-Kountry contact',
  ],
  authors: [{ name: 'Wan-Kountry', url: 'https://wankountry.com/' }],
  creator: 'Wan-Kountry',
  publisher: 'Wan-Kountry',
  category: 'Technology',
  metadataBase: new URL('https://wankountry.com/'),
  openGraph: {
    title: 'Contactez Wan-Kountry – Initiative Digitale',
    description:
      'Parlons de votre projet digital ! Sites web, applications et solutions performantes. Collectif de trois jeunes diplômés, réponse rapide garantie.',
    url: 'https://wankountry.com/contact',
    siteName: 'Wan-Kountry',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: 'https://wankountry.com/screenshots/desktop-home.png',
        width: 1200,
        height: 630,
        alt: 'Contactez Wan-Kountry – Initiative Digitale',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contactez Wan-Kountry – Initiative Digitale',
    description:
      'Formulaire, WhatsApp ou email pour échanger sur votre projet digital. Collectif de trois jeunes diplômés passionnés.',
    creator: '@WanKountry',
    images: ['https://wankountry.com/screenshots/desktop-home.png'],
  },
  alternates: {
    canonical: 'https://wankountry.com/contact',
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
      <ContactForm />
      <FaqClient />
    </main>
  );
}
