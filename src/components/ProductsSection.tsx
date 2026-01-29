'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState(0)

  const products = [
    {
      name: 'Coffee',
      image: '/arabica-coffee-beans.png',
      description:
        'We offer premium-quality Arabica beans, Robusta beans, and roasted coffee beans – hand-selected, expertly processed, and richly aromatic, flavorful, and fresh – ideal for specialty brews, roasting blends, and global coffee markets.',
      features: [
        'Arabica & Robusta',
        'Hand-Selected',
        'Expertly Processed',
        'Fresh & Aromatic',
      ],
    },
    {
      name: 'Coconut',
      image: '/fresh-coconut.jpg',
      description:
        'We supply premium-quality fresh coconuts, dry copra, virgin coconut oil, coconut oil, coconut shells, and charcoal powder, meeting international standards for food, cosmetic, industrial, and sustainable eco-friendly applications worldwide.',
      features: [
        'Premium Quality',
        'Multiple Products',
        'International Standards',
        'Eco-Friendly',
      ],
    },
    {
      name: 'Red Chilli',
      image: '/kashmiri-chilli.jpg', // Using actual red chilli image
      description:
        'We supply premium quality Guntur, Byadgi and Kashmir chillies with ground chilli powder, renowned for their vibrant color, distinct flavor and varying heat levels, ideal for culinary use, spice blends and food processing industries worldwide.',
      features: [
        'Guntur & Byadgi',
        'Vibrant Color',
        'Distinct Flavor',
        'Varying Heat Levels',
      ],
    },
    {
      name: 'Rice',
      image: '/sona-masoori-rice.jpg', // Using actual rice image
      description:
        'We supply premium quality rice varieties including Sona Masoori, Basmati, IR64 Parboiled, Ponni, Jeera Samba and Broken Rice, known for their superior taste, texture, aroma, purity and consistency, ideal for culinary use and global food markets.',
      features: [
        'Multiple Varieties',
        'Superior Taste',
        'Premium Quality',
        'Global Standards',
      ],
    },
    {
      name: 'Turmeric',
      image: '/alleppey-finger-turmeric.jpg', // Using actual turmeric image
      description:
        'We supply premium quality turmeric from Salem and Erode in Tamil Nadu, Lakadong in Meghalaya, and Alleppey Finger from Kerala, known for rich color, high curcumin and distinctive aroma, ideal for culinary, medicinal and industrial use worldwide.',
      features: [
        'High Curcumin',
        'Rich Color',
        'Multiple Origins',
        'Medicinal Grade',
      ],
    },
    {
      name: 'Tamarind',
      image: '/tamarind-with-seeds.jpg', // Using actual tamarind image
      description:
        'We supply premium quality tamarind, tamarind seeds, and tamarind kernels, known for their tangy flavor, rich nutritional value, and wide use in culinary, beverage, confectionery, and food processing industries worldwide, with consistent quality assurance.',
      features: [
        'Tangy Flavor',
        'Rich Nutrition',
        'Multiple Forms',
        'Quality Assured',
      ],
    },
    {
      name: 'Pulses',
      image: '/black-chickpeas.jpg', // Using actual pulses image
      description:
        'We supply premium pulses including Black Chickpeas, Chickpeas (Split), Pigeon Peas, Black Gram, Green Gram, and Horse Gram, known for their rich taste, high protein content, exceptional quality, long shelf life, freshness, and natural goodness.',
      features: [
        'High Protein',
        'Multiple Varieties',
        'Long Shelf Life',
        'Natural Goodness',
      ],
    },
    {
      name: 'Areca Plates',
      image: '/logo.png', // Will be replaced with areca plates image when available
      description:
        'We supply premium areca nuts and eco-friendly areca plateware – biodegradable, compostable, and made from naturally fallen areca palm leaf sheaths – offering sustainable solutions for food service, catering, and retail needs.',
      features: [
        'Biodegradable',
        'Compostable',
        'Eco-Friendly',
        'Sustainable Solutions',
      ],
    },
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
          {products.map((product, index) => {
            // Create URL from product name
            const productUrl = `/products/${product.name.toLowerCase().replace(/\s+/g, '-')}`
            
            return (
              <Link
                key={index}
                href={productUrl}
                className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
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
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 text-center">
                  {product.name}
                </h3>
              </div>
            </Link>
            )
          })}
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
