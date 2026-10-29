import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MockArchitect - Design and build test mocks that actually match production behavior',
  description: 'Design and build test mocks that actually match production behavior. Architecture-first mocking that generates, validates, and evolves with your contracts',
  keywords: ['testing', 'developer tools', 'software engineering', 'SaaS'],
  authors: [{ name: 'MockArchitect' }],
  creator: 'MockArchitect',
  publisher: 'MockArchitect',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mockarchitect.com',
    siteName: 'MockArchitect',
    title: 'MockArchitect - Design and build test mocks that actually match production behavior',
    description: 'Design and build test mocks that actually match production behavior',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MockArchitect - Design and build test mocks that actually match production behavior',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MockArchitect - Design and build test mocks that actually match production behavior',
    description: 'Design and build test mocks that actually match production behavior',
    images: ['/og-image.png'],
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export const viewport: Viewport = {
  themeColor: '#7c3aed',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}