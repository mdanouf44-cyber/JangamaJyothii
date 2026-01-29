import {
  CheckCircle,
  Truck,
  DollarSign,
  Globe,
  Settings,
  Leaf,
} from 'lucide-react'

const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Unmatched Quality',
      description:
        'Our agricultural products are carefully sourced from the best farms and processed using cutting-edge technology to ensure they meet the highest industry standards.',
      gradient: 'from-green-500 to-green-600',
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Consistent Supply',
      description:
        'With a robust production capacity and dedicated team, we guarantee reliable and consistent supply of products, no matter the size of your order.',
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Competitive Pricing',
      description:
        'Our streamlined manufacturing processes and direct sourcing allow us to offer highly competitive prices without compromising on quality.',
      gradient: 'from-orange-500 to-orange-600',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Reach',
      description:
        'We have established ourselves as a trusted exporter with growing presence in international markets, ensuring timely delivery worldwide.',
      gradient: 'from-purple-500 to-purple-600',
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Customizable Solutions',
      description:
        'We offer customizable packaging and branding solutions, allowing you to create products that align perfectly with your market requirements.',
      gradient: 'from-red-500 to-red-600',
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: 'Sustainable Practices',
      description:
        'We are committed to sustainability at every step, from responsible sourcing to eco-friendly packaging options for a healthier planet.',
      gradient: 'from-teal-500 to-teal-600',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The industry we represent produces the best in quality and price.
            People are attracted to it because they can get special experiences
            and products that show they have a lot of money and good taste.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-xl bg-gradient-to-br ${reason.gradient} text-white group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white transform translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white transform -translate-x-12 translate-y-12"></div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-white/30 transition-colors duration-300">
                  {reason.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-4">{reason.title}</h3>

                {/* Description */}
                <p className="text-white/90 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gray-50 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                27+
              </div>
              <div className="text-gray-600 font-medium">Countries</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                2.9M+
              </div>
              <div className="text-gray-600 font-medium">Hectares Field</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                87K+
              </div>
              <div className="text-gray-600 font-medium">Happy Farms</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                5+
              </div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Your Trusted Partner in Global Agro Trade
          </h3>
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300">
            Discover More
          </button>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUsSection
