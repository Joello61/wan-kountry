import ContactForm from '@/components/contact/ContactForm';
import FaqClient from '@/components/home/faq/FaqClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - Wan-Kountry | Parlons de votre projet web',
  description:
    'Contactez Wan-Kountry pour votre projet web. Formulaire de contact, WhatsApp, email. Consultation gratuite 30min. Réponse sous 24h garantie.',
  keywords: [
    'contact Wan-Kountry',
    'devis site web gratuit',
    'consultation développeur web',
    'projet web Cameroun',
    'développeur freelance contact',
    'WhatsApp développeur',
    'formulaire contact web',
    'Wan-Kountry contact',
  ],
  authors: [{ name: 'Wan-Kountry', url: 'https://wan-kountry.joeltech.dev/' }],
  creator: 'Wan-Kountry',
  publisher: 'Wan-Kountry',
  category: 'Technology',
  metadataBase: new URL('https://wan-kountry.joeltech.dev/'),
  openGraph: {
    title: 'Contactez Wan-Kountry - Développeur Web Expert',
    description:
      'Parlons de votre projet ! Site vitrine, e-commerce, application web - consultation gratuite et réponse rapide garantie.',
    url: 'https://wan-kountry.joeltech.dev//contact',
    siteName: 'Wan-Kountry',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: 'https://wan-kountry.joeltech.dev/screenshots/desktop-home.png',
        width: 1200,
        height: 630,
        alt: 'Contactez Wan-Kountry pour votre projet web',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Contact Wan-Kountry - Votre projet web m'intéresse !",
    description:
      'Formulaire contact, WhatsApp, email - Parlons de votre site web ou application. Réponse sous 24h.',
    creator: '@Wan-Kountry',
    images: ['https://wan-kountry.joeltech.dev/screenshots/desktop-home.png'],
  },
  alternates: {
    canonical: 'https://wan-kountry.joeltech.dev//contact',
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
