const CountriesExportSection = () => {
  const countries = [
    { flag: 'ca', name: 'Canada', code: 'CA' },
    { flag: 'ir', name: 'Iran', code: 'IR' },
    { flag: 'il', name: 'Israel', code: 'IL' },
    { flag: 'kr', name: 'Korea (Republic of)', code: 'KR' },
    { flag: 'us', name: 'United States of America', code: 'US' },
    { flag: 'th', name: 'Thailand', code: 'TH' },
    { flag: 'gr', name: 'Greece', code: 'GR' },
    { flag: 'iq', name: 'Iraq', code: 'IQ' },
    { flag: 'ae', name: 'United Arab Emirates', code: 'AE' },
    { flag: 'sa', name: 'Saudi Arabia', code: 'SA' },
    { flag: 'gb', name: 'United Kingdom', code: 'GB' },
    { flag: 'ru', name: 'Russia', code: 'RU' },
    { flag: 'au', name: 'Australia', code: 'AU' },
    { flag: 'my', name: 'Malaysia', code: 'MY' },
    { flag: 'tw', name: 'Taiwan', code: 'TW' },
    { flag: 'cn', name: 'China', code: 'CN' },
    { flag: 'np', name: 'Nepal', code: 'NP' },
  ]

  const stats = [
    { number: '33+', label: 'Countries' },
    { number: '2.9M+', label: 'Hectares Field' },
    { number: '87K+', label: "Happy Farm's" },
    { number: '15+', label: 'Years Experience' },
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

        {/* Countries Grid - 2x2 layout on larger screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-16">
          {countries.map((country, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-6 rounded-xl hover:bg-gray-50 transition-all duration-300 border border-gray-200 hover:border-green-300 hover:shadow-lg group"
            >
              <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-md border-2 border-gray-200 overflow-hidden group-hover:border-green-400 transition-colors duration-300">
                <img
                  src={`https://flagcdn.com/w40/${country.flag}.png`}
                  srcSet={`https://flagcdn.com/w80/${country.flag}.png 2x`}
                  width="40"
                  height="30"
                  alt={`${country.name} flag`}
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex-1">
                <span className="font-semibold text-gray-800 text-xl group-hover:text-green-700 transition-colors duration-300">
                  {country.name}
                </span>
                <div className="text-sm text-gray-500 mt-1 font-medium">
                  {country.code}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CountriesExportSection
