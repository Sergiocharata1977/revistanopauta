import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { AuthProvider } from '@/contexts/AuthContext'
import { WhatsAppButton } from '@/components/whatsapp-button'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Cr. Jorge Ricardo Bade - Contador Publico',
  description:
    'Estudio contable en Charata, Chaco. Asesoramiento impositivo, contabilidad, estados contables, sueldos y gestion laboral para empresas, emprendedores y personas.',
  keywords:
    'Contador Publico, Estudio Contable, Impuestos, ARCA, Monotributo, IVA, Ganancias, Sueldos, Empresas, Charata, Chaco, Jorge Ricardo Bade',
  generator: 'v0.app',
  openGraph: {
    title: 'Cr. Jorge Ricardo Bade - Contador Publico',
    description: 'Soluciones contables, impositivas y financieras para tomar mejores decisiones.',
    url: 'https://cr-jorge-bade.vercel.app',
    siteName: 'Cr. Jorge Ricardo Bade',
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cr. Jorge Ricardo Bade - Contador Publico',
    description: 'Asesoramiento impositivo, contable y laboral para empresas, emprendedores y personas.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans antialiased`}>
        <AuthProvider>
          {children}
          <WhatsAppButton />
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  )
}
