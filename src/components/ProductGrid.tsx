'use client'

import Link from 'next/link'
import Image from 'next/image'
import { memo } from 'react'

const products = [
  {
    name: 'Coffee',
    image: '/arabica-coffee-beans.png',
    href: '/products/coffee',
  },
  {
    name: 'Coconut',
    image: '/fresh-coconut.jpg',
    href: '/products/coconut',
  },
  {
    name: 'Red Chilli',
    image: '/kashmiri-chilli.jpg', // Using actual red chilli image
    href: '/products/red-chilli',
  },
  {
    name: 'Rice',
    image: '/sona-masoori-rice.jpg', // Using actual rice image
    href: '/products/rice',
  },
  {
    name: 'Turmeric',
    image: '/alleppey-finger-turmeric.jpg', // Using actual turmeric image
    href: '/products/turmeric',
  },
  {
    name: 'Tamarind',
    image: '/tamarind-with-seeds.jpg', // Using actual tamarind image
    href: '/products/tamarind',
  },
  {
    name: 'Pulses',
    image: '/black-chickpeas.jpg', // Using actual pulses image
    href: '/products/pulses',
  },
  {
    name: 'Areca Plates',
    image: '/round-areca-plates.jpg', // Using actual areca plates image
    href: '/products/areca-plates',
  },
  {
    name: 'Black Pepper',
    image: '/cover-black-pepper.jpg', // Will use cover image for now
    href: '/products/black-pepper',
  },
  {
    name: 'Cardamom',
    image: '/cover-cardamom.jpg', // Will use cover image for now
    href: '/products/cardamom',
  },
  {
    name: 'Grains & Millets',
    image: '/cover-grains-millets.jpg', // Will use cover image for now
    href: '/products/grains-millets',
  },
  {
    name: 'Jute & Paper Products',
    image: '/cover-jute-paper-products.jpg', // Will use cover image for now
    href: '/products/jute-paper-products',
  },
]

const ProductCard = memo(
  ({ product, index }: { product: (typeof products)[0]; index: number }) => (
    <Link
      href={product.href}
      className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100 will-change-transform"
      prefetch={true}
    >
      <div className="aspect-square overflow-hidden relative">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          loading={index < 4 ? 'eager' : 'lazy'}
          quality={85}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 text-center group-hover:text-green-600 transition-colors duration-200">
          {product.name}
        </h3>
      </div>
    </Link>
  )
)

ProductCard.displayName = 'ProductCard'

const ProductGrid = memo(() => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Products
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.href} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
})

ProductGrid.displayName = 'ProductGrid'

export default ProductGrid
