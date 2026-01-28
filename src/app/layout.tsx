import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

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
    default: 'Shree Jangama Jyothi Global LLP - Premium Agricultural Exports',
    template: '%s | Shree Jangama Jyothi Global LLP',
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
  authors: [{ name: 'Shree Jangama Jyothi Global LLP' }],
  creator: 'Shree Jangama Jyothi Global LLP',
  publisher: 'Shree Jangama Jyothi Global LLP',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'android-chrome-192x192', url: '/android-chrome-192x192.png' },
      { rel: 'android-chrome-512x512', url: '/android-chrome-512x512.png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Shree Jangama Jyothi Global LLP - Premium Agricultural Exports',
    description:
      'Leading agricultural export platform connecting international buyers with premium Indian agricultural products.',
    siteName: 'Shree Jangama Jyothi Global LLP',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shree Jangama Jyothi Global LLP - Premium Agricultural Exports',
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
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}