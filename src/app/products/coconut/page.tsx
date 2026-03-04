'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import {
  Leaf,
  Award,
  Globe,
  Package,
  Clock,
  Thermometer,
  Droplets,
  Shield,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import { ProductGrid } from '@/components'

// Coconut Product Slideshow Component
const CoconutProductSlideshow = ({ variants }: { variants: any[] }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-rotate slides every 2 seconds (showing 2 products at a time)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 2) % variants.length)
    }, 2000)

    return () => clearInterval(timer)
  }, [variants.length])

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 2) % variants.length)
  }

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 2 + variants.length) % variants.length)
  }

  // Get current two products to display
  const getCurrentProducts = () => {
    const products = []
    products.push(variants[currentSlide])
    products.push(variants[(currentSlide + 1) % variants.length])
    return products
  }

  const currentProducts = getCurrentProducts()
  const totalSlides = Math.ceil(variants.length / 2)

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
                {product.icon} Premium Quality
              </div>
              {/* Product Number */}
              <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                {currentSlide + index + 1} / {variants.length}
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
        {variants.map((variant, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(Math.floor(index / 2) * 2)}
            className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
              currentSlide <= index && index < currentSlide + 2
                ? 'bg-green-600 text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-green-50 hover:border-green-300'
            }`}
          >
            <span className="text-base">{variant.icon}</span>
            <span className="hidden sm:inline">{variant.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

// Coconut variants data - moved outside component
const variants = [
  {
    id: 'fresh-coconut',
    name: 'Fresh Coconut',
    description:
      'Our fresh coconuts are harvested from healthy, mature coconut palms grown under favorable climatic conditions. Each coconut is carefully selected to ensure good kernel thickness, natural sweetness, and freshness.',
    features: [
      'Natural Sweetness',
      'Good Kernel Thickness',
      'Hygienic Processing',
      'Extended Shelf Life',
    ],
    specs: {
      hsCode: '080119',
      moq: '1 Metric Ton',
      shelfLife: '2–3 months',
      moisture: 'Natural moisture content',
    },
    color: 'from-green-600 to-emerald-800',
    icon: '🌿',
    image: '/fresh-coconut.jpg',
  },
  {
    id: 'copra-dried-coconut',
    name: 'Copra (Dried Coconut)',
    description:
      'Copra is produced by drying mature coconut kernels under controlled conditions to reduce moisture content and increase oil yield. Our copra is known for its uniform drying, high oil content, and low moisture level.',
    features: [
      'Uniform Drying',
      'High Oil Content',
      'Low Moisture',
      'Export Grade',
    ],
    specs: {
      hsCode: '120300',
      moq: '1 Metric Ton',
      shelfLife: '12–18 months',
      moisture: 'Max 6–7%',
    },
    color: 'from-amber-600 to-orange-800',
    icon: '🌰',
    image: '/copra-dried-coconut.jpg',
  },
  {
    id: 'virgin-coconut-oil',
    name: 'Virgin Coconut Oil',
    description:
      'Virgin coconut oil is extracted from fresh coconut kernels using cold-processing methods without the use of chemicals or high heat. This process helps retain the natural aroma, nutrients, and beneficial properties of coconut oil.',
    features: [
      'Cold-Processed',
      'Chemical-Free',
      'Natural Aroma',
      'Rich in MCFAs',
    ],
    specs: {
      hsCode: '151319',
      moq: '500 KG',
      shelfLife: '18–24 months',
      moisture: 'Max 0.1%',
    },
    color: 'from-yellow-500 to-amber-700',
    icon: '🛢️',
    image: '/virgin-coconut-oil.jpg',
  },
  {
    id: 'refined-coconut-oil',
    name: 'Refined Coconut Oil',
    description:
      'Refined coconut oil is produced from dried copra and refined to remove impurities, odor, and color, resulting in a stable and neutral oil. This oil is suitable for high-temperature cooking and large-scale food manufacturing.',
    features: [
      'Neutral Taste',
      'High Temperature Stable',
      'Long Shelf Life',
      'Consistent Quality',
    ],
    specs: {
      hsCode: '151319',
      moq: '1 Metric Ton',
      shelfLife: '18–24 months',
      moisture: 'Max 0.1%',
    },
    color: 'from-blue-500 to-teal-700',
    icon: '🏭',
    image: '/refined-coconut-oil.jpg',
  },
  {
    id: 'coconut-shell-charcoal-powder',
    name: 'Coconut Shell Charcoal Powder',
    description:
      'Coconut shell charcoal powder is produced from mature coconut shells through controlled carbonization. The resulting charcoal is high in carbon content, low in ash, and environmentally friendly.',
    features: [
      'High Carbon Content',
      'Low Ash',
      'Eco-Friendly',
      'Chemical-Free',
    ],
    specs: {
      hsCode: '440290',
      moq: '1 Metric Ton',
      shelfLife: '24 months',
      moisture: 'Max 5%',
    },
    color: 'from-gray-700 to-black',
    icon: '⚫',
    image: '/coconut-shell-charcoal-powder.jpg',
  },
  {
    id: 'coco-fiber',
    name: 'Coco Fiber',
    description:
      'Coco fiber is a natural fiber extracted from the outer husk of mature coconuts. It is known for its high strength, durability, resistance to saltwater, and eco-friendly nature.',
    features: [
      'High Strength',
      'Saltwater Resistant',
      'Eco-Friendly',
      'Natural Resilience',
    ],
    specs: {
      hsCode: '530500',
      moq: '1 Metric Ton',
      shelfLife: '24 months',
      moisture: 'Max 15%',
    },
    color: 'from-brown-600 to-amber-800',
    icon: '🧶',
    image: '/coco-fiber.jpg',
  },
  {
    id: 'cocopeat',
    name: 'Cocopeat',
    description:
      'Cocopeat, also known as coir pith, is a natural by-product obtained during the extraction of coconut fiber. It is widely valued for its excellent water retention capacity, high porosity, and eco-friendly properties.',
    features: [
      'Water Retention',
      'High Porosity',
      'Soil Conditioning',
      'Organic Farming',
    ],
    specs: {
      hsCode: '270300',
      moq: '1 Metric Ton',
      shelfLife: '24–36 months',
      moisture: 'Max 15–18%',
    },
    color: 'from-orange-600 to-red-700',
    icon: '🌱',
    image: '/cocopeat.jpg',
  },
  {
    id: 'coir-fiber-yarn',
    name: 'Coir Fiber Yarn',
    description:
      'Coir fiber yarn is produced by spinning natural coconut fibers into uniform yarn using traditional and mechanized processes. It is known for its high tensile strength, durability, and resistance to moisture.',
    features: [
      'High Tensile Strength',
      'Moisture Resistant',
      'Biodegradable',
      'Various Thicknesses',
    ],
    specs: {
      hsCode: '530820',
      moq: '500 KG',
      shelfLife: '24 months',
      moisture: 'Max 15%',
    },
    color: 'from-yellow-600 to-orange-700',
    icon: '🪢',
    image: '/coir-fiber-yarn.jpg',
  },
]

const CoconutPage = () => {
  const [activeVariant, setActiveVariant] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

  const coconutVideos = ['/coconut-video-1.mp4', '/coconut-video-2.mp4']

  useEffect(() => {
    setIsVisible(true)

    // Preload videos for better performance
    const preloadVideos = () => {
      coconutVideos.forEach(videoSrc => {
        const video = document.createElement('video')
        video.preload = 'metadata'
        video.src = videoSrc
      })
    }

    // Rotate videos every 10 seconds
    const videoInterval = setInterval(() => {
      setCurrentVideoIndex(prevIndex => (prevIndex + 1) % coconutVideos.length)
    }, 10000)

    preloadVideos()
    return () => clearInterval(videoInterval)
  }, [])

  // Handle anchor link navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash) {
        const index = variants.findIndex(v => v.id === hash)
        if (index !== -1) {
          setActiveVariant(index)
          setTimeout(() => {
            const element = document.getElementById(hash)
            if (element) {
              const yOffset = -100
              const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
              window.scrollTo({ top: y, behavior: 'smooth' })
            }
          }, 200)
        }
      }
    }

    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const qualityPoints = [
    {
      icon: Leaf,
      title: 'Premium Quality',
      desc: 'Sourced directly from trusted farms',
    },
    {
      icon: Award,
      title: 'Export Grade',
      desc: 'Hygienically processed and export-grade quality',
    },
    {
      icon: Shield,
      title: 'High Oil Yield',
      desc: 'High oil yield and long shelf life',
    },
    {
      icon: Globe,
      title: 'Eco-Friendly',
      desc: 'Eco-friendly and sustainable production',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Hero Section with Rotating Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Rotating Video Background */}
        <div className="absolute inset-0 w-full h-full">
          {coconutVideos.map((videoSrc, index) => (
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
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div
            className={`transform transition-all duration-1500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
            suppressHydrationWarning
          >
            {/* Main Title */}
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white drop-shadow-2xl">
              <span className="bg-gradient-to-r from-white via-green-100 to-emerald-100 bg-clip-text text-transparent animate-gradient">
                Premium Coconut
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-3xl text-white mb-8 max-w-4xl mx-auto leading-relaxed drop-shadow-lg font-light">
              Sourced from carefully selected farms with fertile soil, favorable
              climatic conditions, and traditional coconut cultivation practices
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {[
                'Premium Quality',
                'Eco-Friendly',
                'Export Grade',
                'Sustainable',
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

      {/* Coconut Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Coconut Process
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From farm to final product - discover our commitment to quality at
              every step
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: '01',
                title: 'Farm Selection',
                description:
                  'Sourced from carefully selected farms with fertile soil, favorable climatic conditions, and traditional coconut cultivation practices.',
                icon: '🌱',
                features: [
                  'Fertile Soil',
                  'Favorable Climate',
                  'Traditional Methods',
                  'Quality Farms',
                ],
              },
              {
                step: '02',
                title: 'Quality Processing',
                description:
                  'Each coconut is harvested at the right stage of maturity and processed under hygienic conditions using modern techniques.',
                icon: '⚙️',
                features: [
                  'Right Maturity',
                  'Hygienic Processing',
                  'Modern Techniques',
                  'Quality Control',
                ],
              },
              {
                step: '03',
                title: 'Global Export',
                description:
                  'Products are packaged and stored with special attention to maintain freshness and prevent contamination during transportation.',
                icon: '🌍',
                features: [
                  'Custom Packaging',
                  'Freshness Maintained',
                  'Global Standards',
                  'Safe Transportation',
                ],
              },
            ].map((step, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 200 + 600}ms` }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-600 text-white font-bold text-lg rounded-full flex items-center justify-center mr-4">
                    {step.step}
                  </div>
                  <div className="text-3xl">{step.icon}</div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {step.description}
                </p>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
                    Key Features
                  </h4>
                  {step.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Points */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-12">
            Why Choose Our Coconut Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityPoints.map((point, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transform transition-all duration-500 hover:-translate-y-2 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 100 + 600}ms` }}
              >
                <point.icon className="w-12 h-12 text-green-600 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-green-800 mb-2 text-center">
                  {point.title}
                </h3>
                <p className="text-gray-600 text-center">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coconut Heritage Section */}
      <section className="py-20 bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div
              className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                Coconut Excellence
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto mb-8"></div>
              <p className="text-xl md:text-2xl text-white leading-relaxed mb-12">
                "From the tropical groves where our coconuts grow to the careful
                processing that preserves their natural goodness, every product
                represents our commitment to quality, sustainability, and
                excellence."
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { number: '500+', label: 'Partner Farms', icon: '🌱' },
                  { number: '15+', label: 'Years Experience', icon: '🏆' },
                  { number: '30+', label: 'Countries', icon: '🌍' },
                  { number: '100%', label: 'Natural', icon: '🌿' },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className={`text-center bg-white/15 backdrop-blur-sm rounded-xl p-6 border border-white/30 transform transition-all duration-700 hover:bg-white/25 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                    style={{ transitionDelay: `${index * 200 + 800}ms` }}
                  >
                    <div className="text-4xl mb-3">{stat.icon}</div>
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                      {stat.number}
                    </div>
                    <div className="text-white font-medium text-lg">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coconut Variants */}
      <section className="py-14 bg-gradient-to-br from-emerald-900 via-green-900 to-teal-900 relative">
        <div className="max-w-[1150px] mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-5 drop-shadow-2xl">
            Available Products
          </h2>

          {/* Invisible anchor points for each variant */}
          {variants.map((variant) => (
            <div key={variant.id} id={variant.id} className="absolute -top-32" />
          ))}

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {variants.map((variant, index) => (
              <button
                key={index}
                onClick={() => setActiveVariant(index)}
                className={`px-7 py-3 rounded-full font-bold text-base transition-all duration-300 transform hover:scale-105 border-2 shadow-xl flex items-center gap-2 ${
                  activeVariant === index
                    ? 'bg-white text-green-900 shadow-2xl border-white scale-105'
                    : 'bg-green-900/50 backdrop-blur-sm text-white border-white/60 hover:bg-white/20 hover:border-white'
                }`}
              >
                <span className="text-lg">{variant.icon}</span>
                {variant.name}
              </button>
            ))}
          </div>

          <div className="max-w-[1150px] mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-white/30">
              <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-0">
                {/* Image Section */}
                <div className="bg-gray-100 min-h-[400px] relative overflow-hidden">
                  {/* Display actual coconut images */}
                  <div className="relative w-full h-full min-h-[380px]">
                    <Image
                      src={variants[activeVariant].image || ''}
                      alt={variants[activeVariant].name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 60vw"
                      className="object-cover"
                      priority={activeVariant === 0}
                    />
                    {/* Overlay label */}
                    <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-md px-4 py-2 rounded-lg border border-white/30 z-10">
                      <p className="text-white font-bold text-sm">
                        Premium Quality
                      </p>
                      <p className="text-green-200 text-xs">
                        {variants[activeVariant].name}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-white">
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-bold">
                      Premium Coconut Product
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-green-900 mb-2 leading-tight">
                    {variants[activeVariant].name}
                  </h3>

                  <p className="text-gray-700 leading-relaxed mb-3 text-sm">
                    {variants[activeVariant].description}
                  </p>

                  <div className="mb-3">
                    <h4 className="text-sm font-bold text-green-900 mb-2 flex items-center gap-2">
                      <Award className="w-3 h-3 text-green-600" />
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {variants[activeVariant].features.map(
                        (feature, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-2 p-1.5 bg-gray-50 rounded-lg shadow-sm border border-green-100 hover:shadow-md transition-shadow"
                          >
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex-shrink-0"></div>
                            <span className="text-gray-800 font-semibold text-xs">
                              {feature}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-900 to-emerald-900 rounded-lg p-3 border border-green-800">
                    <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                      <Package className="w-3 h-3 text-white" />
                      Technical Specifications
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      <div className="bg-white p-1.5 rounded-lg shadow-md border border-green-200">
                        <span className="text-[9px] font-bold text-green-800 uppercase tracking-wide">
                          HS Code
                        </span>
                        <p className="font-bold text-black text-xs mt-0.5">
                          {variants[activeVariant].specs.hsCode}
                        </p>
                      </div>
                      <div className="bg-white p-1.5 rounded-lg shadow-md border border-green-200">
                        <span className="text-[9px] font-bold text-green-800 uppercase tracking-wide">
                          Minimum Order
                        </span>
                        <p className="font-bold text-black text-xs mt-0.5">
                          {variants[activeVariant].specs.moq}
                        </p>
                      </div>
                      <div className="bg-white p-1.5 rounded-lg shadow-md border border-green-200">
                        <span className="text-[9px] font-bold text-green-800 uppercase tracking-wide">
                          Shelf Life
                        </span>
                        <p className="font-bold text-black text-xs mt-0.5">
                          {variants[activeVariant].specs.shelfLife}
                        </p>
                      </div>
                      <div className="bg-white p-1.5 rounded-lg shadow-md border border-green-200">
                        <span className="text-[9px] font-bold text-green-800 uppercase tracking-wide">
                          Moisture Content
                        </span>
                        <p className="font-bold text-black text-xs mt-0.5">
                          {variants[activeVariant].specs.moisture}
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
      <section className="py-16 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Product Showcase
            </h2>
            <div className="w-16 h-1 bg-green-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our premium coconut products with detailed information
              and specifications
            </p>
          </div>

          <CoconutProductSlideshow variants={variants} />
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-green-800 mb-8">
              Applications & Uses
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-12">
              Our coconut products serve diverse industries with applications in
              food processing, edible oil extraction, cosmetics, personal care
              products, water filtration, industrial use, horticulture,
              agriculture, rope making, mat weaving, and sustainable
              manufacturing.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {[
                {
                  icon: '🍽️',
                  label: 'Food Processing',
                  desc: 'Culinary and food manufacturing',
                },
                {
                  icon: '🧴',
                  label: 'Cosmetics',
                  desc: 'Personal care and beauty products',
                },
                {
                  icon: '🌱',
                  label: 'Horticulture',
                  desc: 'Greenhouse cultivation and nurseries',
                },
                {
                  icon: '🪢',
                  label: 'Rope & Textiles',
                  desc: 'Rope making, mats, and yarn production',
                },
                {
                  icon: '💧',
                  label: 'Water Filtration',
                  desc: 'Industrial filtration systems',
                },
                {
                  icon: '🏭',
                  label: 'Industrial Use',
                  desc: 'Manufacturing and processing',
                },
                {
                  icon: '🌾',
                  label: 'Agriculture',
                  desc: 'Soil conditioning and hydroponics',
                },
                {
                  icon: '♻️',
                  label: 'Eco Products',
                  desc: 'Sustainable alternatives to synthetics',
                },
              ].map((application, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="text-4xl mb-4">{application.icon}</div>
                  <h3 className="font-bold text-green-800 mb-2">
                    {application.label}
                  </h3>
                  <p className="text-sm text-gray-600">{application.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-green-900 to-emerald-900 text-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Source Premium Coconut Products?
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Contact us today to discuss your coconut product requirements
                and discover how we can support your business with premium
                quality, sustainable coconut products.
              </p>
              <button className="bg-white text-green-900 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <ProductGrid />
    </div>
  )
}

export default CoconutPage
