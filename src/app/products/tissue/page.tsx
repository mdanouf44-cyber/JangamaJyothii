'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import {
  Sparkles,
  Award,
  Shield,
  Globe,
  Package,
  Leaf,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import ProductGrid from '@/components/ProductGrid'

// Tissue Products Slideshow Component
const TissueSlideshow = ({ varieties }: { varieties: any[] }) => {
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
            <div className="relative h-72 lg:h-80 bg-gradient-to-br from-blue-50 to-cyan-50">
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
              <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                🧻 Premium Tissue
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
          className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-md"
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
                  ? 'bg-blue-600 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-blue-500 transition-all duration-300 shadow-sm hover:shadow-md"
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
                ? 'bg-blue-600 text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-blue-50 hover:border-blue-300'
            }`}
          >
            <span className="text-base">🧻</span>
            <span className="hidden sm:inline">{variety.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

const TissuePage = () => {
  const [activeVariety, setActiveVariety] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const videos = [
    '/tissue-video-1.mp4', // Placeholder - will be provided by user
    '/tissue-video-2.mp4', // Placeholder - will be provided by user
  ]

  // Tissue images for hero carousel
  const heroImages = [
    '/Toilet Rolls.jpg',
    '/Facial Tissue Boxes.jpg',
    '/Kitchen Rolls.jpg',
    '/Jumbo Parent Rolls.webp',
    '/Hand Towels (C & M Fold).jpg',
  ]

  useEffect(() => {
    setIsVisible(true)

    // Auto-rotate hero images every 1.5 seconds
    const imageInterval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % heroImages.length)
    }, 1500)

    // Auto-rotate videos every 8 seconds (if videos are available)
    const videoInterval = setInterval(() => {
      setCurrentVideoIndex(prev => (prev + 1) % videos.length)
    }, 8000)

    return () => {
      clearInterval(imageInterval)
      clearInterval(videoInterval)
    }
  }, [heroImages.length, videos.length])

  // Tissue product varieties based on the detailed description
  const varieties = [
    {
      name: 'Toilet Rolls',
      description:
        'Essential personal hygiene products designed for daily use in homes and public washrooms. Made from soft and absorbent tissue paper, they provide comfort while maintaining sufficient strength. Designed to break down easily in water, reducing plumbing blockages.',
      features: [
        'Soft & Absorbent',
        'Water Disintegrable',
        'Multiple Ply Options',
        'Commercial Grade',
      ],
      specs: {
        hsCode: '481810',
        moq: '10,000 rolls',
        packaging: 'Poly-wrapped packs, packed in corrugated export cartons',
        shelfLife: '3–5 years (stored in dry conditions)',
      },
      color: 'from-blue-600 to-cyan-700',
      image: '/Toilet Rolls.jpg', // Using actual toilet rolls image
    },
    {
      name: 'Facial Tissue Boxes',
      description:
        'Soft, lightweight tissues packed in convenient dispenser boxes for hygienic personal use. Specially designed for face care, personal hygiene, and light cleaning purposes, making them gentle enough for sensitive skin. Ideal for wiping the face, handling colds, removing makeup.',
      features: [
        'Gentle on Skin',
        'Convenient Dispenser',
        'Hygienic Use',
        'Travel Friendly',
      ],
      specs: {
        hsCode: '481820',
        moq: '5,000 boxes',
        packaging:
          'Inner poly wrap with printed cartons and export-grade outer boxes',
        shelfLife: '3–5 years (moisture-free storage)',
      },
      color: 'from-green-600 to-emerald-700',
      image: '/Facial Tissue Boxes.jpg', // Using actual facial tissue boxes image
    },
    {
      name: 'Kitchen Rolls',
      description:
        'Strong and highly absorbent paper towels designed for cleaning and food-handling tasks. Thicker and more durable than regular tissues, suitable for wiping spills, absorbing oil, drying hands, and cleaning kitchen surfaces. Remain effective even when wet.',
      features: [
        'High Absorbency',
        'Strong & Thick',
        'Oil Resistant',
        'Food Safe',
      ],
      specs: {
        hsCode: '481810',
        moq: '5,000 rolls',
        packaging: 'Shrink-wrapped rolls packed in corrugated cartons',
        shelfLife: '3–5 years (cool, dry storage)',
      },
      color: 'from-orange-600 to-red-700',
      image: '/Kitchen Rolls.jpg', // Using actual kitchen rolls image
    },
    {
      name: 'Jumbo Parent Rolls',
      description:
        'Large tissue paper rolls used as raw material for converting into finished tissue products such as toilet rolls, napkins, facial tissues, and hand towels. Produced with consistent GSM, thickness, and absorbency to ensure uniform quality during conversion.',
      features: [
        'Consistent Quality',
        'Industrial Grade',
        'Bulk Supply',
        'Converting Ready',
      ],
      specs: {
        hsCode: '480300',
        moq: '1 Metric Ton',
        packaging: 'Wrapped with protective paper and stretch film',
        shelfLife: '5 years (stored in dry, ventilated warehouses)',
      },
      color: 'from-purple-600 to-indigo-700',
      image: '/Jumbo Parent Rolls.webp', // Using actual jumbo parent rolls image
    },
    {
      name: 'Hand Towels (C & M Fold)',
      description:
        'Hand towels in C-fold and M-fold formats designed for hygienic hand drying in public and commercial washrooms. Single-sheet dispensing reduces waste and improves hygiene. Offer excellent absorbency and strength for effective hand drying with minimal waste.',
      features: [
        'Single Sheet Dispensing',
        'Waste Reduction',
        'Commercial Use',
        'Hygienic Design',
      ],
      specs: {
        hsCode: '481890',
        moq: '5,000 packs',
        packaging: 'Paper-wrapped bundles packed in export cartons',
        shelfLife: '3–5 years (dry storage)',
      },
      color: 'from-teal-600 to-blue-700',
      image: '/Hand Towels (C & M Fold).jpg', // Using actual hand towels image
    },
  ]

  // Floating tissue icons animation
  const floatingIcons = [
    '🧻',
    '📄',
    '🧽',
    '📦',
    '🏠',
    '🏢',
    '🏨',
    '🧼',
    '✨',
    '💧',
    '🌟',
    '🔄',
  ]

  const applications = [
    {
      icon: '🏠',
      title: 'Households',
      desc: 'Daily personal hygiene, kitchen cleaning, and general home use',
    },
    {
      icon: '🏨',
      title: 'Hotels & Hospitality',
      desc: 'Guest rooms, washrooms, dining areas, and housekeeping',
    },
    {
      icon: '🏥',
      title: 'Healthcare Facilities',
      desc: 'Patient care, hygiene maintenance, and sanitation',
    },
    {
      icon: '🏢',
      title: 'Offices & Corporate',
      desc: 'Washrooms, pantry areas, and common spaces',
    },
    {
      icon: '🍽️',
      title: 'Restaurants',
      desc: 'Food handling, cleaning, and customer hygiene',
    },
    {
      icon: '🛍️',
      title: 'Shopping Malls',
      desc: 'High-traffic washrooms and hand-drying stations',
    },
    {
      icon: '🏭',
      title: 'Industrial Units',
      desc: 'Bulk hygiene solutions and tissue converting units',
    },
  ]

  const qualityPoints = [
    {
      icon: Shield,
      title: 'High Hygiene Standards',
      desc: 'Manufactured under controlled and hygienic conditions',
    },
    {
      icon: Award,
      title: 'Soft Yet Strong Quality',
      desc: 'Balanced softness and strength for comfort and durability',
    },
    {
      icon: Package,
      title: 'Multiple Formats & Sizes',
      desc: 'Available in retail, commercial, and industrial formats',
    },
    {
      icon: Globe,
      title: 'Bulk Supply Capability',
      desc: 'Reliable supply for large-volume domestic and export requirements',
    },
    {
      icon: Leaf,
      title: 'Eco-Conscious Production',
      desc: 'Made using recyclable and biodegradable paper materials',
    },
    {
      icon: CheckCircle,
      title: 'Consistent Quality',
      desc: 'Uniform texture, thickness, and performance across batches',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
      {/* Hero Section with Image/Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Image Background Carousel */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={image}
                alt={`Tissue Product ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="100vw"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-black/50"></div>
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
              <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent animate-gradient">
                Premium Tissue
              </span>
            </h1>
            <p className="text-xl md:text-3xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed drop-shadow-lg font-light">
              Essential hygiene and cleaning products manufactured from quality
              paper pulp for households, commercial spaces, and institutional
              environments
            </p>
          </div>

          {/* Image Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImageIndex
                    ? 'bg-white scale-125 shadow-lg'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`View image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Main Description */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Premium Tissue Products
            </h2>
            <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
              <p className="text-xl mb-6">
                <strong>
                  Tissues are essential hygiene and cleaning products
                </strong>{' '}
                used daily across households, commercial spaces, and
                institutional environments. Manufactured from quality paper pulp
                and processed under hygienic conditions, tissue products are
                designed to provide{' '}
                <strong>softness, absorbency, strength, and convenience</strong>{' '}
                while supporting cleanliness and personal hygiene.
              </p>
              <p className="text-lg mb-6">
                Our range of tissue products caters to diverse requirements—from
                personal care and kitchen cleaning to large-scale commercial and
                industrial usage. Each type is produced to meet specific
                performance needs, ensuring{' '}
                <strong>comfort, durability, and reliable quality</strong>.
                These products are widely used in homes, hotels, hospitals,
                offices, restaurants, shopping complexes, educational
                institutions, and public facilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Varieties Section - Following Compact Sizing Standard */}
      <section className="py-10 bg-gradient-to-br from-blue-900 via-cyan-900 to-teal-900 relative">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4 drop-shadow-2xl">
            Types of Tissue Products
          </h2>
          <p className="text-base text-blue-200 text-center mb-10 max-w-2xl mx-auto drop-shadow-lg">
            Choose from our comprehensive selection of tissue products, each
            designed for specific applications and performance needs.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {varieties.map((variety, index) => (
              <button
                key={index}
                onClick={() => setActiveVariety(index)}
                className={`px-6 py-3 rounded-full font-bold text-base transition-all duration-300 transform hover:scale-105 border-2 shadow-xl ${
                  activeVariety === index
                    ? 'bg-white text-gray-900 shadow-2xl border-white scale-105'
                    : 'bg-gray-900/50 backdrop-blur-sm text-white border-white/60 hover:bg-white/20 hover:border-white'
                }`}
              >
                {variety.name}
              </button>
            ))}
          </div>

          <div className="max-w-[1050px] mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-white/30">
              <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-0">
                {/* Image Section */}
                <div className="relative overflow-hidden min-h-[360px]">
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
                  <div className="h-full flex flex-col">
                    {/* Header */}
                    <div className="mb-2">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-bold">
                        Premium Grade
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {varieties[activeVariety].name}
                    </h3>

                    <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                      {varieties[activeVariety].description}
                    </p>

                    {/* Features */}
                    <div className="mb-3">
                      <h4 className="text-sm font-bold text-gray-900 mb-2">
                        Key Features
                      </h4>
                      <div className="grid grid-cols-2 gap-1.5">
                        {varieties[activeVariety].features.map(
                          (feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="flex items-center gap-1.5 p-1.5 bg-blue-50 rounded"
                            >
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                              <span className="text-xs font-semibold text-gray-700">
                                {feature}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    {/* Specifications */}
                    <div className="bg-gray-50 rounded-lg p-3 mb-2">
                      <h4 className="text-sm font-bold text-gray-900 mb-2">
                        Specifications
                      </h4>
                      <div className="grid grid-cols-2 gap-1.5">
                        <div className="p-1.5 bg-white rounded border">
                          <div className="text-[9px] font-bold text-gray-500 uppercase">
                            HS Code
                          </div>
                          <div className="text-xs font-bold text-gray-900 mt-0.5">
                            {varieties[activeVariety].specs.hsCode}
                          </div>
                        </div>
                        <div className="p-1.5 bg-white rounded border">
                          <div className="text-[9px] font-bold text-gray-500 uppercase">
                            MOQ
                          </div>
                          <div className="text-xs font-bold text-gray-900 mt-0.5">
                            {varieties[activeVariety].specs.moq}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Packaging Info */}
                    <div className="bg-blue-50 rounded-lg p-2 mt-2">
                      <div className="text-[9px] font-bold text-blue-700 uppercase mb-0.5">
                        Packaging
                      </div>
                      <div className="text-xs text-blue-800 mt-0.5">
                        {varieties[activeVariety].specs.packaging}
                      </div>
                    </div>

                    {/* Shelf Life */}
                    <div className="bg-green-50 rounded-lg p-2 mt-2">
                      <div className="text-[9px] font-bold text-green-700 uppercase mb-0.5">
                        Shelf Life
                      </div>
                      <div className="text-xs text-green-800 mt-0.5">
                        {varieties[activeVariety].specs.shelfLife}
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
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Product Showcase
            </h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our premium tissue products with detailed information
            </p>
          </div>

          <TissueSlideshow varieties={varieties} />
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            Applications of Tissue Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {applications.map((app, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transform transition-all duration-500 hover:-translate-y-2 border border-blue-200 ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100 + 800}ms` }}
              >
                <div className="text-4xl mb-4 text-center">{app.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  {app.title}
                </h3>
                <p className="text-gray-700 text-center leading-relaxed text-sm">
                  {app.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Why Choose Our Tissue Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                <point.icon className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                  {point.title}
                </h3>
                <p className="text-gray-600 text-center text-sm">
                  {point.desc}
                </p>
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

export default TissuePage
