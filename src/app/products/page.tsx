import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Products - Shree Jangama Jyothi Global LLP',
  description:
    'Explore our premium agricultural products including coconut, coffee, spices, rice, and more. Quality-assured exports from India.',
}

const ProductsPage = () => {
  const products = [
    {
      name: 'Coffee',
      image: '/arabica-coffee-beans.png',
      description:
        'Premium-quality Arabica beans, Robusta beans, and roasted coffee beans – hand-selected and expertly processed.',
      features: [
        'Arabica & Robusta',
        'Hand-Selected',
        'Expertly Processed',
        'Fresh & Aromatic',
      ],
      href: '/products/coffee',
    },
    {
      name: 'Coconut',
      image: '/fresh-coconut.jpg',
      description:
        'Premium-quality fresh coconuts, dry copra, virgin coconut oil, coconut oil, coconut shells, and charcoal powder.',
      features: [
        'Premium Quality',
        'Multiple Products',
        'International Standards',
        'Eco-Friendly',
      ],
      href: '/products/coconut',
    },
    {
      name: 'Red Chilli',
      image: '/kashmiri-chilli.jpg', // Using actual red chilli image
      description:
        'Premium quality Guntur, Byadgi and Kashmir chillies with ground chilli powder, renowned for vibrant color.',
      features: [
        'Guntur & Byadgi',
        'Vibrant Color',
        'Distinct Flavor',
        'Varying Heat Levels',
      ],
      href: '/products/red-chilli',
    },
    {
      name: 'Rice',
      image: '/sona-masoori-rice.jpg', // Using actual rice image
      description:
        'Premium quality rice varieties including Sona Masoori, Basmati, IR64 Parboiled, Ponni, and Jeera Samba.',
      features: [
        'Multiple Varieties',
        'Superior Taste',
        'Premium Quality',
        'Global Standards',
      ],
      href: '/products/rice',
    },
    {
      name: 'Turmeric',
      image: '/alleppey-finger-turmeric.jpg', // Using actual turmeric image
      description:
        'Premium quality turmeric from Salem, Erode, Lakadong, and Alleppey Finger, known for rich color and high curcumin.',
      features: [
        'High Curcumin',
        'Rich Color',
        'Multiple Origins',
        'Medicinal Grade',
      ],
      href: '/products/turmeric',
    },
    {
      name: 'Tamarind',
      image: '/tamarind-with-seeds.jpg', // Using actual tamarind image
      description:
        'Premium quality tamarind, tamarind seeds, and tamarind kernels, known for tangy flavor and rich nutrition.',
      features: [
        'Tangy Flavor',
        'Rich Nutrition',
        'Multiple Forms',
        'Quality Assured',
      ],
      href: '/products/tamarind',
    },
    {
      name: 'Pulses',
      image: '/black-chickpeas.jpg', // Using actual pulses image
      description:
        'Premium pulses including Black Chickpeas, Chickpeas, Pigeon Peas, Black Gram, Green Gram, and Horse Gram.',
      features: [
        'High Protein',
        'Multiple Varieties',
        'Long Shelf Life',
        'Natural Goodness',
      ],
      href: '/products/pulses',
    },
    {
      name: 'Areca Plates',
      image: '/round-areca-plates.jpg', // Using actual areca plates image
      description:
        'Premium areca nuts and eco-friendly areca plateware – biodegradable, compostable, and sustainable.',
      features: [
        'Biodegradable',
        'Compostable',
        'Eco-Friendly',
        'Sustainable Solutions',
      ],
      href: '/products/areca-plates',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
            Discover our premium range of agricultural products, sourced from
            the finest farms across India
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Products Grid - 3x4 layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Link
                key={index}
                href={product.href}
                className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              >
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
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
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
                  <div className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 group-hover:bg-green-700">
                    View Details
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 text-center bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Interested in Our Products?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Get in touch with us for bulk orders, custom packaging, or any
              inquiries about our premium agricultural products.
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
    </div>
  )
}

export default ProductsPage
