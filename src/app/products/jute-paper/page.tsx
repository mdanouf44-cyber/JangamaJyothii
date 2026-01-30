'use client'

import { useState, useEffect } from 'react'
import { Sparkles, Award, Shield, Globe, Package, Leaf, Recycle } from 'lucide-react'
import ProductGrid from '@/components/ProductGrid'

const JutePaperPage = () => {
  const [activeVariety, setActiveVariety] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const varieties = [
    {
      name: 'Paper Bags',
      description:
        'Our paper bags are manufactured using high-quality kraft and recycled paper, ensuring strength, flexibility, and eco-friendliness. These bags are suitable for carrying light to medium-weight products and are widely used in retail stores, food outlets, and corporate gifting. Paper bags can be customized with handles, printing, logos, and branding as per buyer requirements. They offer a clean, professional appearance while supporting sustainable packaging initiatives.',
      features: ['High-Quality Kraft Paper', 'Customizable Design', 'Strong & Flexible', 'Professional Appearance'],
      specs: {
        hsCode: '481940',
        moq: '5,000 pieces',
        packaging: 'Bundled in moisture-free corrugated export cartons',
        shelfLife: '3–5 years',
      },
      color: 'from-amber-600 to-yellow-700',
      image: '/paper-bags.jpg',
      uses: 'Retail stores, food outlets, corporate gifting, light to medium-weight products',
    },
    {
      name: 'Jute Bags',
      description:
        'Jute bags are made from natural jute fiber, known for its strength, durability, and reusability. These bags are designed to carry heavier loads and are ideal for shopping, promotional use, and long-term reuse. Jute bags provide a rustic, eco-conscious look that appeals strongly to global sustainable markets. They are available in plain, laminated, printed, and customized designs, making them suitable for branding and promotional activities.',
      features: ['Natural Jute Fiber', 'Heavy Load Capacity', 'Reusable & Durable', 'Rustic Eco-Look'],
      specs: {
        hsCode: '420222',
        moq: '2,000 pieces',
        packaging: 'Flat-packed or folded in bale or export cartons',
        shelfLife: '5–7 years',
      },
      color: 'from-green-700 to-emerald-800',
      image: '/jute-bags.jpg',
      uses: 'Shopping, promotional use, branding activities, heavy-load carrying',
    },
    {
      name: 'Paper Stationery Items',
      description:
        'Our paper stationery products include notebooks, envelopes, folders, writing pads, and office paper products made from quality paper materials. These products are designed for daily office use, schools, institutions, and corporate environments. The stationery items are produced with attention to durability, smooth finish, and usability. Custom sizes, branding, and packaging options are available for bulk and export orders.',
      features: ['Quality Paper Materials', 'Smooth Finish', 'Durable Design', 'Custom Branding'],
      specs: {
        hsCode: '482010',
        moq: '5,000 units',
        packaging: 'Packed in protective cartons with inner wrapping',
        shelfLife: '3–5 years',
      },
      color: 'from-blue-600 to-indigo-700',
      image: '/paper-stationery.jpg',
      uses: 'Office use, schools, institutions, corporate environments, daily writing needs',
    },
  ]

  const applications = [
    { icon: '🛍️', title: 'Retail & Shopping', desc: 'Carry bags for clothing stores, boutiques, supermarkets, and malls' },
    { icon: '🍔', title: 'Food & Beverage Packaging', desc: 'Takeaway bags, bakery bags, and food-grade paper packaging' },
    { icon: '🎯', title: 'Corporate & Promotional Use', desc: 'Customized bags for branding, events, and exhibitions' },
    { icon: '🎁', title: 'Gifting & Luxury Packaging', desc: 'Eco-friendly gift bags and premium paper packaging' },
    { icon: '📝', title: 'Stationery & Office Use', desc: 'Notebooks, paper folders, envelopes, and writing materials' },
    { icon: '📦', title: 'Export & Bulk Packaging', desc: 'Sustainable packaging solutions for international shipments' },
  ]

  const qualityPoints = [
    { icon: Recycle, title: 'Eco-Friendly & Sustainable', desc: 'Made from biodegradable, recyclable, and renewable materials' },
    { icon: Award, title: 'Strong & Durable', desc: 'Designed to carry weight safely while maintaining shape and appearance' },
    { icon: Sparkles, title: 'Customizable Designs', desc: 'Available in multiple sizes, colors, prints, and branding options' },
    { icon: Globe, title: 'Export-Grade Quality', desc: 'Manufactured and packed to meet international trade standards' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-green-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-700 via-green-700 to-blue-700">
          <div className="absolute inset-0 bg-black/30"></div>
          
          {/* Floating Eco Icons */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
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
                <span className="text-white text-2xl">
                  {i % 3 === 0 ? '♻️' : i % 3 === 1 ? '🛍️' : '📄'}
                </span>
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
              <span className="bg-gradient-to-r from-amber-300 via-green-300 to-blue-300 bg-clip-text text-transparent animate-gradient">
                Jute & Paper Products
              </span>
            </h1>
            <p className="text-xl md:text-3xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed drop-shadow-lg font-light">
              Eco-friendly sustainable packaging solutions with strength, durability, 
              and customizable designs for global markets
            </p>
          </div>
        </div>
      </section>

      {/* Main Description */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Sustainable Packaging Excellence
            </h2>
            <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
              <p className="text-xl mb-6">
                We supply a wide range of eco-friendly jute and paper products designed to meet the growing global demand for sustainable and responsible packaging solutions. Our product range includes <strong>paper bags</strong>, <strong>jute bags</strong>, <strong>carry bags</strong>, <strong>packaging materials</strong>, and <strong>paper-based stationery products</strong>, manufactured using environmentally safe materials and modern production techniques.
              </p>
              <p className="text-lg mb-6">
                All jute and paper products are crafted to ensure strength, durability, and reusability, making them suitable for retail, packaging, gifting, and promotional use. Jute products are made from natural jute fiber, offering excellent load-bearing capacity and long service life, while paper products are produced from quality paper stock that is recyclable and biodegradable.
              </p>
              <p className="text-lg">
                Our products cater to international markets seeking reliable, cost-effective, and customizable packaging solutions. We offer flexibility in sizes, designs, colors, printing, and branding to meet specific buyer requirements. Strict quality checks and hygienic handling ensure consistency and compliance with export standards. With a strong focus on sustainability, innovation, and customer satisfaction, our jute and paper products provide an ideal alternative to plastic packaging across various industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Jute & Paper Varieties Section */}
      <section className="py-12 bg-gradient-to-br from-amber-900 via-green-900 to-blue-900 relative">
        <div className="max-w-[1100px] mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4 drop-shadow-2xl">
            Our Product Range
          </h2>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {varieties.map((variety, index) => (
              <button
                key={index}
                onClick={() => setActiveVariety(index)}
                className={`px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 transform hover:scale-105 border-2 shadow-xl ${
                  activeVariety === index
                    ? 'bg-white text-gray-900 shadow-2xl border-white scale-105'
                    : 'bg-gray-900/50 backdrop-blur-sm text-white border-white/60 hover:bg-white/20 hover:border-white'
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
                <div className="bg-gradient-to-br from-amber-100 to-green-200 min-h-[380px] relative overflow-hidden flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-amber-300 rounded-full flex items-center justify-center mb-3 mx-auto">
                      <span className="text-4xl">
                        {activeVariety === 0 ? '🛍️' : activeVariety === 1 ? '♻️' : '📝'}
                      </span>
                    </div>
                    <p className="text-gray-800 font-bold text-base">
                      {varieties[activeVariety].name}
                    </p>
                    <p className="text-gray-600 text-xs mt-1">
                      Image will be added here
                    </p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5 bg-white">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-bold">
                      Eco-Friendly Product
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                    {varieties[activeVariety].name}
                  </h3>

                  <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                    {varieties[activeVariety].description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-base font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-green-600" />
                      Key Features
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {varieties[activeVariety].features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg shadow-sm border border-green-100 hover:shadow-md transition-shadow"
                        >
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-800 font-semibold text-xs">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-900 to-blue-900 rounded-lg p-4 border border-green-800">
                    <h4 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                      <Package className="w-4 h-4 text-white" />
                      Technical Specifications
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-white p-2 rounded-lg shadow-md border border-green-200">
                        <span className="text-[10px] font-bold text-green-800 uppercase tracking-wide">HS Code</span>
                        <p className="font-bold text-black text-sm mt-0.5">{varieties[activeVariety].specs.hsCode}</p>
                      </div>
                      <div className="bg-white p-2 rounded-lg shadow-md border border-green-200">
                        <span className="text-[10px] font-bold text-green-800 uppercase tracking-wide">Min Order</span>
                        <p className="font-bold text-black text-sm mt-0.5">{varieties[activeVariety].specs.moq}</p>
                      </div>
                      <div className="bg-white p-2 rounded-lg shadow-md border border-green-200 col-span-2">
                        <span className="text-[10px] font-bold text-green-800 uppercase tracking-wide">Shelf Life</span>
                        <p className="font-bold text-black text-sm mt-0.5">{varieties[activeVariety].specs.shelfLife}</p>
                      </div>
                    </div>
                    
                    <div className="mt-3 bg-white p-3 rounded-lg shadow-md border border-green-200">
                      <span className="text-[10px] font-bold text-green-800 uppercase tracking-wide">Packaging</span>
                      <p className="text-gray-700 text-xs mt-1 leading-relaxed">{varieties[activeVariety].specs.packaging}</p>
                    </div>

                    <div className="mt-3 bg-white p-3 rounded-lg shadow-md border border-green-200">
                      <span className="text-[10px] font-bold text-green-800 uppercase tracking-wide">Primary Uses</span>
                      <p className="text-gray-700 text-xs mt-1 leading-relaxed">{varieties[activeVariety].uses}</p>
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
            Applications of Jute & Paper Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {applications.map((app, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transform transition-all duration-500 hover:-translate-y-2 border border-green-100 ${
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
            Why Choose Our Jute & Paper Products
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

      {/* Additional Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Additional Benefits
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="bg-green-50 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-green-800 mb-4">
                  💰 Cost-Effective Solutions
                </h3>
                <p className="text-gray-700">
                  Affordable alternatives to plastic packaging with long-term environmental benefits and competitive pricing.
                </p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">
                  📦 Wide Product Range
                </h3>
                <p className="text-gray-700">
                  Covers packaging, carry bags, and stationery requirements under one roof for complete solutions.
                </p>
              </div>
              <div className="bg-amber-50 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-amber-800 mb-4">
                  🚚 Reliable Bulk Supply
                </h3>
                <p className="text-gray-700">
                  Consistent quality and quantity for domestic and international buyers with timely delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <ProductGrid />
    </div>
  )
}

export default JutePaperPage
