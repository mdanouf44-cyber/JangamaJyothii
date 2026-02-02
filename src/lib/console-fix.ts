// Console error fixes and suppressions for development
export const suppressConsoleWarnings = () => {
  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
    // Suppress React DevTools warning
    const originalWarn = console.warn
    console.warn = (...args) => {
      if (
        args[0]?.includes?.('Download the React DevTools') ||
        args[0]?.includes?.('Warning: Prop `srcSet` did not match') ||
        args[0]?.includes?.('has "fill" but is missing "sizes" prop')
      ) {
        return
      }
      originalWarn.apply(console, args)
    }

    // Suppress specific image loading errors
    const originalError = console.error
    console.error = (...args) => {
      if (
        args[0]?.includes?.('Failed to load resource') ||
        args[0]?.includes?.('400 (Bad Request)') ||
        args[0]?.includes?.('Image with src')
      ) {
        return
      }
      originalError.apply(console, args)
    }
  }
}

// Image error handler
export const handleImageError = (imageSrc: string) => {
  console.log(`Image failed to load: ${imageSrc}`)
  // You can add fallback logic here
}

// Preload critical images
export const preloadImages = (imageUrls: string[]) => {
  if (typeof window !== 'undefined') {
    imageUrls.forEach(url => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = url
      document.head.appendChild(link)
    })
  }
}