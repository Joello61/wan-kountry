import BlogArticleDetailClient from '@/components/blog/BlogArticleDetailClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Article Blog - Wan-Kountry | Tutoriels et Guides Développement',
  description: 'Découvrez cet article détaillé',
  keywords: ['article blog Wan-Kountry'],
  authors: [{ name: 'Wan-Kountry', url: 'https://wan-kountry.joeltech.dev/' }],
  creator: 'Wan-Kountry',
  publisher: 'Wan-Kountry',
  category: 'Technology',
  metadataBase: new URL('https://wan-kountry.joeltech.dev/'),
  openGraph: {
    title: 'Article Wan-Kountry - Guide Développement Web',
    description:
      "Tutoriel détaillé avec exemples pratiques, conseils d'expert et bonnes pratiques pour améliorer vos compétences en développement web.",
    url: 'https://wan-kountry.joeltech.dev/blog/1',
    siteName: 'Wan-Kountry',
    locale: 'fr_FR',
    type: 'article',
    images: [
      {
        url: 'https://wan-kountry.joeltech.dev/screenshots/desktop-home.png',
        width: 1200,
        height: 630,
        alt: 'Article Wan-Kountry - Tutoriel Développement Web',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Article Wan-Kountry - Tutoriel Web',
    description: 'Article de Wan-Kountry - Contenu de qualité en français.',
    creator: '@Wan-Kountry',
    images: ['https://wan-kountry.joeltech.dev/screenshots/desktop-home.png'],
  },
  alternates: {
    canonical: 'https://wan-kountry.joeltech.dev/blog/1',
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
      <BlogArticleDetailClient />
    </main>
  );
}
