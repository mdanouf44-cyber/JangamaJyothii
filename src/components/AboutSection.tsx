'use client'

import { useState } from 'react'
import { Play } from 'lucide-react'

const AboutSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

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
                  Coffee, Areca Nut, Areca nut Plates, Spices, Pulses, Rice,
                  Grains & Coconuts
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
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
                Discover More
              </button>
            </div>
          </div>

          {/* Image/Video */}
          <div className="relative animate-fade-in">
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1586771107445-d3ca888129ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Container ship for export"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

              {/* Experience Badge */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-green-600">5+</div>
                <div className="text-sm text-gray-700 font-medium">
                  Years Of Experience
                </div>
              </div>

              {/* Play Button */}
              <button
                onClick={() => setIsVideoPlaying(true)}
                className="absolute inset-0 flex items-center justify-center group"
              >
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                  <Play
                    className="w-8 h-8 text-white ml-1"
                    fill="currentColor"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
