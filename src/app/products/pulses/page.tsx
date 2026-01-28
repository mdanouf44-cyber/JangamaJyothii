'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, Leaf, Award, Shield, Globe } from 'lucide-react'
import ProductGrid from '@/components/ProductGrid'

const PulsesPage = () => {
  const [activeVariety, setActiveVariety] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const varieties = [
    {
      name: 'Black Chickpeas (Kala Chana)',
      description: 'Black chickpeas are a hardy pulse variety known for their firm texture, nutty flavor, and high nutritional value. They are cultivated in dry regions and harvested at full maturity to ensure uniform grain size and natural hardness.',
      features: ['Firm Texture', 'Nutty Flavor', 'High Nutrition', 'Natural Hardness'],
      hsCode: '071320',
      moq: '1 Metric Ton',
      moisture: 'Max 12%',
      shelfLife: '12–18 months',
      uses: 'Traditional cuisines, snacks, curries, flour production, food processing industries'
    },
    {
      name: 'Black Gram (Urad Dal)',
      description: 'Black gram is a popular pulse valued for its high protein content, creamy texture when cooked, and strong binding properties. It is cultivated under controlled farming practices and processed carefully to maintain grain integrity and freshness.',
      features: ['High Protein', 'Creamy Texture', 'Binding Properties', 'Premium Quality'],
      hsCode: '071331',
      moq: '1 Metric Ton',
      moisture: 'Max 12%',
      shelfLife: '12–18 months',
      uses: 'Traditional dishes, fermented foods, batters, papad manufacturing, food processing'
    },
    {
      name: 'Chickpeas (Split)',
      description: 'Split chickpeas are produced by dehusking and splitting whole chickpeas, resulting in uniform yellow pulses with smooth texture. This form cooks faster and is widely used in daily cooking and food processing applications.',
      features: ['Uniform Yellow', 'Smooth Texture', 'Fast Cooking', 'Processed Form'],
      hsCode: '071320',
      moq: '1 Metric Ton',
      moisture: 'Max 12%',
      shelfLife: '12–18 months',
      uses: 'Curries, snacks, flour milling, ready-to-cook food products'
    },
    {
      name: 'Green Gram (Moong Beans)',
      description: 'Green gram is a highly nutritious pulse known for its easy digestibility, mild flavor, and high protein content. It is harvested at the right maturity stage and processed to retain its natural green color and nutritional benefits.',
      features: ['Easy Digestibility', 'Mild Flavor', 'High Protein', 'Natural Green Color'],
      hsCode: '071331',
      moq: '1 Metric Ton',
      moisture: 'Max 12%',
      shelfLife: '12 months',
      uses: 'Household cooking, sprouts, soups, snacks, health-oriented food products'
    },
    {
      name: 'Horse Gram',
      description: 'Horse gram is a traditional pulse valued for its high fiber content and strong nutritional profile. It is cultivated in dry regions and known for its resilience and long storage life. The grains are processed carefully to remove impurities.',
      features: ['High Fiber', 'Strong Nutrition', 'Resilient', 'Long Storage Life'],
      hsCode: '071390',
      moq: '1 Metric Ton',
      moisture: 'Max 12%',
      shelfLife: '18–24 months',
      uses: 'Traditional cuisines, health foods, animal feed, food processing industries'
    },
    {
      name: 'Pigeon Peas (Toor Dal)',
      description: 'Pigeon peas are one of the most commonly consumed pulses, known for their soft texture, mild taste, and high protein content. They are harvested at optimal maturity and processed to ensure uniform grain size and consistent cooking quality.',
      features: ['Soft Texture', 'Mild Taste', 'High Protein', 'Uniform Size'],
      hsCode: '071360',
      moq: '1 Metric Ton',
      moisture: 'Max 12%',
      shelfLife: '12–18 months',
      uses: 'Household cooking, catering services, food processing, packaged food products'
    }
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
        animationDuration: `${2 + Math.random() * 3}s`
      }}
    >
      🫘
    </div>
  ))

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Floating Pulses Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {floatingPulses}
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
              Premium Pulses
            </h1>
            <p className={`text-xl md:text-2xl text-green-800 mb-8 max-w-3xl mx-auto transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              Protein-Rich Nutritional Powerhouses from Sustainable Farms
            </p>
            
            {/* Image Placeholder */}
            <div className={`w-full max-w-4xl mx-auto h-96 bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl border-2 border-dashed border-green-300 flex items-center justify-center mb-12 transform transition-all duration-1000 delay-500 ${
              isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}>
              <div className="text-center">
                <div className="text-6xl mb-4">🫘</div>
                <p className="text-green-700 font-medium">Pulses Hero Image</p>
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
              Premium Pulse Products
            </h2>
            <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
              <p className="mb-6">
                Our pulses are sourced from carefully selected farms where crops are cultivated using sustainable agricultural practices and natural growing methods. Each pulse variety is harvested at optimal maturity to ensure maximum nutritional value, uniform grain size, and consistent quality.
              </p>
              <p className="mb-6">
                We work closely with farmers and processing units to maintain traceability and meet international quality standards. After harvesting, the pulses undergo thorough cleaning, sorting, and grading to remove foreign matter, damaged grains, and impurities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Varieties Section */}
      <section className="py-20 bg-gradient-to-r from-green-700 to-emerald-700">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Our Pulse Varieties
          </h2>
          
          {/* Variety Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {varieties.map((variety, index) => (
              <button
                key={index}
                onClick={() => setActiveVariety(index)}
                className={`px-3 py-2 rounded-full font-semibold transition-all duration-300 text-xs md:text-sm ${
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
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl h-80 flex items-center justify-center border-2 border-dashed border-green-300">
                <div className="text-center">
                  <div className="text-5xl mb-4">🫘</div>
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
                      <span className="text-gray-700">Moisture:</span>
                      <span className="font-medium">{varieties[activeVariety].moisture}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Shelf Life:</span>
                      <span className="font-medium">{varieties[activeVariety].shelfLife}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Uses */}
            <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
              <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                <Globe className="w-5 h-5" />
                Applications:
              </h4>
              <p className="text-gray-800">{varieties[activeVariety].uses}</p>
            </div>
          </div>
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
              Our pulses are rich sources of protein, dietary fiber, vitamins, and essential minerals, making them an important component of balanced diets worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'High Protein Content',
                description: 'Essential amino acids for muscle development and overall health',
                icon: '💪'
              },
              {
                title: 'Rich in Fiber',
                description: 'Promotes digestive health and helps maintain blood sugar levels',
                icon: '🌱'
              },
              {
                title: 'Vitamins & Minerals',
                description: 'Essential nutrients including iron, folate, potassium, and magnesium',
                icon: '⚡'
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-green-50 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-green-800 mb-3">{benefit.title}</h3>
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
                description: 'Naturally grown and carefully processed using sustainable agricultural practices'
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: 'High Nutrition',
                description: 'High nutritional value and consistent quality with maximum protein content'
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'Long Shelf Life',
                description: 'Low moisture content and long shelf life with proper storage conditions'
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: 'Export Grade',
                description: 'Hygienically packed and export-grade standards for international markets'
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

      {/* Applications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-8">
              Applications
            </h2>
            <p className="text-lg text-gray-800 mb-8">
              Our pulses are perfect for household cooking, traditional cuisines, food processing industries, protein-rich food products, catering services, and bulk distribution markets.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                'Household Cooking',
                'Traditional Cuisines',
                'Food Processing',
                'Protein-Rich Products',
                'Catering Services',
                'Bulk Distribution'
              ].map((application, index) => (
                <div key={index} className="bg-green-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-3">🫘</div>
                  <h3 className="font-semibold text-green-800">{application}</h3>
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
                <h3 className="text-xl font-semibold text-green-800 mb-4">Processing Excellence</h3>
                <p className="text-gray-800">
                  Advanced processing techniques are used to ensure uniformity, low moisture content, and extended shelf life. All products are handled under hygienic conditions to preserve freshness and nutritional integrity.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Export Standards</h3>
                <p className="text-gray-800">
                  Packaging is done using food-grade materials to protect the products from moisture, pests, and contamination during storage and transportation. Custom packaging options are available based on buyer requirements.
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
            <h3 className="text-2xl font-bold mb-4">Ready to Partner With Us?</h3>
            <p className="text-lg mb-6 opacity-90">
              Contact us today to discuss your pulse requirements and discover how we can support your business with premium quality pulse products.
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