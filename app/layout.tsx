import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Atend Já Feira de Santana - Ultrassom',
  description: 'Ultrassom em Feira de Santana com resultados ágeis e preço justo. Agende seu exame com equipamentos de última geração, sem filas e sem necessidade de plano de saúde.',
  keywords: 'ultrassom, feira de santana, atend já, exame de ultrassom, ultrassonografia, laudo imediato, preço justo',
  openGraph: {
    title: 'Atend Já Feira de Santana - Ultrassom',
    description: 'Ultrassom em Feira de Santana com resultados ágeis e preço justo. Agende seu exame com equipamentos de última geração.',
    url: 'https://atendja.com.br',
    siteName: 'Atend Já Feira de Santana',
    images: [
      {
        url: '/atendja.png',
        width: 1200,
        height: 630,
        alt: 'Atend Já Feira de Santana - Ultrassom',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atend Já Feira de Santana - Ultrassom',
    description: 'Ultrassom em Feira de Santana com resultados ágeis e preço justo. Agende seu exame com equipamentos de última geração.',
    images: ['/atendja.png'],
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
    google: 'google-site-verification-code', // Substitua pelo código real quando disponível
  },
  alternates: {
    canonical: 'https://atendja.com.br',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#008B47" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
