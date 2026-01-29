'use client'

import { useState, useEffect } from 'react'
import { Thermometer, Palette, Award, Globe } from 'lucide-react'
import ProductGrid from '@/components/ProductGrid'

const RedChilliPage = () => {
  const [activeVariety, setActiveVariety] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const varieties = [
    {
      name: 'Kashmiri Chilli',
      description:
        'Kashmiri chilli is widely appreciated for its bright natural red color and mild pungency. It is cultivated in regions where climatic conditions support slow drying and color retention, resulting in an attractive appearance and pleasant aroma.',
      features: [
        'Bright Red Color',
        'Mild Pungency',
        'Pleasant Aroma',
        'Visual Appeal',
      ],
      hsCode: '090421',
      moq: '1 Metric Ton',
      moisture: 'Max 10–12%',
      shelfLife: '12–18 months',
      uses: 'Gravies, sauces, spice blends, packaged food products',
    },
    {
      name: 'Byadgi Chilli',
      description:
        'Byadgi chilli is known for its deep red color, strong aroma, and moderate heat level. It is primarily grown in Karnataka and is highly valued in the spice and food processing industries.',
      features: [
        'Deep Red Color',
        'Strong Aroma',
        'Moderate Heat',
        'Rich Oil Content',
      ],
      hsCode: '090421',
      moq: '1 Metric Ton',
      moisture: 'Max 10–12%',
      shelfLife: '12–18 months',
      uses: 'Spice blends, masala powders, oleoresin extraction, traditional cooking',
    },
    {
      name: 'Guntur Chilli',
      description:
        'Guntur chilli is one of the most popular chilli varieties known for its high pungency, bold flavor, and strong heat level. Cultivated in Andhra Pradesh, this chilli is preferred in applications where spiciness is a key requirement.',
      features: [
        'High Pungency',
        'Bold Flavor',
        'Strong Heat',
        'Premium Quality',
      ],
      hsCode: '090421',
      moq: '1 Metric Ton',
      moisture: 'Max 10–12%',
      shelfLife: '12–18 months',
      uses: 'Spicy food preparations, chilli powder production, large-scale food manufacturing',
    },
    {
      name: 'Chilli Powder',
      description:
        'Our chilli powder is manufactured by grinding selected dried red chillies under hygienic and controlled conditions. The powder is finely processed to ensure uniform texture, rich color, and consistent pungency.',
      features: [
        'Uniform Texture',
        'Rich Color',
        'No Additives',
        'Pure Quality',
      ],
      hsCode: '090422',
      moq: '500 KG',
      moisture: 'Max 8–10%',
      shelfLife: '12 months',
      uses: 'Culinary applications, spice blends, sauces, ready-to-eat foods',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
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
            <source src="/red-chilli-video.mp4" type="video/mp4" />
            {/* Fallback background if video doesn't load */}
            <div className="w-full h-full bg-gradient-to-br from-red-600 via-orange-600 to-red-700"></div>
          </video>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div
            className={`transform transition-all duration-1500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
          >
            {/* Main Title */}
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white drop-shadow-2xl">
              <span className="bg-gradient-to-r from-red-300 via-orange-300 to-yellow-300 bg-clip-text text-transparent animate-gradient">
                Premium Red Chilli
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-3xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed drop-shadow-lg font-light">
              Sourced from India's finest chilli-growing regions with superior
              quality, vibrant color, and authentic flavor
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {[
                'Premium Quality',
                'Rich Color',
                'Export Grade',
                'Multiple Varieties',
              ].map((feature, index) => (
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
            <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-8 text-center">
              Premium Red Chilli Products
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="mb-6">
                Our red chillies are sourced from well-known chilli-growing
                regions where favorable soil conditions, climate, and
                traditional farming practices contribute to superior quality
                produce. Each variety is carefully cultivated, harvested at the
                right stage of maturity, and naturally dried to preserve its
                color, flavor, and pungency.
              </p>
              <p className="mb-6">
                We work closely with farmers and processors to ensure
                consistency, traceability, and compliance with international
                export standards. We offer a wide range of red chilli varieties,
                including Kashmiri Chilli, Byadgi Chilli, Guntur Chilli, and
                finely processed Chilli Powder.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Varieties Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Our Red Chilli Varieties
          </h2>

          {/* Variety Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {varieties.map((variety, index) => (
              <button
                key={index}
                onClick={() => setActiveVariety(index)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeVariety === index
                    ? 'bg-white text-red-600 shadow-lg transform scale-105'
                    : 'bg-red-500 text-white hover:bg-red-400'
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
              <div className="bg-gradient-to-br from-red-100 to-orange-100 rounded-xl h-80 flex items-center justify-center border-2 border-dashed border-red-300">
                <div className="text-center">
                  <div className="text-5xl mb-4">🌶️</div>
                  <p className="text-red-600 font-medium">
                    {varieties[activeVariety].name}
                  </p>
                  <p className="text-red-500 text-sm">
                    Image will be added here
                  </p>
                </div>
              </div>

              {/* Variety Info */}
              <div>
                <h3 className="text-2xl font-bold text-red-800 mb-4">
                  {varieties[activeVariety].name}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {varieties[activeVariety].description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-red-700 mb-3">
                    Key Features:
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {varieties[activeVariety].features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specifications */}
                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-semibold text-red-700 mb-3">
                    Specifications:
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">HS Code:</span>
                      <span className="font-medium">
                        {varieties[activeVariety].hsCode}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">MOQ:</span>
                      <span className="font-medium">
                        {varieties[activeVariety].moq}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Moisture:</span>
                      <span className="font-medium">
                        {varieties[activeVariety].moisture}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shelf Life:</span>
                      <span className="font-medium">
                        {varieties[activeVariety].shelfLife}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Uses */}
            <div className="mt-8 p-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl">
              <h4 className="font-semibold text-red-700 mb-3 flex items-center gap-2">
                <Globe className="w-5 h-5" />
                Applications:
              </h4>
              <p className="text-gray-700">{varieties[activeVariety].uses}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-12 text-center">
            Why Choose Our Red Chilli Products
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="w-8 h-8" />,
                title: 'Premium Quality',
                description:
                  'Naturally dried and carefully processed for superior quality',
              },
              {
                icon: <Palette className="w-8 h-8" />,
                title: 'Rich Color & Aroma',
                description:
                  'Strong aroma and consistent quality with vibrant natural colors',
              },
              {
                icon: <Thermometer className="w-8 h-8" />,
                title: 'Multiple Varieties',
                description:
                  'Different heat levels and color requirements to suit all needs',
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: 'Export Grade',
                description:
                  'Hygienically packed and suitable for international markets',
              },
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-red-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-8">
              Applications
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Our red chilli products are perfect for culinary preparations,
              spice blends, food processing industries, sauces, seasonings, and
              packaged food products.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                'Culinary Preparations',
                'Spice Blends',
                'Food Processing',
                'Sauces & Seasonings',
                'Packaged Foods',
                'Industrial Manufacturing',
              ].map((application, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="text-3xl mb-3">🌶️</div>
                  <h3 className="font-semibold text-red-700">{application}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-red-700 to-orange-700 text-white rounded-2xl p-8 shadow-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Partner With Us?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Contact us today to discuss your red chilli requirements and
              discover how we can support your business with premium quality red
              chilli products.
            </p>
            <button className="bg-white text-red-800 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg">
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

export default RedChilliPage
