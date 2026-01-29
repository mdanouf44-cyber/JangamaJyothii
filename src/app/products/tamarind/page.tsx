'use client'

import { useState, useEffect } from 'react'
import { Droplets, Award, Shield, Globe } from 'lucide-react'
import ProductGrid from '@/components/ProductGrid'

const TamarindPage = () => {
  const [activeVariety, setActiveVariety] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const varieties = [
    {
      name: 'Tamarind with Seeds',
      description: 'Tamarind with seeds is the natural and unprocessed form of tamarind pulp, retaining its original fibrous structure and seeds. It is harvested from fully matured tamarind pods and cleaned to remove outer shells while preserving the pulp\'s natural sourness and flavor.',
      features: ['Natural Form', 'Original Structure', 'Authentic Taste', 'Natural Moisture'],
      hsCode: '081090',
      moq: '1 Metric Ton',
      moisture: 'Max 20%',
      shelfLife: '12 months',
      uses: 'Traditional cooking, food processing, regional cuisines, sauces, chutneys'
    },
    {
      name: 'Tamarind Without Seeds (Seedless)',
      description: 'Seedless tamarind is processed to remove seeds and excess fibers, resulting in clean and convenient tamarind pulp. This form is preferred by commercial kitchens, food manufacturers, and exporters due to its ease of use and uniform quality.',
      features: ['Seedless Pulp', 'Easy to Use', 'Uniform Quality', 'Commercial Grade'],
      hsCode: '081090',
      moq: '1 Metric Ton',
      moisture: 'Max 18–20%',
      shelfLife: '12–18 months',
      uses: 'Sauces, pickles, ready-to-cook foods, beverages, spice pastes'
    },
    {
      name: 'Tamarind Seeds',
      description: 'Tamarind seeds are separated during tamarind pulp processing and cleaned thoroughly to remove residual pulp and impurities. These seeds are hard, glossy, and rich in starch content, making them valuable for various industrial and agricultural applications.',
      features: ['Rich in Starch', 'Hard & Glossy', 'Industrial Grade', 'Long Shelf Life'],
      hsCode: '120999',
      moq: '1 Metric Ton',
      moisture: 'Max 10%',
      shelfLife: '24 months',
      uses: 'Starch extraction, animal feed, pharmaceutical applications, food processing'
    },
    {
      name: 'Kernel Seeds of Tamarind',
      description: 'Kernel seeds of tamarind are obtained by removing the outer seed coat and processing the inner kernel. These kernels are rich in polysaccharides and are widely used in textile sizing, adhesive manufacturing, food stabilizers, and pharmaceutical applications.',
      features: ['Rich Polysaccharides', 'Inner Kernel', 'Industrial Use', 'High Purity'],
      hsCode: '120999',
      moq: '1 Metric Ton',
      moisture: 'Max 8–10%',
      shelfLife: '24 months',
      uses: 'Textile sizing, adhesive manufacturing, food stabilizers, pharmaceutical applications'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-brown-50">
      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          >
            <source src="/tamarind-video.mp4" type="video/mp4" />
            {/* Fallback background if video doesn't load */}
            <div className="w-full h-full bg-gradient-to-br from-amber-600 via-orange-600 to-brown-600"></div>
          </video>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div className={`transform transition-all duration-1500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            {/* Main Title */}
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white drop-shadow-2xl">
              <span className="bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-300 bg-clip-text text-transparent animate-gradient">
                Premium Tamarind
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-3xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed drop-shadow-lg font-light">
              Natural sourness with rich flavor and high pulp content from traditional tamarind groves
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {['Natural Ripening', 'Strong Sour Taste', 'Export Grade', 'Multiple Forms'].map((feature, index) => (
                <div
                  key={index}
                  className={`px-6 py-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white font-medium transform transition-all duration-500 hover:scale-110 hover:bg-white/40 hover:border-white hover:shadow-2xl cursor-default ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ transitionDelay: `${index * 200 + 800}ms` }}
                >
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-8 text-center">
              Premium Tamarind Products
            </h2>
            <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
              <p className="mb-6">
                Our tamarind products are sourced from naturally grown tamarind trees cultivated in regions known for producing fruit with rich sourness, deep color, and high pulp content. The tamarind pods are harvested at full maturity to ensure strong flavor and natural acidity.
              </p>
              <p className="mb-6">
                Traditional harvesting practices combined with hygienic processing help preserve the authentic taste and quality of the produce. After harvesting, the tamarind is carefully cleaned and processed to remove shells, fibers, and impurities based on the required product form.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Varieties Section */}
      <section className="py-20 bg-gradient-to-r from-amber-700 to-orange-700">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Our Tamarind Varieties
          </h2>
          
          {/* Variety Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {varieties.map((variety, index) => (
              <button
                key={index}
                onClick={() => setActiveVariety(index)}
                className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 text-sm ${
                  activeVariety === index
                    ? 'bg-white text-amber-700 shadow-lg transform scale-105'
                    : 'bg-amber-600 text-white hover:bg-amber-500'
                }`}
              >
                {variety.name}
              </button>
            ))}
          </div>

          {/* Active Variety Details */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Image Placeholder */}
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl h-80 flex items-center justify-center border-2 border-dashed border-amber-300">
                <div className="text-center">
                  <div className="text-5xl mb-4">🫘</div>
                  <p className="text-amber-700 font-medium">{varieties[activeVariety].name}</p>
                  <p className="text-amber-600 text-sm">Image will be added here</p>
                </div>
              </div>

              {/* Variety Info */}
              <div>
                <h3 className="text-2xl font-bold text-amber-900 mb-4">
                  {varieties[activeVariety].name}
                </h3>
                <p className="text-gray-800 mb-6 leading-relaxed">
                  {varieties[activeVariety].description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-amber-800 mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {varieties[activeVariety].features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specifications */}
                <div className="bg-amber-50 rounded-lg p-4">
                  <h4 className="font-semibold text-amber-800 mb-3">Specifications:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-700">HS Code:</span>
                      <span className="font-medium">{varieties[activeVariety].hsCode}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">MOQ:</span>
                      <span className="font-medium">{varieties[activeVariety].moq}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Moisture:</span>
                      <span className="font-medium">{varieties[activeVariety].moisture}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Shelf Life:</span>
                      <span className="font-medium">{varieties[activeVariety].shelfLife}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Uses */}
            <div className="mt-8 p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl">
              <h4 className="font-semibold text-amber-800 mb-3 flex items-center gap-2">
                <Globe className="w-5 h-5" />
                Applications:
              </h4>
              <p className="text-gray-800">{varieties[activeVariety].uses}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-12 text-center">
            Available Tamarind Products
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Tamarind Pulp */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🫘</span>
                </div>
                <h3 className="text-2xl font-bold text-amber-900 mb-4">Tamarind Pulp</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span className="text-gray-800">Tamarind with Seeds</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span className="text-gray-800">Tamarind Without Seeds</span>
                </li>
              </ul>
            </div>

            {/* Tamarind Seeds */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🌰</span>
                </div>
                <h3 className="text-2xl font-bold text-amber-900 mb-4">Tamarind Seeds</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span className="text-gray-800">Tamarind Seeds</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  <span className="text-gray-800">Kernel Seeds of Tamarind</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-12 text-center">
            Why Choose Our Tamarind Products
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Droplets className="w-8 h-8" />,
                title: 'Natural Ripening',
                description: 'Naturally ripened and carefully processed for authentic taste and quality'
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: 'Strong Sour Taste',
                description: 'Strong sour taste and high pulp content with rich natural flavor'
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'Multiple Forms',
                description: 'Multiple product forms available for diverse culinary and industrial applications'
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: 'Export Grade',
                description: 'Hygienically processed and export-grade quality suitable for international markets'
              }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-700 group-hover:bg-amber-700 group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-amber-900 mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-8">
              Applications
            </h2>
            <p className="text-lg text-gray-800 mb-8">
              Our tamarind products are perfect for culinary preparations, sauces, pickles, beverages, food processing industries, starch production, animal feed, and industrial uses.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                'Culinary Preparations',
                'Sauces & Pickles',
                'Beverages',
                'Food Processing',
                'Starch Production',
                'Industrial Uses'
              ].map((application, index) => (
                <div key={index} className="bg-amber-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-3">🫘</div>
                  <h3 className="font-semibold text-amber-800">{application}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Processing Excellence Section */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-8">
              Processing Excellence
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-amber-800 mb-4">Quality Control</h3>
                <p className="text-gray-800">
                  Each product is processed under strict quality control to ensure consistency and compliance with international export standards. Traditional harvesting practices preserve authentic taste and quality.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-amber-800 mb-4">Export Standards</h3>
                <p className="text-gray-800">
                  All tamarind products are packed using export-grade materials to protect them from moisture, contamination, and spoilage during long-distance transportation with customizable packaging options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-700 to-orange-700">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-amber-800 to-orange-800 text-white rounded-2xl p-8 shadow-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Partner With Us?</h3>
            <p className="text-lg mb-6 opacity-90">
              Contact us today to discuss your tamarind requirements and discover how we can support your business with premium quality tamarind products.
            </p>
            <button className="bg-white text-amber-800 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg">
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* Product Grid Section */}
      <ProductGrid />
    </div>
  )
}

export default TamarindPage