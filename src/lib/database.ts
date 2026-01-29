import { prisma } from './prisma'
import type {
  User,
  Product,
  Category,
  RFQ,
  Certificate,
  CommunicationLog,
  AuditLog,
  Content,
} from '@/types'

// Define Prisma transaction type locally to avoid import issues
type PrismaTransactionClient = Parameters<
  Parameters<typeof prisma.$transaction>[0]
>[0]

// Database connection health check
export async function checkDatabaseConnection(): Promise<boolean> {
  try {
    await prisma.$queryRaw`SELECT 1`
    return true
  } catch (error) {
    console.error('Database connection failed:', error)
    return false
  }
}

// Generic pagination helper
export interface PaginationOptions {
  page?: number
  limit?: number
}

export interface PaginatedResult<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
    hasNext: boolean
    hasPrev: boolean
  }
}

export async function paginate<T>(
  model: any,
  options: PaginationOptions & {
    where?: any
    orderBy?: any
    include?: any
    select?: any
  } = {}
): Promise<PaginatedResult<T>> {
  const page = Math.max(1, options.page || 1)
  const limit = Math.min(100, Math.max(1, options.limit || 10))
  const skip = (page - 1) * limit

  const [data, total] = await Promise.all([
    model.findMany({
      where: options.where,
      orderBy: options.orderBy,
      include: options.include,
      select: options.select,
      skip,
      take: limit,
    }),
    model.count({ where: options.where }),
  ])

  const totalPages = Math.ceil(total / limit)

  return {
    data,
    pagination: {
      page,
      limit,
      total,
      totalPages,
      hasNext: page < totalPages,
      hasPrev: page > 1,
    },
  }
}

// Search helper for full-text search
export function buildSearchQuery(searchTerm: string, fields: string[]) {
  if (!searchTerm.trim()) return {}

  const searchConditions = fields.map(field => ({
    [field]: {
      contains: searchTerm,
      mode: 'insensitive' as const,
    },
  }))

  return {
    OR: searchConditions,
  }
}

// Database transaction helper
export async function withTransaction<T>(
  callback: (tx: PrismaTransactionClient) => Promise<T>
): Promise<T> {
  return await prisma.$transaction(callback)
}

// Soft delete helper
export async function softDelete(model: any, id: string) {
  return await model.update({
    where: { id },
    data: { isActive: false },
  })
}

// Bulk operations helper
export async function bulkUpsert<T>(
  model: any,
  data: T[],
  uniqueField: keyof T
) {
  const results = []

  for (const item of data) {
    const result = await model.upsert({
      where: { [uniqueField]: item[uniqueField] },
      update: item,
      create: item,
    })
    results.push(result)
  }

  return results
}

// Database cleanup utilities
export async function cleanupExpiredSessions() {
  // This would be implemented when we add session management
  console.log('Cleaning up expired sessions...')
}

export async function cleanupOldLogs(daysToKeep: number = 90) {
  const cutoffDate = new Date()
  cutoffDate.setDate(cutoffDate.getDate() - daysToKeep)

  const deleted = await prisma.communicationLog.deleteMany({
    where: {
      createdAt: {
        lt: cutoffDate,
      },
    },
  })

  console.log(`Cleaned up ${deleted.count} old communication logs`)
  return deleted.count
}

// Database statistics
export async function getDatabaseStats() {
  const [
    userCount,
    productCount,
    activeProductCount,
    categoryCount,
    rfqCount,
    pendingRfqCount,
    certificateCount,
  ] = await Promise.all([
    prisma.user.count(),
    prisma.product.count(),
    prisma.product.count({ where: { isActive: true } }),
    prisma.category.count(),
    prisma.rFQ.count(),
    prisma.rFQ.count({ where: { status: 'pending' } }),
    prisma.certificate.count(),
  ])

  return {
    users: userCount,
    products: {
      total: productCount,
      active: activeProductCount,
    },
    categories: categoryCount,
    rfqs: {
      total: rfqCount,
      pending: pendingRfqCount,
    },
    certificates: certificateCount,
  }
}

// Export commonly used types
export type {
  User,
  Product,
  Category,
  RFQ,
  Certificate,
  CommunicationLog,
  AuditLog,
  Content,
} from '@/types'

// Export Prisma client
export { prisma }
