import type {
  User,
  Product,
  Category,
  RFQ,
  Certificate,
  CommunicationLog,
  Content,
} from '@/types'

// Type definitions for transformed data
export interface TransformedUser {
  id: string
  email: string
  fullName: string
  role: string
  isActive: boolean
  lastLogin?: string
  createdAt: string
  updatedAt: string
}

export interface TransformedProduct {
  id: string
  name: string
  description?: string
  category: {
    id: string
    name: string
    slug: string
  }
  hsCode?: string
  originCountry?: string
  moq?: number
  unit?: string
  pricePerUnit?: number
  formattedPrice?: string
  packagingDetails?: string
  shelfLife?: string
  certifications?: any
  images?: any
  complianceDocs?: any
  isActive: boolean
  createdAt: string
  updatedAt: string
}

export interface TransformedRFQ {
  id: string
  product: {
    id: string
    name: string
    hsCode?: string
  }
  buyer: {
    name: string
    email: string
    phone?: string
    company?: string
    country?: string
  }
  quantity: number
  targetPrice?: number
  formattedTargetPrice?: string
  deliveryLocation: string
  timeline: string
  incoterms?: string
  additionalRequirements?: string
  status: string
  priority: string
  assignedUser?: {
    id: string
    fullName: string
  }
  createdAt: string
  updatedAt: string
}

export interface TransformedCertificate {
  id: string
  name: string
  type: string
  issuer?: string
  issueDate?: string
  expiryDate?: string
  certificateNumber?: string
  fileUrl?: string
  fileSize?: number
  formattedFileSize?: string
  isExpired: boolean
  daysUntilExpiry?: number
  isActive: boolean
  createdAt: string
}

// User transformers
export function transformUser(user: User): TransformedUser {
  return {
    id: user.id,
    email: user.email,
    fullName: `${user.firstName || ''} ${user.lastName || ''}`.trim() || user.email,
    role: user.role,
    isActive: user.isActive,
    lastLogin: user.lastLogin?.toISOString(),
    createdAt: user.createdAt.toISOString(),
    updatedAt: user.updatedAt.toISOString(),
  }
}

export function transformUsers(users: User[]): TransformedUser[] {
  return users.map(transformUser)
}

// Product transformers
export function transformProduct(
  product: Product & { category?: Category }
): TransformedProduct {
  return {
    id: product.id,
    name: product.name,
    description: product.description || undefined,
    category: product.category
      ? {
          id: product.category.id,
          name: product.category.name,
          slug: product.category.slug,
        }
      : {
          id: product.categoryId,
          name: 'Unknown Category',
          slug: 'unknown',
        },
    hsCode: product.hsCode || undefined,
    originCountry: product.originCountry || undefined,
    moq: product.moq || undefined,
    unit: product.unit || undefined,
    pricePerUnit: product.pricePerUnit ? Number(product.pricePerUnit) : undefined,
    formattedPrice: product.pricePerUnit
      ? formatCurrency(Number(product.pricePerUnit))
      : undefined,
    packagingDetails: product.packagingDetails || undefined,
    shelfLife: product.shelfLife || undefined,
    certifications: product.certifications,
    images: product.images,
    complianceDocs: product.complianceDocs,
    isActive: product.isActive,
    createdAt: product.createdAt.toISOString(),
    updatedAt: product.updatedAt.toISOString(),
  }
}

export function transformProducts(
  products: (Product & { category?: Category })[]
): TransformedProduct[] {
  return products.map(transformProduct)
}

// RFQ transformers
export function transformRFQ(
  rfq: RFQ & {
    product?: Product
    assignedUser?: User
  }
): TransformedRFQ {
  return {
    id: rfq.id,
    product: rfq.product
      ? {
          id: rfq.product.id,
          name: rfq.product.name,
          hsCode: rfq.product.hsCode || undefined,
        }
      : {
          id: rfq.productId,
          name: 'Unknown Product',
        },
    buyer: {
      name: rfq.buyerName,
      email: rfq.buyerEmail,
      phone: rfq.buyerPhone || undefined,
      company: rfq.buyerCompany || undefined,
      country: rfq.buyerCountry || undefined,
    },
    quantity: rfq.quantity,
    targetPrice: rfq.targetPrice ? Number(rfq.targetPrice) : undefined,
    formattedTargetPrice: rfq.targetPrice
      ? formatCurrency(Number(rfq.targetPrice))
      : undefined,
    deliveryLocation: rfq.deliveryLocation,
    timeline: rfq.timeline,
    incoterms: rfq.incoterms || undefined,
    additionalRequirements: rfq.additionalRequirements || undefined,
    status: rfq.status,
    priority: rfq.priority,
    assignedUser: rfq.assignedUser
      ? {
          id: rfq.assignedUser.id,
          fullName: `${rfq.assignedUser.firstName || ''} ${
            rfq.assignedUser.lastName || ''
          }`.trim() || rfq.assignedUser.email,
        }
      : undefined,
    createdAt: rfq.createdAt.toISOString(),
    updatedAt: rfq.updatedAt.toISOString(),
  }
}

export function transformRFQs(
  rfqs: (RFQ & {
    product?: Product
    assignedUser?: User
  })[]
): TransformedRFQ[] {
  return rfqs.map(transformRFQ)
}

// Certificate transformers
export function transformCertificate(certificate: Certificate): TransformedCertificate {
  const now = new Date()
  const expiryDate = certificate.expiryDate
  const isExpired = expiryDate ? expiryDate < now : false
  const daysUntilExpiry = expiryDate
    ? Math.ceil((expiryDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
    : undefined

  return {
    id: certificate.id,
    name: certificate.name,
    type: certificate.type,
    issuer: certificate.issuer || undefined,
    issueDate: certificate.issueDate?.toISOString(),
    expiryDate: certificate.expiryDate?.toISOString(),
    certificateNumber: certificate.certificateNumber || undefined,
    fileUrl: certificate.fileUrl || undefined,
    fileSize: certificate.fileSize || undefined,
    formattedFileSize: certificate.fileSize
      ? formatFileSize(certificate.fileSize)
      : undefined,
    isExpired,
    daysUntilExpiry: daysUntilExpiry && daysUntilExpiry > 0 ? daysUntilExpiry : undefined,
    isActive: certificate.isActive,
    createdAt: certificate.createdAt.toISOString(),
  }
}

export function transformCertificates(certificates: Certificate[]): TransformedCertificate[] {
  return certificates.map(transformCertificate)
}

// Communication log transformers
export function transformCommunicationLog(log: CommunicationLog & { user?: User }) {
  return {
    id: log.id,
    type: log.type,
    recipient: log.recipient,
    subject: log.subject || undefined,
    message: log.message || undefined,
    status: log.status,
    user: log.user
      ? {
          id: log.user.id,
          fullName: `${log.user.firstName || ''} ${log.user.lastName || ''}`.trim() || log.user.email,
        }
      : undefined,
    metadata: log.metadata,
    createdAt: log.createdAt.toISOString(),
  }
}

// Content transformers
export function transformContent(content: Content) {
  return {
    id: content.id,
    key: content.key,
    title: content.title || undefined,
    content: content.content,
    type: content.type,
    status: content.status,
    metadata: content.metadata,
    version: content.version,
    createdAt: content.createdAt.toISOString(),
    updatedAt: content.updatedAt.toISOString(),
  }
}

// Utility functions
function formatCurrency(amount: number, currency: string = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount)
}

function formatFileSize(bytes: number): string {
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  if (bytes === 0) return '0 Bytes'
  const i = Math.floor(Math.log(bytes) / Math.log(1024))
  return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i]
}

// Database query result transformers
export function transformPaginatedResult<T, R>(
  result: {
    data: T[]
    pagination: {
      page: number
      limit: number
      total: number
      totalPages: number
      hasNext: boolean
      hasPrev: boolean
    }
  },
  transformer: (item: T) => R
) {
  return {
    data: result.data.map(transformer),
    pagination: result.pagination,
  }
}

// Search result transformers
export function transformProductSearchResult(result: {
  products: (Product & { category?: Category })[]
  pagination: any
  filters: any
}) {
  return {
    products: transformProducts(result.products),
    pagination: result.pagination,
    filters: result.filters,
  }
}

// API response transformers
export function createSuccessResponse<T>(data: T, message?: string) {
  return {
    success: true,
    data,
    message,
  }
}

export function createErrorResponse(error: string, details?: any) {
  return {
    success: false,
    error,
    details,
  }
}

export function createPaginatedResponse<T>(
  data: T[],
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
    hasNext: boolean
    hasPrev: boolean
  }
) {
  return {
    success: true,
    data,
    pagination,
  }
}

// Form data transformers
export function transformFormData(formData: FormData): Record<string, any> {
  const data: Record<string, any> = {}
  
  for (const [key, value] of formData.entries()) {
    if (data[key]) {
      // Handle multiple values for the same key
      if (Array.isArray(data[key])) {
        data[key].push(value)
      } else {
        data[key] = [data[key], value]
      }
    } else {
      data[key] = value
    }
  }
  
  return data
}

// Date transformers
export function formatDate(date: Date | string, locale: string = 'en-US'): string {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date))
}

export function formatDateTime(date: Date | string, locale: string = 'en-US'): string {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(date))
}

export function getRelativeTime(date: Date | string, locale: string = 'en-US'): string {
  // Fallback implementation for older browsers
  const now = new Date()
  const targetDate = new Date(date)
  const diffInSeconds = (targetDate.getTime() - now.getTime()) / 1000
  
  const intervals = [
    { unit: 'year', seconds: 31536000 },
    { unit: 'month', seconds: 2628000 },
    { unit: 'day', seconds: 86400 },
    { unit: 'hour', seconds: 3600 },
    { unit: 'minute', seconds: 60 },
  ] as const
  
  for (const interval of intervals) {
    const count = Math.floor(Math.abs(diffInSeconds) / interval.seconds)
    if (count >= 1) {
      const suffix = diffInSeconds < 0 ? 'ago' : 'from now'
      return `${count} ${interval.unit}${count > 1 ? 's' : ''} ${suffix}`
    }
  }
  
  return 'just now'
}