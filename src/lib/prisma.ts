// Mock Prisma client for development until actual Prisma is set up
interface MockPrismaClient {
  $queryRaw: (query: any) => Promise<any>
  $transaction: (callback: (tx: any) => Promise<any>) => Promise<any>
  $disconnect: () => Promise<void>
  user: any
  product: any
  category: any
  rFQ: any
  certificate: any
  communicationLog: any
  auditLog: any
  content: any
}

const createMockPrisma = (): MockPrismaClient => ({
  $queryRaw: async () => [{ result: 1 }],
  $transaction: async callback => callback(createMockPrisma()),
  $disconnect: async () => {},
  user: {
    count: async () => 0,
    findMany: async () => [],
    create: async (data: any) => ({ id: 'mock-id', ...data.data }),
    update: async (data: any) => ({ id: data.where.id, ...data.data }),
    delete: async () => ({}),
  },
  product: {
    count: async () => 0,
    findMany: async () => [],
    create: async (data: any) => ({ id: 'mock-id', ...data.data }),
    update: async (data: any) => ({ id: data.where.id, ...data.data }),
    delete: async () => ({}),
  },
  category: {
    count: async () => 0,
    findMany: async () => [],
    create: async (data: any) => ({ id: 'mock-id', ...data.data }),
  },
  rFQ: {
    count: async () => 0,
    findMany: async () => [],
    create: async (data: any) => ({ id: 'mock-id', ...data.data }),
  },
  certificate: {
    count: async () => 0,
    findMany: async () => [],
  },
  communicationLog: {
    deleteMany: async () => ({ count: 0 }),
  },
  auditLog: {
    count: async () => 0,
  },
  content: {
    count: async () => 0,
  },
})

const globalForPrisma = globalThis as unknown as {
  prisma: MockPrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ?? createMockPrisma()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
