import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl font-bold text-green-600">404</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-8">
          Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Go Home
          </Link>
          <div>
            <Link
              href="/products"
              className="text-green-600 hover:text-green-700 font-medium"
            >
              Browse Products
            </Link>
            <span className="mx-2 text-gray-400">|</span>
            <Link
              href="/contact"
              className="text-green-600 hover:text-green-700 font-medium"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}