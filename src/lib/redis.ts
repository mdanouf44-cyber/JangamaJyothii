// Mock Redis client for development
interface MockRedisClient {
  isOpen: boolean
  connect(): Promise<void>
  get(key: string): Promise<string | null>
  setEx(key: string, ttl: number, value: string): Promise<void>
  del(key: string): Promise<void>
}

const createMockRedisClient = (): MockRedisClient => ({
  isOpen: false,
  connect: async () => {
    console.log('Mock Redis: Connected')
  },
  get: async (key: string) => {
    console.log(`Mock Redis: GET ${key}`)
    return null
  },
  setEx: async (key: string, ttl: number, value: string) => {
    console.log(`Mock Redis: SETEX ${key} ${ttl} ${value}`)
  },
  del: async (key: string) => {
    console.log(`Mock Redis: DEL ${key}`)
  },
})

const globalForRedis = globalThis as unknown as {
  redis: MockRedisClient | undefined
}

export const redis = globalForRedis.redis ?? createMockRedisClient()

if (process.env.NODE_ENV !== 'production') globalForRedis.redis = redis

// Connect to Redis (mock)
if (!redis.isOpen) {
  redis.connect().catch(console.error)
}

// Redis utility functions
export const cacheGet = async (key: string) => {
  try {
    const value = await redis.get(key)
    return value ? JSON.parse(value) : null
  } catch (error) {
    console.error('Redis GET error:', error)
    return null
  }
}

export const cacheSet = async (key: string, value: any, ttl: number = 3600) => {
  try {
    await redis.setEx(key, ttl, JSON.stringify(value))
    return true
  } catch (error) {
    console.error('Redis SET error:', error)
    return false
  }
}

export const cacheDel = async (key: string) => {
  try {
    await redis.del(key)
    return true
  } catch (error) {
    console.error('Redis DEL error:', error)
    return false
  }
}
