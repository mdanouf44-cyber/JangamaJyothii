'use client'

import { useState, useCallback, memo, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const products = [
  { name: 'Coffee', href: '/products/coffee' },
  { name: 'Coconut', href: '/products/coconut' },
  { name: 'Red Chilli', href: '/products/red-chilli' },
  { name: 'Rice', href: '/products/rice' },
  { name: 'Turmeric', href: '/products/turmeric' },
  { name: 'Tamarind', href: '/products/tamarind' },
  { name: 'Pulses', href: '/products/pulses' },
  { name: 'Areca Plates', href: '/products/areca-plates' },
  { name: 'Black Pepper', href: '/products/black-pepper' },
  { name: 'Cardamom', href: '/products/cardamom' },
  { name: 'Grains & Millets', href: '/products/grains-millets' },
  { name: 'Jute & Paper Products', href: '/products/jute-paper-products' },
]

const Header = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev)
  }, [])

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  // Memoize products to prevent re-renders
  const memoizedProducts = useMemo(() => products, [])

  // Helper function to determine if a link is active
  const isActiveLink = useCallback((href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    if (href === '/products') {
      return pathname === '/products' || pathname.startsWith('/products/')
    }
    return pathname === href
  }, [pathname])

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Main Header */}
      <div className="bg-white py-2 md:py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 md:gap-4 hover:opacity-80 transition-opacity duration-200"
              onClick={closeMenu}
              prefetch={true}
            >
              <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Shree Jangama Jyothi Global LLP Logo"
                  width={64}
                  height={64}
                  className="w-12 h-12 md:w-16 md:h-16 object-contain"
                  priority
                />
              </div>
              <div>
                <h1 className="text-lg md:text-2xl font-bold text-gray-900">
                  Shree Jangama Jyothi
                </h1>
                <p className="text-xs md:text-sm text-gray-600">Global LLP</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <Link
                href="/"
                className={`font-medium transition-colors duration-200 ${
                  isActiveLink('/') 
                    ? 'text-orange-500 hover:text-orange-600' 
                    : 'text-gray-700 hover:text-orange-500'
                }`}
                prefetch={true}
              >
                Home
              </Link>
              <div className="relative group">
                <Link
                  href="/products"
                  className={`font-medium transition-colors duration-200 flex items-center gap-1 ${
                    isActiveLink('/products')
                      ? 'text-orange-500 hover:text-orange-600'
                      : 'text-gray-700 hover:text-orange-500'
                  }`}
                  prefetch={true}
                >
                  Our Products
                  <svg
                    className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </Link>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-100 z-50">
                  <div className="py-2">
                    {memoizedProducts.map(product => (
                      <Link
                        key={product.href}
                        href={product.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                        prefetch={true}
                      >
                        {product.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <Link
                href="/about"
                className={`font-medium transition-colors duration-200 ${
                  isActiveLink('/about')
                    ? 'text-orange-500 hover:text-orange-600'
                    : 'text-gray-700 hover:text-orange-500'
                }`}
                prefetch={true}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className={`font-medium transition-colors duration-200 ${
                  isActiveLink('/contact')
                    ? 'text-orange-500 hover:text-orange-600'
                    : 'text-gray-700 hover:text-orange-500'
                }`}
                prefetch={true}
              >
                Contact Us
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <Link href="/contact" prefetch={true}>
                <button className="bg-green-500 hover:bg-green-600 text-white px-6 xl:px-8 py-2 xl:py-3 rounded-full font-semibold text-sm uppercase tracking-wide transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                  CONTACT NOW
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-gray-700 hover:text-green-600 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white border-t transition-all duration-150 ease-in-out ${
          isMenuOpen
            ? 'max-h-screen opacity-100'
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className={`font-medium transition-colors duration-200 ${
                isActiveLink('/') 
                  ? 'text-orange-500 hover:text-orange-600' 
                  : 'text-gray-700 hover:text-orange-500'
              }`}
              onClick={closeMenu}
              prefetch={true}
            >
              Home
            </Link>
            <div className="space-y-2">
              <p className={`font-medium ${
                isActiveLink('/products') ? 'text-orange-500' : 'text-gray-700'
              }`}>Our Products</p>
              <div className="pl-4 space-y-2">
                {memoizedProducts.map(product => (
                  <Link
                    key={product.href}
                    href={product.href}
                    className="block text-gray-600 hover:text-orange-600 transition-colors duration-200"
                    onClick={closeMenu}
                    prefetch={true}
                  >
                    {product.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="/about"
              className={`font-medium transition-colors duration-200 ${
                isActiveLink('/about')
                  ? 'text-orange-500 hover:text-orange-600'
                  : 'text-gray-700 hover:text-orange-500'
              }`}
              onClick={closeMenu}
              prefetch={true}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className={`font-medium transition-colors duration-200 ${
                isActiveLink('/contact')
                  ? 'text-orange-500 hover:text-orange-600'
                  : 'text-gray-700 hover:text-orange-500'
              }`}
              onClick={closeMenu}
              prefetch={true}
            >
              Contact Us
            </Link>
            <Link href="/contact" onClick={closeMenu} prefetch={true}>
              <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold text-sm uppercase tracking-wide transition-all duration-200 w-full shadow-lg hover:shadow-xl">
                CONTACT NOW
              </button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
})

Header.displayName = 'Header'

export default Header
