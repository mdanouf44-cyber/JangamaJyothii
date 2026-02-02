# Shree jangama jyothi global LLP

A comprehensive B2B platform designed to connect agricultural exporters with international buyers. Built with Next.js 14, TypeScript, PostgreSQL, and Redis.

## Features

- 🌾 **Product Catalog**: Comprehensive agricultural product showcase with advanced search and filtering
- 📋 **RFQ System**: Structured Request for Quote management with automated workflows
- 🏆 **Trust & Compliance**: Certificate management and compliance documentation
- 📱 **Mobile-First**: Responsive design optimized for all devices
- 🔒 **Security**: JWT authentication, rate limiting, and data encryption
- 🌍 **SEO Optimized**: Schema markup, multi-language support, and country-specific pages
- 📊 **Analytics**: Comprehensive dashboard with real-time metrics
- 💬 **Communication**: WhatsApp Business API integration and multi-channel contact

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Node.js
- **Database**: PostgreSQL with Prisma ORM
- **Cache**: Redis
- **Authentication**: JWT with NextAuth.js
- **Testing**: Jest, React Testing Library, Fast-check (Property-based testing)
- **Deployment**: Docker, Vercel/AWS

## Getting Started

### Prerequisites

- Node.js 18+
- Docker and Docker Compose
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd agro-export-platform
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` with your configuration values.

4. **Start the database services**

   ```bash
   docker-compose up -d postgres redis
   ```

5. **Run database migrations**

   ```bash
   npm run db:generate
   npm run db:migrate
   npm run db:seed
   ```

6. **Start the development server**

   ```bash
   npm run dev
   ```

7. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Optional Development Tools

Start additional development tools:

```bash
# Start pgAdmin and Redis Commander
docker-compose --profile tools up -d

# Access tools:
# pgAdmin: http://localhost:8080 (admin@agroexport.com / admin)
# Redis Commander: http://localhost:8081
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage
- `npm run test:pbt` - Run property-based tests only
- `npm run db:migrate` - Run database migrations
- `npm run db:generate` - Generate Prisma client
- `npm run db:seed` - Seed database with sample data

### Project Structure

```
src/
├── app/                 # Next.js 14 App Router
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # Reusable UI components
├── lib/               # Utility libraries
│   ├── prisma.ts      # Database client
│   ├── redis.ts       # Cache client
│   └── utils.ts       # Helper functions
├── types/             # TypeScript type definitions
├── hooks/             # Custom React hooks
└── styles/            # Additional styles

prisma/
├── schema.prisma      # Database schema
└── migrations/        # Database migrations

tests/                 # Test files
docker/               # Docker configuration
```

### Database Schema

The platform uses PostgreSQL with the following main entities:

- **Users**: Admin users and authentication
- **Products**: Agricultural product catalog
- **Categories**: Product categorization
- **RFQs**: Request for Quote management
- **Certificates**: Compliance documentation
- **Communication Logs**: Interaction tracking
- **Audit Logs**: System activity logging

### Testing

The project uses a dual testing approach:

1. **Unit Tests**: Jest + React Testing Library for component and function testing
2. **Property-Based Tests**: Fast-check for testing universal properties

Run specific test types:

```bash
npm run test:pbt        # Property-based tests only
npm run test:coverage   # With coverage report
```

### Code Quality

- **ESLint**: Code linting with Next.js and Prettier rules
- **Prettier**: Code formatting
- **TypeScript**: Type safety
- **Husky**: Git hooks for quality checks (optional)

## Deployment

### Docker Production Build

```bash
# Build production image
docker build -t agro-export-platform .

# Run with docker-compose
docker-compose -f docker-compose.prod.yml up -d
```

### Environment Variables

Key environment variables for production:

```env
# Database
DATABASE_URL="postgresql://user:pass@host:5432/db"

# Security
JWT_SECRET="your-production-secret"
BCRYPT_ROUNDS=12

# External Services
WHATSAPP_ACCESS_TOKEN="your-token"
GOOGLE_MAPS_API_KEY="your-key"

# Email
SMTP_HOST="your-smtp-host"
SMTP_USER="your-email"
SMTP_PASS="your-password"
```

## API Documentation

### Core Endpoints

- `GET /api/products` - List products with filtering
- `GET /api/products/[id]` - Get product details
- `POST /api/rfq` - Submit RFQ
- `GET /api/certificates` - List certificates
- `POST /api/contact` - Submit contact form

### Authentication

The API uses JWT tokens for authentication:

```bash
# Login
POST /api/auth/login
{
  "email": "admin@example.com",
  "password": "password"
}

# Protected routes require Authorization header
Authorization: Bearer <jwt-token>
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Write tests for new features
- Use conventional commit messages
- Ensure all tests pass before submitting PR
- Update documentation as needed

## Performance

The platform is optimized for performance:

- **Core Web Vitals**: Optimized for Google's performance metrics
- **Image Optimization**: Next.js Image component with WebP/AVIF support
- **Caching**: Redis caching for API responses and sessions
- **Lazy Loading**: Images and components loaded on demand
- **Code Splitting**: Automatic code splitting with Next.js

## Security

Security measures implemented:

- **HTTPS**: TLS encryption for all communications
- **JWT**: Secure token-based authentication
- **Rate Limiting**: API rate limiting with Redis
- **Input Validation**: Zod schema validation
- **CSRF Protection**: Built-in Next.js CSRF protection
- **Content Security Policy**: XSS prevention headers

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support and questions:

- Create an issue in the repository
- Contact the development team
- Check the documentation

## Roadmap

- [ ] AI-powered product recommendations
- [ ] Advanced analytics dashboard
- [ ] Mobile app development
- [ ] Multi-language expansion
- [ ] CRM integration
- [ ] Blockchain supply chain tracking
