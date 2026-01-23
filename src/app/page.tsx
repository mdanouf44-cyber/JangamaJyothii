import { Metadata } from 'next'
import {
  Header,
  HeroSection,
  FeaturesSection,
  AboutSection,
  ProductsSection,
  WhyChooseUsSection,
  CountriesExportSection,
  Footer
} from '@/components'

export const metadata: Metadata = {
  title: 'Leading Export House of General Merchandise - Shree Jangama Jyothi Global LLP',
  description: 'Premium agricultural exports from India. Quality-assured products including coffee, coconut, spices, rice, and more. Trusted by international buyers worldwide.',
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <ProductsSection />
      <WhyChooseUsSection />
      <CountriesExportSection />
      <Footer />
    </div>
  )
}