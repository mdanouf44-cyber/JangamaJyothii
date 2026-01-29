'use client'

import Link from 'next/link'
import Image from 'next/image'
import { memo } from 'react'

const products = [
  {
    name: 'Coffee',
    image:
      'https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    href: '/products/coffee',
  },
  {
    name: 'Coconut',
    image:
      'https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    href: '/products/coconut',
  },
  {
    name: 'Red Chilli',
    image:
      'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    href: '/products/red-chilli',
  },
  {
    name: 'Rice',
    image:
      'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    href: '/products/rice',
  },
  {
    name: 'Turmeric',
    image:
      'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    href: '/products/turmeric',
  },
  {
    name: 'Tamarind',
    image:
      'https://images.unsplash.com/photo-1609501676725-7186f0b4c4b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    href: '/products/tamarind',
  },
  {
    name: 'Pulses',
    image:
      'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    href: '/products/pulses',
  },
  {
    name: 'Areca Plates',
    image:
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    href: '/products/areca-plates',
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
