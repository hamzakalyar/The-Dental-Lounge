# 🦷 Aesthetic Dental Clinic

A portfolio-grade dental clinic website demonstrating full-stack engineering excellence, modern design principles, and professional software development practices.

## 📋 Overview

This is a complete dental clinic website featuring:
- Modern, responsive frontend with React, TypeScript, and Tailwind CSS
- RESTful backend API with Express and Prisma ORM
- SQLite database with type-safe queries
- Comprehensive testing (unit, integration, E2E)
- CI/CD pipeline with GitHub Actions
- Accessibility-first design (WCAG 2.1 AA compliant)
- Smooth animations and micro-interactions with Framer Motion

## 🎨 Design System

**Clinical Serenity** - A modern, trustworthy aesthetic that balances professionalism with warmth.

### Color Palette
- **Primary:** `#0077B6` (Trustworthy Blue)
- **Accent:** `#00B4D8` (Calm Teal)
- **Neutral Dark:** `#2B2D42` (Charcoal)
- **Neutral Mid:** `#8D99AE` (Slate)
- **Neutral Light:** `#EDF2F4` (Off-white)
- **Surface:** `#FFFFFF` (Pure white)
- **Success:** `#06D6A0` (Fresh Mint)
- **Warning:** `#FFD166` (Warm Honey)

### Typography
- **Headings:** Inter (weight 600-700)
- **Body:** Open Sans (weight 400-600)

## 🏗️ Architecture

```
aesthetic-dental-clinic/
├── client/              # React + Vite frontend
├── server/              # Express + Prisma backend
├── e2e/                 # Playwright end-to-end tests
├── docs/                # Architecture and API documentation
└── .github/workflows/   # CI/CD pipelines
```

See [ARCHITECTURE.md](./docs/ARCHITECTURE.md) for detailed architecture documentation.

## 🚀 Getting Started

### Prerequisites
- Node.js >= 18.0.0
- npm >= 9.0.0

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dental-clinic
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Server
   cp server/.env.example server/.env
   
   # Client
   cp client/.env.example client/.env
   ```

4. **Initialize the database**
   ```bash
   npm run db:migrate
   npm run db:seed
   ```

5. **Start development servers**
   ```bash
   npm run dev
   ```

   This will start:
   - Client: http://localhost:3000
   - Server: http://localhost:5000
   - API docs: http://localhost:5000/api

## 📦 Available Scripts

### Root Commands
- `npm run dev` - Start both client and server in development mode
- `npm run build` - Build all workspaces for production
- `npm run test` - Run all tests
- `npm run test:e2e` - Run end-to-end tests
- `npm run lint` - Lint all workspaces
- `npm run format` - Format code with Prettier
- `npm run typecheck` - Type check all workspaces

### Client Commands
- `npm run dev --workspace=client` - Start client dev server
- `npm run build --workspace=client` - Build client for production
- `npm run test --workspace=client` - Run client tests
- `npm run preview --workspace=client` - Preview production build

### Server Commands
- `npm run dev --workspace=server` - Start server with hot reload
- `npm run build --workspace=server` - Build server for production
- `npm run test --workspace=server` - Run server tests
- `npm run db:migrate` - Run database migrations
- `npm run db:seed` - Seed database with sample data
- `npm run db:studio` - Open Prisma Studio

## 🧪 Testing

- **Unit & Integration:** Vitest
- **End-to-End:** Playwright
- **Coverage:** Run `npm run test -- --coverage`

```bash
# Run all tests
npm run test

# Run E2E tests
npm run test:e2e

# Run tests in watch mode
npm run test:watch --workspace=client
```

## 🔧 Technology Stack

### Frontend
- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Router
- Axios

### Backend
- Node.js
- Express
- TypeScript
- Prisma ORM
- SQLite
- Zod (validation)

### Testing
- Vitest
- React Testing Library
- Playwright
- Supertest

### DevOps
- GitHub Actions
- ESLint + Prettier
- Husky + lint-staged

## 📚 Documentation

- [Architecture Overview](./docs/ARCHITECTURE.md)
- [API Documentation](./docs/API.md)
- [Setup Guide](./docs/SETUP.md)

## 🎯 Features

### Current (Phase 1)
- ✅ Project scaffolding with monorepo structure
- ✅ Design system implementation
- ✅ Header/Footer layout with responsive navigation
- ✅ Home page with hero section
- ✅ 404 page
- ✅ CI/CD pipeline setup
- ✅ Testing infrastructure

### Upcoming
- 🔄 Services catalog with detail pages (Phase 3)
- 🔄 About page with team section (Phase 3)
- 🔄 Testimonials carousel (Phase 3)
- 🔄 Contact form with map integration (Phase 3)
- 🔄 Appointment booking system (Phase 4)
- 🔄 Animation polish and accessibility audit (Phase 5)
- 🔄 Deployment configuration (Phase 6)

## 🌐 Deployment

Deployment configuration will be added in Phase 6. Recommended platforms:
- **Frontend:** Vercel / Netlify
- **Backend:** Railway / Render / Fly.io

## 📄 License

This is a portfolio project for demonstration purposes.

## 👨‍💻 Author

Built as a portfolio demonstration of full-stack engineering capabilities.

---

**Current Status:** Phase 1 Complete ✅  
**Next Phase:** Building core layout and Home page with design system
