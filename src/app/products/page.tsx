import { Metadata } from 'next'
import { Header, Footer } from '@/components'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Products - Shree Jangama Jyothi Global LLP',
  description: 'Explore our premium agricultural products including coconut, coffee, spices, rice, and more. Quality-assured exports from India.',
}

const ProductsPage = () => {
  const products = [
    {
      name: 'Coconut',
      image: 'https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Premium-quality fresh coconuts, dry copra, virgin coconut oil, coconut oil, coconut shells, and charcoal powder.',
      features: ['Premium Quality', 'Multiple Products', 'International Standards', 'Eco-Friendly'],
      href: '/products/coconut'
    },
    {
      name: 'Coffee',
      image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Premium-quality Arabica beans, Robusta beans, and roasted coffee beans – hand-selected and expertly processed.',
      features: ['Arabica & Robusta', 'Hand-Selected', 'Expertly Processed', 'Fresh & Aromatic'],
      href: '/products/coffee'
    },
    {
      name: 'Red Chilli',
      image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Premium quality Guntur, Byadgi and Kashmir chillies with ground chilli powder, renowned for vibrant color.',
      features: ['Guntur & Byadgi', 'Vibrant Color', 'Distinct Flavor', 'Varying Heat Levels'],
      href: '/products/red-chilli'
    },
    {
      name: 'Rice',
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Premium quality rice varieties including Sona Masoori, Basmati, IR64 Parboiled, Ponni, and Jeera Samba.',
      features: ['Multiple Varieties', 'Superior Taste', 'Premium Quality', 'Global Standards'],
      href: '/products/rice'
    },
    {
      name: 'Turmeric',
      image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Premium quality turmeric from Salem, Erode, Lakadong, and Alleppey Finger, known for rich color and high curcumin.',
      features: ['High Curcumin', 'Rich Color', 'Multiple Origins', 'Medicinal Grade'],
      href: '/products/turmeric'
    },
    {
      name: 'Tamarind',
      image: 'https://images.unsplash.com/photo-1609501676725-7186f0b4c4b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Premium quality tamarind, tamarind seeds, and tamarind kernels, known for tangy flavor and rich nutrition.',
      features: ['Tangy Flavor', 'Rich Nutrition', 'Multiple Forms', 'Quality Assured'],
      href: '/products/tamarind'
    },
    {
      name: 'Tamarind Pulses',
      image: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Premium tamarind pulses combining tangy tamarind flavor with high-protein pulse varieties.',
      features: ['Tangy & Nutritious', 'High Protein', 'Traditional Blend', 'Specialty Food'],
      href: '/products/tamarind-pulses'
    },
    {
      name: 'Cardamom',
      image: 'https://images.unsplash.com/photo-1599909533730-8b9d1b2e7d8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Premium Malabar cardamom, Mysore cardamom, and Vazhukka type, prized for rich aroma and strong flavor.',
      features: ['Malabar & Mysore', 'Rich Aroma', 'Strong Flavor', 'Premium Grade'],
      href: '/products/cardamom'
    },
    {
      name: 'Black Pepper',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Premium black pepper varieties including Panniyur series, Karimunda, and traditional types.',
      features: ['Multiple Varieties', 'Bold Flavor', 'High Piperine', 'Traditional Types'],
      href: '/products/black-pepper'
    },
    {
      name: 'Pulses',
      image: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Premium pulses including Black Chickpeas, Chickpeas, Pigeon Peas, Black Gram, Green Gram, and Horse Gram.',
      features: ['High Protein', 'Multiple Varieties', 'Long Shelf Life', 'Natural Goodness'],
      href: '/products/pulses'
    },
    {
      name: 'Grains & Millets',
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Premium grains and millet varieties including Finger, Pearl, Foxtail, and Little millets.',
      features: ['Rich Nutrition', 'Health Benefits', 'Sustainable Sourcing', 'Multiple Varieties'],
      href: '/products/grains-millets'
    },
    {
      name: 'Areca Plates',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'Premium areca nuts and eco-friendly areca plateware – biodegradable, compostable, and sustainable.',
      features: ['Biodegradable', 'Compostable', 'Eco-Friendly', 'Sustainable Solutions'],
      href: '/products/areca-plates'
    }
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Discover our premium range of agricultural products, sourced from the finest farms across India
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Products Grid - 3x4 layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Product Image */}
                <div className="relative overflow-hidden h-64">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                </div>

                {/* Product Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* View Details Button */}
                  <Link 
                    href={product.href}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 group"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 text-center bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Interested in Our Products?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Get in touch with us for bulk orders, custom packaging, or any inquiries about our premium agricultural products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Contact Us
              </Link>
              <Link
                href="tel:+919876543210"
                className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Call Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ProductsPage