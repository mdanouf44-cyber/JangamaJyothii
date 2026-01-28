'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, Leaf, Recycle, Shield, Globe } from 'lucide-react'
import ProductGrid from '@/components/ProductGrid'

const ArecaPlatesPage = () => {
  const [activeVariety, setActiveVariety] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const varieties = [
    {
      name: 'Round Areca Plates',
      description: 'Round areca plates are the most commonly used eco-friendly tableware made from naturally fallen areca palm leaves. These plates are produced by cleaning and heat-pressing the leaves into a smooth, round shape without the use of chemicals or additives.',
      features: ['Natural Fiber Structure', 'Excellent Strength', 'Chemical-Free', 'Versatile Use'],
      hsCode: '140490',
      moq: '10,000 pieces',
      shelfLife: '2–3 years',
      packaging: 'Moisture-free cartons with food-grade paper wrapping',
      uses: 'Complete meals, snacks, desserts, casual and formal dining occasions'
    },
    {
      name: 'Square Areca Plates',
      description: 'Square areca plates are designed for modern food presentation and efficient space usage. Made from natural areca palm leaves, these plates offer the same strength and eco-friendly benefits as round plates, with an added contemporary look.',
      features: ['Contemporary Design', 'Space Efficient', 'Modern Presentation', 'Structured Layout'],
      hsCode: '140490',
      moq: '10,000 pieces',
      shelfLife: '2–3 years',
      packaging: 'Food-grade paper bundles in corrugated export cartons',
      uses: 'Catering services, restaurants, buffets, events with structured food arrangement'
    },
    {
      name: 'Compartment Areca Plates',
      description: 'Compartment areca plates are specially designed with multiple sections to separate different food items. These plates are ideal for serving full meals without mixing curries, rice, and side dishes using heat-press technology.',
      features: ['Multiple Sections', 'Uniform Thickness', 'Strong Compartments', 'Full Meal Service'],
      hsCode: '140490',
      moq: '10,000 pieces',
      shelfLife: '2–3 years',
      packaging: 'Shrink-wrapped bundles in heavy-duty export cartons',
      uses: 'Catering, temples, weddings, institutional dining, takeaway food services'
    },
    {
      name: 'Areca Bowls',
      description: 'Areca bowls are molded from high-quality areca palm leaves and are ideal for serving gravies, curries, desserts, soups, and snacks. These bowls are naturally strong, leak-resistant, and safe for both hot and cold food items.',
      features: ['Leak-Resistant', 'Shape Retention', 'Hot & Cold Safe', 'Liquid Compatible'],
      hsCode: '140490',
      moq: '10,000 pieces',
      shelfLife: '2–3 years',
      packaging: 'Stacked with food-grade paper in export-quality boxes',
      uses: 'Restaurants, food courts, catering events, eco-friendly takeaway services'
    }
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
        animationDuration: `${4 + Math.random() * 2}s`
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
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(10deg); }
          }
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
        `}</style>
      </div>

      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-green-700 hover:text-green-800 font-medium transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className={`text-5xl md:text-7xl font-bold text-green-900 mb-6 transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              Areca Plates
            </h1>
            <p className={`text-xl md:text-2xl text-green-800 mb-8 max-w-3xl mx-auto transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              100% Natural, Biodegradable & Eco-Friendly Tableware
            </p>
            
            {/* Image Placeholder */}
            <div className={`w-full max-w-4xl mx-auto h-96 bg-gradient-to-r from-green-100 to-lime-100 rounded-2xl border-2 border-dashed border-green-300 flex items-center justify-center mb-12 transform transition-all duration-1000 delay-500 ${
              isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}>
              <div className="text-center">
                <div className="text-6xl mb-4">🍽️</div>
                <p className="text-green-700 font-medium">Areca Plates Hero Image</p>
                <p className="text-green-600 text-sm">Image will be added here</p>
              </div>
            </div>
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
                Our areca plates are manufactured using naturally fallen areca palm leaves, making them an eco-friendly, sustainable, and biodegradable alternative to plastic and paper-based tableware. The leaves are carefully collected, cleaned, and processed without the use of chemicals, preservatives, or additives.
              </p>
              <p className="mb-6">
                The production process involves washing the leaves thoroughly and heat-pressing them into different shapes and sizes using modern machinery. This process enhances durability while retaining the natural texture and strength of the areca leaf.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Varieties Section */}
      <section className="py-20 bg-gradient-to-r from-green-700 to-lime-700">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Our Areca Plate Varieties
          </h2>
          
          {/* Variety Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {varieties.map((variety, index) => (
              <button
                key={index}
                onClick={() => setActiveVariety(index)}
                className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 text-sm ${
                  activeVariety === index
                    ? 'bg-white text-green-700 shadow-lg transform scale-105'
                    : 'bg-green-600 text-white hover:bg-green-500'
                }`}
              >
                {variety.name}
              </button>
            ))}
          </div>

          {/* Active Variety Details */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Image Placeholder */}
              <div className="bg-gradient-to-br from-green-100 to-lime-100 rounded-xl h-80 flex items-center justify-center border-2 border-dashed border-green-300">
                <div className="text-center">
                  <div className="text-5xl mb-4">🍽️</div>
                  <p className="text-green-700 font-medium">{varieties[activeVariety].name}</p>
                  <p className="text-green-600 text-sm">Image will be added here</p>
                </div>
              </div>

              {/* Variety Info */}
              <div>
                <h3 className="text-2xl font-bold text-green-900 mb-4">
                  {varieties[activeVariety].name}
                </h3>
                <p className="text-gray-800 mb-6 leading-relaxed">
                  {varieties[activeVariety].description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-green-800 mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {varieties[activeVariety].features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specifications */}
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-3">Specifications:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-700">HS Code:</span>
                      <span className="font-medium">{varieties[activeVariety].hsCode}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">MOQ:</span>
                      <span className="font-medium">{varieties[activeVariety].moq}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Shelf Life:</span>
                      <span className="font-medium">{varieties[activeVariety].shelfLife}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Uses and Packaging */}
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-gradient-to-r from-green-50 to-lime-50 rounded-xl">
                <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  Applications:
                </h4>
                <p className="text-gray-800">{varieties[activeVariety].uses}</p>
              </div>
              <div className="p-6 bg-gradient-to-r from-lime-50 to-green-50 rounded-xl">
                <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Packaging:
                </h4>
                <p className="text-gray-800">{varieties[activeVariety].packaging}</p>
              </div>
            </div>
          </div>
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
                description: 'Made from naturally fallen areca palm leaves without chemicals'
              },
              {
                icon: '♻️',
                title: 'Biodegradable',
                description: 'Completely biodegradable, compostable, and eco-friendly'
              },
              {
                icon: '🚫',
                title: 'Chemical-Free',
                description: 'Free from chemicals, preservatives, and artificial coatings'
              },
              {
                icon: '🔥',
                title: 'Heat Resistant',
                description: 'Heat resistant and leak proof for hot and cold foods'
              },
              {
                icon: '💪',
                title: 'Strong & Durable',
                description: 'Strong, durable, and food-safe for all types of meals'
              },
              {
                icon: '🍽️',
                title: 'Versatile Use',
                description: 'Suitable for hot, cold, and oily food items without damage'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl group-hover:bg-green-600 group-hover:scale-110 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-green-900 mb-3">{feature.title}</h3>
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
              Our areca plates are widely used for events, catering services, restaurants, temples, weddings, festivals, and eco-conscious food outlets. After use, the plates naturally decompose within a short period, returning to the soil without causing environmental harm.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Leaf className="w-12 h-12" />,
                  title: 'Sustainable Source',
                  description: 'Made from naturally fallen leaves, no trees are cut'
                },
                {
                  icon: <Recycle className="w-12 h-12" />,
                  title: 'Zero Waste',
                  description: 'Completely biodegradable, returns to soil naturally'
                },
                {
                  icon: <Shield className="w-12 h-12" />,
                  title: 'Plastic Alternative',
                  description: 'Eco-friendly replacement for harmful plastic tableware'
                }
              ].map((impact, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-green-600 mb-4 flex justify-center">
                    {impact.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-green-800 mb-3">{impact.title}</h3>
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
              Perfect for catering services, eco-friendly events, hotels, restaurants, food courts, religious functions, weddings, festivals, and takeaway food services.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                'Catering Services',
                'Eco-Friendly Events',
                'Hotels & Restaurants',
                'Food Courts',
                'Religious Functions',
                'Weddings & Festivals'
              ].map((application, index) => (
                <div key={index} className="bg-green-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-3">🍽️</div>
                  <h3 className="font-semibold text-green-800">{application}</h3>
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
                description: 'Environmentally sustainable alternative to plastic tableware'
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'Export Quality',
                description: 'Hygienically processed and export-grade quality standards'
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: 'Wide Range',
                description: 'Wide range of sizes and designs with custom packaging available'
              },
              {
                icon: <Recycle className="w-8 h-8" />,
                title: 'Global Markets',
                description: 'Suitable for global eco-conscious markets and bulk supply'
              }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-700 group-hover:bg-green-700 group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-green-900 mb-3">{item.title}</h3>
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
              Contact us today to discuss your eco-friendly tableware requirements and discover how we can support your business with sustainable areca plate solutions.
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