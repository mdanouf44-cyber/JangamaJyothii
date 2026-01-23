'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState(0)

  const products = [
    {
      name: 'Coconut',
      image: 'https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'We supply premium-quality fresh coconuts, dry copra, virgin coconut oil, coconut oil, coconut shells, and charcoal powder, meeting international standards for food, cosmetic, industrial, and sustainable eco-friendly applications worldwide.',
      features: ['Premium Quality', 'Multiple Products', 'International Standards', 'Eco-Friendly']
    },
    {
      name: 'Coffee',
      image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'We offer premium-quality Arabica beans, Robusta beans, and roasted coffee beans – hand-selected, expertly processed, and richly aromatic, flavorful, and fresh – ideal for specialty brews, roasting blends, and global coffee markets.',
      features: ['Arabica & Robusta', 'Hand-Selected', 'Expertly Processed', 'Fresh & Aromatic']
    },
    {
      name: 'Red Chilli',
      image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'We supply premium quality Guntur, Byadgi and Kashmir chillies with ground chilli powder, renowned for their vibrant color, distinct flavor and varying heat levels, ideal for culinary use, spice blends and food processing industries worldwide.',
      features: ['Guntur & Byadgi', 'Vibrant Color', 'Distinct Flavor', 'Varying Heat Levels']
    },
    {
      name: 'Rice',
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'We supply premium quality rice varieties including Sona Masoori, Basmati, IR64 Parboiled, Ponni, Jeera Samba and Broken Rice, known for their superior taste, texture, aroma, purity and consistency, ideal for culinary use and global food markets.',
      features: ['Multiple Varieties', 'Superior Taste', 'Premium Quality', 'Global Standards']
    },
    {
      name: 'Turmeric',
      image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'We supply premium quality turmeric from Salem and Erode in Tamil Nadu, Lakadong in Meghalaya, and Alleppey Finger from Kerala, known for rich color, high curcumin and distinctive aroma, ideal for culinary, medicinal and industrial use worldwide.',
      features: ['High Curcumin', 'Rich Color', 'Multiple Origins', 'Medicinal Grade']
    },
    {
      name: 'Tamarind',
      image: 'https://images.unsplash.com/photo-1609501676725-7186f0b4c4b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'We supply premium quality tamarind, tamarind seeds, and tamarind kernels, known for their tangy flavor, rich nutritional value, and wide use in culinary, beverage, confectionery, and food processing industries worldwide, with consistent quality assurance.',
      features: ['Tangy Flavor', 'Rich Nutrition', 'Multiple Forms', 'Quality Assured']
    },
    {
      name: 'Tamarind Pulses',
      image: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'We supply premium tamarind pulses combining the tangy flavor of tamarind with high-protein pulse varieties, offering a unique blend ideal for traditional recipes, health-conscious consumers, and specialty food applications worldwide.',
      features: ['Tangy & Nutritious', 'High Protein', 'Traditional Blend', 'Specialty Food']
    },
    {
      name: 'Cardamom',
      image: 'https://images.unsplash.com/photo-1599909533730-8b9d1b2e7d8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'We offer premium Malabar cardamom, Mysore cardamom, and Vazhukka type (a hybrid of Malabar and Mysore), prized for their rich aroma, strong flavor, and essential role in culinary, confectionery, and beverage applications worldwide.',
      features: ['Malabar & Mysore', 'Rich Aroma', 'Strong Flavor', 'Premium Grade']
    },
    {
      name: 'Black Pepper',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'We supply premium black pepper varieties including Panniyur series (Panniyur-1, Panniyur-5), Karimunda, and traditional types such as Arakkulam Munda, Kalluvally, and Aimpiriyan, renowned for bold flavor, aroma, and high piperine.',
      features: ['Multiple Varieties', 'Bold Flavor', 'High Piperine', 'Traditional Types']
    },
    {
      name: 'Pulses',
      image: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'We supply premium pulses including Black Chickpeas, Chickpeas (Split), Pigeon Peas, Black Gram, Green Gram, and Horse Gram, known for their rich taste, high protein content, exceptional quality, long shelf life, freshness, and natural goodness.',
      features: ['High Protein', 'Multiple Varieties', 'Long Shelf Life', 'Natural Goodness']
    },
    {
      name: 'Grains & Millets',
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'We supply premium grains and millet varieties including Finger, Pearl, Foxtail, and Little, renowned for their rich nutrition, natural flavor, exceptional quality, long shelf life, freshness, purity, remarkable health benefits, and sustainable sourcing practices.',
      features: ['Rich Nutrition', 'Health Benefits', 'Sustainable Sourcing', 'Multiple Varieties']
    },
    {
      name: 'Jute & Paper Products',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'We supply high-quality eco-friendly paper bags, jute products, and a wide range of paper products, catering to international markets with reliable, sustainable, innovative, customizable, durable, and cost-effective packaging and stationery solutions.',
      features: ['Eco-Friendly', 'Customizable', 'Sustainable', 'Cost-Effective']
    },
    {
      name: 'Areca Plates',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      description: 'We supply premium areca nuts and eco-friendly areca plateware – biodegradable, compostable, and made from naturally fallen areca palm leaf sheaths – offering sustainable solutions for food service, catering, and retail needs.',
      features: ['Biodegradable', 'Compostable', 'Eco-Friendly', 'Sustainable Solutions']
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Best Products
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
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
                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 group">
                  View Details
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products Button */}
        <div className="text-center mt-12">
          <Link
            href="/products"
            className="bg-white border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 inline-block"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProductsSection