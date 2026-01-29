// Navigation performance utilities
import { useRouter } from 'next/navigation'
import { useCallback } from 'react'

// Critical routes that should be preloaded
export const CRITICAL_ROUTES = [
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

// Hook for optimized navigation
export const useOptimizedNavigation = () => {
  const router = useRouter()

  const navigateWithPreload = useCallback((href: string) => {
    // Preload the route before navigation
    router.prefetch(href)
    
    // Use requestIdleCallback for non-blocking navigation
    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      window.requestIdleCallback(() => {
        router.push(href)
      })
    } else {
      // Fallback for browsers without requestIdleCallback
      setTimeout(() => {
        router.push(href)
      }, 0)
    }
  }, [router])

  return { navigateWithPreload }
}

// Preload critical routes on app initialization
export const preloadCriticalRoutes = () => {
  if (typeof window !== 'undefined') {
    const router = useRouter()
    
    // Preload routes with a slight delay to not block initial render
    setTimeout(() => {
      CRITICAL_ROUTES.forEach(route => {
        router.prefetch(route)
      })
    }, 100)
  }
}