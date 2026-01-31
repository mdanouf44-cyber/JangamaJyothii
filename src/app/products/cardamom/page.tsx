'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Sparkles, Award, Shield, Globe, Package, Leaf } from 'lucide-react'
import ProductGrid from '@/components/ProductGrid'

const CardamomPage = () => {
  const [activeVariety, setActiveVariety] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

  const videos = [
    '/Cardamom 1.mp4',
  ]

  useEffect(() => {
    setIsVisible(true)
    
    // Since we only have one video, we can still show it as background
    // If more videos are added later, this will auto-rotate
    const videoInterval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % videos.length)
    }, 8000)

    return () => clearInterval(videoInterval)
  }, [])

  const varieties = [
    {
      name: 'Malabar Cardamom',
      description:
        'Malabar cardamom is a traditional variety known for its bold aroma, medium-sized pods, and balanced flavor profile. It is primarily cultivated in regions with high rainfall and rich forest soil, which contribute to its distinctive fragrance and oil content. The pods are harvested at the correct maturity stage and dried carefully to retain their natural green color and essential oils.',
      features: ['Bold Aroma', 'Medium-Sized Pods', 'Balanced Flavor', 'Rich Oil Content'],
      specs: {
        hsCode: '090831',
        moq: '500 KG',
        moisture: 'Max 10–11%',
        shelfLife: '12–18 months',
      },
      color: 'from-green-600 to-emerald-700',
      image: '/Malabar Cardamom.jpg',
    },
    {
      name: 'Mysore Cardamom',
      description:
        'Mysore cardamom is characterized by its larger pod size, lighter green color, and mild yet pleasant aroma. It is grown in regions with moderate climatic conditions, resulting in pods that are uniform in appearance and smooth in texture. The pods are carefully graded and sorted to ensure consistent quality for export.',
      features: ['Larger Pod Size', 'Lighter Green Color', 'Mild Pleasant Aroma', 'Uniform Appearance'],
      specs: {
        hsCode: '090831',
        moq: '500 KG',
        moisture: 'Max 10–11%',
        shelfLife: '12–18 months',
      },
      color: 'from-emerald-600 to-green-700',
      image: '/Mysore Cardamom.jpg',
    },
    {
      name: 'Vazhukka Cardamom',
      description:
        'Vazhukka cardamom is a natural hybrid of Malabar and Mysore varieties, combining the strong aroma of Malabar with the larger pod size of Mysore. This makes it one of the most commercially preferred varieties in global markets. The pods are bright green, well-filled, and rich in essential oils.',
      features: ['Natural Hybrid', 'Strong Aroma', 'Larger Pod Size', 'Rich Essential Oils'],
      specs: {
        hsCode: '090831',
        moq: '500 KG',
        moisture: 'Max 10–11%',
        shelfLife: '12–18 months',
      },
      color: 'from-green-700 to-emerald-800',
      image: '/Vazhukka Cardamom.jpg',
    },
  ]

  const applications = [
    { icon: '•', title: 'Culinary Preparations', desc: 'Premium spice for cooking and flavoring' },
    { icon: '•', title: 'Confectionery Products', desc: 'Essential ingredient for sweets and desserts' },
    { icon: '•', title: 'Beverages', desc: 'Aromatic flavoring for teas and drinks' },
    { icon: '•', title: 'Spice Blends', desc: 'Key component in garam masala and spice mixes' },
    { icon: '•', title: 'Food Processing', desc: 'Industrial applications in food manufacturing' },
    { icon: '•', title: 'Traditional Medicine', desc: 'Valued for wellness and medicinal properties' },
  ]

  const qualityPoints = [
    { icon: Leaf, title: 'Premium Quality', desc: 'Sourced from carefully selected plantations' },
    { icon: Award, title: 'Export Grade', desc: 'Meets international quality standards' },
    { icon: Shield, title: 'Quality Control', desc: 'Strict cleaning, grading, and sorting processes' },
    { icon: Globe, title: 'Global Supply', desc: 'Serving markets worldwide with reliability' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-green-50">
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
          
        {/* Floating Cardamom Icons */}
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
              suppressHydrationWarning
            >
              <span className="text-white text-2xl">•</span>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div
            className={`transform transition-all duration-1500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white drop-shadow-2xl">
              <span className="bg-gradient-to-r from-green-300 via-emerald-300 to-green-300 bg-clip-text text-transparent animate-gradient">
                Premium Cardamom
              </span>
            </h1>
            <p className="text-xl md:text-3xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed drop-shadow-lg font-light">
              Premium-quality Indian cardamom sourced from carefully selected plantations, 
              offering distinctive aroma, oil content, and bold flavor profile
            </p>
          </div>
        </div>
      </section>

      {/* Main Description */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              The Queen of Spices
            </h2>
            <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
              <p className="text-xl mb-6">
                We offer premium-quality Indian cardamom sourced from carefully selected plantations located in regions known for producing aromatic and flavorful pods. Our range includes <strong>Malabar cardamom</strong>, <strong>Mysore cardamom</strong>, and <strong>Vazhukka cardamom</strong> (a natural hybrid of Malabar and Mysore), each valued for its distinctive aroma, oil content, and bold flavor profile.
              </p>
              <p className="text-lg mb-6">
                The cardamom pods are harvested at the right stage of maturity and carefully dried to preserve their natural green color, freshness, and essential oils. Strict quality control measures such as cleaning, grading, and sorting are followed to ensure uniform size and export-grade standards. The result is cardamom with strong fragrance, pleasant sweetness, and long-lasting flavor.
              </p>
              <p className="text-lg">
                Our cardamom is widely used in culinary preparations, confectionery products, beverages, spice blends, and food processing industries across global markets. It is also highly valued in traditional medicine and wellness applications. Hygienic packing and proper moisture control help retain quality during storage and long-distance transportation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cardamom Varieties Section */}
      <section className="py-12 bg-gradient-to-br from-green-900 via-emerald-900 to-green-900 relative">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4 drop-shadow-2xl">
            Premium Varieties
          </h2>
          <p className="text-base text-green-200 text-center mb-10 max-w-2xl mx-auto drop-shadow-lg">
            Choose from our exceptional selection of cardamom varieties, each with unique characteristics and superior quality.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {varieties.map((variety, index) => (
              <button
                key={index}
                onClick={() => setActiveVariety(index)}
                className={`px-6 py-3 rounded-full font-bold text-base transition-all duration-300 transform hover:scale-105 border-2 shadow-xl ${
                  activeVariety === index
                    ? 'bg-white text-green-900 shadow-2xl border-white scale-105'
                    : 'bg-green-900/50 backdrop-blur-sm text-white border-white/60 hover:bg-white/20 hover:border-white'
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
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-bold">
                      Premium Quality Cardamom
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-green-900 mb-2 leading-tight">
                    {varieties[activeVariety].name}
                  </h3>

                  <p className="text-gray-700 leading-relaxed mb-3 text-sm">
                    {varieties[activeVariety].description}
                  </p>

                  <div className="mb-3">
                    <h4 className="text-sm font-bold text-green-900 mb-2 flex items-center gap-2">
                      <Sparkles className="w-3 h-3 text-green-600" />
                      Key Features
                    </h4>
                    <div className="grid grid-cols-2 gap-1.5">
                      {varieties[activeVariety].features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 p-1.5 bg-gray-50 rounded-lg shadow-sm border border-green-100 hover:shadow-md transition-shadow"
                        >
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-800 font-semibold text-xs">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-900 to-emerald-900 rounded-lg p-3 border border-green-800">
                    <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                      <Package className="w-3 h-3 text-white" />
                      Technical Specifications
                    </h4>
                    <div className="grid grid-cols-2 gap-1.5">
                      <div className="bg-white p-1.5 rounded-lg shadow-md border border-green-200">
                        <span className="text-[9px] font-bold text-green-800 uppercase tracking-wide">HS Code</span>
                        <p className="font-bold text-black text-xs mt-0.5">{varieties[activeVariety].specs.hsCode}</p>
                      </div>
                      <div className="bg-white p-1.5 rounded-lg shadow-md border border-green-200">
                        <span className="text-[9px] font-bold text-green-800 uppercase tracking-wide">Min Order</span>
                        <p className="font-bold text-black text-xs mt-0.5">{varieties[activeVariety].specs.moq}</p>
                      </div>
                      <div className="bg-white p-1.5 rounded-lg shadow-md border border-green-200">
                        <span className="text-[9px] font-bold text-green-800 uppercase tracking-wide">Moisture</span>
                        <p className="font-bold text-black text-xs mt-0.5">{varieties[activeVariety].specs.moisture}</p>
                      </div>
                      <div className="bg-white p-1.5 rounded-lg shadow-md border border-green-200">
                        <span className="text-[9px] font-bold text-green-800 uppercase tracking-wide">Shelf Life</span>
                        <p className="font-bold text-black text-xs mt-0.5">{varieties[activeVariety].specs.shelfLife}</p>
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
                className={`bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transform transition-all duration-500 hover:-translate-y-2 border border-green-100 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100 + 800}ms` }}
              >
                <div className="text-4xl mb-4 text-center">{app.icon}</div>
                <h3 className="text-xl font-bold text-green-900 mb-3 text-center">{app.title}</h3>
                <p className="text-gray-700 text-center leading-relaxed">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Points */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Why Choose Our Cardamom
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityPoints.map((point, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transform transition-all duration-500 hover:-translate-y-2 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100 + 1200}ms` }}
              >
                <point.icon className="w-12 h-12 text-green-600 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{point.title}</h3>
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

export default CardamomPage