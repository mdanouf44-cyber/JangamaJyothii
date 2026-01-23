// Core entity types (will be replaced by Prisma types when available)
export interface User {
  id: string
  email: string
  passwordHash: string
  role: string
  firstName?: string | null
  lastName?: string | null
  isActive: boolean
  lastLogin?: Date | null
  createdAt: Date
  updatedAt: Date
}

export interface Product {
  id: string
  name: string
  description?: string | null
  categoryId: string
  hsCode?: string | null
  originCountry?: string | null
  moq?: number | null
  unit?: string | null
  pricePerUnit?: number | null
  packagingDetails?: string | null
  shelfLife?: string | null
  certifications?: any
  images?: any
  complianceDocs?: any
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

export interface Category {
  id: string
  name: string
  description?: string | null
  slug: string
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

export interface RFQ {
  id: string
  productId: string
  buyerName: string
  buyerEmail: string
  buyerPhone?: string | null
  buyerCompany?: string | null
  buyerCountry?: string | null
  quantity: number
  targetPrice?: number | null
  deliveryLocation: string
  timeline: string
  incoterms?: string | null
  additionalRequirements?: string | null
  status: string
  priority: string
  assignedTo?: string | null
  createdAt: Date
  updatedAt: Date
}

export interface Certificate {
  id: string
  name: string
  type: string
  issuer?: string | null
  issueDate?: Date | null
  expiryDate?: Date | null
  certificateNumber?: string | null
  fileUrl?: string | null
  fileSize?: number | null
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

export interface CommunicationLog {
  id: string
  type: string
  recipient: string
  subject?: string | null
  message?: string | null
  status: string
  userId?: string | null
  metadata?: any
  createdAt: Date
}

export interface AuditLog {
  id: string
  userId: string
  action: string
  resource: string
  details?: any
  ipAddress?: string | null
  userAgent?: string | null
  createdAt: Date
}

export interface Content {
  id: string
  key: string
  title?: string | null
  content: string
  type: string
  status: string
  metadata?: any
  version: number
  createdAt: Date
  updatedAt: Date
}

export interface ProductCertificate {
  id: string
  productId: string
  certificateId: string
}

// Validation input types
export interface UserCreateInput {
  email: string
  password: string
  firstName: string
  lastName: string
  role?: string
}

export interface UserUpdateInput {
  firstName?: string
  lastName?: string
  role?: string
  isActive?: boolean
}

export interface UserLoginInput {
  email: string
  password: string
}

export interface CategoryCreateInput {
  name: string
  description?: string
  slug: string
}

export interface CategoryUpdateInput {
  name?: string
  description?: string
  slug?: string
  isActive?: boolean
}

export interface ProductCreateInput {
  name: string
  description?: string
  categoryId: string
  hsCode?: string
  originCountry?: string
  moq?: number
  unit?: string
  pricePerUnit?: number
  packagingDetails?: string
  shelfLife?: string
  certifications?: any
  images?: any
  complianceDocs?: any
}

export interface ProductUpdateInput {
  name?: string
  description?: string
  categoryId?: string
  hsCode?: string
  originCountry?: string
  moq?: number
  unit?: string
  pricePerUnit?: number
  packagingDetails?: string
  shelfLife?: string
  certifications?: any
  images?: any
  complianceDocs?: any
  isActive?: boolean
}

export interface ProductSearchInput {
  term?: string
  category?: string
  origin?: string
  certification?: string[]
  priceMin?: number
  priceMax?: number
  page?: number
  limit?: number
  sortBy?: string
  sortOrder?: string
}

export interface RFQCreateInput {
  productId: string
  buyerName: string
  buyerEmail: string
  buyerPhone?: string
  buyerCompany?: string
  buyerCountry?: string
  quantity: number
  targetPrice?: number
  deliveryLocation: string
  timeline: string
  incoterms?: string
  additionalRequirements?: string
}

export interface RFQUpdateInput {
  status?: string
  priority?: string
  assignedTo?: string
  notes?: string
}

export interface RFQFilterInput {
  status?: string
  priority?: string
  assignedTo?: string
  buyerCountry?: string
  productCategory?: string
  dateFrom?: string
  dateTo?: string
  page?: number
  limit?: number
}

export interface CertificateCreateInput {
  name: string
  type: string
  issuer?: string
  issueDate?: string
  expiryDate?: string
  certificateNumber?: string
  fileUrl?: string
  fileSize?: number
}

export interface CertificateUpdateInput {
  name?: string
  type?: string
  issuer?: string
  issueDate?: string
  expiryDate?: string
  certificateNumber?: string
  fileUrl?: string
  fileSize?: number
  isActive?: boolean
}

export interface ContactFormInput {
  name: string
  email: string
  phone?: string
  company?: string
  country?: string
  subject: string
  message: string
}

export interface CommunicationLogInput {
  type: string
  recipient: string
  subject?: string
  message?: string
  status?: string
  userId?: string
  metadata?: any
}

export interface ContentCreateInput {
  key: string
  title?: string
  content: string
  type?: string
  status?: string
  metadata?: any
}

export interface ContentUpdateInput {
  key?: string
  title?: string
  content?: string
  type?: string
  status?: string
  metadata?: any
}

export interface AuditLogInput {
  userId: string
  action: string
  resource: string
  details?: any
  ipAddress?: string
  userAgent?: string
}

// Transformed types
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

// API Response types
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  message?: string
  error?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

// Form types
export interface ContactFormData {
  name: string
  email: string
  phone?: string
  company?: string
  country?: string
  message: string
}

export interface RFQFormData {
  productId: string
  buyerName: string
  buyerEmail: string
  buyerPhone?: string
  buyerCompany?: string
  buyerCountry?: string
  quantity: number
  targetPrice?: number
  deliveryLocation: string
  timeline: string
  incoterms?: string
  additionalRequirements?: string
}

// Search and filter types
export interface ProductSearchQuery {
  term?: string
  category?: string
  origin?: string
  certification?: string[]
  priceRange?: {
    min?: number
    max?: number
  }
  page?: number
  limit?: number
}

export interface ProductSearchResult {
  products: Product[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
  filters: {
    categories: Array<{ id: string; name: string; count: number }>
    origins: Array<{ country: string; count: number }>
    certifications: Array<{ name: string; count: number }>
    priceRange: { min: number; max: number }
  }
}

// Component prop types
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  children: any
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  className?: string
}

export interface InputProps {
  label?: string
  error?: string
  required?: boolean
  disabled?: boolean
  placeholder?: string
  type?: string
  value?: string
  onChange?: (value: string) => void
  className?: string
}

// Navigation types
export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

// SEO types
export interface SEOData {
  title: string
  description: string
  keywords?: string[]
  image?: string
  url?: string
  type?: string
}

// Analytics types
export interface AnalyticsEvent {
  event: string
  category: string
  action: string
  label?: string
  value?: number
}

// Error types
export interface AppError {
  code: string
  message: string
  details?: any
  timestamp: string
  requestId?: string
}