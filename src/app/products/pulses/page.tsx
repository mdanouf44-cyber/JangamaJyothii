'use client'

import { useState, useEffect } from 'react'
import {
  Leaf,
  Award,
  Shield,
  Globe,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import Image from 'next/image'
import ProductGrid from '@/components/ProductGrid'

// Pulses Product Slideshow Component
const PulsesSlideshow = ({ varieties }: { varieties: any[] }) => {
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
            <div className="relative h-72 lg:h-80 bg-gradient-to-br from-green-50 to-emerald-50">
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
              <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Premium Pulse
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
          className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-green-500 transition-all duration-300 shadow-sm hover:shadow-md"
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
                  ? 'bg-green-600 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-green-500 transition-all duration-300 shadow-sm hover:shadow-md"
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
                ? 'bg-green-600 text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-green-50 hover:border-green-300'
            }`}
          >
            <span className="hidden sm:inline">{variety.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

const PulsesPage = () => {
  const [activeVariety, setActiveVariety] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

  const pulsesVideos = ['/pulses-video-1.mp4', '/pulses-video-2.mp4']

  useEffect(() => {
    setIsVisible(true)

    // Preload videos for better performance
    const preloadVideos = () => {
      pulsesVideos.forEach((videoSrc, index) => {
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
      setCurrentVideoIndex(prevIndex => (prevIndex + 1) % pulsesVideos.length)
    }, 8000)

    preloadVideos()
    return () => clearInterval(videoInterval)
  }, [])

  const varieties = [
    {
      name: 'Black Chickpeas (Kala Chana)',
      image: '/black-chickpeas.jpg',
      description:
        'Black chickpeas are a hardy pulse variety known for their firm texture, nutty flavor, and high nutritional value. They are cultivated in dry regions and harvested at full maturity to ensure uniform grain size and natural hardness.',
      features: [
        'Firm Texture',
        'Nutty Flavor',
        'High Nutrition',
        'Natural Hardness',
      ],
      hsCode: '071320',
      moq: '1 Metric Ton',
      moisture: 'Max 12%',
      shelfLife: '12–18 months',
      uses: 'Traditional cuisines, snacks, curries, flour production, food processing industries',
    },
    {
      name: 'Black Gram (Urad Dal)',
      image: '/black-gram.jpg',
      description:
        'Black gram is a popular pulse valued for its high protein content, creamy texture when cooked, and strong binding properties. It is cultivated under controlled farming practices and processed carefully to maintain grain integrity and freshness.',
      features: [
        'High Protein',
        'Creamy Texture',
        'Binding Properties',
        'Premium Quality',
      ],
      hsCode: '071331',
      moq: '1 Metric Ton',
      moisture: 'Max 12%',
      shelfLife: '12–18 months',
      uses: 'Traditional dishes, fermented foods, batters, papad manufacturing, food processing',
    },
    {
      name: 'Chickpeas (Split)',
      image: '/chickpeas-split.jpg',
      description:
        'Split chickpeas are produced by dehusking and splitting whole chickpeas, resulting in uniform yellow pulses with smooth texture. This form cooks faster and is widely used in daily cooking and food processing applications.',
      features: [
        'Uniform Yellow',
        'Smooth Texture',
        'Fast Cooking',
        'Processed Form',
      ],
      hsCode: '071320',
      moq: '1 Metric Ton',
      moisture: 'Max 12%',
      shelfLife: '12–18 months',
      uses: 'Curries, snacks, flour milling, ready-to-cook food products',
    },
    {
      name: 'Green Gram (Moong Beans)',
      image: '/green-gram.jpg',
      description:
        'Green gram is a highly nutritious pulse known for its easy digestibility, mild flavor, and high protein content. It is harvested at the right maturity stage and processed to retain its natural green color and nutritional benefits.',
      features: [
        'Easy Digestibility',
        'Mild Flavor',
        'High Protein',
        'Natural Green Color',
      ],
      hsCode: '071331',
      moq: '1 Metric Ton',
      moisture: 'Max 12%',
      shelfLife: '12 months',
      uses: 'Household cooking, sprouts, soups, snacks, health-oriented food products',
    },
    {
      name: 'Horse Gram',
      image: '/horse-gram.jpg',
      description:
        'Horse gram is a traditional pulse valued for its high fiber content and strong nutritional profile. It is cultivated in dry regions and known for its resilience and long storage life. The grains are processed carefully to remove impurities.',
      features: [
        'High Fiber',
        'Strong Nutrition',
        'Resilient',
        'Long Storage Life',
      ],
      hsCode: '071390',
      moq: '1 Metric Ton',
      moisture: 'Max 12%',
      shelfLife: '18–24 months',
      uses: 'Traditional cuisines, health foods, animal feed, food processing industries',
    },
    {
      name: 'Pigeon Peas (Toor Dal)',
      image: '/pigeon-peas.jpg',
      description:
        'Pigeon peas are one of the most commonly consumed pulses, known for their soft texture, mild taste, and high protein content. They are harvested at optimal maturity and processed to ensure uniform grain size and consistent cooking quality.',
      features: ['Soft Texture', 'Mild Taste', 'High Protein', 'Uniform Size'],
      hsCode: '071360',
      moq: '1 Metric Ton',
      moisture: 'Max 12%',
      shelfLife: '12–18 months',
      uses: 'Household cooking, catering services, food processing, packaged food products',
    },
  ]

  // Floating pulse grains animation
  const floatingPulses = Array.from({ length: 12 }, (_, i) => (
    <div
      key={i}
      className={`absolute text-green-600 text-xl opacity-20 animate-pulse`}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${i * 0.5}s`,
        animationDuration: `${2 + Math.random() * 3}s`,
      }}
    >
      
    </div>
  ))

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Floating Pulses Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {floatingPulses}
      </div>

      {/* Hero Section with Rotating Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Rotating Video Background */}
        <div className="absolute inset-0 w-full h-full">
          {pulsesVideos.map((videoSrc, index) => (
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
            {pulsesVideos.map((_, index) => (
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
              <span className="bg-gradient-to-r from-green-300 via-emerald-300 to-teal-300 bg-clip-text text-transparent animate-gradient">
                Premium Pulses
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-3xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed drop-shadow-lg font-light">
              Protein-Rich Nutritional Powerhouses from Sustainable Farms
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {[
                'High Protein',
                'Rich in Fiber',
                'Export Grade',
                'Sustainable Farming',
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
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-8 text-center">
              Premium Pulse Products
            </h2>
            <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
              <p className="mb-6">
                Our pulses are sourced from carefully selected farms where crops
                are cultivated using sustainable agricultural practices and
                natural growing methods. Each pulse variety is harvested at
                optimal maturity to ensure maximum nutritional value, uniform
                grain size, and consistent quality.
              </p>
              <p className="mb-6">
                We work closely with farmers and processing units to maintain
                traceability and meet international quality standards. After
                harvesting, the pulses undergo thorough cleaning, sorting, and
                grading to remove foreign matter, damaged grains, and
                impurities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Varieties Section */}
      <section className="py-14 bg-gradient-to-r from-green-700 to-emerald-700">
        <div className="max-w-[1150px] mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 text-center">
            Our Pulse Varieties
          </h2>

          {/* Variety Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {varieties.map((variety, index) => (
              <button
                key={index}
                onClick={() => setActiveVariety(index)}
                className={`px-7 py-3 rounded-full font-bold transition-all duration-300 text-base ${
                  activeVariety === index
                    ? 'bg-white text-green-700 shadow-lg transform scale-105'
                    : 'bg-green-600 text-white hover:bg-green-500'
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
                <h3 className="text-lg font-bold text-green-900 mb-2">
                  {varieties[activeVariety].name}
                </h3>
                <p className="text-gray-800 mb-3 leading-relaxed text-sm">
                  {varieties[activeVariety].description}
                </p>

                {/* Features */}
                <div className="mb-3">
                  <h4 className="font-semibold text-green-800 mb-2 text-sm">
                    Key Features:
                  </h4>
                  <div className="grid grid-cols-1 gap-1.5">
                    {varieties[activeVariety].features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                        <span className="text-xs text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specifications */}
                <div className="bg-green-50 rounded-lg p-3 mb-3">
                  <h4 className="font-semibold text-green-800 mb-2 text-sm">
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
                <div className="p-2 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2 text-sm">
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

      {/* Product Showcase Slideshow */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Product Showcase
            </h2>
            <div className="w-16 h-1 bg-green-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our premium pulse products with detailed information
            </p>
          </div>
          <PulsesSlideshow varieties={varieties} />
        </div>
      </section>

      {/* Nutritional Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-12 text-center">
            Nutritional Powerhouse
          </h2>

          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-lg text-gray-800 mb-8">
              Our pulses are rich sources of protein, dietary fiber, vitamins,
              and essential minerals, making them an important component of
              balanced diets worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'High Protein Content',
                description:
                  'Essential amino acids for muscle development and overall health',
                icon: '',
              },
              {
                title: 'Rich in Fiber',
                description:
                  'Promotes digestive health and helps maintain blood sugar levels',
                icon: '',
              },
              {
                title: 'Vitamins & Minerals',
                description:
                  'Essential nutrients including iron, folate, potassium, and magnesium',
                icon: '',
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-green-50 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-green-800 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-12 text-center">
            Why Choose Our Pulses
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Leaf className="w-8 h-8" />,
                title: 'Naturally Grown',
                description:
                  'Naturally grown and carefully processed using sustainable agricultural practices',
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: 'High Nutrition',
                description:
                  'High nutritional value and consistent quality with maximum protein content',
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'Long Shelf Life',
                description:
                  'Low moisture content and long shelf life with proper storage conditions',
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: 'Export Grade',
                description:
                  'Hygienically packed and export-grade standards for international markets',
              },
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-700 group-hover:bg-green-700 group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-green-900 mb-3">
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
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-8">
              Applications
            </h2>
            <p className="text-lg text-gray-800 mb-8">
              Our pulses are perfect for household cooking, traditional
              cuisines, food processing industries, protein-rich food products,
              catering services, and bulk distribution markets.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                'Household Cooking',
                'Traditional Cuisines',
                'Food Processing',
                'Protein-Rich Products',
                'Catering Services',
                'Bulk Distribution',
              ].map((application, index) => (
                <div
                  key={index}
                  className="bg-green-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-semibold text-green-800">
                    {application}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-8">
              Quality Assurance
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-green-800 mb-4">
                  Processing Excellence
                </h3>
                <p className="text-gray-800">
                  Advanced processing techniques are used to ensure uniformity,
                  low moisture content, and extended shelf life. All products
                  are handled under hygienic conditions to preserve freshness
                  and nutritional integrity.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-green-800 mb-4">
                  Export Standards
                </h3>
                <p className="text-gray-800">
                  Packaging is done using food-grade materials to protect the
                  products from moisture, pests, and contamination during
                  storage and transportation. Custom packaging options are
                  available based on buyer requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-700 to-emerald-700">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-green-800 to-emerald-800 text-white rounded-2xl p-8 shadow-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Partner With Us?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Contact us today to discuss your pulse requirements and discover
              how we can support your business with premium quality pulse
              products.
            </p>
            <button className="bg-white text-green-800 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg">
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

export default PulsesPage
