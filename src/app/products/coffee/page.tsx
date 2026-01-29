'use client'

import { useState, useEffect } from 'react'
import { Coffee, Leaf, Award, Globe, Package, Clock, Thermometer } from 'lucide-react'
import { ProductGrid } from '@/components'

const CoffeePage = () => {
  const [activeVariant, setActiveVariant] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

  const coffeeVideos = [
    '/coffee-video-1.mp4',
    '/coffee-video-2.mp4'
  ]

  useEffect(() => {
    setIsVisible(true)
    
    // Preload videos for better performance
    const preloadVideos = () => {
      coffeeVideos.forEach((videoSrc, index) => {
        if (index < 2) { // Preload first 2 videos
          const video = document.createElement('video')
          video.preload = 'metadata'
          video.src = videoSrc
        }
      })
    }
    
    // Rotate videos every 8 seconds (reduced from 10 for faster rotation)
    const videoInterval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % coffeeVideos.length)
    }, 8000)

    preloadVideos()
    return () => clearInterval(videoInterval)
  }, [])

  const variants = [
    {
      name: 'Arabica Coffee Beans',
      description: 'Arabica coffee beans are sourced from high-altitude plantations where climatic conditions support slow bean development and superior flavor formation. These beans are carefully handpicked at optimal ripeness to ensure uniform size, smooth texture, and rich aroma.',
      features: ['Mild Acidity', 'Balanced Sweetness', 'Refined Taste', 'High Altitude Grown'],
      specs: {
        hsCode: '090111',
        moq: '1 Metric Ton',
        shelfLife: '12–18 months',
        moisture: 'Max 12.5%'
      },
      color: 'from-amber-600 to-amber-800'
    },
    {
      name: 'Robusta Coffee Beans',
      description: 'Robusta coffee beans are cultivated in regions with warm climates and are valued for their strong body, bold flavor, and higher caffeine content. These beans are carefully harvested and processed to ensure consistency in quality and taste.',
      features: ['Strong Body', 'Bold Flavor', 'Higher Caffeine', 'Excellent Crema'],
      specs: {
        hsCode: '090111',
        moq: '1 Metric Ton',
        shelfLife: '12–18 months',
        moisture: 'Max 12.5%'
      },
      color: 'from-brown-600 to-brown-800'
    },
    {
      name: 'Roasted Coffee Beans',
      description: 'Our roasted coffee beans are prepared from high-quality Arabica and Robusta beans using controlled roasting techniques. The roasting process is carefully monitored to develop rich aroma, balanced flavor, and consistent color while preserving freshness.',
      features: ['Controlled Roasting', 'Rich Aroma', 'Multiple Roast Profiles', 'Extended Shelf Life'],
      specs: {
        hsCode: '090121',
        moq: '500 KG',
        shelfLife: '6–12 months',
        moisture: 'Max 5%'
      },
      color: 'from-orange-600 to-red-700'
    }
  ]

  const qualityPoints = [
    { icon: Leaf, title: 'Premium Quality', desc: 'Carefully selected from ideal plantations' },
    { icon: Award, title: 'International Standards', desc: 'Meets global export requirements' },
    { icon: Globe, title: 'Global Supply', desc: 'Serving markets worldwide' },
    { icon: Package, title: 'Flexible Packaging', desc: 'Customized for your needs' }
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
          <div className={`transform transition-all duration-1500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            {/* Main Title */}
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white drop-shadow-2xl">
              <span className="bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-300 bg-clip-text text-transparent animate-gradient">
                Premium Coffee
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-3xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed drop-shadow-lg font-light">
              Sourced from carefully selected plantations, processed with industry-standard methods to deliver exceptional quality and flavor
            </p>
          </div>
        </div>
      </section>

      {/* Coffee Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Coffee Process
            </h2>
            <div className="w-24 h-1 bg-brown-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From plantation to your cup - discover our commitment to quality at every step
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: '01',
                title: 'Plantation Selection',
                description: 'Sourced from carefully selected plantations with ideal climate, rich soil, and traditional coffee-growing practices.',
                icon: '🌱',
                features: ['High Altitude Farms', 'Rich Volcanic Soil', 'Optimal Climate', 'Traditional Methods']
              },
              {
                step: '02',
                title: 'Quality Processing',
                description: 'Beans undergo thorough cleaning, grading, and quality checks using industry-standard methods.',
                icon: '⚙️',
                features: ['Advanced Sorting', 'Quality Testing', 'Moisture Control', 'Grade Classification']
              },
              {
                step: '03',
                title: 'Global Export',
                description: 'Carefully packaged and delivered to international markets with focus on quality and traceability.',
                icon: '🌍',
                features: ['Quality Packaging', 'Global Shipping', 'Temperature Control', 'Full Traceability']
              }
            ].map((step, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 200 + 600}ms` }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-brown-600 text-white font-bold text-lg rounded-full flex items-center justify-center mr-4">
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
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-brown-600 rounded-full mr-3 flex-shrink-0"></div>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center text-brown-800 mb-12">
            Why Choose Our Coffee
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityPoints.map((point, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transform transition-all duration-500 hover:-translate-y-2 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 100 + 600}ms` }}
              >
                <point.icon className="w-12 h-12 text-brown-600 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-brown-800 mb-2 text-center">
                  {point.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coffee Heritage Section */}
      <section className="py-20 bg-gradient-to-br from-red-900 via-amber-900 to-red-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                Coffee Heritage
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto mb-8"></div>
              <p className="text-xl md:text-2xl text-white leading-relaxed mb-12">
                "From the misty highlands where our coffee grows to the careful hands that harvest each bean, 
                every cup tells a story of tradition, passion, and unwavering commitment to excellence."
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { number: '1000+', label: 'Farmers', icon: '👨‍🌾' },
                  { number: '50+', label: 'Years Heritage', icon: '🏛️' },
                  { number: '15+', label: 'Regions', icon: '🌍' },
                  { number: '100%', label: 'Sustainable', icon: '🌱' }
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

      {/* Coffee Variants */}
      <section className="py-20 bg-gradient-to-br from-amber-900 via-red-900 to-amber-900 relative">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-center text-white mb-6 drop-shadow-2xl">
            Available Variants
          </h2>
          <p className="text-xl text-amber-200 text-center mb-16 max-w-2xl mx-auto drop-shadow-lg">
            Choose from our premium selection of coffee varieties, each with unique characteristics and flavor profiles.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-16">
            {variants.map((variant, index) => (
              <button
                key={index}
                onClick={() => setActiveVariant(index)}
                className={`px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 border-2 shadow-xl ${
                  activeVariant === index
                    ? 'bg-white text-amber-900 shadow-2xl border-white scale-105'
                    : 'bg-amber-900/50 backdrop-blur-sm text-white border-white/60 hover:bg-white/20 hover:border-white'
                }`}
              >
                {variant.name}
              </button>
            ))}
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-white/30">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className={`bg-gradient-to-br ${variants[activeVariant].color} p-12 flex items-center justify-center min-h-[600px] relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="text-center text-white relative z-10">
                    <Coffee className="w-40 h-40 mx-auto mb-8 opacity-90 animate-pulse-coffee" />
                    <div className="bg-black/40 backdrop-blur-md px-8 py-4 rounded-2xl border border-white/30">
                      <p className="text-2xl font-bold mb-2">Premium Quality</p>
                      <p className="text-lg opacity-90">{variants[activeVariant].name}</p>
                    </div>
                  </div>
                </div>

                <div className="p-10 lg:p-12 bg-white">
                  <div className="mb-6">
                    <span className="inline-block px-6 py-3 bg-brown-100 text-brown-800 rounded-full text-lg font-bold mb-6">
                      Premium Quality Coffee
                    </span>
                  </div>
                  
                  <h3 className="text-4xl font-bold text-brown-900 mb-8 leading-tight">
                    {variants[activeVariant].name}
                  </h3>
                  
                  <p className="text-gray-700 leading-relaxed mb-10 text-xl">
                    {variants[activeVariant].description}
                  </p>

                  <div className="mb-10">
                    <h4 className="text-2xl font-bold text-brown-900 mb-8 flex items-center gap-3">
                      <Award className="w-8 h-8 text-brown-600" />
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {variants[activeVariant].features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl shadow-sm border border-brown-100 hover:shadow-md transition-shadow">
                          <div className="w-4 h-4 bg-gradient-to-r from-brown-600 to-amber-600 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-800 font-semibold text-lg">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-red-900 to-amber-900 rounded-2xl p-8 border-2 border-red-800">
                    <h4 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                      <Package className="w-8 h-8 text-white" />
                      Technical Specifications
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="bg-white p-6 rounded-xl shadow-md border border-red-200">
                        <span className="text-sm font-bold text-red-800 uppercase tracking-wide">HS Code</span>
                        <p className="font-bold text-black text-2xl mt-2">{variants[activeVariant].specs.hsCode}</p>
                      </div>
                      <div className="bg-white p-6 rounded-xl shadow-md border border-red-200">
                        <span className="text-sm font-bold text-red-800 uppercase tracking-wide">Minimum Order</span>
                        <p className="font-bold text-black text-2xl mt-2">{variants[activeVariant].specs.moq}</p>
                      </div>
                      <div className="bg-white p-6 rounded-xl shadow-md border border-red-200">
                        <span className="text-sm font-bold text-red-800 uppercase tracking-wide">Shelf Life</span>
                        <p className="font-bold text-black text-2xl mt-2">{variants[activeVariant].specs.shelfLife}</p>
                      </div>
                      <div className="bg-white p-6 rounded-xl shadow-md border border-red-200">
                        <span className="text-sm font-bold text-red-800 uppercase tracking-wide">Moisture Content</span>
                        <p className="font-bold text-black text-2xl mt-2">{variants[activeVariant].specs.moisture}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Coffee Solutions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-brown-800 mb-8">
              Global Coffee Solutions
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-12">
              We offer flexible packaging options to suit bulk buyers, roasters, distributors, and international importers. Our focus on quality, traceability, and timely delivery makes our coffee suitable for global markets.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {[
                { icon: Clock, label: 'Timely Delivery', desc: 'On-time shipping worldwide' },
                { icon: Thermometer, label: 'Quality Control', desc: '24/7 monitoring systems' },
                { icon: Globe, label: 'Global Reach', desc: '25+ countries served' },
                { icon: Package, label: 'Flexible Packaging', desc: 'Custom solutions available' }
              ].map((service, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                  <service.icon className="w-12 h-12 text-brown-600 mx-auto mb-4" />
                  <h3 className="font-bold text-brown-800 mb-2">{service.label}</h3>
                  <p className="text-sm text-gray-600">{service.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-red-900 to-amber-900 text-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Partner With Us?
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Contact us today to discuss your coffee requirements and discover how we can support your business with premium quality coffee products.
              </p>
              <button className="bg-white text-red-900 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg">
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

export default CoffeePage