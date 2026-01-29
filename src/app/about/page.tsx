import { Metadata } from 'next'
import { CheckCircle, Globe, Users, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us - Shree Jangama Jyothi Global LLP',
  description:
    'Learn about Shree Jangama Jyothi Global LLP, a leading exporter of premium agricultural products from India to global markets.',
}

const AboutPage = () => {
  const values = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Quality Assurance',
      description:
        'We maintain the highest standards in product quality and processing.',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Reach',
      description:
        'Serving customers across 27+ countries with reliable export services.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Farmer Partnership',
      description:
        'Working directly with farmers to ensure fair pricing and quality sourcing.',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Certified Excellence',
      description:
        'All our products meet international standards and certifications.',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Leading the way in premium agricultural exports from India to the
            world
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-gray-900">
                    Shree Jangama Jyothi Global LLP
                  </strong>{' '}
                  is a leading Import and Exporter and supplier of high-quality
                  agricultural commodities from India. Established with a vision
                  to deliver India's finest natural products to global markets,
                  we specialize in a wide range of goods including
                  <strong className="text-gray-900">
                    {' '}
                    Coffee, Areca Nut, Areca nut Plates, Spices, Pulses, Rice,
                    Grains & Coconuts
                  </strong>
                  .
                </p>
                <p>
                  Our products are sourced from trusted farmers and producers
                  across India, including renowned agricultural belts in{' '}
                  <strong className="text-gray-900">
                    Karnataka, Tamil Nadu, Andhra Pradesh, Telangana, Kerala,
                    Meghalaya, and Maharashtra
                  </strong>
                  . We ensure that every product meets international standards
                  in quality, packaging, and delivery.
                </p>
                <p>
                  With over 5 years of experience in the agricultural export
                  industry, we have built strong relationships with farmers,
                  suppliers, and international buyers. Our commitment to
                  quality, sustainability, and customer satisfaction has made us
                  a trusted partner in global agro trade.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-green-600 to-green-800 rounded-lg shadow-2xl flex items-center justify-center">
                <div className="text-white text-center">
                  <h3 className="text-2xl font-bold mb-2">Global Export</h3>
                  <p className="text-green-100">Agricultural Excellence</p>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-green-600">5+</div>
                <div className="text-sm text-gray-700 font-medium">
                  Years Of Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide our business and drive our commitment to
              excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center group hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 transition-colors duration-300">
                  <div className="text-green-600 group-hover:text-white transition-colors duration-300">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-green-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To bridge the gap between Indian farmers and global markets by
                providing premium quality agricultural products while ensuring
                fair trade practices, sustainable farming methods, and
                exceptional customer service. We are committed to delivering
                India's finest natural products to customers worldwide.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To become the most trusted and preferred partner for
                agricultural exports from India, recognized globally for our
                quality, reliability, and commitment to sustainable practices.
                We envision a future where Indian agricultural products are
                celebrated worldwide for their excellence and authenticity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
                27+
              </div>
              <div className="text-gray-300 font-medium">Export Countries</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
                2.9M+
              </div>
              <div className="text-gray-300 font-medium">Hectares Covered</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
                87K+
              </div>
              <div className="text-gray-300 font-medium">Happy Farmers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
                5+
              </div>
              <div className="text-gray-300 font-medium">Years Experience</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
