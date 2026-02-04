'use client'

import { useState, useEffect } from 'react'
import {
  Leaf,
  Recycle,
  Shield,
  Globe,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import Image from 'next/image'
import ProductGrid from '@/components/ProductGrid'

// Areca Plates Product Slideshow Component
const ArecaPlatesSlideshow = ({ varieties }: { varieties: any[] }) => {
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
                🌿 Eco-Friendly
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
            <span className="text-base">🌿</span>
            <span className="hidden sm:inline">{variety.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

const ArecaPlatesPage = () => {
  const [activeVariety, setActiveVariety] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

  const videos = ['/Areca_Plate_Stock_Video_Generation.mp4']

  useEffect(() => {
    setIsVisible(true)

    // Since we only have one video, we can still show it as background
    // If more videos are added later, this will auto-rotate
    const videoInterval = setInterval(() => {
      setCurrentVideoIndex(prev => (prev + 1) % videos.length)
    }, 8000)

    return () => clearInterval(videoInterval)
  }, [])

  const varieties = [
    {
      name: 'Round Areca Plates',
      image: '/round-areca-plates.jpg',
      description:
        'Round areca plates are the most commonly used eco-friendly tableware made from naturally fallen areca palm leaves. These plates are produced by cleaning and heat-pressing the leaves into a smooth, round shape without the use of chemicals or additives.',
      features: [
        'Natural Fiber Structure',
        'Excellent Strength',
        'Chemical-Free',
        'Versatile Use',
      ],
      hsCode: '140490',
      moq: '10,000 pieces',
      shelfLife: '2–3 years',
      packaging: 'Moisture-free cartons with food-grade paper wrapping',
      uses: 'Complete meals, snacks, desserts, casual and formal dining occasions',
    },
    {
      name: 'Square Areca Plates',
      image: '/square-areca-plates.jpg',
      description:
        'Square areca plates are designed for modern food presentation and efficient space usage. Made from natural areca palm leaves, these plates offer the same strength and eco-friendly benefits as round plates, with an added contemporary look.',
      features: [
        'Contemporary Design',
        'Space Efficient',
        'Modern Presentation',
        'Structured Layout',
      ],
      hsCode: '140490',
      moq: '10,000 pieces',
      shelfLife: '2–3 years',
      packaging: 'Food-grade paper bundles in corrugated export cartons',
      uses: 'Catering services, restaurants, buffets, events with structured food arrangement',
    },
    {
      name: 'Compartment Areca Plates',
      image: '/compartment-areca-plates.jpg',
      description:
        'Compartment areca plates are specially designed with multiple sections to separate different food items. These plates are ideal for serving full meals without mixing curries, rice, and side dishes using heat-press technology.',
      features: [
        'Multiple Sections',
        'Uniform Thickness',
        'Strong Compartments',
        'Full Meal Service',
      ],
      hsCode: '140490',
      moq: '10,000 pieces',
      shelfLife: '2–3 years',
      packaging: 'Shrink-wrapped bundles in heavy-duty export cartons',
      uses: 'Catering, temples, weddings, institutional dining, takeaway food services',
    },
    {
      name: 'Areca Bowls',
      image: '/areca-bowls.jpg',
      description:
        'Areca bowls are molded from high-quality areca palm leaves and are ideal for serving gravies, curries, desserts, soups, and snacks. These bowls are naturally strong, leak-resistant, and safe for both hot and cold food items.',
      features: [
        'Leak-Resistant',
        'Shape Retention',
        'Hot & Cold Safe',
        'Liquid Compatible',
      ],
      hsCode: '140490',
      moq: '10,000 pieces',
      shelfLife: '2–3 years',
      packaging: 'Stacked with food-grade paper in export-quality boxes',
      uses: 'Restaurants, food courts, catering events, eco-friendly takeaway services',
    },
  ]

  // Floating leaves animation
  const floatingLeaves = Array.from({ length: 10 }, (_, i) => (
    <div
      key={i}
      className={`absolute text-green-500 text-2xl opacity-30 animate-float`}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${i * 0.8}s`,
        animationDuration: `${4 + Math.random() * 2}s`,
      }}
    >
      🍃
    </div>
  ))

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-lime-50 to-emerald-50">
      {/* Floating Leaves Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {floatingLeaves}
        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-20px) rotate(10deg);
            }
          }
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
        `}</style>
      </div>

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
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Floating Eco Icons */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${4 + Math.random() * 3}s`,
              }}
            >
              <span className="text-white text-2xl">•</span>
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
              <span className="bg-gradient-to-r from-green-300 via-lime-300 to-emerald-300 bg-clip-text text-transparent animate-gradient">
                Areca Plates
              </span>
            </h1>
            <p className="text-xl md:text-3xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed drop-shadow-lg font-light">
              100% Natural, Biodegradable & Eco-Friendly Tableware for
              sustainable dining solutions
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-8 text-center">
              Eco-Friendly Areca Plates
            </h2>
            <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
              <p className="mb-6">
                Our areca plates are manufactured using naturally fallen areca
                palm leaves, making them an eco-friendly, sustainable, and
                biodegradable alternative to plastic and paper-based tableware.
                The leaves are carefully collected, cleaned, and processed
                without the use of chemicals, preservatives, or additives.
              </p>
              <p className="mb-6">
                The production process involves washing the leaves thoroughly
                and heat-pressing them into different shapes and sizes using
                modern machinery. This process enhances durability while
                retaining the natural texture and strength of the areca leaf.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Varieties Section */}
      <section className="py-12 bg-gradient-to-r from-green-700 to-lime-700">
        <div className="max-w-[1100px] mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            Our Areca Plate Varieties
          </h2>

          {/* Variety Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {varieties.map((variety, index) => (
              <button
                key={index}
                onClick={() => setActiveVariety(index)}
                className={`px-6 py-2 rounded-full font-bold transition-all duration-300 text-sm ${
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
          <div className="bg-white rounded-2xl p-5 shadow-2xl max-w-[1050px] mx-auto">
            <div className="grid md:grid-cols-5 gap-0">
              {/* Image Section - 60% width (3 columns) */}
              <div className="md:col-span-3">
                <div className="relative min-h-[380px] rounded-xl overflow-hidden shadow-2xl">
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
              <div className="md:col-span-2 p-4">
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
                      <span className="text-gray-700">Shelf Life:</span>
                      <span className="font-medium">
                        {varieties[activeVariety].shelfLife}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Uses and Packaging */}
                <div className="grid grid-cols-1 gap-2">
                  <div className="p-2 bg-gradient-to-r from-green-50 to-lime-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2 text-sm">
                      <Globe className="w-3 h-3" />
                      Applications:
                    </h4>
                    <p className="text-gray-800 text-xs">
                      {varieties[activeVariety].uses}
                    </p>
                  </div>
                  <div className="p-2 bg-gradient-to-r from-lime-50 to-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2 text-sm">
                      <Shield className="w-3 h-3" />
                      Packaging:
                    </h4>
                    <p className="text-gray-800 text-xs">
                      {varieties[activeVariety].packaging}
                    </p>
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
              Discover our premium areca plate products with detailed
              information
            </p>
          </div>
          <ArecaPlatesSlideshow varieties={varieties} />
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-12 text-center">
            Key Features of Our Areca Plates
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🌿',
                title: '100% Natural',
                description:
                  'Made from naturally fallen areca palm leaves without chemicals',
              },
              {
                icon: '♻️',
                title: 'Biodegradable',
                description:
                  'Completely biodegradable, compostable, and eco-friendly',
              },
              {
                icon: '🚫',
                title: 'Chemical-Free',
                description:
                  'Free from chemicals, preservatives, and artificial coatings',
              },
              {
                icon: '🔥',
                title: 'Heat Resistant',
                description:
                  'Heat resistant and leak proof for hot and cold foods',
              },
              {
                icon: '💪',
                title: 'Strong & Durable',
                description:
                  'Strong, durable, and food-safe for all types of meals',
              },
              {
                icon: '🍽️',
                title: 'Versatile Use',
                description:
                  'Suitable for hot, cold, and oily food items without damage',
              },
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl group-hover:bg-green-600 group-hover:scale-110 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-green-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Impact Section */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-lime-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-8">
              Environmental Impact
            </h2>
            <p className="text-lg text-gray-800 mb-12">
              Our areca plates are widely used for events, catering services,
              restaurants, temples, weddings, festivals, and eco-conscious food
              outlets. After use, the plates naturally decompose within a short
              period, returning to the soil without causing environmental harm.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Leaf className="w-12 h-12" />,
                  title: 'Sustainable Source',
                  description:
                    'Made from naturally fallen leaves, no trees are cut',
                },
                {
                  icon: <Recycle className="w-12 h-12" />,
                  title: 'Zero Waste',
                  description:
                    'Completely biodegradable, returns to soil naturally',
                },
                {
                  icon: <Shield className="w-12 h-12" />,
                  title: 'Plastic Alternative',
                  description:
                    'Eco-friendly replacement for harmful plastic tableware',
                },
              ].map((impact, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="text-green-600 mb-4 flex justify-center">
                    {impact.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-green-800 mb-3">
                    {impact.title}
                  </h3>
                  <p className="text-gray-700">{impact.description}</p>
                </div>
              ))}
            </div>
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
              Perfect for catering services, eco-friendly events, hotels,
              restaurants, food courts, religious functions, weddings,
              festivals, and takeaway food services.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                'Catering Services',
                'Eco-Friendly Events',
                'Hotels & Restaurants',
                'Food Courts',
                'Religious Functions',
                'Weddings & Festivals',
              ].map((application, index) => (
                <div
                  key={index}
                  className="bg-green-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="text-3xl mb-3">🍽️</div>
                  <h3 className="font-semibold text-green-800">
                    {application}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-lime-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-12 text-center">
            Why Choose Our Areca Plates
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Leaf className="w-8 h-8" />,
                title: 'Sustainable Alternative',
                description:
                  'Environmentally sustainable alternative to plastic tableware',
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'Export Quality',
                description:
                  'Hygienically processed and export-grade quality standards',
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: 'Wide Range',
                description:
                  'Wide range of sizes and designs with custom packaging available',
              },
              {
                icon: <Recycle className="w-8 h-8" />,
                title: 'Global Markets',
                description:
                  'Suitable for global eco-conscious markets and bulk supply',
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-700 to-lime-700">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-green-800 to-lime-800 text-white rounded-2xl p-8 shadow-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Go Green?</h3>
            <p className="text-lg mb-6 opacity-90">
              Contact us today to discuss your eco-friendly tableware
              requirements and discover how we can support your business with
              sustainable areca plate solutions.
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

export default ArecaPlatesPage
