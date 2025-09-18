'use client'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer/Footer'
import ScrollToTop from '@/components/scroll-to-top'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='fr' suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#58a4b0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased" style={{ fontFamily: 'var(--font-sans)' }}>
        <ThemeProvider
          attribute='class'
          enableSystem={false}
          defaultTheme='light'
          themes={['light', 'dark']}
        >
          {/* Skip to main content pour l'accessibilité */}
          <a 
            href="#main-content" 
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 btn-primary px-4 py-2 rounded-lg"
          >
            Aller au contenu principal
          </a>
          
          {/* Header */}
          <Header />
          
          {/* Main Content */}
          <div id="main-content" className="min-h-screen">
            {children}
          </div>
          
          {/* Footer */}
          <Footer />
          
          {/* Scroll to Top */}
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}