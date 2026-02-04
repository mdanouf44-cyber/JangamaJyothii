'use client'

import { useState, useEffect } from 'react'
import {
  Sparkles,
  Award,
  Shield,
  Globe,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import Image from 'next/image'
import ProductGrid from '@/components/ProductGrid'

// Turmeric Product Slideshow Component
const TurmericSlideshow = ({ varieties }: { varieties: any[] }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 2) % varieties.length)
    }, 2000)
    return () => clearInterval(timer)
  }, [varieties.length])
  const nextSlide = () => setCurrentSlide(prev => (prev + 2) % varieties.length)
  const prevSlide = () =>
    setCurrentSlide(prev => (prev - 2 + varieties.length) % varieties.length)
  const getCurrentProducts = () => {
    const products = []
    products.push(varieties[currentSlide])
    products.push(varieties[(currentSlide + 1) % varieties.length])
    return products
  }
  const currentProducts = getCurrentProducts()
  const totalSlides = Math.ceil(varieties.length / 2)
  return (
    <div className="relative max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {currentProducts.map((product, index) => (
          <div
            key={`${currentSlide}-${index}`}
            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 transform transition-all duration-2000 ease-in-out"
          >
            <div className="relative h-72 lg:h-80 bg-gradient-to-br from-yellow-50 to-orange-50">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain transition-all duration-2000 p-4"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={index === 0}
                unoptimized
              />
              <div className="absolute top-4 left-4 bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                ✨ Premium Spice
              </div>
              <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                {currentSlide + index + 1} / {varieties.length}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                {product.name}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {product.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-6">
        <button
          onClick={prevSlide}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-yellow-500 transition-all duration-300 shadow-sm hover:shadow-md"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
          <span className="text-gray-700 font-medium">Previous</span>
        </button>
        <div className="flex space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index * 2)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${Math.floor(currentSlide / 2) === index ? 'bg-yellow-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'}`}
            />
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-yellow-500 transition-all duration-300 shadow-sm hover:shadow-md"
        >
          <span className="text-gray-700 font-medium">Next</span>
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>
      <div className="flex flex-wrap justify-center gap-2 mt-6">
        {varieties.map((variety, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(Math.floor(index / 2) * 2)}
            className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${currentSlide <= index && index < currentSlide + 2 ? 'bg-yellow-600 text-white shadow-lg scale-105' : 'bg-white text-gray-700 border border-gray-300 hover:bg-yellow-50 hover:border-yellow-300'}`}
          >
            <span className="text-base">✨</span>
            <span className="hidden sm:inline">{variety.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

const TurmericPage = () => {
  const [activeVariety, setActiveVariety] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

  const turmericVideos = ['/turmeric-video-1.mp4', '/turmeric-video-2.mp4']

  useEffect(() => {
    setIsVisible(true)

    // Preload videos for better performance
    const preloadVideos = () => {
      turmericVideos.forEach(videoSrc => {
        const video = document.createElement('video')
        video.preload = 'metadata'
        video.src = videoSrc
      })
    }

    // Rotate videos every 10 seconds (longer since we only have 2 videos)
    const videoInterval = setInterval(() => {
      setCurrentVideoIndex(prevIndex => (prevIndex + 1) % turmericVideos.length)
    }, 10000)

    preloadVideos()
    return () => clearInterval(videoInterval)
  }, [])

  const varieties = [
    {
      name: 'Alleppey Finger Turmeric',
      image: '/alleppey-finger-turmeric.jpg',
      description:
        'Alleppey finger turmeric is one of the most widely traded turmeric varieties, known for its deep orange-yellow color, strong aroma, and balanced curcumin content. It is cultivated in coastal and semi-coastal regions where soil and climate conditions support rich pigment development.',
      features: [
        'Deep Orange-Yellow Color',
        'Strong Aroma',
        'Balanced Curcumin',
        'Rich Pigment',
      ],
      hsCode: '091030',
      moq: '1 Metric Ton',
      moisture: 'Max 10%',
      shelfLife: '18–24 months',
      uses: 'Culinary preparations, spice blends, food processing industries, oleoresin extraction',
    },
    {
      name: 'Lakadong Turmeric (Finger)',
      image: '/lakadong-turmeric-finger.jpg',
      description:
        'Lakadong turmeric is a premium variety renowned for its exceptionally high curcumin content, making it highly valued in medicinal, nutraceutical, and wellness industries. Grown in specific hilly regions, this turmeric has a strong aroma, deep yellow color, and superior medicinal properties.',
      features: [
        'High Curcumin Content',
        'Premium Quality',
        'Medicinal Properties',
        'Deep Yellow Color',
      ],
      hsCode: '091030',
      moq: '500 KG',
      moisture: 'Max 9%',
      shelfLife: '18–24 months',
      uses: 'Health supplements, ayurvedic formulations, high-end spice markets',
    },
    {
      name: 'Salem Turmeric Finger',
      image: '/salem-turmeric-finger.jpg',
      description:
        'Salem turmeric finger is known for its bright yellow color, smooth surface, and uniform finger size. It is cultivated in dry regions where turmeric develops good color value and consistent quality. This variety is widely used in food processing and spice manufacturing.',
      features: [
        'Bright Yellow Color',
        'Smooth Surface',
        'Uniform Size',
        'Stable Color',
      ],
      hsCode: '091030',
      moq: '1 Metric Ton',
      moisture: 'Max 10%',
      shelfLife: '18–24 months',
      uses: 'Food processing, spice manufacturing, commercial applications',
    },
    {
      name: 'Alleppey Turmeric Powder',
      image: '/alleppey-turmeric-powder.jpg',
      description:
        'Alleppey turmeric powder is produced by finely grinding selected Alleppey turmeric fingers under hygienic and controlled conditions. The powder is known for its rich color, strong aroma, and smooth texture. No artificial colors or additives are used.',
      features: [
        'Rich Color',
        'Strong Aroma',
        'Smooth Texture',
        'Natural Purity',
      ],
      hsCode: '091030',
      moq: '500 KG',
      moisture: 'Max 8%',
      shelfLife: '12–18 months',
      uses: 'Household cooking, spice blends, packaged food products, food processing',
    },
    {
      name: 'Lakadong Turmeric Powder',
      image: '/lakadong-turmeric-powder.jpg',
      description:
        'Lakadong turmeric powder is made from high-curcumin Lakadong fingers and is highly valued for its strong medicinal properties and intense yellow color. The powder is finely milled to ensure uniform consistency while retaining curcumin content and aroma.',
      features: [
        'High Curcumin',
        'Medicinal Properties',
        'Intense Color',
        'Uniform Consistency',
      ],
      hsCode: '091030',
      moq: '500 KG',
      moisture: 'Max 8%',
      shelfLife: '12–18 months',
      uses: 'Nutraceuticals, herbal formulations, health drinks, premium spice markets',
    },
    {
      name: 'Salem Turmeric Powder',
      image: '/salem-turmeric-powder.jpg',
      description:
        'Salem turmeric powder is produced from carefully selected Salem turmeric fingers and is known for its bright color, smooth texture, and consistent quality. It is suitable for large-scale food processing, spice blending, and commercial culinary use.',
      features: [
        'Bright Color',
        'Smooth Texture',
        'Consistent Quality',
        'Commercial Grade',
      ],
      hsCode: '091030',
      moq: '500 KG',
      moisture: 'Max 8%',
      shelfLife: '12–18 months',
      uses: 'Large-scale food processing, spice blending, commercial culinary use',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50">
      {/* Hero Section with Rotating Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Rotating Video Background */}
        <div className="absolute inset-0 w-full h-full">
          {turmericVideos.map((videoSrc, index) => (
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
            {turmericVideos.map((_, index) => (
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
              <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-amber-300 bg-clip-text text-transparent animate-gradient">
                Premium Turmeric
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-3xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed drop-shadow-lg font-light">
              Golden spice with superior color, aroma, and exceptional curcumin
              content from India's finest regions
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {[
                'Superior Quality',
                'High Curcumin',
                'Export Grade',
                'Medicinal Properties',
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
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-900 mb-8 text-center">
              Premium Turmeric Products
            </h2>
            <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
              <p className="mb-6">
                Our turmeric products are sourced from renowned turmeric-growing
                regions where soil quality, climate, and traditional farming
                practices contribute to superior color, aroma, and curcumin
                content. Each turmeric variety is carefully cultivated,
                harvested at the right stage of maturity, and processed using
                established methods to preserve its natural properties and
                quality.
              </p>
              <p className="mb-6">
                The harvested turmeric rhizomes are properly boiled, dried, and
                polished before grading. This process enhances color retention,
                improves shelf life, and ensures uniform quality. We offer
                turmeric in both whole finger and powdered forms, catering to
                the needs of culinary, medicinal, and industrial buyers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Varieties Section */}
      <section className="py-14 bg-gradient-to-r from-yellow-600 to-orange-600">
        <div className="max-w-[1150px] mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 text-center">
            Our Turmeric Varieties
          </h2>

          {/* Variety Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {varieties.map((variety, index) => (
              <button
                key={index}
                onClick={() => setActiveVariety(index)}
                className={`px-7 py-3 rounded-full font-bold transition-all duration-300 text-base ${
                  activeVariety === index
                    ? 'bg-white text-yellow-600 shadow-lg transform scale-105'
                    : 'bg-yellow-500 text-white hover:bg-yellow-400'
                }`}
              >
                {variety.name}
              </button>
            ))}
          </div>

          {/* Active Variety Details - Wider Layout (60/40) */}
          <div className="bg-white rounded-2xl p-5 shadow-2xl max-w-[1150px] mx-auto">
            <div className="grid md:grid-cols-5 gap-0">
              {/* Image Section - 60% width (3 columns) */}
              <div className="md:col-span-3">
                <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src={varieties[activeVariety].image}
                    alt={varieties[activeVariety].name}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 text-white">
                    <h3 className="text-lg font-bold drop-shadow-lg">
                      {varieties[activeVariety].name}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Content Section - 40% width (2 columns) */}
              <div className="md:col-span-2 p-4 h-[400px] overflow-y-auto">
                <h3 className="text-lg font-bold text-yellow-900 mb-2">
                  {varieties[activeVariety].name}
                </h3>
                <p className="text-gray-800 mb-3 leading-relaxed text-sm">
                  {varieties[activeVariety].description}
                </p>

                {/* Features */}
                <div className="mb-3">
                  <h4 className="font-semibold text-yellow-800 mb-2 text-sm">
                    Key Features:
                  </h4>
                  <div className="grid grid-cols-1 gap-1.5">
                    {varieties[activeVariety].features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                        <span className="text-xs text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specifications */}
                <div className="bg-yellow-50 rounded-lg p-3 mb-3">
                  <h4 className="font-semibold text-yellow-800 mb-2 text-sm">
                    Specifications:
                  </h4>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-700">HS Code:</span>
                      <span className="font-medium">
                        {varieties[activeVariety].hsCode}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">MOQ:</span>
                      <span className="font-medium">
                        {varieties[activeVariety].moq}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Moisture:</span>
                      <span className="font-medium">
                        {varieties[activeVariety].moisture}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Shelf Life:</span>
                      <span className="font-medium">
                        {varieties[activeVariety].shelfLife}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Uses */}
                <div className="p-2 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2 flex items-center gap-2 text-sm">
                    <Globe className="w-3 h-3" />
                    Applications:
                  </h4>
                  <p className="text-gray-800 text-xs">
                    {varieties[activeVariety].uses}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-900 mb-12 text-center">
            Available Turmeric Products
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Finger Turmeric */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🧄</span>
                </div>
                <h3 className="text-2xl font-bold text-yellow-900 mb-4">
                  Finger Turmeric
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-gray-800">
                    Alleppey Finger Turmeric
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-gray-800">Lakadong Turmeric</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-gray-800">Selam Turmeric Finger</span>
                </li>
              </ul>
            </div>

            {/* Turmeric Powder */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">✨</span>
                </div>
                <h3 className="text-2xl font-bold text-yellow-900 mb-4">
                  Turmeric Powder
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-800">
                    Alleppey Turmeric Powder
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-800">
                    Lakadong Turmeric Powder
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-800">Selam Turmeric Powder</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase Slideshow */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Product Showcase
            </h2>
            <div className="w-16 h-1 bg-yellow-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our premium turmeric varieties with detailed information
            </p>
          </div>
          <TurmericSlideshow varieties={varieties} />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-900 mb-12 text-center">
            Why Choose Our Turmeric Products
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: 'Superior Quality',
                description:
                  'Sourced from renowned growing regions with superior color and aroma',
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: 'High Curcumin',
                description:
                  'Premium varieties with exceptional curcumin content and medicinal properties',
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'Hygienic Processing',
                description:
                  'Processed under controlled conditions maintaining purity and quality',
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: 'Export Grade',
                description:
                  'Suitable for global markets with customizable packaging options',
              },
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 text-yellow-600 group-hover:bg-yellow-600 group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-yellow-900 mb-3">
                  {item.title}
                </h3>
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
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-900 mb-8">
              Applications
            </h2>
            <p className="text-lg text-gray-800 mb-8">
              Our turmeric products are perfect for culinary use, spice blends,
              food processing industries, traditional medicine, nutraceuticals,
              cosmetics, and wellness products.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                'Culinary Use',
                'Spice Blends',
                'Food Processing',
                'Traditional Medicine',
                'Nutraceuticals',
                'Cosmetics & Wellness',
              ].map((application, index) => (
                <div
                  key={index}
                  className="bg-yellow-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="text-3xl mb-3">🧄</div>
                  <h3 className="font-semibold text-yellow-800">
                    {application}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-yellow-700 to-orange-700 text-white rounded-2xl p-8 shadow-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Partner With Us?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Contact us today to discuss your turmeric requirements and
              discover how we can support your business with premium quality
              turmeric products.
            </p>
            <button className="bg-white text-yellow-800 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg">
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

export default TurmericPage
