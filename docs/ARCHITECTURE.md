# Architecture Overview

## System Design

This project follows a **monorepo architecture** with clear separation between client, server, and testing concerns.

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────┐
│                       Client (React)                     │
│  ┌──────────────────────────────────────────────────┐  │
│  │  Pages → Components → Hooks → Services (API)     │  │
│  └──────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
                           ↓ HTTP/REST
┌─────────────────────────────────────────────────────────┐
│                    Server (Express)                      │
│  ┌──────────────────────────────────────────────────┐  │
│  │  Routes → Controllers → Services → Prisma        │  │
│  └──────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
                           ↓ SQL
┌─────────────────────────────────────────────────────────┐
│                   Database (SQLite)                      │
│      Services | Appointments | Contact | Testimonials   │
└─────────────────────────────────────────────────────────┘
```

## Frontend Architecture

### Component Organization

Components are organized by **feature domain** rather than technical type:

```
components/
├── common/       # Reusable UI primitives (Button, Input, Card, Modal)
├── layout/       # App shell components (Header, Footer, Nav)
├── home/         # Home page specific components
├── services/     # Service catalog components
├── booking/      # Appointment booking flow
├── about/        # About page components
└── contact/      # Contact form components
```

**Rationale:** This makes it easier to find related components and reduces coupling between unrelated features.

### State Management

- **Local State:** React `useState` for component-local UI state
- **Context API:** For cross-cutting concerns (Toast notifications, Theme)
- **URL State:** React Router for navigation and route parameters
- **Server State:** API calls via axios (no heavy state management library needed for this scope)

**Decision:** We deliberately avoid Redux/Zustand/Jotai because this application has minimal shared client state. Most data flows one-way from the server, and React's built-in tools are sufficient.

### Styling Strategy

- **Tailwind CSS** for utility-first styling
- **CSS Variables** for design tokens (defined in `global.css`)
- **Framer Motion** for animations
- **No CSS modules or styled-components** — Tailwind's utility classes provide sufficient scoping

**Benefits:**
- Design system consistency enforced through Tailwind config
- Fast development without context-switching between files
- Easy to maintain responsive breakpoints

## Backend Architecture

### Layered Architecture

```
Request → Middleware → Routes → Controllers → Services → Prisma → Database
```

**Layer Responsibilities:**

1. **Middleware:** Cross-cutting concerns (auth, rate limiting, error handling, logging)
2. **Routes:** HTTP verb mapping, input validation (express-validator)
3. **Controllers:** Request/response handling, calling services, error marshalling
4. **Services:** Business logic, orchestration, transaction boundaries
5. **Prisma:** Type-safe database queries, migrations

**Why this matters:**
- Controllers stay thin (just HTTP concerns)
- Services are unit-testable without Express mocks
- Clear separation of HTTP layer from business logic

### Database Schema Design

See [`server/prisma/schema.prisma`](../server/prisma/schema.prisma) for the full schema.

**Key Tables:**
- `Service` - Dental services catalog
- `Appointment` - Booking requests with status workflow
- `ContactSubmission` - General contact form messages
- `Testimonial` - Patient reviews

**Design Decisions:**
- `cuid()` for IDs (URL-safe, sortable, collision-resistant)
- Indexed fields for common queries (email, status, date)
- Soft relationships (appointments reference services via foreign key)
- No soft deletes (not needed for this scope)

## API Design

RESTful conventions:

```
GET    /api/services           - List all services
GET    /api/services/:slug     - Get service by slug
POST   /api/appointments       - Create appointment
GET    /api/appointments       - List appointments (admin only, future)
POST   /api/contact            - Submit contact form
GET    /api/testimonials       - List published testimonials
```

**Response Format:**

```json
{
  "status": "success" | "error",
  "data": { ... },      // on success
  "message": "...",     // on error
  "errors": [ ... ]     // validation errors
}
```

## Security Considerations

### Implemented
- Helmet.js for HTTP security headers
- CORS configuration
- Rate limiting (per-IP)
- Input validation (express-validator + Zod)
- Parameterized queries (Prisma protects against SQL injection)

### Future (if production)
- HTTPS enforcement
- CSRF tokens for forms
- Content Security Policy tuning
- Admin authentication (JWT or session-based)

## Performance Optimizations

### Client
- Code splitting by route (React.lazy)
- Image lazy loading
- Preconnect to Google Fonts
- Vite's built-in tree-shaking and minification

### Server
- Database indexes on high-cardinality fields
- Connection pooling (Prisma default)
- Rate limiting to prevent abuse

### Future
- CDN for static assets
- Image optimization service (Cloudinary/imgix)
- Response caching for read-heavy endpoints

## Testing Strategy

### Test Pyramid

```
      /\
     /E2E\          ← Few, critical user journeys (Playwright)
    /──────\
   /Integr \        ← API endpoint tests (Supertest)
  /─────────\
 /   Unit    \      ← Many, fast tests for logic (Vitest)
/─────────────\
```

**Coverage Goals:**
- **Unit:** Utilities, validators, business logic → 80%+
- **Integration:** All API endpoints, especially mutation paths → 100%
- **E2E:** Booking flow, navigation, responsive behavior → Critical paths only

## Build & Deployment

### Development
```bash
npm run dev  # Concurrently runs client (3000) + server (5000)
```

### Production Build
```bash
npm run build  # Builds both workspaces
```

**Client Output:** `client/dist/` (static files for CDN/Netlify/Vercel)  
**Server Output:** `server/dist/` (Node.js-compatible JS)

### Deployment Strategy (Phase 6)

**Option 1: Separate Deployments (Recommended)**
- Frontend → Vercel/Netlify (automatic from `main` branch)
- Backend → Railway/Render/Fly.io (Dockerfile or Node.js buildpack)
- Database → Hosted SQLite (Turso) or migrate to PostgreSQL

**Option 2: Single VPS**
- Docker Compose with Nginx reverse proxy
- Client served as static files via Nginx
- Server runs as Node.js process (PM2)

## Design System

See [README.md](../README.md#-design-system) for color palette and typography.

### Design Tokens

Defined in [`client/tailwind.config.js`](../client/tailwind.config.js) and [`client/src/styles/global.css`](../client/src/styles/global.css).

**Why both?**
- Tailwind config: Compile-time values for Tailwind classes
- CSS variables: Runtime values for non-Tailwind styles (Framer Motion, dynamic theming)

## Key Decisions & Trade-offs

### SQLite vs. PostgreSQL
**Chose:** SQLite  
**Rationale:** Simplifies local development, sufficient for portfolio scope, easy to migrate to Postgres later via Prisma  
**Trade-off:** Not suitable for high-concurrency production (but that's out of scope)

### Prisma vs. Raw SQL / Query Builder
**Chose:** Prisma  
**Rationale:** Type safety, auto-generated migrations, excellent DX, demonstrates modern ORM knowledge  
**Trade-off:** Extra abstraction layer (acceptable for this project scale)

### Monorepo vs. Separate Repos
**Chose:** Monorepo  
**Rationale:** Shared dependencies, single CI/CD pipeline, easier to keep client/server types in sync  
**Trade-off:** Slightly more complex initial setup

### Framer Motion vs. CSS Animations
**Chose:** Framer Motion  
**Rationale:** Better control, easier orchestration, built-in accessibility (respects `prefers-reduced-motion`)  
**Trade-off:** Adds ~30KB to bundle (acceptable for this use case)

## Future Improvements

If scaling beyond portfolio scope:

1. **Server:** Migrate to PostgreSQL, add Redis caching, implement background job queue
2. **Client:** Add Suspense boundaries, virtualize long lists, implement service worker for offline support
3. **DevOps:** Add staging environment, implement blue-green deployments, add monitoring (Sentry, DataDog)
4. **Features:** Admin dashboard, patient portal, email reminders, SMS notifications

---

**Document Version:** 1.0  
**Last Updated:** Phase 1 (Initial Scaffolding)
