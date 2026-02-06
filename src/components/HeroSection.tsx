'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMounted, setIsMounted] = useState(false)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  const slides = [
    {
      video: '/hero-leading-export.mp4',
      title: 'Leading Export House of General Merchandise',
      subtitle:
        'Premium quality agricultural commodities from India to global markets',
    },
    {
      video: '/hero-quality-assured.mp4',
      title: 'Quality Assured Agricultural Exports',
      subtitle: 'Connecting farmers with international buyers worldwide',
    },
    {
      video: '/hero-sustainable-farming.mp4',
      title: 'Sustainable Farming Practices',
      subtitle:
        'Committed to environmental responsibility and quality excellence',
    },
    {
      video: '/hero-export-excellence-3.mp4',
      title: 'Export Excellence & Global Standards',
      subtitle:
        'Delivering world-class agricultural products with unmatched quality assurance',
    },
    {
      video: '/hero-export-excellence-4.mp4',
      title: 'Innovation in Agricultural Trade',
      subtitle:
        'Pioneering modern export solutions for traditional Indian agriculture',
    },
    {
      video: '/hero-india-to-other.mp4',
      title: 'From India to the World',
      subtitle:
        'Bridging continents with premium agricultural exports and sustainable trade practices',
    },
    {
      video: '/hero-india-to-other-2.mp4',
      title: 'Global Trade Excellence',
      subtitle:
        'Connecting Indian farmers with international markets through quality and trust',
    },
  ]

  // Floating agricultural icons
  const floatingIcons = [
    '🌾',
    '☕',
    '🥥',
    '🌶️',
    '🍚',
    '🟡',
    '🫘',
    '🍽️',
    '🌿',
    '🌱',
    '🍃',
    '🌾',
  ]

  useEffect(() => {
    setIsMounted(true)

    // Force play the current video
    const currentVideo = videoRefs.current[currentSlide]
    if (currentVideo) {
      currentVideo.play().catch(err => console.log('Video play error:', err))
    }

    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length)
    }, 5000)

    // Preload videos for better performance
    const preloadVideos = () => {
      slides.forEach((slide, index) => {
        if (index < 2) {
          // Preload first 2 videos
          const video = document.createElement('video')
          video.preload = 'metadata'
          video.src = slide.video
        }
      })
    }

    preloadVideos()
    return () => clearInterval(timer)
  }, [currentSlide])

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Floating Agricultural Icons - Only render on client */}
      {isMounted && (
        <div className="absolute inset-0 pointer-events-none z-5">
          {floatingIcons.map((icon, index) => (
            <div
              key={index}
              className="absolute text-white opacity-20 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${index * 0.5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
                fontSize: `${20 + Math.random() * 20}px`,
              }}
            >
              {icon}
            </div>
          ))}
        </div>
      )}

      {/* Background Video Slideshow */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <video
              ref={el => {
                videoRefs.current[index] = el
              }}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
              onLoadedData={e => {
                if (index === currentSlide) {
                  e.currentTarget
                    .play()
                    .catch(err => console.log('Video play error:', err))
                }
              }}
            >
              <source src={slide.video} type="video/mp4" />
              {/* Fallback gradient background */}
              <div className="w-full h-full bg-gradient-to-br from-green-600 to-green-800" />
            </video>
            <div className="absolute inset-0 bg-black bg-opacity-40" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 text-center text-white">
          <div className="max-w-4xl mx-auto" suppressHydrationWarning>
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 animate-fade-in leading-tight px-2">
              {slides[currentSlide].title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 opacity-90 animate-slide-up px-4">
              {slides[currentSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-slide-up px-4">
              <Link
                href="/products"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-block text-center text-sm sm:text-base"
              >
                Get Started
              </Link>
              <Link
                href="/products"
                className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 inline-block text-center text-sm sm:text-base"
              >
                View Products
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20"
        suppressHydrationWarning
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <div className="hidden sm:block absolute bottom-8 right-8 text-white animate-bounce">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  )
}

export default HeroSection
