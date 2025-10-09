import type { Metadata } from 'next'
import './globals.css'
import StructuredData from '@/components/structured-data'
import GoogleAnalytics from '@/components/google-analytics'

export const metadata: Metadata = {
  title: {
    default: 'Rangkai Web - Jasa Pembuatan Website Profesional & Terjangkau',
    template: '%s | Rangkai Web'
  },
  description: 'Jasa pembuatan website profesional, landing page, company profile, toko online, dan website custom dengan harga terjangkau. Bantu bisnis Anda tampil online dan kredibel bersama Rangkai Web. Mulai dari Rp1.000.000.',
  keywords: [
    'jasa pembuatan website',
    'pembuatan website murah',
    'website profesional',
    'landing page',
    'toko online',
    'company profile',
    'website custom',
    'website bisnis',
    'web development',
    'website company profile',
    'jasa website',
    'pembuatan website indonesia',
    'website responsive',
    'SEO friendly website',
    'website custom',
    'web design',
    'rangkai web'
  ],
  authors: [{ name: 'Rangkai Web' }],
  creator: 'Rangkai Web',
  publisher: 'Rangkai Web',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://rangkaiweb.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://rangkaiweb.com',
    title: 'Rangkai Web - Jasa Pembuatan Website Profesional & Terjangkau',
    description: 'Jasa pembuatan website profesional, landing page, toko online, dan website bisnis dengan harga terjangkau. Bantu bisnis Anda tampil online dan kredibel bersama Rangkai Web.',
    siteName: 'Rangkai Web',
    images: [
      {
        url: '/Logo-2.png',
        width: 1200,
        height: 630,
        alt: 'Rangkai Web - Jasa Pembuatan Website Profesional',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rangkai Web - Jasa Pembuatan Website Profesional & Terjangkau',
    description: 'Jasa pembuatan website profesional, landing page, toko online, dan website bisnis dengan harga terjangkau. Bantu bisnis Anda tampil online dan kredibel bersama Rangkai Web.',
    images: ['@/assets/others/Logo-2.png'],
    creator: '@rangkaiweb',
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
  verification: {
    google: 'your-google-verification-code', // Replace with actual Google Search Console verification code
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="@/assets/others/Logo-2.png" type="image/png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <StructuredData />
        <GoogleAnalytics />
      </head>
      <body className="font-sans" style={{ fontFamily: 'Poppins' }}>
        {children
      }</body>
    </html>
  )
}
