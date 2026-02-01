'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ArrowLeft, Star, Shield, Truck, Award } from 'lucide-react'
import Link from 'next/link'
import ProductGrid from '@/components/ProductGrid'

const TissuePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

  // Placeholder videos - will be updated when user provides videos
  const videos = [
    '/tissue-video-1.mp4', // Placeholder
    '/tissue-video-2.mp4', // Placeholder
  ]

  // Tissue varieties with placeholder images
  const varieties = [
    {
      name: 'Facial Tissues',
      image: '/facial-tissues.jpg', // Placeholder
      description: 'Soft and gentle facial tissues for everyday use',
    },
    {
      name: 'Toilet Paper',
      image: '/toilet-paper.jpg', // Placeholder
      description: 'Premium quality toilet paper rolls',
    },
    {
      name: 'Paper Towels',
      image: '/paper-towels.jpg', // Placeholder
      description: 'Absorbent paper towels for kitchen and cleaning',
    },
    {
      name: 'Napkins',
      image: '/napkins.jpg', // Placeholder
      description: 'Elegant napkins for dining and hospitality',
    },
  ]

  // Auto-rotate videos every 8 seconds
  useEffect(() => {
    const videoInterval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % videos.length)
    }, 8000)

    return () => clearInterval(videoInterval)
  }, [videos.length])

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % varieties.length)
    }, 5000)

    return () => clearInterval(imageInterval)
  }, [varieties.length])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            key={currentVideoIndex}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            preload="metadata"
          >
            <source src={videos[currentVideoIndex]} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center min-h-[600px]">
              {/* Left side - Image (60% width) */}
              <div className="lg:col-span-3 relative">
                <div className="relative w-full h-[700px] rounded-2xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                    <div className="text-center text-blue-600">
                      <div className="text-6xl mb-4">🧻</div>
                      <p className="text-xl font-semibold">Tissue Image</p>
                      <p className="text-sm opacity-75">Image will be added here</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Content (40% width) */}
              <div className="lg:col-span-2 text-white">
                <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8">
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                    Premium Tissue
                  </h1>
                  <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                    High-quality tissues and paper products for personal care, hospitality, and commercial applications worldwide.
                  </p>
                  
                  {/* Key Features */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center gap-3">
                      <Star className="w-6 h-6 text-yellow-400" />
                      <span className="text-blue-100">Premium Quality</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Shield className="w-6 h-6 text-green-400" />
                      <span className="text-blue-100">Hygiene Standards</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Truck className="w-6 h-6 text-blue-400" />
                      <span className="text-blue-100">Global Export</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="w-6 h-6 text-purple-400" />
                      <span className="text-blue-100">15+ Years Experience</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/contact"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 text-center shadow-lg hover:shadow-xl"
                    >
                      Get Quote
                    </Link>
                    <Link
                      href="#varieties"
                      className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300 text-center"
                    >
                      View Products
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Varieties Section */}
      <section id="varieties" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Tissue Products
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of tissue products designed for various applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {varieties.map((variety, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="relative h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <div className="text-center text-blue-600">
                    <div className="text-4xl mb-2">🧻</div>
                    <p className="text-sm font-medium">{variety.name}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {variety.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {variety.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Applications
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🏠</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Household Use</h3>
              <p className="text-gray-600">Daily personal care and cleaning applications</p>
            </div>

            <div className="text-center p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🏨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Hospitality</h3>
              <p className="text-gray-600">Hotels, restaurants, and service industries</p>
            </div>

            <div className="text-center p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🏢</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Commercial</h3>
              <p className="text-gray-600">Offices, institutions, and commercial spaces</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our Tissue?
            </h2>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Premium Quality</h3>
              <p className="text-blue-100">Made from 100% virgin pulp for superior softness</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Hygienic Standards</h3>
              <p className="text-blue-100">Manufactured under strict hygiene protocols</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Export</h3>
              <p className="text-blue-100">Reliable supply chain for international markets</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Certified Quality</h3>
              <p className="text-blue-100">ISO certified manufacturing processes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Products Section */}
      <ProductGrid />
    </div>
  )
}

export default TissuePage