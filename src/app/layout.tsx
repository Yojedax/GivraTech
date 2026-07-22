import type { Metadata, Viewport } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const BASE_URL = 'https://givratech.pages.dev'

export const metadata: Metadata = {
  title: 'GivraTech — De Datos a Decisiones',
  description: 'Consultoría especializada en datos e IA para empresas que buscan convertir su información en ventaja competitiva real.',
  keywords: ['consultoría de datos', 'inteligencia artificial', 'machine learning', 'Argentina'],
  metadataBase: new URL(BASE_URL),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'GivraTech',
    title: 'GivraTech — De Datos a Decisiones',
    description: 'Consultoría especializada en datos e IA para empresas que buscan convertir su información en ventaja competitiva real.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'GivraTech — De Datos a Decisiones',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GivraTech — De Datos a Decisiones',
    description: 'Consultoría de datos e IA para decisiones reales.',
    images: ['/og-image.png'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
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
