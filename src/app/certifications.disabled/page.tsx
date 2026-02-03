import { Metadata } from 'next'
import Image from 'next/image'
import { Shield, Award, CheckCircle, Globe, Star, Leaf } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Certifications & Memberships - Shree Jangama Jyothi Global LLP',
  description:
    'Our certifications and memberships ensure the highest standards of quality, safety, and compliance in agricultural export operations.',
}

const CertificationsPage = () => {
  const certifications = [
    {
      id: 1,
      name: 'MSME Registration',
      image: '/Screenshot 2026-01-31 191822.png',
      description:
        'Micro, Small & Medium Enterprises (MSME) registration certificate recognizing our business as a registered enterprise under the Government of India. This certification provides us with various benefits including priority sector lending, government schemes access, and enhanced credibility in business operations.',
      benefits: [
        'Priority sector lending from banks',
        'Access to government schemes and subsidies',
        'Enhanced business credibility',
        'Easier compliance procedures',
      ],
      authority: 'Ministry of MSME, Government of India',
      validityPeriod: 'Permanent',
      icon: Shield,
    },
    {
      id: 2,
      name: 'GST Registration',
      image: '/Screenshot 2026-01-31 191826.png',
      description:
        'Goods and Services Tax (GST) registration certificate ensuring our compliance with Indian tax regulations. This certification enables us to conduct business transactions legally, collect GST from customers, and claim input tax credits, demonstrating our commitment to transparent business practices.',
      benefits: [
        'Legal authorization for business transactions',
        'Input tax credit eligibility',
        'Enhanced business legitimacy',
        'Compliance with tax regulations',
      ],
      authority: 'Central Board of Indirect Taxes and Customs (CBIC)',
      validityPeriod: 'Annual renewal required',
      icon: Award,
    },
    {
      id: 3,
      name: 'Tax Compliance Certificate',
      image: '/Screenshot 2026-01-31 191830.png',
      description:
        'Tax compliance certificate validating our adherence to all applicable tax laws and regulations. This certification demonstrates our commitment to maintaining transparent financial practices and ensures that all our business operations are conducted in full compliance with Indian taxation policies.',
      benefits: [
        'Proof of tax compliance',
        'Enhanced financial credibility',
        'Smooth business operations',
        'Regulatory compliance assurance',
      ],
      authority: 'Income Tax Department, Government of India',
      validityPeriod: 'Annual assessment',
      icon: CheckCircle,
    },
    {
      id: 4,
      name: 'APEDA Registration',
      image: '/Screenshot 2026-01-31 191836.png',
      description:
        'Agricultural and Processed Food Products Export Development Authority (APEDA) registration certificate authorizing us to export agricultural and processed food products. This prestigious certification ensures our products meet international quality standards and export regulations.',
      benefits: [
        'Authorization for agricultural exports',
        'Access to international markets',
        'Quality assurance recognition',
        'Export promotion support',
      ],
      authority: 'APEDA, Ministry of Commerce & Industry',
      validityPeriod: '3 years (renewable)',
      icon: Globe,
    },
    {
      id: 5,
      name: 'FSSAI License',
      image: '/Screenshot 2026-01-31 191846.png',
      description:
        'Food Safety and Standards Authority of India (FSSAI) license ensuring our food products meet the highest safety and quality standards. This certification is mandatory for food business operations and demonstrates our commitment to consumer health and safety.',
      benefits: [
        'Food safety compliance',
        'Consumer trust and confidence',
        'Market access authorization',
        'Quality assurance standards',
      ],
      authority: 'Food Safety and Standards Authority of India',
      validityPeriod: '1-5 years (based on license type)',
      icon: Star,
    },
    {
      id: 6,
      name: 'ISO 9001:2015 Quality Management',
      image: '/Screenshot 2026-01-31 191857.png',
      description:
        'ISO 9001:2015 Quality Management System certification demonstrating our commitment to consistent quality delivery and continuous improvement. This internationally recognized standard ensures our processes meet global quality benchmarks and customer satisfaction requirements.',
      benefits: [
        'International quality recognition',
        'Process standardization',
        'Customer satisfaction assurance',
        'Continuous improvement framework',
      ],
      authority: 'International Organization for Standardization',
      validityPeriod: '3 years with annual surveillance',
      icon: Award,
    },
    {
      id: 7,
      name: 'Aadhaar Business Registration',
      image: '/Screenshot 2026-01-31 191912.png',
      description:
        'Aadhaar-linked business registration providing unique identification for our enterprise. This digital certification ensures transparency in business operations and enables seamless integration with various government and financial services.',
      benefits: [
        'Unique business identification',
        'Digital transaction facilitation',
        'Government service integration',
        'Enhanced transparency',
      ],
      authority: 'Unique Identification Authority of India (UIDAI)',
      validityPeriod: 'Permanent',
      icon: CheckCircle,
    },
    {
      id: 8,
      name: 'Environmental Compliance Certificate',
      image: '/Screenshot 2026-01-31 192147.png',
      description:
        'Environmental compliance certificate ensuring our operations adhere to environmental protection standards and sustainable business practices. This certification demonstrates our commitment to eco-friendly operations and responsible business conduct.',
      benefits: [
        'Environmental compliance assurance',
        'Sustainable business practices',
        'Regulatory adherence',
        'Corporate social responsibility',
      ],
      authority: 'State Pollution Control Board',
      validityPeriod: 'Annual renewal',
      icon: Leaf,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Certifications & Memberships
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto">
            Our certifications and memberships ensure the highest standards of
            quality, safety, and compliance in all our agricultural export
            operations
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Commitment to Excellence
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              At Shree Jangama Jyothi Global LLP, we maintain the highest
              standards of quality, safety, and compliance through our
              comprehensive portfolio of certifications and memberships. These
              credentials demonstrate our unwavering commitment to delivering
              premium agricultural products while adhering to international
              standards and regulatory requirements.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Quality Assurance
                </h3>
                <p className="text-gray-600">
                  Certified processes ensuring consistent product quality
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Global Standards
                </h3>
                <p className="text-gray-600">
                  International certifications for worldwide market access
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Regulatory Compliance
                </h3>
                <p className="text-gray-600">
                  Full adherence to all applicable laws and regulations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Certifications
            </h2>
            <div className="w-24 h-1 bg-green-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {certifications.map(cert => (
              <div
                key={cert.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  {/* Certificate Image */}
                  <div className="relative h-64 md:h-auto">
                    <Image
                      src={cert.image}
                      alt={cert.name}
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  {/* Certificate Details */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <cert.icon className="w-5 h-5 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {cert.name}
                      </h3>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {cert.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">
                        Key Benefits:
                      </h4>
                      <ul className="space-y-1">
                        {cert.benefits.map((benefit, index) => (
                          <li
                            key={index}
                            className="text-xs text-gray-600 flex items-start gap-2"
                          >
                            <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t pt-4 space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-500">
                          Issuing Authority:
                        </span>
                        <span className="text-gray-700 font-medium">
                          {cert.authority}
                        </span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-500">Validity:</span>
                        <span className="text-gray-700 font-medium">
                          {cert.validityPeriod}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Credibility Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Our Certifications Matter
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-12">
              Our comprehensive certification portfolio reflects our dedication
              to excellence and provides our clients with the confidence that
              they are partnering with a reliable, compliant, and
              quality-focused organization.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">8+</div>
                <div className="text-gray-700 font-medium">
                  Active Certifications
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  15+
                </div>
                <div className="text-gray-700 font-medium">
                  Years of Compliance
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  100%
                </div>
                <div className="text-gray-700 font-medium">
                  Regulatory Adherence
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  33+
                </div>
                <div className="text-gray-700 font-medium">
                  Countries Served
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Partner with a Certified Leader
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Our certifications ensure that you receive products of the highest
            quality, backed by rigorous standards and continuous compliance
            monitoring.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-green-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              Contact Us Today
            </a>
            <a
              href="/products"
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300"
            >
              View Our Products
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CertificationsPage
