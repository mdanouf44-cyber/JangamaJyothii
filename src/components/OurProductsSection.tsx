'use client'

import Image from 'next/image'
import Link from 'next/link'

const OurProductsSection = () => {
  const products = [
    {
      name: 'Coffee',
      image: '/coffee-cover.jpg',
      href: '/products/coffee',
    },
    {
      name: 'Coconut',
      image: '/coconut-cover.jpg',
      href: '/products/coconut',
    },
    {
      name: 'Red Chilli',
      image: '/red-chilli-cover.jpg',
      href: '/products/red-chilli',
    },
    {
      name: 'Rice',
      image: '/rice-cover.jpg',
      href: '/products/rice',
    },
    {
      name: 'Turmeric',
      image: '/turmeric-cover.jpg',
      href: '/products/turmeric',
    },
    {
      name: 'Tamarind',
      image: '/tamarind-cover.jpg',
      href: '/products/tamarind',
    },
    {
      name: 'Pulses',
      image: '/pulses-cover.jpg',
      href: '/products/pulses',
    },
    {
      name: 'Areca Plates',
      image: '/areca-plates-cover.jpg',
      href: '/products/areca-plates',
    },
    {
      name: 'Black Pepper',
      image: '/cover-black-pepper.jpg',
      href: '/products/black-pepper',
    },
    {
      name: 'Cardamom',
      image: '/cover-cardamom.jpg',
      href: '/products/cardamom',
    },
    {
      name: 'Grains & Millets',
      image: '/cover-grains-millets-new.jpg',
      href: '/products/grains-millets',
    },
    {
      name: 'Jute & Paper Products',
      image: '/cover-jute-paper-products.jpg',
      href: '/products/jute-paper-products',
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-amber-50 via-red-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Products
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our complete range of premium agricultural products
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <Link
              key={index}
              href={product.href}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105 bg-white"
            >
              <div className="aspect-square relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                <h3 className="text-white font-bold text-lg drop-shadow-lg group-hover:text-amber-300 transition-colors duration-300">
                  {product.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurProductsSection
