import { z } from 'zod'

// Base validation schemas
export const emailSchema = z.string().email('Invalid email address')
export const phoneSchema = z
  .string()
  .regex(/^\+?[\d\s\-\(\)]{10,}$/, 'Invalid phone number')
export const countryCodeSchema = z
  .string()
  .length(2, 'Country code must be 2 characters')
export const hsCodeSchema = z
  .string()
  .regex(/^\d{4}\.\d{2}\.\d{2}$/, 'Invalid HS code format')
export const slugSchema = z
  .string()
  .regex(/^[a-z0-9-]+$/, 'Invalid slug format')

// User validation schemas
export const userCreateSchema = z.object({
  email: emailSchema,
  password: z.string().min(8, 'Password must be at least 8 characters'),
  firstName: z.string().min(1, 'First name is required').max(100),
  lastName: z.string().min(1, 'Last name is required').max(100),
  role: z.enum(['admin', 'manager', 'user']).default('user'),
})

export const userUpdateSchema = z.object({
  firstName: z.string().min(1).max(100).optional(),
  lastName: z.string().min(1).max(100).optional(),
  role: z.enum(['admin', 'manager', 'user']).optional(),
  isActive: z.boolean().optional(),
})

export const userLoginSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, 'Password is required'),
})

// Category validation schemas
export const categoryCreateSchema = z.object({
  name: z.string().min(1, 'Category name is required').max(255),
  description: z.string().max(1000).optional(),
  slug: slugSchema,
})

export const categoryUpdateSchema = z.object({
  name: z.string().min(1).max(255).optional(),
  description: z.string().max(1000).optional(),
  slug: slugSchema.optional(),
  isActive: z.boolean().optional(),
})

// Product validation schemas
export const productImageSchema = z.object({
  primary: z.string().url('Invalid image URL'),
  gallery: z.array(z.string().url()).max(10, 'Maximum 10 gallery images'),
})

export const productCertificationSchema = z.object({
  organic: z.boolean().optional(),
  haccp: z.boolean().optional(),
  iso22000: z.boolean().optional(),
  fssai: z.boolean().optional(),
  halal: z.boolean().optional(),
  kosher: z.boolean().optional(),
})

export const productComplianceDocsSchema = z.object({
  phytosanitary: z.boolean().optional(),
  coa: z.boolean().optional(),
  origin: z.boolean().optional(),
  pesticide_residue: z.boolean().optional(),
  aflatoxin_test: z.boolean().optional(),
  heavy_metals: z.boolean().optional(),
})

export const productCreateSchema = z.object({
  name: z.string().min(1, 'Product name is required').max(255),
  description: z.string().max(2000).optional(),
  categoryId: z.string().cuid('Invalid category ID'),
  hsCode: hsCodeSchema.optional(),
  originCountry: countryCodeSchema.optional(),
  moq: z.number().int().positive('MOQ must be positive').optional(),
  unit: z.enum(['MT', 'KG', 'LBS', 'TONS', 'PIECES', 'LITERS']).optional(),
  pricePerUnit: z.number().positive('Price must be positive').optional(),
  packagingDetails: z.string().max(1000).optional(),
  shelfLife: z.string().max(100).optional(),
  certifications: productCertificationSchema.optional(),
  images: productImageSchema.optional(),
  complianceDocs: productComplianceDocsSchema.optional(),
})

export const productUpdateSchema = productCreateSchema
  .partial()
  .omit({ categoryId: true })
  .extend({
    categoryId: z.string().cuid().optional(),
    isActive: z.boolean().optional(),
  })

export const productSearchSchema = z.object({
  term: z.string().max(200).optional(),
  category: z.string().cuid().optional(),
  origin: countryCodeSchema.optional(),
  certification: z.array(z.string()).optional(),
  priceMin: z.number().positive().optional(),
  priceMax: z.number().positive().optional(),
  page: z.number().int().positive().default(1),
  limit: z.number().int().positive().max(100).default(10),
  sortBy: z.enum(['name', 'price', 'createdAt']).default('createdAt'),
  sortOrder: z.enum(['asc', 'desc']).default('desc'),
})

// RFQ validation schemas
export const rfqCreateSchema = z.object({
  productId: z.string().cuid('Invalid product ID'),
  buyerName: z.string().min(1, 'Buyer name is required').max(255),
  buyerEmail: emailSchema,
  buyerPhone: phoneSchema.optional(),
  buyerCompany: z.string().max(255).optional(),
  buyerCountry: countryCodeSchema.optional(),
  quantity: z.number().int().positive('Quantity must be positive'),
  targetPrice: z.number().positive('Target price must be positive').optional(),
  deliveryLocation: z.string().min(1, 'Delivery location is required').max(255),
  timeline: z.string().min(1, 'Timeline is required').max(100),
  incoterms: z
    .enum(['FOB', 'CIF', 'CFR', 'EXW', 'DDP', 'DAP', 'FCA'])
    .optional(),
  additionalRequirements: z.string().max(2000).optional(),
})

export const rfqUpdateSchema = z.object({
  status: z
    .enum([
      'pending',
      'in_progress',
      'quoted',
      'accepted',
      'rejected',
      'completed',
    ])
    .optional(),
  priority: z.enum(['low', 'normal', 'high', 'urgent']).optional(),
  assignedTo: z.string().cuid().optional(),
  notes: z.string().max(2000).optional(),
})

export const rfqFilterSchema = z.object({
  status: z
    .enum([
      'pending',
      'in_progress',
      'quoted',
      'accepted',
      'rejected',
      'completed',
    ])
    .optional(),
  priority: z.enum(['low', 'normal', 'high', 'urgent']).optional(),
  assignedTo: z.string().cuid().optional(),
  buyerCountry: countryCodeSchema.optional(),
  productCategory: z.string().cuid().optional(),
  dateFrom: z.string().datetime().optional(),
  dateTo: z.string().datetime().optional(),
  page: z.number().int().positive().default(1),
  limit: z.number().int().positive().max(100).default(10),
})

// Certificate validation schemas
export const certificateCreateSchema = z.object({
  name: z.string().min(1, 'Certificate name is required').max(255),
  type: z.enum([
    'food_safety',
    'organic',
    'export_license',
    'food_license',
    'quality',
    'environmental',
  ]),
  issuer: z.string().max(255).optional(),
  issueDate: z.string().datetime().optional(),
  expiryDate: z.string().datetime().optional(),
  certificateNumber: z.string().max(100).optional(),
  fileUrl: z.string().url().optional(),
  fileSize: z.number().int().positive().optional(),
})

export const certificateUpdateSchema = certificateCreateSchema
  .partial()
  .extend({
    isActive: z.boolean().optional(),
  })

// Contact form validation schema
export const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  email: emailSchema,
  phone: phoneSchema.optional(),
  company: z.string().max(255).optional(),
  country: countryCodeSchema.optional(),
  subject: z.string().min(1, 'Subject is required').max(200),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000),
})

// Communication log validation schema
export const communicationLogSchema = z.object({
  type: z.enum(['email', 'whatsapp', 'phone', 'sms']),
  recipient: z.string().min(1, 'Recipient is required'),
  subject: z.string().max(255).optional(),
  message: z.string().max(5000).optional(),
  status: z.enum(['sent', 'delivered', 'failed', 'pending']).default('sent'),
  userId: z.string().cuid().optional(),
  metadata: z.record(z.any()).optional(),
})

// File upload validation schema
export const fileUploadSchema = z.object({
  filename: z.string().min(1, 'Filename is required'),
  mimetype: z.string().min(1, 'MIME type is required'),
  size: z
    .number()
    .int()
    .positive()
    .max(10 * 1024 * 1024, 'File size must be less than 10MB'),
})

// Pagination validation schema
export const paginationSchema = z.object({
  page: z.number().int().positive().default(1),
  limit: z.number().int().positive().max(100).default(10),
})

// API response validation schemas
export const apiResponseSchema = z.object({
  success: z.boolean(),
  data: z.any().optional(),
  message: z.string().optional(),
  error: z.string().optional(),
})

export const paginatedResponseSchema = z.object({
  data: z.array(z.any()),
  pagination: z.object({
    page: z.number().int().positive(),
    limit: z.number().int().positive(),
    total: z.number().int().nonnegative(),
    totalPages: z.number().int().nonnegative(),
    hasNext: z.boolean(),
    hasPrev: z.boolean(),
  }),
})

// Content validation schemas
export const contentCreateSchema = z.object({
  key: z.string().min(1, 'Content key is required').max(100),
  title: z.string().max(255).optional(),
  content: z.string().min(1, 'Content is required'),
  type: z.enum(['page', 'blog', 'service', 'faq']).default('page'),
  status: z.enum(['draft', 'published', 'archived']).default('draft'),
  metadata: z.record(z.any()).optional(),
})

export const contentUpdateSchema = contentCreateSchema.partial()

// Audit log validation schema
export const auditLogSchema = z.object({
  userId: z.string().cuid(),
  action: z.string().min(1, 'Action is required').max(100),
  resource: z.string().min(1, 'Resource is required').max(100),
  details: z.record(z.any()).optional(),
  ipAddress: z.string().ip().optional(),
  userAgent: z.string().max(500).optional(),
})

// Export type inference helpers
export type UserCreateInput = z.infer<typeof userCreateSchema>
export type UserUpdateInput = z.infer<typeof userUpdateSchema>
export type UserLoginInput = z.infer<typeof userLoginSchema>

export type CategoryCreateInput = z.infer<typeof categoryCreateSchema>
export type CategoryUpdateInput = z.infer<typeof categoryUpdateSchema>

export type ProductCreateInput = z.infer<typeof productCreateSchema>
export type ProductUpdateInput = z.infer<typeof productUpdateSchema>
export type ProductSearchInput = z.infer<typeof productSearchSchema>

export type RFQCreateInput = z.infer<typeof rfqCreateSchema>
export type RFQUpdateInput = z.infer<typeof rfqUpdateSchema>
export type RFQFilterInput = z.infer<typeof rfqFilterSchema>

export type CertificateCreateInput = z.infer<typeof certificateCreateSchema>
export type CertificateUpdateInput = z.infer<typeof certificateUpdateSchema>

export type ContactFormInput = z.infer<typeof contactFormSchema>
export type CommunicationLogInput = z.infer<typeof communicationLogSchema>

export type ContentCreateInput = z.infer<typeof contentCreateSchema>
export type ContentUpdateInput = z.infer<typeof contentUpdateSchema>

export type AuditLogInput = z.infer<typeof auditLogSchema>

// Validation helper functions
export function validateInput<T>(schema: z.ZodSchema<T>, data: unknown): T {
  return schema.parse(data)
}

export function validateInputSafe<T>(
  schema: z.ZodSchema<T>,
  data: unknown
): { success: true; data: T } | { success: false; error: z.ZodError } {
  const result = schema.safeParse(data)
  if (result.success) {
    return { success: true, data: result.data }
  }
  return { success: false, error: result.error }
}

export function getValidationErrors(error: z.ZodError): Record<string, string> {
  const errors: Record<string, string> = {}
  error.errors.forEach(err => {
    const path = err.path.join('.')
    errors[path] = err.message
  })
  return errors
}
