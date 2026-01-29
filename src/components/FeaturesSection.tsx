import { Leaf, Droplets, Award, Users } from 'lucide-react'

const FeaturesSection = () => {
  const features = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: 'Science-Backed Seed Innovation',
      description:
        'Advanced agricultural techniques and quality seed selection for superior crop yields',
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: 'Farmer-First Philosophy',
      description:
        'Supporting local farmers with fair pricing and sustainable farming practices',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Sustainable Agricultural Practices',
      description:
        'Environmentally responsible farming methods for long-term sustainability',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Trusted and Compliant Operations',
      description:
        'Full compliance with international standards and quality certifications',
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 transition-colors duration-300">
                <div className="text-green-600 group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
