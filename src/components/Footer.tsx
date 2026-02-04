import Link from 'next/link'
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
} from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Our Products', href: '/products' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
  ]

  const products = [
    { name: 'Coconut', href: '/products/coconut' },
    { name: 'Coffee', href: '/products/coffee' },
    { name: 'Rice', href: '/products/rice' },
    { name: 'Pulses', href: '/products/pulses' },
    { name: 'Areca Plates', href: '/products/areca-plates' },
    { name: 'Grains & Millets', href: '/products/grains-millets' },
    { name: 'Jute & Paper Products', href: '/products/jute-paper-products' },
    { name: 'Tissue', href: '/products/tissue' },
  ]

  const spices = [
    { name: 'Red Chilli', href: '/products/red-chilli' },
    { name: 'Turmeric', href: '/products/turmeric' },
    { name: 'Black Pepper', href: '/products/black-pepper' },
    { name: 'Cardamom', href: '/products/cardamom' },
    { name: 'Tamarind', href: '/products/tamarind' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">SJ</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Shree Jangama Jyothi</h3>
                <p className="text-sm text-gray-400">Global LLP</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              <strong>
                Shree Jangama Jyothi Global LLP is a leading Import and Exporter
              </strong>{' '}
              and supplier of high-quality agricultural commodities from India.
              We specialize in delivering India's finest natural products to
              global markets.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/shree-jangama-jyothi-global-llp-461285381/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-300"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Products</h4>
            <ul className="space-y-3">
              {products.map((product, index) => (
                <li key={index}>
                  <Link
                    href={product.href}
                    className="text-gray-300 hover:text-green-400 transition-colors duration-300"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
              {/* Spices Hover Dropdown */}
              <li className="relative group">
                <div className="text-gray-300 hover:text-green-400 transition-colors duration-300 cursor-pointer flex items-center gap-2">
                  <span>Spices</span>
                  <svg
                    className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                {/* Dropdown on Hover */}
                <div className="max-h-0 overflow-hidden group-hover:max-h-96 transition-all duration-300 ease-in-out">
                  <ul className="space-y-2 pl-4 pt-2">
                    {spices.map((spice, index) => (
                      <li key={index}>
                        <Link
                          href={spice.href}
                          className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm block"
                        >
                          {spice.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Info & Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    4th Floor, Om Chamber, 648/A, 1st Stage
                  </p>
                  <p className="text-gray-300">
                    Binnamangala, Stage 1, Indiranagar
                  </p>
                  <p className="text-gray-300">
                    Bengaluru, Karnataka 560038, India
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                <div>
                  <p className="text-green-400">+91 6362315374</p>
                  <p className="text-green-400">+91 9035505951</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-green-400 flex-shrink-0" />
                <p className="text-gray-300">shreejangamajyothi@gmail.com</p>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h5 className="font-semibold mb-3">Newsletter</h5>
              <p className="text-gray-400 text-sm mb-4">
                Subscribe to get updates on new products and market insights.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-green-500 text-white"
                />
                <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-r-lg transition-colors duration-300">
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              Copyright © {currentYear} Agro Export Platform. All rights
              reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link
                href="/sitemap"
                className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-300"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/918080900723"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
          <svg
            className="w-8 h-8 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
          </svg>
        </a>
      </div>
    </footer>
  )
}

export default Footer
