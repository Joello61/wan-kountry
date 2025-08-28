import ContactForm from '@/components/contact/ContactForm';
import FaqClient from '@/components/home/faq/FaqClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - JoelTech | Parlons de votre projet web',
  description:
    'Contactez JoelTech pour votre projet web. Formulaire de contact, WhatsApp, email. Consultation gratuite 30min. Réponse sous 24h garantie.',
  keywords: [
    'contact JoelTech',
    'devis site web gratuit',
    'consultation développeur web',
    'projet web Cameroun',
    'développeur freelance contact',
    'WhatsApp développeur',
    'formulaire contact web',
    'Joël Tchinda contact',
  ],
  authors: [{ name: 'JoelTech', url: 'https://j3t-agency.joeltech.dev/' }],
  creator: 'JoelTech',
  publisher: 'JoelTech',
  category: 'Technology',
  metadataBase: new URL('https://j3t-agency.joeltech.dev/'),
  openGraph: {
    title: 'Contactez JoelTech - Développeur Web Expert',
    description:
      'Parlons de votre projet ! Site vitrine, e-commerce, application web - consultation gratuite et réponse rapide garantie.',
    url: 'https://j3t-agency.joeltech.dev//contact',
    siteName: 'JoelTech',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: 'https://j3t-agency.joeltech.dev/screenshots/desktop-home.png',
        width: 1200,
        height: 630,
        alt: 'Contactez JoelTech pour votre projet web',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Contact JoelTech - Votre projet web m'intéresse !",
    description:
      'Formulaire contact, WhatsApp, email - Parlons de votre site web ou application. Réponse sous 24h.',
    creator: '@JoelTech',
    images: ['https://j3t-agency.joeltech.dev/screenshots/desktop-home.png'],
  },
  alternates: {
    canonical: 'https://j3t-agency.joeltech.dev//contact',
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
