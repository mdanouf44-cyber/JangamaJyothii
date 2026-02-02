'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const CertificationSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Certification data with actual images
  const certifications = [
    {
      id: 1,
      image: '/Screenshot 2026-01-31 191822.png',
    },
    {
      id: 2,
      image: '/Screenshot 2026-01-31 191826.png',
    },
    {
      id: 3,
      image: '/Screenshot 2026-01-31 191830.png',
    },
    {
      id: 4,
      image: '/Screenshot 2026-01-31 191836.png',
    },
    {
      id: 5,
      image: '/Screenshot 2026-01-31 191846.png',
    },
    {
      id: 6,
      image: '/Screenshot 2026-01-31 191857.png',
    },
    {
      id: 7,
      image: '/Screenshot 2026-01-31 191912.png',
    },
    {
      id: 8,
      image: '/Screenshot 2026-01-31 192147.png',
    },
  ]

  // Auto-rotate slides every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % Math.ceil(certifications.length / 4))
    }, 4000)

    return () => clearInterval(timer)
  }, [certifications.length])

  // Get current set of 4 certifications to display
  const getCurrentCertifications = () => {
    const startIndex = currentSlide * 4
    return certifications.slice(startIndex, startIndex + 4)
  }

  const totalSlides = Math.ceil(certifications.length / 4)

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Membership & Certification
          </h2>
          <div className="w-16 h-1 bg-green-600 mx-auto rounded-full"></div>
        </div>

        {/* Certification Slideshow */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {getCurrentCertifications().map((cert, index) => (
                <div
                  key={cert.id}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
                >
                  {/* Certification Image */}
                  <div className="relative h-40 flex items-center justify-center">
                    <Image
                      src={cert.image}
                      alt={`Certificate ${cert.id}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 50vw, 25vw"
                      unoptimized
                      onError={e => {
                        console.log(`Failed to load image: ${cert.image}`)
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-green-600 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() =>
              setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides)
            }
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-green-600 hover:shadow-xl transition-all duration-300 group"
            aria-label="Previous slide"
          >
            <svg
              className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={() => setCurrentSlide(prev => (prev + 1) % totalSlides)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-green-600 hover:shadow-xl transition-all duration-300 group"
            aria-label="Next slide"
          >
            <svg
              className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
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
        </div>

        {/* Trust Message */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our certifications and memberships ensure that we maintain the
            highest standards of quality, safety, and compliance in all our
            agricultural export operations.
          </p>
        </div>
      </div>
    </section>
  )
}

export default CertificationSection
