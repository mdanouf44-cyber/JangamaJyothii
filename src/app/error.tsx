'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Home, RefreshCw } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Error Illustration */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-red-600 mb-4">500</h1>
          <div className="w-32 h-1 bg-red-600 mx-auto rounded-full"></div>
        </div>

        {/* Error Message */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Something Went Wrong
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          We're sorry, but something unexpected happened. Our team has been
          notified and we're working to fix it.
        </p>

        {/* Error Details (only in development) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg text-left max-w-lg mx-auto">
            <p className="text-sm font-mono text-red-800 break-all">
              {error.message}
            </p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <RefreshCw className="w-5 h-5" />
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300"
          >
            <Home className="w-5 h-5" />
            Go to Homepage
          </Link>
        </div>

        {/* Support Info */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-4">
            Need immediate assistance?
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="tel:+916362315374"
              className="text-sm text-red-600 hover:text-red-700 hover:underline"
            >
              Call: +91 6362315374
            </a>
            <span className="text-gray-300">•</span>
            <a
              href="mailto:info@shreejangamajyothi.com"
              className="text-sm text-red-600 hover:text-red-700 hover:underline"
            >
              Email: info@shreejangamajyothi.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
