'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Sparkles, Award, Shield, Globe, Package, Leaf } from 'lucide-react'
import ProductGrid from '@/components/ProductGrid'

const JutePaperProductsPage = () => {
  const [activeVariety, setActiveVariety] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const varieties = [
    {
      name: 'Jute Bags',
      description:
        'Premium-quality jute bags manufactured from natural jute fibers, offering excellent strength, durability, and eco-friendliness. These biodegradable bags are perfect for shopping, promotional purposes, and sustainable packaging solutions. Available in various sizes, designs, and customization options to meet diverse market requirements.',
      features: ['100% Natural Fiber', 'Biodegradable', 'High Strength', 'Customizable Design'],
      specs: {
        hsCode: '630510',
        moq: '1000 PCS',
        material: 'Natural Jute Fiber',
        shelfLife: '24 months',
      },
      color: 'from-green-600 to-emerald-700',
      image: '/Jute Bags.jpg',
    },
    {
      name: 'Paper Bags',
      description:
        'High-quality paper bags made from recycled and virgin paper materials, providing excellent printing quality and structural integrity. These eco-friendly bags are ideal for retail packaging, food service, and promotional applications. Available in various sizes, colors, and finishing options with custom branding capabilities.',
      features: ['Recyclable Material', 'Excellent Print Quality', 'Food Safe', 'Custom Branding'],
      specs: {
        hsCode: '481910',
        moq: '5000 PCS',
        material: 'Kraft Paper/Art Paper',
        shelfLife: '18 months',
      },
      color: 'from-amber-600 to-orange-700',
      image: '/Paper Bags.jpg',
    },
    {
      name: 'Paper Stationery Items',
      description:
        'Comprehensive range of paper stationery products including notebooks, writing pads, office supplies, and educational materials. Manufactured using high-quality paper with excellent writing surface and durability. Available in various formats, sizes, and binding options to cater to educational and professional requirements.',
      features: ['High-Quality Paper', 'Smooth Writing Surface', 'Durable Binding', 'Various Formats'],
      specs: {
        hsCode: '482010',
        moq: '2000 PCS',
        material: 'Wood-Free Paper',
        shelfLife: '36 months',
      },
      color: 'from-blue-600 to-indigo-700',
      image: '/Paper Stationery Items.jpg',
    },
  ]

  const applications = [
    { icon: '•', title: 'Retail Packaging', desc: 'Sustainable packaging solutions for retail businesses' },
    { icon: '•', title: 'Promotional Items', desc: 'Branded bags and stationery for marketing campaigns' },
    { icon: '•', title: 'Food Service', desc: 'Food-safe packaging for restaurants and cafes' },
    { icon: '•', title: 'Educational Supplies', desc: 'Notebooks and stationery for schools and offices' },
    { icon: '•', title: 'Corporate Gifts', desc: 'Eco-friendly corporate gifting solutions' },
    { icon: '•', title: 'Event Management', desc: 'Sustainable packaging for events and conferences' },
  ]

  const qualityPoints = [
    { icon: Leaf, title: 'Eco-Friendly', desc: 'Sustainable and biodegradable materials' },
    { icon: Award, title: 'Premium Quality', desc: 'High-grade materials and manufacturing standards' },
    { icon: Shield, title: 'Durable Design', desc: 'Strong construction for reliable performance' },
    { icon: Globe, title: 'Global Supply', desc: 'Serving packaging markets worldwide' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-amber-50 to-blue-50">
      {/* Hero Section with Gradient Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-amber-600 to-blue-600">
          <div className="absolute inset-0 bg-black/40"></div>
          
          {/* Animated Pattern Overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
          </div>
        </div>

        {/* Floating Eco Icons */}
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
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white drop-shadow-2xl">
              <span className="bg-gradient-to-r from-green-300 via-amber-300 to-blue-300 bg-clip-text text-transparent animate-gradient">
                Jute & Paper Products
              </span>
            </h1>
            <p className="text-xl md:text-3xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed drop-shadow-lg font-light">
              High-quality eco-friendly jute products and sustainable packaging solutions 
              for innovative, cost-effective, and environmentally conscious applications
            </p>
          </div>
        </div>
      </section>

      {/* Main Description */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Sustainable Packaging Solutions
            </h2>
            <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
              <p className="text-xl mb-6">
                We offer high-quality eco-friendly jute products and sustainable packaging solutions designed for modern businesses seeking innovative, cost-effective, and environmentally conscious alternatives. Our range includes <strong>Jute Bags</strong>, <strong>Paper Bags</strong>, and <strong>Paper Stationery Items</strong>, each crafted with superior materials and manufacturing standards.
              </p>
              <p className="text-lg mb-6">
                Our products are manufactured using natural jute fibers, recycled paper materials, and high-grade wood-free paper to ensure durability, functionality, and environmental sustainability. Strict quality control measures including material selection, manufacturing processes, and finishing ensure consistent quality and customer satisfaction.
              </p>
              <p className="text-lg">
                These products are widely used in retail packaging, promotional campaigns, food service applications, educational supplies, and corporate gifting across global markets. They offer excellent branding opportunities, customization options, and sustainable alternatives to conventional packaging materials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Varieties Section */}
      <section className="py-12 bg-gradient-to-br from-green-900 via-amber-900 to-blue-900 relative">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4 drop-shadow-2xl">
            Premium Product Range
          </h2>
          <p className="text-base text-green-200 text-center mb-10 max-w-2xl mx-auto drop-shadow-lg">
            Choose from our exceptional selection of eco-friendly products, each designed for sustainability and superior performance.
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
                      Eco-Friendly Products
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

                  <div className="bg-gradient-to-r from-gray-900 to-green-900 rounded-lg p-3 border border-gray-800">
                    <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                      <Package className="w-3 h-3 text-white" />
                      Product Specifications
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
                        <span className="text-[9px] font-bold text-green-800 uppercase tracking-wide">Material</span>
                        <p className="font-bold text-black text-xs mt-0.5">{varieties[activeVariety].specs.material}</p>
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
                className={`bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transform transition-all duration-500 hover:-translate-y-2 border border-green-200 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100 + 800}ms` }}
              >
                <div className="text-4xl mb-4 text-center text-green-600">{app.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{app.title}</h3>
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
            Why Choose Our Products
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

export default JutePaperProductsPage