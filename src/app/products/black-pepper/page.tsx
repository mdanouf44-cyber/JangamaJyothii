'use client'

import { useState, useEffect } from 'react'
import { Sparkles, Award, Shield, Globe, Package, Leaf } from 'lucide-react'
import ProductGrid from '@/components/ProductGrid'
import OurProductsSection from '@/components/OurProductsSection'

const BlackPepperPage = () => {
  const [activeVariety, setActiveVariety] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const varieties = [
    {
      name: 'Panniyur-1 Black Pepper',
      description:
        'Panniyur-1 is a high-yield hybrid black pepper variety known for its bold berries, strong pungency, and consistent quality. It is cultivated in well-managed plantations and harvested at optimal maturity to ensure high piperine content and good aroma. The berries are uniformly sized and turn deep black after proper drying.',
      features: ['Bold Berries', 'Strong Pungency', 'High Piperine Content', 'Consistent Quality'],
      specs: {
        hsCode: '090411',
        moq: '500 KG',
        moisture: 'Max 11–12%',
        shelfLife: '18–24 months',
      },
      color: 'from-gray-800 to-black',
      image: '/panniyur-1-pepper.jpg',
      uses: 'Commercial spice markets, food processing industries, whole pepper and ground pepper applications',
    },
    {
      name: 'Panniyur-5 Black Pepper',
      description:
        'Panniyur-5 is an improved hybrid variety recognized for its high piperine levels, uniform grain size, and bold appearance. It offers excellent aroma retention and strong heat, making it a preferred choice for exporters and spice manufacturers.',
      features: ['High Piperine Levels', 'Uniform Grain Size', 'Bold Appearance', 'Excellent Aroma Retention'],
      specs: {
        hsCode: '090411',
        moq: '500 KG',
        moisture: 'Max 11–12%',
        shelfLife: '18–24 months',
      },
      color: 'from-gray-800 to-black',
      image: '/panniyur-5-pepper.jpg',
      uses: 'Spice blending, grinding, industrial use where pungency and consistency are key requirements',
    },
    {
      name: 'Karimunda Black Pepper',
      description:
        'Karimunda is a traditional Kerala black pepper variety known for its very high piperine content, strong pungency, and intense aroma. The berries are small to medium in size but extremely potent, making this variety highly valued in premium spice markets.',
      features: ['Very High Piperine', 'Strong Pungency', 'Intense Aroma', 'Extremely Potent'],
      specs: {
        hsCode: '090411',
        moq: '500 KG',
        moisture: 'Max 11%',
        shelfLife: '18–24 months',
      },
      color: 'from-gray-900 to-black',
      image: '/karimunda-pepper.jpg',
      uses: 'Culinary applications, medicinal preparations, oleoresin extraction due to strength and oil content',
    },
    {
      name: 'Arakkulam Munda Black Pepper',
      description:
        'Arakkulam Munda is a traditional pepper variety characterized by its round, bold berries and rich natural aroma. Cultivated in specific regions, this variety is appreciated for its balanced pungency and attractive appearance.',
      features: ['Round Bold Berries', 'Rich Natural Aroma', 'Balanced Pungency', 'Attractive Appearance'],
      specs: {
        hsCode: '090411',
        moq: '500 KG',
        moisture: 'Max 11–12%',
        shelfLife: '18–24 months',
      },
      color: 'from-gray-800 to-black',
      image: '/arakkulam-munda-pepper.jpg',
      uses: 'Whole-pepper markets, specialty spice applications, enhanced shelf life and aroma retention',
    },
    {
      name: 'Kalluvally Black Pepper',
      description:
        'Kalluvally black pepper is a regional variety known for its robust flavor, earthy aroma, and good oil content. The berries are medium to bold in size and suitable for both domestic and export markets.',
      features: ['Robust Flavor', 'Earthy Aroma', 'Good Oil Content', 'Medium to Bold Size'],
      specs: {
        hsCode: '090411',
        moq: '500 KG',
        moisture: 'Max 11–12%',
        shelfLife: '18–24 months',
      },
      color: 'from-gray-800 to-black',
      image: '/kalluvally-pepper.jpg',
      uses: 'Traditional cuisines, spice blends, ground pepper production, international quality standards',
    },
    {
      name: 'Aimpiriyan Black Pepper',
      description:
        'Aimpiriyan is a traditional black pepper variety valued for its distinct aroma, moderate boldness, and consistent pungency. It is cultivated using conventional farming methods and harvested at the right maturity stage to preserve essential oils.',
      features: ['Distinct Aroma', 'Moderate Boldness', 'Consistent Pungency', 'Essential Oil Rich'],
      specs: {
        hsCode: '090411',
        moq: '500 KG',
        moisture: 'Max 11–12%',
        shelfLife: '18–24 months',
      },
      color: 'from-gray-800 to-black',
      image: '/aimpiriyan-pepper.jpg',
      uses: 'Culinary use, spice blending, food processing industries, versatile for multiple applications',
    },
  ]

  const applications = [
    { icon: '🍽️', title: 'Culinary Use', desc: 'Key spice in cooking, seasoning, and garnishing' },
    { icon: '🌶️', title: 'Spice Blends & Masalas', desc: 'Essential ingredient in blended spices and curry powders' },
    { icon: '🏭', title: 'Food Processing Industry', desc: 'Used in sauces, ready-to-eat foods, and processed meat products' },
    { icon: '🍵', title: 'Beverages', desc: 'Used in traditional and herbal drinks' },
    { icon: '💊', title: 'Pharmaceutical & Ayurvedic', desc: 'Valued for its medicinal properties' },
    { icon: '🧪', title: 'Oleoresin & Extract Production', desc: 'Used in flavoring and fragrance industries' },
  ]

  const qualityPoints = [
    { icon: Leaf, title: 'Premium Indian Varieties', desc: 'Sourced from reputed pepper-growing regions with proven quality' },
    { icon: Award, title: 'High Piperine Content', desc: 'Ensures strong pungency, bold flavor, and rich aroma' },
    { icon: Shield, title: 'Naturally Processed', desc: 'Sun-dried and cleaned without artificial additives' },
    { icon: Globe, title: 'Export-Grade Quality', desc: 'Carefully sorted and graded to meet international standards' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-50 to-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800">
          <div className="absolute inset-0 bg-black/40"></div>
          
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
                  animationDuration: `${3 + Math.random() * 4}s`,
                }}
              >
                <span className="text-white text-3xl">⚫</span>
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
              <span className="bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent animate-gradient">
                Premium Black Pepper
              </span>
            </h1>
            <p className="text-xl md:text-3xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed drop-shadow-lg font-light">
              Premium-quality Indian black pepper sourced from traditional pepper-growing regions 
              with bold, aromatic, and high-piperine peppercorns
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
                We supply premium-quality Indian black pepper sourced from traditional pepper-growing regions known for producing bold, aromatic, and high-piperine peppercorns. Our range includes well-known varieties such as <strong>Panniyur series (Panniyur-1, Panniyur-5)</strong>, <strong>Karimunda</strong>, and traditional types like <strong>Arakkulam Munda</strong>, <strong>Kalluvally</strong>, and <strong>Aimpiriyan</strong>. These varieties are prized for their strong pungency, rich aroma, and consistent quality.
              </p>
              <p className="text-lg mb-6">
                The pepper berries are harvested at the right stage of maturity and naturally dried to preserve their essential oils and flavor intensity. After drying, the pepper undergoes thorough cleaning, grading, and quality inspection to remove foreign matter and ensure uniform size and appearance. This careful processing helps maintain freshness and long shelf life while meeting international export standards.
              </p>
              <p className="text-lg">
                Our black pepper is widely used in whole and ground form across global markets. It is suitable for culinary use, spice blends, food processing, and industrial applications where strong flavor and aroma are essential. Hygienic handling and export-grade packaging ensure that the product reaches buyers in optimal condition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Black Pepper Varieties Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-6 drop-shadow-2xl">
            Premium Black Pepper Varieties
          </h2>
          <p className="text-lg text-gray-200 text-center mb-12 max-w-2xl mx-auto drop-shadow-lg">
            Choose from our exceptional selection of black pepper varieties, each with unique characteristics and superior quality.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mb-14">
            {varieties.map((variety, index) => (
              <button
                key={index}
                onClick={() => setActiveVariety(index)}
                className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 border-2 shadow-xl ${
                  activeVariety === index
                    ? 'bg-white text-gray-900 shadow-2xl border-white scale-105'
                    : 'bg-gray-900/50 backdrop-blur-sm text-white border-white/60 hover:bg-white/20 hover:border-white'
                }`}
              >
                {variety.name}
              </button>
            ))}
          </div>

          <div className="max-w-[1200px] mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-white/30">
              <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-0">
                {/* Image Section - Empty for now */}
                <div className="bg-gradient-to-br from-gray-100 to-slate-200 min-h-[420px] relative overflow-hidden flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <span className="text-5xl">⚫</span>
                    </div>
                    <p className="text-gray-800 font-bold text-lg">
                      {varieties[activeVariety].name}
                    </p>
                    <p className="text-gray-600 text-sm mt-2">
                      Image will be added here
                    </p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 bg-white">
                  <div className="mb-4">
                    <span className="inline-block px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-bold">
                      Premium Quality Black Pepper
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                    {varieties[activeVariety].name}
                  </h3>

                  <p className="text-gray-700 leading-relaxed mb-5 text-base">
                    {varieties[activeVariety].description}
                  </p>

                  <div className="mb-5">
                    <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-gray-600" />
                      Key Features
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {varieties[activeVariety].features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-gray-600 to-black rounded-full flex-shrink-0"></div>
                          <span className="text-gray-800 font-semibold text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-gray-900 to-black rounded-lg p-5 border border-gray-800">
                    <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <Package className="w-5 h-5 text-white" />
                      Technical Specifications
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white p-3 rounded-lg shadow-md border border-gray-200">
                        <span className="text-xs font-bold text-gray-800 uppercase tracking-wide">HS Code</span>
                        <p className="font-bold text-black text-base mt-1">{varieties[activeVariety].specs.hsCode}</p>
                      </div>
                      <div className="bg-white p-3 rounded-lg shadow-md border border-gray-200">
                        <span className="text-xs font-bold text-gray-800 uppercase tracking-wide">Min Order</span>
                        <p className="font-bold text-black text-base mt-1">{varieties[activeVariety].specs.moq}</p>
                      </div>
                      <div className="bg-white p-3 rounded-lg shadow-md border border-gray-200">
                        <span className="text-xs font-bold text-gray-800 uppercase tracking-wide">Moisture</span>
                        <p className="font-bold text-black text-base mt-1">{varieties[activeVariety].specs.moisture}</p>
                      </div>
                      <div className="bg-white p-3 rounded-lg shadow-md border border-gray-200">
                        <span className="text-xs font-bold text-gray-800 uppercase tracking-wide">Shelf Life</span>
                        <p className="font-bold text-black text-base mt-1">{varieties[activeVariety].specs.shelfLife}</p>
                      </div>
                    </div>
                    
                    <div className="mt-4 bg-white p-4 rounded-lg shadow-md border border-gray-200">
                      <span className="text-xs font-bold text-gray-800 uppercase tracking-wide">Primary Uses</span>
                      <p className="text-gray-700 text-sm mt-2 leading-relaxed">{varieties[activeVariety].uses}</p>
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
            Applications of Black Pepper
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {applications.map((app, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-gray-50 to-slate-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transform transition-all duration-500 hover:-translate-y-2 border border-gray-100 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100 + 800}ms` }}
              >
                <div className="text-4xl mb-4 text-center">{app.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{app.title}</h3>
                <p className="text-gray-700 text-center leading-relaxed">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
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
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100 + 1200}ms` }}
              >
                <point.icon className="w-12 h-12 text-gray-600 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{point.title}</h3>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Additional Benefits
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  🚚 Reliable Supply & Consistency
                </h3>
                <p className="text-gray-700">
                  Consistent quality across shipments with timely delivery. Our established supply chain ensures reliable availability throughout the year.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  📦 Hygienic & Export-Grade Packaging
                </h3>
                <p className="text-gray-700">
                  Packed to retain freshness and protect during transportation. Suitable for global markets including bulk export, wholesalers, food processors, and spice manufacturers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <ProductGrid />

      {/* Our Products Section */}
      <OurProductsSection />
    </div>
  )
}

export default BlackPepperPage