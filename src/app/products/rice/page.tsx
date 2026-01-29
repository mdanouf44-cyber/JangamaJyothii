'use client'

import { useState, useEffect } from 'react'
import { Wheat, Award, Shield, Globe } from 'lucide-react'
import ProductGrid from '@/components/ProductGrid'

const RicePage = () => {
  const [activeVariety, setActiveVariety] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

  const riceVideos = ['/rice-video-1.mp4', '/rice-video-3.mp4']

  useEffect(() => {
    setIsVisible(true)

    // Preload videos for better performance
    const preloadVideos = () => {
      riceVideos.forEach((videoSrc, index) => {
        if (index < 2) {
          // Preload first 2 videos
          const video = document.createElement('video')
          video.preload = 'metadata'
          video.src = videoSrc
        }
      })
    }

    // Rotate videos every 8 seconds
    const videoInterval = setInterval(() => {
      setCurrentVideoIndex(prevIndex => (prevIndex + 1) % riceVideos.length)
    }, 8000)

    preloadVideos()
    return () => clearInterval(videoInterval)
  }, [])

  const varieties = [
    {
      name: 'Sona Masoori Rice',
      description:
        'Sona Masoori rice is a premium medium-grain rice known for its soft texture, light aroma, and easy digestibility. It is cultivated in fertile regions using traditional farming methods supported by modern milling practices.',
      features: [
        'Soft Texture',
        'Light Aroma',
        'Easy Digestibility',
        'Non-Sticky',
      ],
      hsCode: '100630',
      moq: '1 Metric Ton',
      moisture: 'Max 14%',
      shelfLife: '12–18 months',
      uses: 'Household cooking, steamed rice, South Indian dishes',
    },
    {
      name: 'IR64 Parboiled Rice',
      description:
        'IR64 parboiled rice is processed using a parboiling method that enhances grain strength, nutritional value, and shelf stability. The grains are firm, uniform, and less prone to breakage during cooking.',
      features: [
        'Enhanced Nutrition',
        'Firm Grains',
        'Less Breakage',
        'Extended Shelf Life',
      ],
      hsCode: '100630',
      moq: '1 Metric Ton',
      moisture: 'Max 14%',
      shelfLife: '18–24 months',
      uses: 'Bulk food supply, hotels, restaurants, institutional catering',
    },
    {
      name: 'IR36 Rice',
      description:
        'IR36 rice is a medium-grain variety known for its consistent grain size, neutral taste, and good cooking performance. It is cultivated using controlled agricultural practices to ensure uniform quality.',
      features: [
        'Consistent Size',
        'Neutral Taste',
        'Good Performance',
        'Cost-Effective',
      ],
      hsCode: '100630',
      moq: '1 Metric Ton',
      moisture: 'Max 14%',
      shelfLife: '12–18 months',
      uses: 'Daily consumption, public distribution systems, export markets',
    },
    {
      name: 'Ponni Rice',
      description:
        'Ponni rice is a popular South Indian rice variety valued for its slender grains, soft texture, and pleasant taste. It is grown in nutrient-rich delta regions and processed using modern milling techniques.',
      features: [
        'Slender Grains',
        'Soft Texture',
        'Pleasant Taste',
        'Delta Grown',
      ],
      hsCode: '100630',
      moq: '1 Metric Ton',
      moisture: 'Max 14%',
      shelfLife: '12–18 months',
      uses: 'Daily meals, traditional dishes, festive cooking',
    },
    {
      name: 'Jeera Samba Rice',
      description:
        'Jeera Samba rice is a premium short-grain aromatic rice known for its distinctive fragrance and rich flavor. It is traditionally cultivated in specific regions and is widely used for special dishes.',
      features: [
        'Distinctive Fragrance',
        'Rich Flavor',
        'Premium Quality',
        'Aromatic',
      ],
      hsCode: '100630',
      moq: '1 Metric Ton',
      moisture: 'Max 14%',
      shelfLife: '12–18 months',
      uses: 'Biryani, festive preparations, special dishes',
    },
    {
      name: 'Broken Rice',
      description:
        'Broken rice consists of rice fragments generated during the milling process. Despite being broken, it retains the same nutritional value as whole rice grains and is widely used in various applications.',
      features: [
        'Same Nutrition',
        'Economical',
        'Industrial Use',
        'Consistent Quality',
      ],
      hsCode: '100640',
      moq: '1 Metric Ton',
      moisture: 'Max 14%',
      shelfLife: '12 months',
      uses: 'Food processing, animal feed, brewing industries, traditional preparations',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-green-50">
      {/* Hero Section with Rotating Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Rotating Video Background */}
        <div className="absolute inset-0 w-full h-full">
          {riceVideos.map((videoSrc, index) => (
            <video
              key={index}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentVideoIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          ))}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Video Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
            {riceVideos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentVideoIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentVideoIndex
                    ? 'bg-white scale-125'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div
            className={`transform transition-all duration-1500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
            suppressHydrationWarning
          >
            {/* Main Title */}
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white drop-shadow-2xl">
              <span className="bg-gradient-to-r from-yellow-300 via-amber-300 to-orange-300 bg-clip-text text-transparent animate-gradient">
                Premium Rice
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-3xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed drop-shadow-lg font-light">
              Superior quality rice varieties from India's fertile agricultural
              regions with traditional farming excellence
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {[
                'Premium Milling',
                'Superior Quality',
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
            <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-8 text-center">
              Premium Rice Products
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="mb-6">
                Our rice products are sourced from carefully selected farms
                located in fertile agricultural regions where traditional
                farming practices are combined with modern cultivation methods.
                Each variety is grown under controlled conditions to ensure
                uniform grain quality, natural taste, and high nutritional
                value.
              </p>
              <p className="mb-6">
                We work closely with farmers and milling units to maintain
                consistency, traceability, and compliance with international
                quality standards. The harvested paddy undergoes proper
                cleaning, milling, and grading using advanced processing
                techniques to preserve grain integrity and reduce breakage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Varieties Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-yellow-600">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Our Rice Varieties
          </h2>

          {/* Variety Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {varieties.map((variety, index) => (
              <button
                key={index}
                onClick={() => setActiveVariety(index)}
                className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 text-sm ${
                  activeVariety === index
                    ? 'bg-white text-amber-600 shadow-lg transform scale-105'
                    : 'bg-amber-500 text-white hover:bg-amber-400'
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
              <div className="bg-gradient-to-br from-yellow-100 to-amber-100 rounded-xl h-80 flex items-center justify-center border-2 border-dashed border-amber-300">
                <div className="text-center">
                  <div className="text-5xl mb-4">🌾</div>
                  <p className="text-amber-600 font-medium">
                    {varieties[activeVariety].name}
                  </p>
                  <p className="text-amber-500 text-sm">
                    Image will be added here
                  </p>
                </div>
              </div>

              {/* Variety Info */}
              <div>
                <h3 className="text-2xl font-bold text-amber-800 mb-4">
                  {varieties[activeVariety].name}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {varieties[activeVariety].description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-amber-700 mb-3">
                    Key Features:
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {varieties[activeVariety].features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specifications */}
                <div className="bg-amber-50 rounded-lg p-4">
                  <h4 className="font-semibold text-amber-700 mb-3">
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
            <div className="mt-8 p-6 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl">
              <h4 className="font-semibold text-amber-700 mb-3 flex items-center gap-2">
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
          <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-12 text-center">
            Why Choose Our Rice Products
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Wheat className="w-8 h-8" />,
                title: 'Premium Milling',
                description:
                  'Carefully milled and graded for uniform quality and minimal breakage',
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: 'Superior Quality',
                description:
                  'Low broken percentage and excellent cooking results every time',
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'Hygienic Processing',
                description:
                  'Hygienically processed and export-grade quality standards',
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: 'Global Markets',
                description:
                  'Suitable for both domestic and international markets worldwide',
              },
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-amber-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-8">
              Applications
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Our rice products are perfect for household cooking, hotels and
              restaurants, catering services, food processing industries, and
              bulk distribution markets.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                'Household Cooking',
                'Hotels & Restaurants',
                'Catering Services',
                'Food Processing',
                'Bulk Distribution',
                'Export Markets',
              ].map((application, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="text-3xl mb-3">🌾</div>
                  <h3 className="font-semibold text-amber-700">
                    {application}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-8">
              Quality Assurance
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-amber-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-amber-700 mb-4">
                  Processing Excellence
                </h3>
                <p className="text-gray-700">
                  Strict quality control measures are followed at every stage to
                  ensure that the rice is free from impurities, stones, and
                  foreign matter. Our rice is known for its good texture,
                  consistent grain size, and excellent cooking performance.
                </p>
              </div>
              <div className="bg-yellow-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-amber-700 mb-4">
                  Export Standards
                </h3>
                <p className="text-gray-700">
                  Packaging is carried out using food-grade materials to protect
                  the rice from moisture, pests, and contamination during
                  storage and long-distance transportation. Custom packaging
                  options are available based on buyer specifications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-yellow-600">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-amber-700 to-yellow-700 text-white rounded-2xl p-8 shadow-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Partner With Us?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Contact us today to discuss your rice requirements and discover
              how we can support your business with premium quality rice
              products.
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

export default RicePage
