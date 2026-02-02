'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Sparkles, Award, Shield, Globe, Package, Star } from 'lucide-react'
import ProductGrid from '@/components/ProductGrid'

const BlackPepperPage = () => {
  const [activeVariety, setActiveVariety] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

  const videos = ['/Black pepper 1.mp4', '/Black pepper 2.mp4']

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
      name: 'Aimpiriyan Black Pepper',
      description:
        'Aimpiriyan is a high-yielding black pepper variety known for its robust growth and excellent piperine content. This variety produces bold, aromatic peppercorns with strong flavor intensity and is well-suited for commercial cultivation. The peppercorns are medium to large in size with excellent drying characteristics.',
      features: [
        'High Yield',
        'Robust Growth',
        'Excellent Piperine',
        'Strong Flavor',
      ],
      specs: {
        hsCode: '090411',
        moq: '500 KG',
        moisture: 'Max 12%',
        shelfLife: '24 months',
      },
      color: 'from-gray-800 to-black',
      image: '/Aimpiriyan Black Pepper.jpg',
    },
    {
      name: 'Arakkulam Munda Black Pepper',
      description:
        'Arakkulam Munda is a traditional black pepper variety known for its distinctive aroma and superior quality peppercorns. This variety produces uniform, well-filled berries with high essential oil content and excellent storage properties. It is highly valued in international markets for its consistent quality.',
      features: [
        'Distinctive Aroma',
        'Superior Quality',
        'High Essential Oil',
        'Uniform Berries',
      ],
      specs: {
        hsCode: '090411',
        moq: '500 KG',
        moisture: 'Max 12%',
        shelfLife: '24 months',
      },
      color: 'from-gray-700 to-gray-900',
      image: '/Arakkulam Munda Black Pepper.jpg',
    },
    {
      name: 'Kalluvally Black Pepper',
      description:
        'Kalluvally is a premium black pepper variety renowned for its bold flavor profile and high piperine content. This variety produces large, well-developed peppercorns with excellent color retention and strong aromatic properties. It is particularly favored for its consistent quality and market appeal.',
      features: [
        'Bold Flavor',
        'High Piperine',
        'Large Peppercorns',
        'Excellent Color',
      ],
      specs: {
        hsCode: '090411',
        moq: '500 KG',
        moisture: 'Max 12%',
        shelfLife: '24 months',
      },
      color: 'from-gray-900 to-black',
      image: '/Kalluvally Black Pepper.jpg',
    },
    {
      name: 'Karimunda Black Pepper',
      description:
        'Karimunda is one of the most popular black pepper varieties, known for its excellent yield and superior quality peppercorns. This variety produces medium-sized, well-filled berries with high piperine content and strong aromatic properties. It is widely cultivated and highly sought after in export markets.',
      features: [
        'Excellent Yield',
        'Superior Quality',
        'Medium-Sized Berries',
        'Strong Aroma',
      ],
      specs: {
        hsCode: '090411',
        moq: '500 KG',
        moisture: 'Max 12%',
        shelfLife: '24 months',
      },
      color: 'from-black to-gray-800',
      image: '/Karimunda Black Pepper.jpg',
    },
    {
      name: 'Panniyur-1 Black Pepper',
      description:
        'Panniyur-1 is a high-yielding black pepper variety developed for commercial cultivation. This variety is known for its disease resistance, consistent production, and excellent quality peppercorns. The berries are uniform in size with good piperine content and strong flavor characteristics.',
      features: [
        'High Yielding',
        'Disease Resistant',
        'Consistent Production',
        'Good Piperine',
      ],
      specs: {
        hsCode: '090411',
        moq: '500 KG',
        moisture: 'Max 12%',
        shelfLife: '24 months',
      },
      color: 'from-gray-800 to-gray-900',
      image: '/Panniyur-1 Black Pepper.jpg',
    },
    {
      name: 'Panniyur-5 Black Pepper',
      description:
        'Panniyur-5 is an improved black pepper variety known for its high yield potential and excellent quality characteristics. This variety produces large, well-developed peppercorns with high piperine content and superior aromatic properties. It is highly valued for its commercial viability and export quality.',
      features: [
        'High Yield Potential',
        'Large Peppercorns',
        'High Piperine',
        'Export Quality',
      ],
      specs: {
        hsCode: '090411',
        moq: '500 KG',
        moisture: 'Max 12%',
        shelfLife: '24 months',
      },
      color: 'from-gray-900 to-black',
      image: '/Panniyur-5 Black Pepper.jpg',
    },
  ]

  const applications = [
    {
      icon: '🍽️',
      title: 'Culinary Applications',
      desc: 'Essential spice for cooking and seasoning',
    },
    {
      icon: '🏭',
      title: 'Food Processing',
      desc: 'Industrial applications in food manufacturing',
    },
    {
      icon: '🌿',
      title: 'Spice Blends',
      desc: 'Key ingredient in various spice mixtures',
    },
    {
      icon: '🥘',
      title: 'Restaurant Industry',
      desc: 'Premium ingredient for professional kitchens',
    },
    {
      icon: '💊',
      title: 'Pharmaceutical',
      desc: 'Used in traditional medicine and wellness products',
    },
    {
      icon: '🧴',
      title: 'Essential Oils',
      desc: 'Source of piperine and aromatic compounds',
    },
  ]

  const qualityPoints = [
    {
      icon: Star,
      title: 'Premium Quality',
      desc: 'Sourced from traditional pepper-growing regions',
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
      desc: 'Serving spice markets worldwide',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50">
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

        {/* Floating Pepper Icons */}
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
              <span className="text-white text-3xl">⚫</span>
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
              <span className="bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent animate-gradient">
                Premium Black Pepper
              </span>
            </h1>
            <p className="text-xl md:text-3xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed drop-shadow-lg font-light">
              Premium-quality Indian black pepper sourced from traditional
              pepper-growing regions with bold, aromatic, and high-piperine
              peppercorns
            </p>
          </div>
        </div>
      </section>

      {/* Main Description */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              The King of Spices
            </h2>
            <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
              <p className="text-xl mb-6">
                We offer premium-quality Indian black pepper sourced from
                traditional pepper-growing regions known for producing bold,
                aromatic, and high-piperine peppercorns. Our range includes{' '}
                <strong>Aimpiriyan</strong>, <strong>Arakkulam Munda</strong>,{' '}
                <strong>Kalluvally</strong>, <strong>Karimunda</strong>,{' '}
                <strong>Panniyur-1</strong>, and <strong>Panniyur-5</strong>{' '}
                varieties, each valued for its distinctive flavor profile,
                piperine content, and commercial viability.
              </p>
              <p className="text-lg mb-6">
                The peppercorns are harvested at optimal maturity and carefully
                processed to retain their natural color, pungency, and essential
                oils. Strict quality control measures including cleaning,
                grading, and sorting ensure uniform size and export-grade
                standards. The result is black pepper with strong aroma, bold
                flavor, and consistent quality.
              </p>
              <p className="text-lg">
                Our black pepper is widely used in culinary applications, food
                processing industries, spice blends, and pharmaceutical
                preparations across global markets. It is also valued for its
                essential oil content and piperine compounds. Proper packaging
                and moisture control help maintain quality during storage and
                international transportation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Black Pepper Varieties Section */}
      <section className="py-12 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4 drop-shadow-2xl">
            Premium Varieties
          </h2>
          <p className="text-base text-gray-200 text-center mb-10 max-w-2xl mx-auto drop-shadow-lg">
            Choose from our exceptional selection of black pepper varieties,
            each with unique characteristics and superior quality.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {varieties.map((variety, index) => (
              <button
                key={index}
                onClick={() => setActiveVariety(index)}
                className={`px-4 py-2 rounded-full font-bold text-sm transition-all duration-300 transform hover:scale-105 border-2 shadow-xl ${
                  activeVariety === index
                    ? 'bg-white text-gray-900 shadow-2xl border-white scale-105'
                    : 'bg-gray-900/50 backdrop-blur-sm text-white border-white/60 hover:bg-white/20 hover:border-white'
                }`}
              >
                {variety.name.replace(' Black Pepper', '')}
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>

                {/* Content Section */}
                <div className="p-4 bg-white">
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-bold">
                      Premium Quality Black Pepper
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                    {varieties[activeVariety].name}
                  </h3>

                  <p className="text-gray-700 leading-relaxed mb-3 text-sm">
                    {varieties[activeVariety].description}
                  </p>

                  <div className="mb-3">
                    <h4 className="text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Sparkles className="w-3 h-3 text-gray-600" />
                      Key Features
                    </h4>
                    <div className="grid grid-cols-2 gap-1.5">
                      {varieties[activeVariety].features.map(
                        (feature, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-2 p-1.5 bg-gray-50 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                          >
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-gray-600 to-black rounded-full flex-shrink-0"></div>
                            <span className="text-gray-800 font-semibold text-xs">
                              {feature}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-gray-900 to-black rounded-lg p-3 border border-gray-800">
                    <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                      <Package className="w-3 h-3 text-white" />
                      Technical Specifications
                    </h4>
                    <div className="grid grid-cols-2 gap-1.5">
                      <div className="bg-white p-1.5 rounded-lg shadow-md border border-gray-200">
                        <span className="text-[9px] font-bold text-gray-800 uppercase tracking-wide">
                          HS Code
                        </span>
                        <p className="font-bold text-black text-xs mt-0.5">
                          {varieties[activeVariety].specs.hsCode}
                        </p>
                      </div>
                      <div className="bg-white p-1.5 rounded-lg shadow-md border border-gray-200">
                        <span className="text-[9px] font-bold text-gray-800 uppercase tracking-wide">
                          Min Order
                        </span>
                        <p className="font-bold text-black text-xs mt-0.5">
                          {varieties[activeVariety].specs.moq}
                        </p>
                      </div>
                      <div className="bg-white p-1.5 rounded-lg shadow-md border border-gray-200">
                        <span className="text-[9px] font-bold text-gray-800 uppercase tracking-wide">
                          Moisture
                        </span>
                        <p className="font-bold text-black text-xs mt-0.5">
                          {varieties[activeVariety].specs.moisture}
                        </p>
                      </div>
                      <div className="bg-white p-1.5 rounded-lg shadow-md border border-gray-200">
                        <span className="text-[9px] font-bold text-gray-800 uppercase tracking-wide">
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
                className={`bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transform transition-all duration-500 hover:-translate-y-2 border border-gray-200 ${
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
            Why Choose Our Black Pepper
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
                <point.icon className="w-12 h-12 text-gray-600 mb-4 mx-auto" />
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

export default BlackPepperPage
