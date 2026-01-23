// Temporary mock for development - replace with actual Prisma client when available
interface MockPrismaClient {
  $connect: () => Promise<void>
  user: any
  category: any
  product: any
  certificate: any
  productCertificate: any
  rFQ: any
  content: any
  $disconnect: () => Promise<void>
}

// Mock bcrypt for development
const bcrypt = {
  hash: async (password: string, rounds: number) => `hashed_${password}_${rounds}`
}

// Create a mock prisma client for development
const prisma: MockPrismaClient = {
  $connect: async () => {},
  user: {
    upsert: async (data: any) => ({ id: 'user-1', email: data.create.email, ...data.create }),
  },
  category: {
    upsert: async (data: any) => ({ id: `cat-${Date.now()}`, ...data.create }),
  },
  product: {
    create: async (data: any) => ({ id: `prod-${Date.now()}`, ...data }),
  },
  certificate: {
    upsert: async (data: any) => ({ id: `cert-${Date.now()}`, ...data.create }),
  },
  productCertificate: {
    create: async (data: any) => ({ id: `pc-${Date.now()}`, ...data }),
  },
  rFQ: {
    create: async (data: any) => ({ id: `rfq-${Date.now()}`, ...data }),
  },
  content: {
    upsert: async (data: any) => ({ id: `content-${Date.now()}`, ...data.create }),
  },
  $disconnect: async () => {},
}

async function main() {
  console.log('🌱 Starting database seeding...')

  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 12)
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@agroexport.com' },
    update: {},
    create: {
      email: 'admin@agroexport.com',
      passwordHash: hashedPassword,
      role: 'admin',
      firstName: 'Admin',
      lastName: 'User',
      isActive: true,
    },
  })
  console.log('✅ Created admin user:', adminUser.email)

  // Create categories
  const categories = [
    {
      name: 'Grains & Cereals',
      description: 'Rice, wheat, barley, oats, and other cereal grains',
      slug: 'grains-cereals',
    },
    {
      name: 'Spices & Herbs',
      description: 'Premium Indian spices, herbs, and seasonings',
      slug: 'spices-herbs',
    },
    {
      name: 'Pulses & Legumes',
      description: 'Lentils, chickpeas, beans, and other protein-rich legumes',
      slug: 'pulses-legumes',
    },
    {
      name: 'Oil Seeds',
      description: 'Sesame, sunflower, mustard, and other oil-bearing seeds',
      slug: 'oil-seeds',
    },
    {
      name: 'Fresh Fruits',
      description: 'Seasonal fresh fruits for export markets',
      slug: 'fresh-fruits',
    },
    {
      name: 'Vegetables',
      description: 'Fresh and processed vegetables',
      slug: 'vegetables',
    },
    {
      name: 'Tea & Coffee',
      description: 'Premium tea leaves and coffee beans',
      slug: 'tea-coffee',
    },
    {
      name: 'Processed Foods',
      description: 'Value-added processed agricultural products',
      slug: 'processed-foods',
    },
  ]

  const createdCategories = []
  for (const category of categories) {
    const created = await prisma.category.upsert({
      where: { slug: category.slug },
      update: {},
      create: category,
    })
    createdCategories.push(created)
    console.log('✅ Created category:', created.name)
  }

  // Create certificates
  const certificates = [
    {
      name: 'ISO 22000:2018',
      type: 'food_safety',
      issuer: 'International Organization for Standardization',
      issueDate: new Date('2023-01-15'),
      expiryDate: new Date('2026-01-15'),
      certificateNumber: 'ISO-22000-2023-001',
      isActive: true,
    },
    {
      name: 'HACCP Certification',
      type: 'food_safety',
      issuer: 'HACCP International',
      issueDate: new Date('2023-03-10'),
      expiryDate: new Date('2025-03-10'),
      certificateNumber: 'HACCP-2023-AGR-001',
      isActive: true,
    },
    {
      name: 'APEDA Registration',
      type: 'export_license',
      issuer: 'Agricultural and Processed Food Products Export Development Authority',
      issueDate: new Date('2022-06-01'),
      expiryDate: new Date('2027-06-01'),
      certificateNumber: 'APEDA-REG-2022-12345',
      isActive: true,
    },
    {
      name: 'FSSAI License',
      type: 'food_license',
      issuer: 'Food Safety and Standards Authority of India',
      issueDate: new Date('2023-02-20'),
      expiryDate: new Date('2028-02-20'),
      certificateNumber: 'FSSAI-LIC-2023-67890',
      isActive: true,
    },
    {
      name: 'Organic Certification',
      type: 'organic',
      issuer: 'India Organic Certification Agency',
      issueDate: new Date('2023-04-01'),
      expiryDate: new Date('2024-04-01'),
      certificateNumber: 'ORG-CERT-2023-001',
      isActive: true,
    },
  ]

  const createdCertificates = []
  for (const certificate of certificates) {
    const created = await prisma.certificate.upsert({
      where: { certificateNumber: certificate.certificateNumber },
      update: {},
      create: certificate,
    })
    createdCertificates.push(created)
    console.log('✅ Created certificate:', created.name)
  }

  // Create sample products
  const products = [
    {
      name: 'Premium Basmati Rice',
      description: 'Aged premium basmati rice with long grains and aromatic fragrance. Perfect for international markets.',
      categoryId: createdCategories.find(c => c.slug === 'grains-cereals')!.id,
      hsCode: '1006.30.10',
      originCountry: 'IN',
      moq: 1000,
      unit: 'MT',
      pricePerUnit: 850.00,
      packagingDetails: '25kg, 50kg PP bags or as per buyer requirement',
      shelfLife: '24 months',
      certifications: {
        organic: true,
        haccp: true,
        iso22000: true,
      },
      images: {
        primary: '/images/products/basmati-rice-1.jpg',
        gallery: [
          '/images/products/basmati-rice-1.jpg',
          '/images/products/basmati-rice-2.jpg',
          '/images/products/basmati-rice-3.jpg',
        ],
      },
      complianceDocs: {
        phytosanitary: true,
        coa: true,
        origin: true,
      },
      isActive: true,
    },
    {
      name: 'Red Chili Powder',
      description: 'Premium quality red chili powder with high color value and pungency. Sourced from the best chili growing regions.',
      categoryId: createdCategories.find(c => c.slug === 'spices-herbs')!.id,
      hsCode: '0904.20.10',
      originCountry: 'IN',
      moq: 500,
      unit: 'MT',
      pricePerUnit: 2200.00,
      packagingDetails: '25kg multi-layer paper bags with inner PE lining',
      shelfLife: '18 months',
      certifications: {
        fssai: true,
        haccp: true,
        iso22000: true,
      },
      images: {
        primary: '/images/products/red-chili-powder-1.jpg',
        gallery: [
          '/images/products/red-chili-powder-1.jpg',
          '/images/products/red-chili-powder-2.jpg',
        ],
      },
      complianceDocs: {
        phytosanitary: true,
        coa: true,
        origin: true,
        pesticide_residue: true,
      },
      isActive: true,
    },
    {
      name: 'Turmeric Powder',
      description: 'High curcumin content turmeric powder with vibrant color and medicinal properties.',
      categoryId: createdCategories.find(c => c.slug === 'spices-herbs')!.id,
      hsCode: '0910.30.00',
      originCountry: 'IN',
      moq: 300,
      unit: 'MT',
      pricePerUnit: 1800.00,
      packagingDetails: '25kg multi-layer paper bags or as per requirement',
      shelfLife: '24 months',
      certifications: {
        organic: true,
        fssai: true,
        haccp: true,
      },
      images: {
        primary: '/images/products/turmeric-powder-1.jpg',
        gallery: [
          '/images/products/turmeric-powder-1.jpg',
          '/images/products/turmeric-powder-2.jpg',
        ],
      },
      complianceDocs: {
        phytosanitary: true,
        coa: true,
        origin: true,
      },
      isActive: true,
    },
    {
      name: 'Toor Dal (Pigeon Peas)',
      description: 'Premium quality toor dal, rich in protein and essential nutrients. Machine cleaned and sorted.',
      categoryId: createdCategories.find(c => c.slug === 'pulses-legumes')!.id,
      hsCode: '0713.60.00',
      originCountry: 'IN',
      moq: 800,
      unit: 'MT',
      pricePerUnit: 1200.00,
      packagingDetails: '50kg PP bags with inner PE lining',
      shelfLife: '12 months',
      certifications: {
        fssai: true,
        haccp: true,
      },
      images: {
        primary: '/images/products/toor-dal-1.jpg',
        gallery: [
          '/images/products/toor-dal-1.jpg',
          '/images/products/toor-dal-2.jpg',
        ],
      },
      complianceDocs: {
        phytosanitary: true,
        coa: true,
        origin: true,
      },
      isActive: true,
    },
    {
      name: 'Sesame Seeds',
      description: 'Natural white sesame seeds with high oil content. Cleaned, sorted, and ready for export.',
      categoryId: createdCategories.find(c => c.slug === 'oil-seeds')!.id,
      hsCode: '1207.40.00',
      originCountry: 'IN',
      moq: 500,
      unit: 'MT',
      pricePerUnit: 1500.00,
      packagingDetails: '25kg jute bags or PP bags as per requirement',
      shelfLife: '18 months',
      certifications: {
        fssai: true,
        haccp: true,
      },
      images: {
        primary: '/images/products/sesame-seeds-1.jpg',
        gallery: [
          '/images/products/sesame-seeds-1.jpg',
          '/images/products/sesame-seeds-2.jpg',
        ],
      },
      complianceDocs: {
        phytosanitary: true,
        coa: true,
        origin: true,
        aflatoxin_test: true,
      },
      isActive: true,
    },
  ]

  const createdProducts = []
  for (const product of products) {
    const created = await prisma.product.create({
      data: product,
    })
    createdProducts.push(created)
    console.log('✅ Created product:', created.name)
  }

  // Create product-certificate relationships
  for (const product of createdProducts) {
    // Assign relevant certificates to each product
    const relevantCerts = createdCertificates.filter(cert => {
      if (cert.type === 'food_safety') return true
      if (cert.type === 'export_license') return true
      if (cert.type === 'food_license') return true
      if (cert.type === 'organic' && product.certifications && (product.certifications as any).organic) return true
      return false
    })

    for (const cert of relevantCerts) {
      await prisma.productCertificate.create({
        data: {
          productId: product.id,
          certificateId: cert.id,
        },
      })
    }
  }
  console.log('✅ Created product-certificate relationships')

  // Create sample RFQs
  const sampleRfqs = [
    {
      productId: createdProducts[0].id, // Basmati Rice
      buyerName: 'Ahmed Al-Rashid',
      buyerEmail: 'ahmed@middleeasttrading.com',
      buyerPhone: '+971-50-123-4567',
      buyerCompany: 'Middle East Trading LLC',
      buyerCountry: 'AE',
      quantity: 2000,
      targetPrice: 800.00,
      deliveryLocation: 'Dubai, UAE',
      timeline: '30 days',
      incoterms: 'CIF',
      additionalRequirements: 'Need samples before bulk order. Prefer 1121 variety.',
      status: 'pending',
      priority: 'high',
      assignedTo: adminUser.id,
    },
    {
      productId: createdProducts[1].id, // Red Chili Powder
      buyerName: 'Maria Rodriguez',
      buyerEmail: 'maria@spiceimports.com',
      buyerPhone: '+1-555-987-6543',
      buyerCompany: 'Premium Spice Imports Inc.',
      buyerCountry: 'US',
      quantity: 1000,
      deliveryLocation: 'Los Angeles, USA',
      timeline: '45 days',
      incoterms: 'FOB',
      additionalRequirements: 'Require ASTA color value minimum 120. Need COA and pesticide residue report.',
      status: 'pending',
      priority: 'normal',
      assignedTo: adminUser.id,
    },
    {
      productId: createdProducts[2].id, // Turmeric Powder
      buyerName: 'Hans Mueller',
      buyerEmail: 'hans@organicspices.de',
      buyerPhone: '+49-30-12345678',
      buyerCompany: 'Organic Spices GmbH',
      buyerCountry: 'DE',
      quantity: 500,
      targetPrice: 1750.00,
      deliveryLocation: 'Hamburg, Germany',
      timeline: '60 days',
      incoterms: 'CIF',
      additionalRequirements: 'Must be organic certified. Need minimum 3% curcumin content.',
      status: 'in_progress',
      priority: 'normal',
      assignedTo: adminUser.id,
    },
  ]

  for (const rfq of sampleRfqs) {
    const created = await prisma.rFQ.create({
      data: rfq,
    })
    console.log('✅ Created RFQ:', created.id)
  }

  // Create sample content
  const contentPages = [
    {
      key: 'about-us',
      title: 'About Us',
      content: `
        <h2>Leading Agricultural Exporter</h2>
        <p>With over two decades of experience in agricultural exports, we are committed to delivering premium quality Indian agricultural products to international markets. Our state-of-the-art processing facilities and stringent quality control measures ensure that every product meets international standards.</p>
        
        <h3>Our Mission</h3>
        <p>To bridge the gap between Indian farmers and global markets by providing high-quality agricultural products while maintaining sustainable farming practices.</p>
        
        <h3>Our Vision</h3>
        <p>To become the most trusted name in agricultural exports, known for quality, reliability, and customer satisfaction.</p>
      `,
      type: 'page',
      status: 'published',
      metadata: {
        seo: {
          title: 'About Us - Leading Agricultural Exporter',
          description: 'Learn about our commitment to quality agricultural exports and sustainable farming practices.',
        },
      },
    },
    {
      key: 'quality-assurance',
      title: 'Quality Assurance',
      content: `
        <h2>Uncompromising Quality Standards</h2>
        <p>Our quality assurance process begins at the farm level and continues through processing, packaging, and shipping. We maintain strict quality control measures at every step.</p>
        
        <h3>Quality Control Process</h3>
        <ul>
          <li>Source verification and farmer certification</li>
          <li>Raw material inspection and testing</li>
          <li>Processing under controlled conditions</li>
          <li>Final product testing and certification</li>
          <li>Packaging and storage in optimal conditions</li>
        </ul>
      `,
      type: 'page',
      status: 'published',
    },
    {
      key: 'export-markets',
      title: 'Export Markets',
      content: `
        <h2>Global Reach</h2>
        <p>We export to over 50 countries across different continents, serving diverse markets with tailored solutions.</p>
        
        <h3>Key Markets</h3>
        <ul>
          <li><strong>Middle East:</strong> UAE, Saudi Arabia, Qatar, Kuwait</li>
          <li><strong>Europe:</strong> Germany, UK, Netherlands, France</li>
          <li><strong>North America:</strong> USA, Canada</li>
          <li><strong>Asia Pacific:</strong> Japan, South Korea, Singapore</li>
          <li><strong>Africa:</strong> South Africa, Nigeria, Kenya</li>
        </ul>
      `,
      type: 'page',
      status: 'published',
    },
  ]

  for (const content of contentPages) {
    await prisma.content.upsert({
      where: { key: content.key },
      update: {},
      create: content,
    })
    console.log('✅ Created content page:', content.title)
  }

  console.log('🎉 Database seeding completed successfully!')
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e)
    if (typeof globalThis !== 'undefined' && (globalThis as any).process) {
      ;(globalThis as any).process.exit(1)
    }
  })
  .finally(async () => {
    await prisma.$disconnect()
  })