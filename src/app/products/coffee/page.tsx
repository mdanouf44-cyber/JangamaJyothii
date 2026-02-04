'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import {
  Coffee,
  Leaf,
  Award,
  Globe,
  Package,
  ChevronLeft,
  ChevronRight,
  Clock,
  Thermometer,
} from 'lucide-react'
import { ProductGrid } from '@/components'

// Coffee Product Slideshow Component
const CoffeeSlideshow = ({ varieties }: { varieties: any[] }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 2) % varieties.length)
    }, 2000)
    return () => clearInterval(timer)
  }, [varieties.length])

  const nextSlide = () => setCurrentSlide(prev => (prev + 2) % varieties.length)
  const prevSlide = () => setCurrentSlide(prev => (prev - 2 + varieties.length) % varieties.length)

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
          <div key={`${currentSlide}-${index}`} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 transform transition-all duration-2000 ease-in-out">
            <div className="relative h-72 lg:h-80 bg-gradient-to-br from-amber-50 to-orange-50">
              <Image src={product.image} alt={product.name} fill className="object-contain transition-all duration-2000 p-4" sizes="(max-width: 1024px) 100vw, 50vw" priority={index === 0} unoptimized />
              <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">☕ Premium Coffee</div>
              <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">{currentSlide + index + 1} / {varieties.length}</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">{product.name}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-6">
        <button onClick={prevSlide} className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-amber-500 transition-all duration-300 shadow-sm hover:shadow-md">
          <ChevronLeft className="w-5 h-5 text-gray-600" /><span className="text-gray-700 font-medium">Previous</span>
        </button>
        <div className="flex space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button key={index} onClick={() => setCurrentSlide(index * 2)} className={`w-3 h-3 rounded-full transition-all duration-300 ${Math.floor(currentSlide / 2) === index ? 'bg-amber-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'}`} />
          ))}
        </div>
        <button onClick={nextSlide} className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-amber-500 transition-all duration-300 shadow-sm hover:shadow-md">
          <span className="text-gray-700 font-medium">Next</span><ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>
      <div className="flex flex-wrap justify-center gap-2 mt-6">
        {varieties.map((variety, index) => (
          <button key={index} onClick={() => setCurrentSlide(Math.floor(index / 2) * 2)} className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${currentSlide <= index && index < currentSlide + 2 ? 'bg-amber-600 text-white shadow-lg scale-105' : 'bg-white text-gray-700 border border-gray-300 hover:bg-amber-50 hover:border-amber-300'}`}>
            <span className="text-base">☕</span><span className="hidden sm:inline">{variety.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

const CoffeePage = () => {
  const [activeVariant, setActiveVariant] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [roastedImageIndex, setRoastedImageIndex] = useState(0)

  const coffeeVideos = ['/coffee-video-1.mp4', '/coffee-video-2.mp4']

  useEffect(() => {
    setIsVisible(true)

    // Preload videos for better performance
    const preloadVideos = () => {
      coffeeVideos.forEach((videoSrc, index) => {
        if (index < 2) {
          const video = document.createElement('video')
          video.preload = 'metadata'
          video.src = videoSrc
        }
      })
    }

    // Rotate videos every 8 seconds
    const videoInterval = setInterval(() => {
      setCurrentVideoIndex(prevIndex => (prevIndex + 1) % coffeeVideos.length)
    }, 8000)

    // Rotate roasted coffee images every 4 seconds
    const roastedImageInterval = setInterval(() => {
      setRoastedImageIndex(prevIndex => (prevIndex + 1) % 2)
    }, 4000)

    preloadVideos()
    return () => {
      clearInterval(videoInterval)
      clearInterval(roastedImageInterval)
    }
  }, [])

  const variants = [
    {
      name: 'Arabica Coffee Beans',
      description:
        'Arabica coffee beans are sourced from high-altitude plantations where climatic conditions support slow bean development and superior flavor formation. These beans are carefully handpicked at optimal ripeness to ensure uniform size, smooth texture, and rich aroma.',
      features: [
        'Mild Acidity',
        'Balanced Sweetness',
        'Refined Taste',
        'High Altitude Grown',
      ],
      specs: {
        hsCode: '090111',
        moq: '1 Metric Ton',
        shelfLife: '12–18 months',
        moisture: 'Max 12.5%',
      },
      color: 'from-amber-600 to-amber-800',
      image: '/arabica-coffee-beans.png',
    },
    {
      name: 'Robusta Coffee Beans',
      description:
        'Robusta coffee beans are cultivated in regions with warm climates and are valued for their strong body, bold flavor, and higher caffeine content. These beans are carefully harvested and processed to ensure consistency in quality and taste.',
      features: [
        'Strong Body',
        'Bold Flavor',
        'Higher Caffeine',
        'Excellent Crema',
      ],
      specs: {
        hsCode: '090111',
        moq: '1 Metric Ton',
        shelfLife: '12–18 months',
        moisture: 'Max 12.5%',
      },
      color: 'from-amber-600 to-amber-800',
      image: '/robusta-coffee-beans.png',
    },
    {
      name: 'Roasted Coffee Beans',
      description:
        'Our roasted coffee beans are prepared from high-quality Arabica and Robusta beans using controlled roasting techniques. The roasting process is carefully monitored to develop rich aroma, balanced flavor, and consistent color while preserving freshness.',
      features: [
        'Controlled Roasting',
        'Rich Aroma',
        'Multiple Roast Profiles',
        'Extended Shelf Life',
      ],
      specs: {
        hsCode: '090121',
        moq: '500 KG',
        shelfLife: '6–12 months',
        moisture: 'Max 5%',
      },
      color: 'from-orange-600 to-red-700',
      images: ['/roasted-arabica.jpg', '/roasted-robusta.jpg'],
    },
  ]

  const qualityPoints = [
    {
      icon: Leaf,
      title: 'Premium Quality',
      desc: 'Carefully selected from ideal plantations',
    },
    {
      icon: Award,
      title: 'International Standards',
      desc: 'Meets global export requirements',
    },
    { icon: Globe, title: 'Global Supply', desc: 'Serving markets worldwide' },
    {
      icon: Package,
      title: 'Flexible Packaging',
      desc: 'Customized for your needs',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-red-50 to-amber-50">
      {/* Hero Section with Rotating Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Rotating Video Background */}
        <div className="absolute inset-0 w-full h-full">
          {coffeeVideos.map((videoSrc, index) => (
            <video
              key={index}
              autoPlay
              muted
              loop
              playsInline
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
            {coffeeVideos.map((_, index) => (
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
            className={`transform transition-all duration-1500 ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-20 opacity-0'
            }`}
            suppressHydrationWarning
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white drop-shadow-2xl">
              <span className="bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-300 bg-clip-text text-transparent animate-gradient">
                Premium Coffee
              </span>
            </h1>
            <p className="text-xl md:text-3xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed drop-shadow-lg font-light">
              Sourced from carefully selected plantations, processed with
              industry-standard methods to deliver exceptional quality and
              flavor
            </p>
          </div>
        </div>
      </section>

      {/* Coffee Variants Section */}
      <section className="py-14 bg-gradient-to-br from-amber-900 via-red-900 to-amber-900 relative">
        <div className="max-w-[1150px] mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-5 drop-shadow-2xl">
            Available Variants
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {variants.map((variant, index) => (
              <button
                key={index}
                onClick={() => setActiveVariant(index)}
                className={`px-7 py-3 rounded-full font-bold text-base transition-all duration-300 transform hover:scale-105 border-2 shadow-xl ${
                  activeVariant === index
                    ? 'bg-white text-amber-900 shadow-2xl border-white scale-105'
                    : 'bg-amber-900/50 backdrop-blur-sm text-white border-white/60 hover:bg-white/20 hover:border-white'
                }`}
              >
                {variant.name}
              </button>
            ))}
          </div>

          <div className="max-w-[1150px] mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-white/30">
              <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-0">
                {/* Image Section */}
                <div className="bg-gray-100 min-h-[400px] relative overflow-hidden">
                  {/* Display actual coffee images */}
                  {activeVariant === 2 ? (
                    // Roasted Coffee Beans - Rotating images
                    <div className="relative w-full h-full min-h-[380px]">
                      {variants[activeVariant].images?.map(
                        (imageSrc, index) => (
                          <div key={index} className="absolute inset-0">
                            <Image
                              src={imageSrc}
                              alt={`${variants[activeVariant].name} - ${index === 0 ? 'Arabica' : 'Robusta'}`}
                              fill
                              className={`object-cover transition-opacity duration-1000 ${
                                index === roastedImageIndex
                                  ? 'opacity-100'
                                  : 'opacity-0'
                              }`}
                              priority={index === 0}
                            />
                          </div>
                        )
                      )}
                      {/* Image indicators for roasted beans */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                        {variants[activeVariant].images?.map((_, index) => (
                          <div
                            key={index}
                            className={`w-3 h-3 rounded-full transition-all duration-300 border-2 border-white ${
                              index === roastedImageIndex
                                ? 'bg-amber-600'
                                : 'bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                      {/* Overlay label */}
                      <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-md px-4 py-2 rounded-lg border border-white/30 z-10">
                        <p className="text-white font-bold text-sm">
                          Premium Quality
                        </p>
                        <p className="text-amber-200 text-xs">
                          {roastedImageIndex === 0
                            ? 'Roasted Arabica'
                            : 'Roasted Robusta'}
                        </p>
                      </div>
                    </div>
                  ) : (
                    // Single images for Arabica and Robusta
                    <div className="relative w-full h-full min-h-[380px]">
                      <Image
                        src={variants[activeVariant].image || ''}
                        alt={variants[activeVariant].name}
                        fill
                        className="object-cover"
                        priority={activeVariant === 0}
                      />
                      {/* Overlay label */}
                      <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-md px-4 py-2 rounded-lg border border-white/30 z-10">
                        <p className="text-white font-bold text-sm">
                          Premium Quality
                        </p>
                        <p className="text-amber-200 text-xs">
                          {variants[activeVariant].name}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-4 bg-white">
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-brown-100 text-brown-800 rounded-full text-xs font-bold">
                      Premium Quality Coffee
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-brown-900 mb-2 leading-tight">
                    {variants[activeVariant].name}
                  </h3>

                  <p className="text-gray-700 leading-relaxed mb-3 text-sm">
                    {variants[activeVariant].description}
                  </p>

                  <div className="mb-3">
                    <h4 className="text-sm font-bold text-brown-900 mb-2 flex items-center gap-2">
                      <Award className="w-3 h-3 text-brown-600" />
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {variants[activeVariant].features.map(
                        (feature, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-2 p-1.5 bg-gray-50 rounded-lg shadow-sm border border-brown-100 hover:shadow-md transition-shadow"
                          >
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-brown-600 to-amber-600 rounded-full flex-shrink-0"></div>
                            <span className="text-gray-800 font-semibold text-xs">
                              {feature}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-red-900 to-amber-900 rounded-lg p-3 border border-red-800">
                    <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                      <Package className="w-3 h-3 text-white" />
                      Technical Specifications
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      <div className="bg-white p-1.5 rounded-lg shadow-md border border-red-200">
                        <span className="text-[9px] font-bold text-red-800 uppercase tracking-wide">
                          HS Code
                        </span>
                        <p className="font-bold text-black text-xs mt-0.5">
                          {variants[activeVariant].specs.hsCode}
                        </p>
                      </div>
                      <div className="bg-white p-1.5 rounded-lg shadow-md border border-red-200">
                        <span className="text-[9px] font-bold text-red-800 uppercase tracking-wide">
                          Minimum Order
                        </span>
                        <p className="font-bold text-black text-xs mt-0.5">
                          {variants[activeVariant].specs.moq}
                        </p>
                      </div>
                      <div className="bg-white p-1.5 rounded-lg shadow-md border border-red-200">
                        <span className="text-[9px] font-bold text-red-800 uppercase tracking-wide">
                          Shelf Life
                        </span>
                        <p className="font-bold text-black text-xs mt-0.5">
                          {variants[activeVariant].specs.shelfLife}
                        </p>
                      </div>
                      <div className="bg-white p-1.5 rounded-lg shadow-md border border-red-200">
                        <span className="text-[9px] font-bold text-red-800 uppercase tracking-wide">
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
      <section className="py-16 bg-gradient-to-br from-gray-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Product Showcase</h2>
            <div className="w-16 h-1 bg-amber-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Discover our premium coffee varieties with detailed information</p>
          </div>
          <CoffeeSlideshow varieties={varieties} />
        </div>
      </section>

      {/* Quality Points */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-brown-800 mb-12">
            Why Choose Our Coffee
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
                style={{ transitionDelay: `${index * 100 + 600}ms` }}
                suppressHydrationWarning
              >
                <point.icon className="w-12 h-12 text-brown-600 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-brown-800 mb-2 text-center">
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

export default CoffeePage
