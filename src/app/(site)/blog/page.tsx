import BlogSectionClient from '@/components/blog/BlogClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Wan-Kountry | Articles et Conseils Digitaux',
  description:
    "Blog de Wan-Kountry : tutoriels, bonnes pratiques et conseils sur développement web, cloud, data et cybersécurité. Contenu francophone par un collectif de jeunes diplômés passionnés.",
  keywords: [
    'blog Wan-Kountry',
    'articles développement web',
    'tutoriels React Next.js',
    'conseils cloud data',
    'cybersécurité informatique',
    'bonnes pratiques programmation',
    'tendances technologiques 2025',
    'astuces développement frontend',
    'guides techniques web',
    'blog tech francophone',
  ],
  authors: [{ name: 'Wan-Kountry', url: 'https://wankountry.com/' }],
  creator: 'Wan-Kountry',
  publisher: 'Wan-Kountry',
  category: 'Technology',
  metadataBase: new URL('https://wankountry.com/'),
  openGraph: {
    title: 'Blog Wan-Kountry – Articles et Conseils Digitaux',
    description:
      "Tutoriels, guides et conseils sur développement web, cloud, data et cybersécurité. Contenu francophone créé par un collectif de jeunes diplômés passionnés.",
    url: 'https://wankountry.com/blog',
    siteName: 'Wan-Kountry',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: 'https://wankountry.com/screenshots/desktop-home.png',
        width: 1200,
        height: 630,
        alt: 'Blog Wan-Kountry – Articles et Conseils Digitaux',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog Wan-Kountry – Articles et Conseils Digitaux',
    description:
      'Tutoriels, guides et conseils sur développement web, cloud, data et cybersécurité. Contenu francophone créé par un collectif de jeunes diplômés passionnés.',
    creator: '@WanKountry',
    images: ['https://wankountry.com/screenshots/desktop-home.png'],
  },
  alternates: {
    canonical: 'https://wankountry.com/blog',
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
      <BlogSectionClient />
    </main>
  );
}
