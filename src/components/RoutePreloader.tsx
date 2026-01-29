'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const CRITICAL_ROUTES = [
  '/',
  '/products',
  '/products/coffee',
  '/products/coconut',
  '/products/red-chilli',
  '/products/rice',
  '/products/turmeric',
  '/products/tamarind',
  '/products/pulses',
  '/products/areca-plates',
  '/about',
  '/contact'
]

export default function RoutePreloader() {
  const router = useRouter()

  useEffect(() => {
    // Preload critical routes after initial render
    const preloadRoutes = () => {
      CRITICAL_ROUTES.forEach(route => {
        router.prefetch(route)
      })
    }

    // Use requestIdleCallback for non-blocking preloading
    if (typeof window !== 'undefined') {
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(preloadRoutes, { timeout: 2000 })
      } else {
        // Fallback for browsers without requestIdleCallback
        setTimeout(preloadRoutes, 100)
      }
    }
  }, [router])

  return null // This component doesn't render anything
}