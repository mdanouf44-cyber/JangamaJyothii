#!/usr/bin/env tsx

// Test script to verify the setup is working correctly
import { prisma } from '../src/lib/prisma'
import { getDatabaseStats } from '../src/lib/database'
import { validateInput, userCreateSchema } from '../src/lib/validations'
import { transformUser } from '../src/lib/transformers'

async function testSetup() {
  console.log('🧪 Testing Agro Export Platform Setup...\n')

  try {
    // Test 1: Database connection
    console.log('1. Testing database connection...')
    const stats = await getDatabaseStats()
    console.log('✅ Database connection successful')
    console.log('📊 Database stats:', stats)
    console.log()

    // Test 2: Validation schemas
    console.log('2. Testing validation schemas...')
    const testUserData = {
      email: 'test@example.com',
      password: 'password123',
      firstName: 'John',
      lastName: 'Doe',
      role: 'admin',
    }
    
    const validatedData = validateInput(userCreateSchema, testUserData)
    console.log('✅ Validation schemas working')
    console.log('📝 Validated data:', validatedData)
    console.log()

    // Test 3: Data transformers
    console.log('3. Testing data transformers...')
    const mockUser = {
      id: 'user-123',
      email: 'test@example.com',
      passwordHash: 'hashed-password',
      role: 'admin',
      firstName: 'John',
      lastName: 'Doe',
      isActive: true,
      lastLogin: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    
    const transformedUser = transformUser(mockUser)
    console.log('✅ Data transformers working')
    console.log('🔄 Transformed user:', transformedUser)
    console.log()

    // Test 4: Property-based tests
    console.log('4. Testing property-based test setup...')
    const { mockTest, mockFc } = await import('../src/__tests__/properties/database-integrity.test')
    console.log('✅ Property-based tests loaded successfully')
    console.log()

    console.log('🎉 All tests passed! Setup is working correctly.')
    console.log('\n📋 Next steps:')
    console.log('1. Install dependencies: npm install')
    console.log('2. Start database: docker-compose up -d postgres redis')
    console.log('3. Run migrations: npm run db:migrate')
    console.log('4. Seed database: npm run db:seed')
    console.log('5. Start development: npm run dev')

  } catch (error) {
    console.error('❌ Setup test failed:', error)
    process.exit(1)
  }
}

// Run the test
testSetup().catch(console.error)