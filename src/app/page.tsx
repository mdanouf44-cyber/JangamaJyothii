import { Metadata } from 'next'
import {
  HeroSection,
  FeaturesSection,
  AboutSection,
  ProductsSection,
  WhyChooseUsSection,
  CountriesExportSection,
  CertificationSection,
} from '@/components'

export const metadata: Metadata = {
  title:
    'Leading Export House of General Merchandise - Shree Jangama Jyothi Global LLP',
  description:
    'Premium agricultural exports from India. Quality-assured products including coffee, coconut, spices, rice, and more. Trusted by international buyers worldwide.',
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <ProductsSection />
      <WhyChooseUsSection />
      <CountriesExportSection />
      <CertificationSection />
    </div>
  )
}
