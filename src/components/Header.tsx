'use client'

import { useState, useCallback, memo, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const products = [
  { name: 'Coffee', href: '/products/coffee', hasSubmenu: true },
  { name: 'Coconut', href: '/products/coconut', hasSubmenu: true },
  { name: 'Rice', href: '/products/rice', hasSubmenu: true },
  { name: 'Pulses', href: '/products/pulses', hasSubmenu: true },
  { name: 'Areca Plates', href: '/products/areca-plates', hasSubmenu: true },
  { name: 'Grains & Millets', href: '/products/grains-millets', hasSubmenu: true },
  { name: 'Jute & Paper Products', href: '/products/jute-paper-products', hasSubmenu: true },
  { name: 'Tissue', href: '/products/tissue', hasSubmenu: true },
]

const coffee = [
  { name: 'Arabica Coffee Beans', href: '/products/coffee#arabica-coffee-beans' },
  { name: 'Robusta Coffee Beans', href: '/products/coffee#robusta-coffee-beans' },
  { name: 'Roasted Coffee Beans', href: '/products/coffee#roasted-coffee-beans' },
]

const coconut = [
  { name: 'Fresh Coconut', href: '/products/coconut#fresh-coconut' },
  { name: 'Copra (Dried Coconut)', href: '/products/coconut#copra-dried-coconut' },
  { name: 'Virgin Coconut Oil', href: '/products/coconut#virgin-coconut-oil' },
  { name: 'Refined Coconut Oil', href: '/products/coconut#refined-coconut-oil' },
  { name: 'Coconut Shell Charcoal Powder', href: '/products/coconut#coconut-shell-charcoal-powder' },
  { name: 'Coco Fiber', href: '/products/coconut#coco-fiber' },
  { name: 'Cocopeat', href: '/products/coconut#cocopeat' },
  { name: 'Coir Fiber Yarn', href: '/products/coconut#coir-fiber-yarn' },
]

const rice = [
  { name: 'Sona Masoori Rice', href: '/products/rice#sona-masoori-rice' },
  { name: 'IR64 Parboiled Rice', href: '/products/rice#ir64-parboiled-rice' },
  { name: 'IR36 Rice', href: '/products/rice#ir36-rice' },
  { name: 'Ponni Rice', href: '/products/rice#ponni-rice' },
  { name: 'Jeera Samba Rice', href: '/products/rice#jeera-samba-rice' },
  { name: 'Broken Rice', href: '/products/rice#broken-rice' },
]

const pulses = [
  { name: 'Black Chickpeas (Kala Chana)', href: '/products/pulses#black-chickpeas-kala-chana' },
  { name: 'Black Gram (Urad Dal)', href: '/products/pulses#black-gram-urad-dal' },
  { name: 'Chickpeas (Split)', href: '/products/pulses#chickpeas-split' },
  { name: 'Green Gram (Moong Beans)', href: '/products/pulses#green-gram-moong-beans' },
  { name: 'Horse Gram', href: '/products/pulses#horse-gram' },
  { name: 'Pigeon Peas (Toor Dal)', href: '/products/pulses#pigeon-peas-toor-dal' },
]

const arecaPlates = [
  { name: 'Round Areca Plates', href: '/products/areca-plates#round-areca-plates' },
  { name: 'Square Areca Plates', href: '/products/areca-plates#square-areca-plates' },
  { name: 'Compartment Areca Plates', href: '/products/areca-plates#compartment-areca-plates' },
  { name: 'Areca Bowls', href: '/products/areca-plates#areca-bowls' },
]

const grainsMillets = [
  { name: 'Finger Millet (Ragi)', href: '/products/grains-millets#finger-millet' },
  { name: 'Pearl Millet (Bajra)', href: '/products/grains-millets#pearl-millet' },
  { name: 'Foxtail Millet', href: '/products/grains-millets#foxtail-millet' },
  { name: 'Little Millet', href: '/products/grains-millets#little-millet' },
  { name: 'Yellow Maize', href: '/products/grains-millets#yellow-maize' },
  { name: 'White Maize', href: '/products/grains-millets#white-maize' },
  { name: 'Yellow Maize Starch', href: '/products/grains-millets#yellow-maize-starch' },
  { name: 'White Maize Starch', href: '/products/grains-millets#white-maize-starch' },
]

const jutePaper = [
  { name: 'Jute Bags', href: '/products/jute-paper-products#jute-bags' },
  { name: 'Paper Bags', href: '/products/jute-paper-products#paper-bags' },
  { name: 'Paper Stationery Items', href: '/products/jute-paper-products#paper-stationery-items' },
]

const tissue = [
  { name: 'Toilet Rolls', href: '/products/tissue#toilet-rolls' },
  { name: 'Facial Tissue Boxes', href: '/products/tissue#facial-tissue-boxes' },
  { name: 'Kitchen Rolls', href: '/products/tissue#kitchen-rolls' },
  { name: 'Jumbo Parent Rolls', href: '/products/tissue#jumbo-parent-rolls' },
  { name: 'Hand Towels (C & M Fold)', href: '/products/tissue#hand-towels-c-m-fold' },
]


const spices = [
  { name: 'Red Chilli', href: '/products/red-chilli', hasSubmenu: true },
  { name: 'Turmeric', href: '/products/turmeric', hasSubmenu: true },
  { name: 'Black Pepper', href: '/products/black-pepper', hasSubmenu: true },
  { name: 'Cardamom', href: '/products/cardamom', hasSubmenu: true },
  { name: 'Tamarind', href: '/products/tamarind', hasSubmenu: true },
]

const redChilli = [
  { name: 'Kashmiri Chilli', href: '/products/red-chilli#kashmiri-chilli' },
  { name: 'Byadgi Chilli', href: '/products/red-chilli#byadgi-chilli' },
  { name: 'Guntur Chilli', href: '/products/red-chilli#guntur-chilli' },
  { name: 'Teja Chilli', href: '/products/red-chilli#teja-chilli' },
]

const turmeric = [
  { name: 'Alleppey Finger Turmeric', href: '/products/turmeric#alleppey-finger-turmeric' },
  { name: 'Lakadong Turmeric (Finger)', href: '/products/turmeric#lakadong-turmeric-finger' },
  { name: 'Salem Turmeric Finger', href: '/products/turmeric#salem-turmeric-finger' },
  { name: 'Alleppey Turmeric Powder', href: '/products/turmeric#alleppey-turmeric-powder' },
  { name: 'Lakadong Turmeric Powder', href: '/products/turmeric#lakadong-turmeric-powder' },
  { name: 'Salem Turmeric Powder', href: '/products/turmeric#salem-turmeric-powder' },
]

const blackPepper = [
  { name: 'Aimpiriyan Black Pepper', href: '/products/black-pepper#aimpiriyan-black-pepper' },
  { name: 'Arakkulam Munda Black Pepper', href: '/products/black-pepper#arakkulam-munda-black-pepper' },
  { name: 'Kalluvally Black Pepper', href: '/products/black-pepper#kalluvally-black-pepper' },
  { name: 'Karimunda Black Pepper', href: '/products/black-pepper#karimunda-black-pepper' },
  { name: 'Panniyur-1 Black Pepper', href: '/products/black-pepper#panniyur-1-black-pepper' },
  { name: 'Panniyur-5 Black Pepper', href: '/products/black-pepper#panniyur-5-black-pepper' },
]

const cardamom = [
  { name: 'Malabar Cardamom', href: '/products/cardamom#malabar-cardamom' },
  { name: 'Mysore Cardamom', href: '/products/cardamom#mysore-cardamom' },
  { name: 'Vazhukka Cardamom', href: '/products/cardamom#vazhukka-cardamom' },
]

const tamarind = [
  { name: 'Tamarind with Seeds', href: '/products/tamarind#tamarind-with-seeds' },
  { name: 'Seedless Tamarind', href: '/products/tamarind#seedless-tamarind' },
  { name: 'Tamarind Seeds', href: '/products/tamarind#tamarind-seeds' },
  { name: 'Kernel Seeds of Tamarind', href: '/products/tamarind#tamarind-kernel-seeds' },
]


const Header = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSpicesOpen, setIsSpicesOpen] = useState(false)
  const [openMobileProducts, setOpenMobileProducts] = useState<Record<string, boolean>>({})
  const pathname = usePathname()

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev)
  }, [])

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
    setIsSpicesOpen(false)
    setOpenMobileProducts({})
  }, [])

  const toggleSpices = useCallback(() => {
    setIsSpicesOpen(prev => !prev)
  }, [])

  const toggleMobileProduct = useCallback((productHref: string) => {
    setOpenMobileProducts(prev => ({
      ...prev,
      [productHref]: !prev[productHref]
    }))
  }, [])

  // Memoize products to prevent re-renders
  const memoizedProducts = useMemo(() => products, [])
  const memoizedCoffee = useMemo(() => coffee, [])
  const memoizedCoconut = useMemo(() => coconut, [])
  const memoizedRice = useMemo(() => rice, [])
  const memoizedPulses = useMemo(() => pulses, [])
  const memoizedArecaPlates = useMemo(() => arecaPlates, [])
  const memoizedGrainsMillets = useMemo(() => grainsMillets, [])
  const memoizedJutePaper = useMemo(() => jutePaper, [])
  const memoizedTissue = useMemo(() => tissue, [])
  const memoizedSpices = useMemo(() => spices, [])
  const memoizedRedChilli = useMemo(() => redChilli, [])
  const memoizedTurmeric = useMemo(() => turmeric, [])
  const memoizedBlackPepper = useMemo(() => blackPepper, [])
  const memoizedCardamom = useMemo(() => cardamom, [])
  const memoizedTamarind = useMemo(() => tamarind, [])

  // Helper function to get submenu items for a product
  const getSubmenuItems = useCallback((productHref: string) => {
    switch (productHref) {
      case '/products/coffee':
        return memoizedCoffee
      case '/products/coconut':
        return memoizedCoconut
      case '/products/rice':
        return memoizedRice
      case '/products/pulses':
        return memoizedPulses
      case '/products/areca-plates':
        return memoizedArecaPlates
      case '/products/grains-millets':
        return memoizedGrainsMillets
      case '/products/jute-paper-products':
        return memoizedJutePaper
      case '/products/tissue':
        return memoizedTissue
      default:
        return []
    }
  }, [memoizedCoffee, memoizedCoconut, memoizedRice, memoizedPulses, memoizedArecaPlates, memoizedGrainsMillets, memoizedJutePaper, memoizedTissue])

  // Helper function to get submenu items for spices
  const getSpiceSubmenuItems = useCallback((spiceHref: string) => {
    switch (spiceHref) {
      case '/products/red-chilli':
        return memoizedRedChilli
      case '/products/turmeric':
        return memoizedTurmeric
      case '/products/black-pepper':
        return memoizedBlackPepper
      case '/products/cardamom':
        return memoizedCardamom
      case '/products/tamarind':
        return memoizedTamarind
      default:
        return []
    }
  }, [memoizedRedChilli, memoizedTurmeric, memoizedBlackPepper, memoizedCardamom, memoizedTamarind])

  // Helper function to determine if a link is active
  const isActiveLink = useCallback(
    (href: string) => {
      if (href === '/') {
        return pathname === '/'
      }
      if (href === '/products') {
        return pathname === '/products' || pathname.startsWith('/products/')
      }
      return pathname === href
    },
    [pathname]
  )

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
                  unoptimized
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
                    {memoizedProducts.map(product => {
                      const submenuItems = getSubmenuItems(product.href)
                      return product.hasSubmenu ? (
                        <div key={product.href} className="relative group/submenu">
                          <Link
                            href={product.href}
                            className="px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200 cursor-pointer flex items-center justify-between"
                            prefetch={true}
                          >
                            <span className="flex-1">{product.name}</span>
                            <svg
                              className="w-4 h-4 transition-transform duration-200 group-hover/submenu:rotate-180"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </Link>
                          <div className="absolute left-full top-0 ml-1 w-56 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-100 z-50">
                            <div className="py-2">
                              {submenuItems.map(item => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                                  prefetch={true}
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <Link
                          key={product.href}
                          href={product.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                          prefetch={true}
                        >
                          {product.name}
                        </Link>
                      )
                    })}
                    {/* Spices Sub-dropdown */}
                    <div className="relative group/spices">
                      <div className="px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200 cursor-pointer flex items-center justify-between">
                        <span>Spices</span>
                        <svg
                          className="w-4 h-4 transition-transform duration-200 group-hover/spices:rotate-180"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                      <div className="absolute left-full top-0 ml-1 w-56 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover/spices:opacity-100 group-hover/spices:visible transition-all duration-100 z-50">
                        <div className="py-2">
                          {memoizedSpices.map(spice => {
                            const spiceSubmenuItems = getSpiceSubmenuItems(spice.href)
                            return spice.hasSubmenu ? (
                              <div key={spice.href} className="relative group/spiceitem">
                                <Link
                                  href={spice.href}
                                  className="px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200 cursor-pointer flex items-center justify-between"
                                  prefetch={true}
                                >
                                  <span className="flex-1">{spice.name}</span>
                                  <svg
                                    className="w-4 h-4 transition-transform duration-200 group-hover/spiceitem:rotate-180"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M9 5l7 7-7 7"
                                    />
                                  </svg>
                                </Link>
                                <div className="absolute left-full top-0 ml-1 w-56 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover/spiceitem:opacity-100 group-hover/spiceitem:visible transition-all duration-100 z-50">
                                  <div className="py-2">
                                    {spiceSubmenuItems.map(item => (
                                      <Link
                                        key={item.href}
                                        href={item.href}
                                        className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                                        prefetch={true}
                                      >
                                        {item.name}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <Link
                                key={spice.href}
                                href={spice.href}
                                className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                                prefetch={true}
                              >
                                {spice.name}
                              </Link>
                            )
                          })}
                        </div>
                      </div>
                    </div>
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
        className={`lg:hidden bg-white border-t shadow-lg transition-all duration-150 ease-in-out ${
          isMenuOpen
            ? 'max-h-screen opacity-100'
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-4 py-4 max-h-[70vh] overflow-y-auto">
          <nav className="flex flex-col space-y-3">
            <Link
              href="/"
              className={`font-medium py-2 transition-colors duration-200 ${
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
              <p
                className={`font-medium py-2 ${
                  isActiveLink('/products')
                    ? 'text-orange-500'
                    : 'text-gray-700'
                }`}
              >
                Our Products
              </p>
              <div className="pl-4 space-y-2">
                {memoizedProducts.map(product => {
                  const submenuItems = getSubmenuItems(product.href)
                  const isOpen = openMobileProducts[product.href]
                  return product.hasSubmenu ? (
                    <div key={product.href} className="space-y-2">
                      <button
                        onClick={() => toggleMobileProduct(product.href)}
                        className="flex items-center justify-between w-full py-2 text-gray-600 hover:text-orange-600 transition-colors duration-200 font-medium"
                      >
                        <span>{product.name}</span>
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isOpen ? 'rotate-90' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                      {isOpen && (
                        <div className="pl-4 space-y-2 border-l-2 border-orange-200">
                          {submenuItems.map(item => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="block py-2 text-gray-500 hover:text-orange-600 transition-colors duration-200 text-sm"
                              onClick={closeMenu}
                              prefetch={true}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={product.href}
                      href={product.href}
                      className="block py-2 text-gray-600 hover:text-orange-600 transition-colors duration-200"
                      onClick={closeMenu}
                      prefetch={true}
                    >
                      {product.name}
                    </Link>
                  )
                })}
                {/* Spices Sub-dropdown for Mobile */}
                <div className="space-y-2">
                  <button
                    onClick={toggleSpices}
                    className="flex items-center justify-between w-full py-2 text-gray-600 hover:text-orange-600 transition-colors duration-200 font-medium"
                  >
                    <span>Spices</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isSpicesOpen ? 'rotate-90' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                  {isSpicesOpen && (
                    <div className="pl-4 space-y-2">
                      {memoizedSpices.map(spice => {
                        const spiceSubmenuItems = getSpiceSubmenuItems(spice.href)
                        const isSpiceOpen = openMobileProducts[spice.href]
                        return spice.hasSubmenu ? (
                          <div key={spice.href} className="space-y-2">
                            <button
                              onClick={() => toggleMobileProduct(spice.href)}
                              className="flex items-center justify-between w-full py-2 text-gray-500 hover:text-orange-600 transition-colors duration-200 font-medium"
                            >
                              <span>{spice.name}</span>
                              <svg
                                className={`w-4 h-4 transition-transform duration-200 ${
                                  isSpiceOpen ? 'rotate-90' : ''
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </button>
                            {isSpiceOpen && (
                              <div className="pl-4 space-y-2 border-l-2 border-orange-300">
                                {spiceSubmenuItems.map(item => (
                                  <Link
                                    key={item.href}
                                    href={item.href}
                                    className="block py-2 text-gray-400 hover:text-orange-600 transition-colors duration-200 text-sm"
                                    onClick={closeMenu}
                                    prefetch={true}
                                  >
                                    {item.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          <Link
                            key={spice.href}
                            href={spice.href}
                            className="block py-2 text-gray-500 hover:text-orange-600 transition-colors duration-200"
                            onClick={closeMenu}
                            prefetch={true}
                          >
                            {spice.name}
                          </Link>
                        )
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <Link
              href="/about"
              className={`font-medium py-2 transition-colors duration-200 ${
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
              className={`font-medium py-2 transition-colors duration-200 ${
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
              <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold text-sm uppercase tracking-wide transition-all duration-200 w-full shadow-lg hover:shadow-xl mt-2">
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
