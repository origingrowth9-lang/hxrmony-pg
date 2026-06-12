import type { Metadata } from 'next';
import { Navbar, Footer } from '@/components/index';
import './globals.css';

export const metadata: Metadata = {
  title: 'Harmony - Advanced DeepTech Platform | Construimos el futuro',
  description:
    'Desarrollamos sistemas inteligentes que transforman industrias. Educación, arquitectura, movilidad, software y finanzas. Innovación tecnológica de clase mundial.',
  keywords: [
    'deeptech',
    'inteligencia artificial',
    'machine learning',
    'cloud computing',
    'innovación',
    'tecnología',
    'educación',
    'arquitectura',
    'finanzas',
  ],
  authors: [{ name: 'Harmony' }],
  creator: 'Harmony',
  publisher: 'Harmony',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://harmony.tech',
    siteName: 'Harmony',
    title: 'Harmony - Advanced DeepTech Platform',
    description: 'Construimos la tecnología detrás del futuro.',
    images: [
      {
        url: 'https://harmony.tech/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Harmony - Advanced DeepTech Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harmony - Advanced DeepTech Platform',
    description: 'Construimos la tecnología detrás del futuro.',
    creator: '@harmonytech',
    images: ['https://harmony.tech/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  themeColor: '#18181b',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#18181b" />
        <meta name="author" content="Harmony" />
        <meta name="copyright" content="© 2024 Harmony. All rights reserved." />
        <link rel="canonical" href="https://harmony.tech" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-dark-900 text-white antialiased">
        <Navbar />
        <main role="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
