'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Sparkles, Award, Shield, Globe, Package, Wheat, ChevronLeft, ChevronRight } from 'lucide-react'
import ProductGrid from '@/components/ProductGrid'

// Grains & Millets Product Slideshow Component
const GrainsMilletsSlideshow = ({ varieties }: { varieties: any[] }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-rotate slides every 2 seconds (showing 2 products at a time)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 2) % varieties.length)
    }, 2000)

    return () => clearInterval(timer)
  }, [varieties.length])

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 2) % varieties.length)
  }

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 2 + varieties.length) % varieties.length)
  }

  // Get current two products to display
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
      {/* Main Slideshow Container - Two Products Side by Side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {currentProducts.map((product, index) => (
          <div
            key={`${currentSlide}-${index}`}
            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 transform transition-all duration-2000 ease-in-out"
          >
            {/* Product Image - Full Height and Fully Visible */}
            <div className="relative h-72 lg:h-80 bg-gradient-to-br from-amber-50 to-yellow-50">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain transition-all duration-2000 p-4"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={index === 0}
                unoptimized
              />
              {/* Product Badge */}
              <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                🌾 Premium Grain
              </div>
              {/* Product Number */}
              <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                {currentSlide + index + 1} / {varieties.length}
              </div>
            </div>

            {/* Product Content - Simplified */}
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

      {/* Navigation Controls */}
      <div className="flex justify-between items-center mt-6">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-amber-500 transition-all duration-300 shadow-sm hover:shadow-md"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
          <span className="text-gray-700 font-medium">Previous</span>
        </button>

        {/* Slide Indicators - Updated for 2-product slides */}
        <div className="flex space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index * 2)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                Math.floor(currentSlide / 2) === index
                  ? 'bg-amber-600 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-amber-500 transition-all duration-300 shadow-sm hover:shadow-md"
        >
          <span className="text-gray-700 font-medium">Next</span>
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Product Navigation Pills */}
      <div className="flex flex-wrap justify-center gap-2 mt-6">
        {varieties.map((variety, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(Math.floor(index / 2) * 2)}
            className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
              currentSlide <= index && index < currentSlide + 2
                ? 'bg-amber-600 text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-amber-50 hover:border-amber-300'
            }`}
          >
            <span className="text-base">🌾</span>
            <span className="hidden sm:inline">{variety.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

const GrainsMilletsPage = () => {
  const [activeVariety, setActiveVariety] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

  const videos = ['/gm 1.mp4', '/gm 2.mp4', '/gm 3.mp4']

  useEffect(() => {
    setIsVisible(true)

    // Auto-rotate videos every 6 seconds
    const videoInterval = setInterval(() => {
      setCurrentVideoIndex(prev => (prev + 1) % videos.length)
    }, 6000)

    return () => clearInterval(videoInterval)
  }, [])

  const varieties = [
    {
      name: 'Finger Millet (Ragi)',
      description:
        'Finger millet, commonly known as Ragi, is a highly nutritious cereal grain rich in calcium, iron, and dietary fiber. This drought-resistant crop is cultivated in semi-arid regions and is valued for its exceptional nutritional profile and long shelf life. Ragi is gluten-free and has a low glycemic index, making it ideal for health-conscious consumers.',
      features: [
        'High Calcium',
        'Rich in Iron',
        'Gluten-Free',
        'Low Glycemic Index',
      ],
      specs: {
        hsCode: '100829',
        moq: '1000 KG',
        moisture: 'Max 12%',
        shelfLife: '12 months',
      },
      color: 'from-amber-600 to-orange-700',
      image: '/Finger Millet (Ragi).jpg',
    },
    {
      name: 'Pearl Millet (Bajra)',
      description:
        'Pearl millet, known as Bajra, is a drought-tolerant cereal grain with high nutritional value and excellent storage properties. It is rich in protein, fiber, and essential minerals, making it a staple food in arid regions. Pearl millet is naturally gluten-free and provides sustained energy, making it popular among health-conscious consumers.',
      features: [
        'High Protein',
        'Drought Tolerant',
        'Rich in Minerals',
        'Sustained Energy',
      ],
      specs: {
        hsCode: '100829',
        moq: '1000 KG',
        moisture: 'Max 12%',
        shelfLife: '12 months',
      },
      color: 'from-yellow-600 to-amber-700',
      image: '/Pearl Millet (Bajra).jpg',
    },
    {
      name: 'Foxtail Millet',
      description:
        'Foxtail millet is an ancient grain known for its excellent nutritional profile and easy digestibility. It is rich in protein, dietary fiber, and essential amino acids. This millet variety has a mild, nutty flavor and is naturally gluten-free. It cooks quickly and is versatile for various culinary applications.',
      features: [
        'Easy Digestibility',
        'Rich in Protein',
        'Nutty Flavor',
        'Quick Cooking',
      ],
      specs: {
        hsCode: '100829',
        moq: '1000 KG',
        moisture: 'Max 12%',
        shelfLife: '12 months',
      },
      color: 'from-green-600 to-emerald-700',
      image: '/Foxtail Millet.jpg',
    },
    {
      name: 'Little Millet',
      description:
        'Little millet is a small-grained cereal with exceptional nutritional benefits and excellent storage properties. It is rich in B-vitamins, minerals, and antioxidants. This millet variety has a mild taste and fine texture, making it suitable for various food preparations. It is naturally gluten-free and has good cooking characteristics.',
      features: [
        'Rich in B-Vitamins',
        'Fine Texture',
        'Mild Taste',
        'Good Storage',
      ],
      specs: {
        hsCode: '100829',
        moq: '1000 KG',
        moisture: 'Max 12%',
        shelfLife: '12 months',
      },
      color: 'from-teal-600 to-cyan-700',
      image: '/Little Millet.jpg',
    },
  ]

  const applications = [
    {
      icon: '•',
      title: 'Food Products',
      desc: 'Base ingredient for various food preparations',
    },
    {
      icon: '•',
      title: 'Health Foods',
      desc: 'Nutritious alternatives for health-conscious consumers',
    },
    {
      icon: '•',
      title: 'Baby Foods',
      desc: 'Easily digestible nutrition for infants',
    },
    {
      icon: '•',
      title: 'Bakery Products',
      desc: 'Gluten-free flour for baking applications',
    },
    {
      icon: '•',
      title: 'Breakfast Cereals',
      desc: 'Nutritious breakfast and snack options',
    },
    {
      icon: '•',
      title: 'Traditional Foods',
      desc: 'Traditional recipes and ethnic cuisines',
    },
  ]

  const qualityPoints = [
    {
      icon: Wheat,
      title: 'Premium Quality',
      desc: 'Sourced from certified organic farms',
    },
    {
      icon: Award,
      title: 'Export Grade',
      desc: 'Meets international quality standards',
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      desc: 'Strict cleaning, grading, and sorting processes',
    },
    {
      icon: Globe,
      title: 'Global Supply',
      desc: 'Serving health food markets worldwide',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          {videos.map((video, index) => (
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
              <source src={video} type="video/mp4" />
            </video>
          ))}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Floating Grain Icons */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.4}s`,
                animationDuration: `${5 + Math.random() * 3}s`,
              }}
            >
              <span className="text-white text-3xl">•</span>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div
            className={`transform transition-all duration-1500 ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-20 opacity-0'
            }`}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white drop-shadow-2xl">
              <span className="bg-gradient-to-r from-amber-300 via-yellow-300 to-orange-300 bg-clip-text text-transparent animate-gradient">
                Grains & Millets
              </span>
            </h1>
            <p className="text-xl md:text-3xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed drop-shadow-lg font-light">
              Premium-quality grains and millet varieties sourced from certified
              farms, offering rich nutrition, health benefits, and natural
              goodness
            </p>
          </div>
        </div>
      </section>

      {/* Main Description */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Ancient Grains for Modern Nutrition
            </h2>
            <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
              <p className="text-xl mb-6">
                We offer premium-quality grains and millet varieties sourced
                from certified farms known for producing nutritious and
                high-quality cereals. Our range includes{' '}
                <strong>Finger Millet (Ragi)</strong>,{' '}
                <strong>Pearl Millet (Bajra)</strong>,{' '}
                <strong>Foxtail Millet</strong>, and{' '}
                <strong>Little Millet</strong>, each valued for its distinctive
                nutritional profile, health benefits, and culinary versatility.
              </p>
              <p className="text-lg mb-6">
                These ancient grains are carefully harvested at optimal maturity
                and processed using modern techniques to retain their natural
                nutrients, flavor, and texture. Strict quality control measures
                including cleaning, grading, and sorting ensure uniform quality
                and export-grade standards. The result is premium grains with
                excellent nutritional value, natural taste, and long shelf life.
              </p>
              <p className="text-lg">
                Our grains and millets are widely used in food products, health
                foods, baby foods, bakery applications, and traditional cuisines
                across global markets. They are particularly valued for being
                gluten-free, high in protein, and rich in essential minerals.
                Proper packaging and storage help maintain quality during
                transportation and storage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Grains & Millets Varieties Section */}
      <section className="py-12 bg-gradient-to-br from-amber-900 via-orange-900 to-yellow-900 relative">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4 drop-shadow-2xl">
            Premium Varieties
          </h2>
          <p className="text-base text-amber-200 text-center mb-10 max-w-2xl mx-auto drop-shadow-lg">
            Choose from our exceptional selection of grains and millets, each
            with unique nutritional benefits and superior quality.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {varieties.map((variety, index) => (
              <button
                key={index}
                onClick={() => setActiveVariety(index)}
                className={`px-4 py-2 rounded-full font-bold text-sm transition-all duration-300 transform hover:scale-105 border-2 shadow-xl ${
                  activeVariety === index
                    ? 'bg-white text-amber-900 shadow-2xl border-white scale-105'
                    : 'bg-amber-900/50 backdrop-blur-sm text-white border-white/60 hover:bg-white/20 hover:border-white'
                }`}
              >
                {variety.name}
              </button>
            ))}
          </div>

          <div className="max-w-[1000px] mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-white/30">
              <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-0">
                {/* Image Section */}
                <div className="relative overflow-hidden min-h-[380px]">
                  <Image
                    src={varieties[activeVariety].image}
                    alt={varieties[activeVariety].name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Content Section */}
                <div className="p-4 bg-white">
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-bold">
                      Premium Quality Grains & Millets
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-amber-900 mb-2 leading-tight">
                    {varieties[activeVariety].name}
                  </h3>

                  <p className="text-gray-700 leading-relaxed mb-3 text-sm">
                    {varieties[activeVariety].description}
                  </p>

                  <div className="mb-3">
                    <h4 className="text-sm font-bold text-amber-900 mb-2 flex items-center gap-2">
                      <Sparkles className="w-3 h-3 text-amber-600" />
                      Key Features
                    </h4>
                    <div className="grid grid-cols-2 gap-1.5">
                      {varieties[activeVariety].features.map(
                        (feature, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-2 p-1.5 bg-gray-50 rounded-lg shadow-sm border border-amber-100 hover:shadow-md transition-shadow"
                          >
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full flex-shrink-0"></div>
                            <span className="text-gray-800 font-semibold text-xs">
                              {feature}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-amber-900 to-orange-900 rounded-lg p-3 border border-amber-800">
                    <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                      <Package className="w-3 h-3 text-white" />
                      Technical Specifications
                    </h4>
                    <div className="grid grid-cols-2 gap-1.5">
                      <div className="bg-white p-1.5 rounded-lg shadow-md border border-amber-200">
                        <span className="text-[9px] font-bold text-amber-800 uppercase tracking-wide">
                          HS Code
                        </span>
                        <p className="font-bold text-black text-xs mt-0.5">
                          {varieties[activeVariety].specs.hsCode}
                        </p>
                      </div>
                      <div className="bg-white p-1.5 rounded-lg shadow-md border border-amber-200">
                        <span className="text-[9px] font-bold text-amber-800 uppercase tracking-wide">
                          Min Order
                        </span>
                        <p className="font-bold text-black text-xs mt-0.5">
                          {varieties[activeVariety].specs.moq}
                        </p>
                      </div>
                      <div className="bg-white p-1.5 rounded-lg shadow-md border border-amber-200">
                        <span className="text-[9px] font-bold text-amber-800 uppercase tracking-wide">
                          Moisture
                        </span>
                        <p className="font-bold text-black text-xs mt-0.5">
                          {varieties[activeVariety].specs.moisture}
                        </p>
                      </div>
                      <div className="bg-white p-1.5 rounded-lg shadow-md border border-amber-200">
                        <span className="text-[9px] font-bold text-amber-800 uppercase tracking-wide">
                          Shelf Life
                        </span>
                        <p className="font-bold text-black text-xs mt-0.5">
                          {varieties[activeVariety].specs.shelfLife}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase Slideshow */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Product Showcase
            </h2>
            <div className="w-16 h-1 bg-amber-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our premium grains and millets with detailed information
            </p>
          </div>

          <GrainsMilletsSlideshow varieties={varieties} />
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            Applications & Uses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {applications.map((app, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transform transition-all duration-500 hover:-translate-y-2 border border-amber-200 ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100 + 800}ms` }}
              >
                <div className="text-4xl mb-4 text-center text-amber-600">
                  {app.icon}
                </div>
                <h3 className="text-xl font-bold text-amber-900 mb-3 text-center">
                  {app.title}
                </h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  {app.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Points */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Why Choose Our Grains & Millets
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityPoints.map((point, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transform transition-all duration-500 hover:-translate-y-2 ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100 + 1200}ms` }}
              >
                <point.icon className="w-12 h-12 text-amber-600 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                  {point.title}
                </h3>
                <p className="text-gray-600 text-center">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <ProductGrid />
    </div>
  )
}

export default GrainsMilletsPage
