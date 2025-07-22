import type { Metadata } from 'next'
import './globals.css'
import Logo from "@/assets/Logo-2.png"

export const metadata: Metadata = {
  title: 'Rangkai Web',
  description: 'Rangkai Web',
  generator: 'Rangkai Web',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={Logo.src} type="image/png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Rangkai Web - Jasa Pembuatan Website Profesional & Terjangkau</title>
        <meta name="description" content="Jasa pembuatan website profesional, landing page, toko online, dan website bisnis dengan harga terjangkau. Bantu bisnis Anda tampil online dan kredibel bersama Rangkai Web." />
        <link rel="canonical" href="https://rangkaiweb.com/" />
        <meta property="og:title" content="Rangkai Web - Jasa Pembuatan Website Profesional & Terjangkau" />
        <meta property="og:description" content="Jasa pembuatan website profesional, landing page, toko online, dan website bisnis dengan harga terjangkau. Bantu bisnis Anda tampil online dan kredibel bersama Rangkai Web." />
        <meta property="og:image" content={Logo.src} />
        <meta property="og:url" content="https://rangkaiweb.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rangkai Web - Jasa Pembuatan Website Profesional & Terjangkau" />
        <meta name="twitter:description" content="Jasa pembuatan website profesional, landing page, toko online, dan website bisnis dengan harga terjangkau. Bantu bisnis Anda tampil online dan kredibel bersama Rangkai Web." />
        <meta name="twitter:image" content={Logo.src} />
      </head>
      <body>{children}</body>
    </html>
  )
}
