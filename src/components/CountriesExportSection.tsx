const CountriesExportSection = () => {
  const countries = [
    { flag: '🇨🇦', name: 'Canada', code: 'CA' },
    { flag: '🇮🇷', name: 'Iran', code: 'IR' },
    { flag: '🇮🇱', name: 'Israel', code: 'IL' },
    { flag: '🇰🇷', name: 'Korea (Republic of)', code: 'KR' },
    { flag: '🇺🇸', name: 'United States of America', code: 'US' },
    { flag: '🇹🇭', name: 'Thailand', code: 'TH' },
    { flag: '🇬🇷', name: 'Greece', code: 'GR' },
    { flag: '🇮🇶', name: 'Iraq', code: 'IQ' },
    { flag: '🇦🇪', name: 'United Arab Emirates', code: 'AE' },
    { flag: '🇸🇦', name: 'Saudi Arabia', code: 'SA' },
    { flag: '🇬🇧', name: 'United Kingdom', code: 'GB' },
    { flag: '🇷🇺', name: 'Russia', code: 'RU' },
    { flag: '🇦🇺', name: 'Australia', code: 'AU' },
    { flag: '🇲🇾', name: 'Malaysia', code: 'MY' },
    { flag: '🇹🇼', name: 'Taiwan', code: 'TW' }
  ]

  const stats = [
    { number: '27+', label: 'Countries' },
    { number: '2.9M+', label: 'Hectares Field' },
    { number: '87K+', label: 'Happy Farm\'s' },
    { number: '5+', label: 'Years Experience' }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Countries Where We Export
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Countries List */}
          <div className="space-y-4">
            {countries.map((country, index) => (
              <div key={index} className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 border border-gray-100">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-sm border">
                  <span className="text-xl leading-none" style={{ fontFamily: 'Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji, sans-serif' }}>
                    {country.flag}
                  </span>
                </div>
                <div className="flex-1">
                  <span className="font-medium text-gray-800 text-lg">{country.name}</span>
                  <div className="text-sm text-gray-500 mt-1">{country.code}</div>
                </div>
              </div>
            ))}
          </div>

          {/* World Map */}
          <div className="relative">
            <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-8 text-center">
              <div className="w-full h-64 bg-green-300 rounded-xl flex items-center justify-center mb-8 relative overflow-hidden">
                <svg className="w-full h-full opacity-60" viewBox="0 0 1000 500" fill="none">
                  {/* Simplified world map paths */}
                  <path d="M150 200 Q200 180 250 200 Q300 220 350 200 L400 180 Q450 160 500 180 Q550 200 600 180 L650 160 Q700 140 750 160 Q800 180 850 160 L900 140" 
                        stroke="currentColor" strokeWidth="3" fill="none" className="text-green-600"/>
                  <path d="M100 250 Q150 230 200 250 Q250 270 300 250 L350 230 Q400 210 450 230 Q500 250 550 230 L600 210 Q650 190 700 210 Q750 230 800 210 L850 190" 
                        stroke="currentColor" strokeWidth="3" fill="none" className="text-green-600"/>
                  <path d="M200 300 Q250 280 300 300 Q350 320 400 300 L450 280 Q500 260 550 280 Q600 300 650 280 L700 260 Q750 240 800 260" 
                        stroke="currentColor" strokeWidth="3" fill="none" className="text-green-600"/>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-green-700 font-bold text-lg">
                    Global Export Network
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CountriesExportSection