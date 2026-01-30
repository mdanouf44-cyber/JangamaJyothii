import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Shree Jangama Jyothi Global LLP',
  description:
    'Get in touch with Shree Jangama Jyothi Global LLP for premium agricultural exports. Contact us for inquiries, quotes, and partnerships.',
  openGraph: {
    title: 'Contact Us - Shree Jangama Jyothi Global LLP',
    description:
      'Get in touch with Shree Jangama Jyothi Global LLP for premium agricultural exports.',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
