import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import WhatsAppButton from '@/components/WhatsAppButton'
import { Suspense } from 'react'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
  preload: true,
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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
  ),
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

// Loading component for better UX
function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
    </div>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body className="min-h-screen bg-gray-50 antialiased">
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
        <Suspense fallback={<Loading />}>
          <Header />
          <main className="relative">{children}</main>
          <Footer />
          <WhatsAppButton />
        </Suspense>
      </body>
    </html>
  )
}
