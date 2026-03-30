import type { Metadata, Viewport } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const BASE_URL = 'https://givratech.pages.dev'

export const metadata: Metadata = {
  title: 'GivraTech — From Data to Decision',
  description: 'Specialized data & AI consulting for companies looking to turn their information into real competitive advantage.',
  keywords: ['data consulting', 'artificial intelligence', 'machine learning', 'Argentina'],
  metadataBase: new URL(BASE_URL),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'GivraTech',
    title: 'GivraTech — From Data to Decision',
    description: 'Specialized data & AI consulting for companies looking to turn their information into real competitive advantage.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'GivraTech — From Data to Decision',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GivraTech — From Data to Decision',
    description: 'Data & AI consulting for real decisions.',
    images: ['/og-image.png'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
