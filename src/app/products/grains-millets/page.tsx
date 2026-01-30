'use client'

import { useState, useEffect } from 'react'
import { Sparkles, Award, Shield, Globe, Package, Leaf } from 'lucide-react'
import ProductGrid from '@/components/ProductGrid'

const GrainsMilletsPage = () => {
  const [activeVariety, setActiveVariety] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const varieties = [
    {
      name: 'Finger Millet (Ragi)',
      description:
        'Finger millet is a highly nutritious millet known for its high calcium content, rich fiber, and excellent digestibility. It is widely cultivated in dry regions and harvested at full maturity to ensure strong grains and consistent quality. The grains are carefully cleaned and processed to retain their natural reddish-brown color and nutritional value.',
      features: ['High Calcium Content', 'Rich Fiber', 'Excellent Digestibility', 'Natural Reddish-Brown Color'],
      specs: {
        hsCode: '100821',
        moq: '1 Metric Ton',
        moisture: 'Max 12%',
        shelfLife: '12–18 months',
      },
      color: 'from-amber-600 to-orange-700',
      image: '/finger-millet-ragi.jpg',
      uses: 'Porridges, rotis, malted foods, health drinks, baby food formulations, wellness-focused markets',
    },
    {
      name: 'Pearl Millet (Bajra)',
      description:
        'Pearl millet is a robust grain valued for its high energy content, iron, and protein. It is cultivated in arid and semi-arid regions and is known for its strong grains and earthy flavor. The millet is processed under hygienic conditions to ensure purity and uniformity.',
      features: ['High Energy Content', 'Rich in Iron', 'High Protein', 'Strong Grains'],
      specs: {
        hsCode: '100829',
        moq: '1 Metric Ton',
        moisture: 'Max 12%',
        shelfLife: '12–18 months',
      },
      color: 'from-yellow-600 to-amber-700',
      image: '/pearl-millet-bajra.jpg',
      uses: 'Flatbreads, porridges, traditional dishes, animal feed, food and feed industries',
    },
    {
      name: 'Foxtail Millet',
      description:
        'Foxtail millet is a light-colored millet known for its mild taste, quick cooking properties, and easy digestibility. It is cultivated using traditional methods and processed carefully to maintain grain integrity and freshness.',
      features: ['Mild Taste', 'Quick Cooking', 'Easy Digestibility', 'Light Colored'],
      specs: {
        hsCode: '100829',
        moq: '1 Metric Ton',
        moisture: 'Max 12%',
        shelfLife: '12 months',
      },
      color: 'from-green-600 to-emerald-700',
      image: '/foxtail-millet.jpg',
      uses: 'Rice substitute, salads, upma, health foods, ready-to-cook products, gluten-free diets',
    },
    {
      name: 'Little Millet',
      description:
        'Little millet is a small-grained millet known for its high fiber content, low glycemic index, and light texture. It is grown in dry regions and harvested carefully to maintain grain quality. The millet is cleaned and graded to meet export standards.',
      features: ['High Fiber Content', 'Low Glycemic Index', 'Light Texture', 'Small Grains'],
      specs: {
        hsCode: '100829',
        moq: '1 Metric Ton',
        moisture: 'Max 12%',
        shelfLife: '12 months',
      },
      color: 'from-teal-600 to-cyan-700',
      image: '/little-millet.jpg',
      uses: 'Traditional recipes, health foods, breakfast items, processed food products, health-conscious consumers',
    },
  ]

  const applications = [
    { icon: '🍽️', title: 'Household Cooking', desc: 'Daily meals, porridges, rotis, and rice alternatives' },
    { icon: '💪', title: 'Health & Wellness Foods', desc: 'Gluten-free and high-fiber diet products' },
    { icon: '🏭', title: 'Food Processing Industry', desc: 'Flours, snacks, breakfast cereals, ready-to-eat foods' },
    { icon: '🍞', title: 'Bakery & Confectionery', desc: 'Multigrain breads, cookies, and health bars' },
    { icon: '🏥', title: 'Institutional & Catering', desc: 'Schools, hospitals, and large food supply programs' },
    { icon: '🐄', title: 'Animal & Poultry Feed', desc: 'Select varieties used in feed formulations' },
  ]

  const qualityPoints = [
    { icon: Leaf, title: 'Naturally Grown & Sustainably Sourced', desc: 'Cultivated using traditional and eco-friendly farming practices' },
    { icon: Award, title: 'High Nutritional Value', desc: 'Rich in fiber, minerals, and essential nutrients' },
    { icon: Shield, title: 'Carefully Cleaned & Graded', desc: 'Processed to ensure uniform size, low impurities, and export quality' },
    { icon: Globe, title: 'Reliable Bulk Supply', desc: 'Consistent quality and volume for domestic and international buyers' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-600 via-orange-600 to-yellow-600">
          <div className="absolute inset-0 bg-black/30"></div>
          
          {/* Floating Grain Icons */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(18)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-float opacity-20"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: `${4 + Math.random() * 3}s`,
                }}
              >
                <span className="text-white text-2xl">🌾</span>
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div
            className={`transform transition-all duration-1500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white drop-shadow-2xl">
              <span className="bg-gradient-to-r from-yellow-300 via-amber-300 to-orange-300 bg-clip-text text-transparent animate-gradient">
                Premium Grains & Millets
              </span>
            </h1>
            <p className="text-xl md:text-3xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed drop-shadow-lg font-light">
              Premium-quality grains and millets sourced from carefully selected farms 
              with traditional cultivation and sustainable farming methods
            </p>
          </div>
        </div>
      </section>

      {/* Main Description */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-8">
              Nature's Nutritional Powerhouse
            </h2>
            <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
              <p className="text-xl mb-6">
                We supply premium-quality grains and millets sourced from carefully selected farms where traditional cultivation practices are combined with sustainable farming methods. Our product range includes nutritionally rich varieties such as <strong>Finger Millet (Ragi)</strong>, <strong>Pearl Millet (Bajra)</strong>, <strong>Foxtail Millet</strong>, <strong>Little Millet</strong>, and other commonly traded grains. These crops are grown in natural conditions that enhance their nutritional value, taste, and shelf stability.
              </p>
              <p className="text-lg mb-6">
                Each batch is harvested at the right stage of maturity and processed using modern cleaning and grading techniques to ensure purity, uniform grain size, and minimal foreign matter. Our grains and millets are valued for their high fiber content, essential minerals, natural flavor, and long shelf life, making them suitable for both daily consumption and large-scale food processing.
              </p>
              <p className="text-lg">
                Millets are increasingly recognized for their health benefits, including easy digestibility and suitability for gluten-free diets. They are widely used in traditional cooking, modern health foods, breakfast cereals, snacks, and value-added food products. Proper handling and hygienic packaging help preserve freshness and nutritional quality during storage and long-distance transportation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Grains & Millets Varieties Section */}
      <section className="py-12 bg-gradient-to-br from-amber-900 via-orange-900 to-yellow-900 relative">
        <div className="max-w-[1100px] mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4 drop-shadow-2xl">
            Premium Millet Varieties
          </h2>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {varieties.map((variety, index) => (
              <button
                key={index}
                onClick={() => setActiveVariety(index)}
                className={`px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 transform hover:scale-105 border-2 shadow-xl ${
                  activeVariety === index
                    ? 'bg-white text-amber-900 shadow-2xl border-white scale-105'
                    : 'bg-amber-900/50 backdrop-blur-sm text-white border-white/60 hover:bg-white/20 hover:border-white'
                }`}
              >
                {variety.name}
              </button>
            ))}
          </div>

          <div className="max-w-[1100px] mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-white/30">
              <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-0">
                {/* Image Section - Empty for now */}
                <div className="bg-gradient-to-br from-amber-100 to-orange-200 min-h-[380px] relative overflow-hidden flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-amber-300 rounded-full flex items-center justify-center mb-3 mx-auto">
                      <span className="text-4xl">🌾</span>
                    </div>
                    <p className="text-amber-800 font-bold text-base">
                      {varieties[activeVariety].name}
                    </p>
                    <p className="text-amber-600 text-xs mt-1">
                      Image will be added here
                    </p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-4 bg-white">
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-bold">
                      Premium Quality Millet
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-amber-900 mb-2 leading-tight">
                    {varieties[activeVariety].name}
                  </h3>

                  <p className="text-gray-700 leading-relaxed mb-3 text-sm">
                    {varieties[activeVariety].description}
                  </p>

                  <div className="mb-3">
                    <h4 className="text-sm font-bold text-amber-900 mb-2 flex items-center gap-2">
                      <Sparkles className="w-3 h-3 text-amber-600" />
                      Key Features
                    </h4>
                    <div className="grid grid-cols-2 gap-1.5">
                      {varieties[activeVariety].features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 p-1.5 bg-gray-50 rounded-lg shadow-sm border border-amber-100 hover:shadow-md transition-shadow"
                        >
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-800 font-semibold text-xs">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-amber-900 to-orange-900 rounded-lg p-3 border border-amber-800">
                    <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                      <Package className="w-3 h-3 text-white" />
                      Technical Specifications
                    </h4>
                    <div className="grid grid-cols-2 gap-1.5">
                      <div className="bg-white p-1.5 rounded-lg shadow-md border border-amber-200">
                        <span className="text-[9px] font-bold text-amber-800 uppercase tracking-wide">HS Code</span>
                        <p className="font-bold text-black text-xs mt-0.5">{varieties[activeVariety].specs.hsCode}</p>
                      </div>
                      <div className="bg-white p-1.5 rounded-lg shadow-md border border-amber-200">
                        <span className="text-[9px] font-bold text-amber-800 uppercase tracking-wide">Min Order</span>
                        <p className="font-bold text-black text-xs mt-0.5">{varieties[activeVariety].specs.moq}</p>
                      </div>
                      <div className="bg-white p-1.5 rounded-lg shadow-md border border-amber-200">
                        <span className="text-[9px] font-bold text-amber-800 uppercase tracking-wide">Moisture</span>
                        <p className="font-bold text-black text-xs mt-0.5">{varieties[activeVariety].specs.moisture}</p>
                      </div>
                      <div className="bg-white p-1.5 rounded-lg shadow-md border border-amber-200">
                        <span className="text-[9px] font-bold text-amber-800 uppercase tracking-wide">Shelf Life</span>
                        <p className="font-bold text-black text-xs mt-0.5">{varieties[activeVariety].specs.shelfLife}</p>
                      </div>
                    </div>
                    
                    <div className="mt-2 bg-white p-2 rounded-lg shadow-md border border-amber-200">
                      <span className="text-[9px] font-bold text-amber-800 uppercase tracking-wide">Primary Uses</span>
                      <p className="text-gray-700 text-xs mt-0.5 leading-relaxed">{varieties[activeVariety].uses}</p>
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
          <h2 className="text-4xl md:text-5xl font-bold text-center text-amber-900 mb-16">
            Applications of Grains & Millets
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {applications.map((app, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transform transition-all duration-500 hover:-translate-y-2 border border-amber-100 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100 + 800}ms` }}
              >
                <div className="text-4xl mb-4 text-center">{app.icon}</div>
                <h3 className="text-xl font-bold text-amber-900 mb-3 text-center">{app.title}</h3>
                <p className="text-gray-700 text-center leading-relaxed">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-800 mb-12">
            Why Choose Our Grains & Millets
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
                <point.icon className="w-12 h-12 text-amber-600 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-amber-800 mb-2 text-center">{point.title}</h3>
                <p className="text-gray-600 text-center">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-8">
              Additional Benefits
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-amber-50 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-amber-800 mb-4">
                  🌱 Long Shelf Life & Quality Storage
                </h3>
                <p className="text-gray-700">
                  Low moisture content ensures safe storage and transport. Our commitment to quality assurance and sustainable sourcing makes our products ideal for both domestic and international markets.
                </p>
              </div>
              <div className="bg-orange-50 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-amber-800 mb-4">
                  📦 Hygienic Processing & Packing
                </h3>
                <p className="text-gray-700">
                  Packed using food-grade materials suitable for export markets. Consistent quality and volume supply for domestic and international buyers with reliable delivery schedules.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health Benefits Section */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-8">
              Health & Nutritional Benefits
            </h2>
            <p className="text-lg text-gray-800 mb-8">
              Grains and millets are widely consumed across global markets due to their high nutritional value, versatility, and long shelf life. They are increasingly recognized for their health benefits and suitability for modern dietary needs.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: '💪', title: 'High Fiber & Protein', desc: 'Essential for muscle development and digestive health' },
                { icon: '🌾', title: 'Gluten-Free Options', desc: 'Perfect for celiac and gluten-sensitive individuals' },
                { icon: '⚡', title: 'Low Glycemic Index', desc: 'Helps maintain stable blood sugar levels' },
                { icon: '🦴', title: 'Rich in Minerals', desc: 'High calcium, iron, and essential nutrients' },
                { icon: '❤️', title: 'Heart Healthy', desc: 'Supports cardiovascular health and wellness' },
                { icon: '🧠', title: 'Easy Digestibility', desc: 'Gentle on stomach and suitable for all ages' },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="text-3xl mb-3">{benefit.icon}</div>
                  <h3 className="font-semibold text-amber-800 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <ProductGrid />
    </div>
  )
}

export default GrainsMilletsPage