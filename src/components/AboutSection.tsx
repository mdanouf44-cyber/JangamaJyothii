'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

const AboutSection = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  const videos = [
    '/export-excellence-1.mp4',
    '/export-excellence-2.mp4',
    '/export-excellence-india-1.mp4',
    '/export-excellence-india-2.mp4',
  ]

  useEffect(() => {
    // Force play the current video
    const currentVideo = videoRefs.current[currentVideoIndex]
    if (currentVideo) {
      currentVideo.play().catch(err => console.log('Video play error:', err))
    }

    // Auto-rotate videos every 8 seconds
    const videoInterval = setInterval(() => {
      setCurrentVideoIndex(prev => (prev + 1) % videos.length)
    }, 8000)

    return () => clearInterval(videoInterval)
  }, [currentVideoIndex, videos.length])

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <div className="mb-4">
              <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">
                Who we are
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Worldwide Import and Export Expertise
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                <strong className="text-gray-900">
                  Shree Jangama Jyothi Global LLP is a leading Import and
                  Exporter
                </strong>{' '}
                and supplier of high-quality agricultural commodities from
                India. Established with a vision to deliver India's finest
                natural products to global markets, we specialize in a wide
                range of goods including{' '}
                <strong className="text-gray-900">
                  Coffee, Coconut, Red Chilli, Rice, Turmeric, Tamarind, Pulses,
                  Areca Plates, Black Pepper, Cardamom, Grains & Millets, Jute &
                  Paper Products, and Tissue
                </strong>
                .
              </p>
              <p>
                Our products are sourced from trusted farmers and producers
                across India, including renowned agricultural belts in{' '}
                <strong className="text-gray-900">
                  Karnataka, Tamil Nadu, Andhra Pradesh, Telangana, Kerala,
                  Meghalaya, and Maharashtra
                </strong>
                . We ensure that every product meets international standards in
                quality, packaging, and delivery.
              </p>
            </div>
            <div className="mt-8">
              <Link href="/about">
                <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
                  Discover More
                </button>
              </Link>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              {/* Video Background */}
              <div className="relative w-full h-96">
                {videos.map((video, index) => (
                  <video
                    key={index}
                    ref={el => {
                      videoRefs.current[index] = el
                    }}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                      index === currentVideoIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoadedData={e => {
                      if (index === currentVideoIndex) {
                        e.currentTarget
                          .play()
                          .catch(err => console.log('Video play error:', err))
                      }
                    }}
                  >
                    <source src={video} type="video/mp4" />
                  </video>
                ))}
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Text Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">
                      Export Excellence
                    </h3>
                    <p className="text-green-100 drop-shadow-lg">
                      Premium Agricultural Products
                    </p>
                  </div>
                </div>
              </div>

              {/* Experience Badge */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center z-10">
                <div className="text-3xl font-bold text-green-600">15+</div>
                <div className="text-sm text-gray-700 font-medium">
                  Years Of Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
