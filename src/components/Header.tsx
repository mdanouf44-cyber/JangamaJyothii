'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-sm">
      {/* Main Header */}
      <div className="bg-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 flex items-center justify-center">
                <img
                  src="/logo.svg"
                  alt="Shree Jangama Jyothi Global LLP Logo"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Shree Jangama Jyothi
                </h1>
                <p className="text-sm text-gray-600">Global LLP</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-orange-500 hover:text-orange-600 font-medium transition-colors">
                Home
              </Link>
              <div className="relative group">
                <Link href="/products" className="text-gray-700 hover:text-green-600 font-medium transition-colors flex items-center gap-1">
                  Our Products
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <Link href="/products/coffee" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600">
                      Coffee
                    </Link>
                    <Link href="/products/coconut" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600">
                      Coconut
                    </Link>
                    <Link href="/products/red-chilli" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600">
                      Red Chilli
                    </Link>
                    <Link href="/products/rice" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600">
                      Rice
                    </Link>
                    <Link href="/products/turmeric" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600">
                      Turmeric
                    </Link>
                    <Link href="/products/tamarind" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600">
                      Tamarind
                    </Link>
                    <Link href="/products/pulses" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600">
                      Pulses
                    </Link>
                    <Link href="/products/areca-plates" className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600">
                      Areca Plates
                    </Link>
                  </div>
                </div>
              </div>
              <Link href="/about" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-green-600 font-medium transition-colors">
                Contact Us
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold text-sm uppercase tracking-wide transition-colors duration-300 shadow-lg hover:shadow-xl">
                CONTACT NOW
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-gray-700 hover:text-green-600"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-orange-500 hover:text-orange-600 font-medium">
                Home
              </Link>
              <div className="space-y-2">
                <p className="text-gray-700 font-medium">Our Products</p>
                <div className="pl-4 space-y-2">
                  <Link href="/products/coffee" className="block text-gray-600 hover:text-green-600">
                    Coffee
                  </Link>
                  <Link href="/products/coconut" className="block text-gray-600 hover:text-green-600">
                    Coconut
                  </Link>
                  <Link href="/products/red-chilli" className="block text-gray-600 hover:text-green-600">
                    Red Chilli
                  </Link>
                  <Link href="/products/rice" className="block text-gray-600 hover:text-green-600">
                    Rice
                  </Link>
                  <Link href="/products/turmeric" className="block text-gray-600 hover:text-green-600">
                    Turmeric
                  </Link>
                  <Link href="/products/tamarind" className="block text-gray-600 hover:text-green-600">
                    Tamarind
                  </Link>
                  <Link href="/products/pulses" className="block text-gray-600 hover:text-green-600">
                    Pulses
                  </Link>
                  <Link href="/products/areca-plates" className="block text-gray-600 hover:text-green-600">
                    Areca Plates
                  </Link>
                </div>
              </div>
              <Link href="/about" className="text-gray-700 hover:text-green-600 font-medium">
                About Us
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-green-600 font-medium">
                Contact Us
              </Link>
              <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold text-sm uppercase tracking-wide transition-colors duration-300 w-full shadow-lg">
                CONTACT NOW
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header