import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Agro Export Platform - Premium Agricultural Exports',
    template: '%s | Agro Export Platform',
  },
  description:
    'Leading agricultural export platform connecting international buyers with premium Indian agricultural products. Quality assured, compliance certified.',
  keywords: [
    'agricultural exports',
    'Indian agriculture',
    'export platform',
    'agricultural products',
    'international trade',
    'food exports',
    'organic products',
    'compliance certified',
  ],
  authors: [{ name: 'Agro Export Platform' }],
  creator: 'Agro Export Platform',
  publisher: 'Agro Export Platform',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Agro Export Platform - Premium Agricultural Exports',
    description:
      'Leading agricultural export platform connecting international buyers with premium Indian agricultural products.',
    siteName: 'Agro Export Platform',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agro Export Platform - Premium Agricultural Exports',
    description:
      'Leading agricultural export platform connecting international buyers with premium Indian agricultural products.',
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
    google: 'google-site-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-screen bg-gray-50">
        <div id="root">{children}</div>
      </body>
    </html>
  )
}