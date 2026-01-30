'use client'

'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Thermometer, Palette, Award, Globe, Package } from 'lucide-react'
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
      image: '/kashmiri-chilli.jpg',
      color: 'from-red-500 to-red-700',
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
      image: '/byadgi-chilli.jpg',
      color: 'from-orange-600 to-red-600',
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
      image: '/guntur-chilli.jpg',
      color: 'from-red-600 to-red-800',
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
      image: '/chilli-powder.jpg',
      color: 'from-orange-500 to-red-600',
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
            suppressHydrationWarning
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

      {/* Red Chilli Varieties Section */}
      <section className="py-14 bg-gradient-to-br from-red-900 via-orange-900 to-red-900 relative">
        <div className="max-w-[1150px] mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-5 drop-shadow-2xl">
            Premium Red Chilli Varieties
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {varieties.map((variety, index) => (
              <button
                key={index}
                onClick={() => setActiveVariety(index)}
                className={`px-7 py-3 rounded-full font-bold text-base transition-all duration-300 transform hover:scale-105 border-2 shadow-xl ${
                  activeVariety === index
                    ? 'bg-white text-red-900 shadow-2xl border-white scale-105'
                    : 'bg-red-900/50 backdrop-blur-sm text-white border-white/60 hover:bg-white/20 hover:border-white'
                }`}
              >
                {variety.name}
              </button>
            ))}
          </div>

          <div className="max-w-[1150px] mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-white/30">
              <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-0">
                {/* Image Section */}
                <div className="bg-gray-100 min-h-[400px] relative overflow-hidden">
                  <div className="relative w-full h-full min-h-[380px]">
                    <Image
                      src={varieties[activeVariety].image || ''}
                      alt={varieties[activeVariety].name}
                      fill
                      className="object-cover"
                      priority={activeVariety === 0}
                    />
                    {/* Overlay label */}
                    <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-md px-4 py-2 rounded-lg border border-white/30 z-10">
                      <p className="text-white font-bold text-sm">Premium Quality</p>
                      <p className="text-red-200 text-xs">{varieties[activeVariety].name}</p>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-4 bg-white">
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-bold">
                      Premium Red Chilli
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-red-900 mb-2 leading-tight">
                    {varieties[activeVariety].name}
                  </h3>

                  <p className="text-gray-700 leading-relaxed mb-3 text-sm">
                    {varieties[activeVariety].description}
                  </p>

                  <div className="mb-3">
                    <h4 className="text-sm font-bold text-red-900 mb-2 flex items-center gap-2">
                      <Award className="w-3 h-3 text-red-600" />
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {varieties[activeVariety].features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 p-1.5 bg-gray-50 rounded-lg shadow-sm border border-red-100 hover:shadow-md transition-shadow"
                        >
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-red-600 to-orange-600 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-800 font-semibold text-xs">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-red-900 to-orange-900 rounded-lg p-3 border border-red-800">
                    <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                      <Package className="w-3 h-3 text-white" />
                      Technical Specifications
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      <div className="bg-white p-1.5 rounded-lg shadow-md border border-red-200">
                        <span className="text-[9px] font-bold text-red-800 uppercase tracking-wide">HS Code</span>
                        <p className="font-bold text-black text-xs mt-0.5">{varieties[activeVariety].hsCode}</p>
                      </div>
                      <div className="bg-white p-1.5 rounded-lg shadow-md border border-red-200">
                        <span className="text-[9px] font-bold text-red-800 uppercase tracking-wide">Minimum Order</span>
                        <p className="font-bold text-black text-xs mt-0.5">{varieties[activeVariety].moq}</p>
                      </div>
                      <div className="bg-white p-1.5 rounded-lg shadow-md border border-red-200">
                        <span className="text-[9px] font-bold text-red-800 uppercase tracking-wide">Shelf Life</span>
                        <p className="font-bold text-black text-xs mt-0.5">{varieties[activeVariety].shelfLife}</p>
                      </div>
                      <div className="bg-white p-1.5 rounded-lg shadow-md border border-red-200">
                        <span className="text-[9px] font-bold text-red-800 uppercase tracking-wide">Moisture Content</span>
                        <p className="font-bold text-black text-xs mt-0.5">{varieties[activeVariety].moisture}</p>
                      </div>
                    </div>
                    
                    <div className="mt-2 bg-white p-2 rounded-lg shadow-md border border-red-200">
                      <span className="text-[9px] font-bold text-red-800 uppercase tracking-wide">Primary Uses</span>
                      <p className="text-gray-700 text-xs mt-0.5 leading-relaxed">{varieties[activeVariety].uses}</p>
                    </div>
                  </div>
                </div>
              </div>
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
