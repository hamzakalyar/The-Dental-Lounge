# Setup Guide

Complete setup instructions for local development.

## Prerequisites

Ensure you have the following installed:

- **Node.js:** >= 18.0.0 ([Download](https://nodejs.org/))
- **npm:** >= 9.0.0 (comes with Node.js)
- **Git:** For version control

Verify installations:
```bash
node --version  # Should be v18.0.0 or higher
npm --version   # Should be 9.0.0 or higher
```

## Initial Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd dental-clinic
```

### 2. Install Dependencies

From the root directory:

```bash
npm install
```

This installs dependencies for all workspaces (root, client, server, e2e).

### 3. Configure Environment Variables

#### Server Environment

```bash
cp server/.env.example server/.env
```

Edit `server/.env` if needed (defaults should work for local development):

```env
NODE_ENV=development
PORT=5000
DATABASE_URL="file:./dev.db"
CORS_ORIGIN=http://localhost:3000
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
EMAIL_SERVICE=mock
EMAIL_FROM=noreply@aestheticdental.com
```

#### Client Environment

```bash
cp client/.env.example client/.env
```

Edit `client/.env` if needed:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

### 4. Initialize the Database

Generate Prisma client and run migrations:

```bash
npm run db:migrate --workspace=server
```

Seed the database with sample data:

```bash
npm run db:seed --workspace=server
```

### 5. Set Up Git Hooks

Initialize Husky for pre-commit hooks:

```bash
npm run prepare
```

This will:
- Run ESLint on staged files
- Run Prettier on staged files
- Prevent commits with linting errors

## Running the Application

### Development Mode

Start both client and server concurrently:

```bash
npm run dev
```

This will start:
- **Client:** http://localhost:3000
- **Server:** http://localhost:5000
- **API:** http://localhost:5000/api

Or run them individually:

```bash
# Terminal 1 - Server
npm run dev:server

# Terminal 2 - Client
npm run dev:client
```

### Production Preview

Build and preview production builds:

```bash
# Build all workspaces
npm run build

# Preview client
npm run preview --workspace=client

# Start production server
npm run start --workspace=server
```

## Development Workflow

### Code Quality Checks

```bash
# Lint all workspaces
npm run lint

# Format all code
npm run format

# Type check all workspaces
npm run typecheck
```

### Running Tests

```bash
# Run all tests
npm run test

# Run tests in watch mode (client)
npm run test:watch --workspace=client

# Run tests with coverage
npm run test -- --coverage

# Run E2E tests
npm run test:e2e
```

### Database Management

```bash
# Open Prisma Studio (GUI for database)
npm run db:studio

# Create a new migration
npm run db:migrate --workspace=server

# Reset database (caution: deletes all data)
cd server
npx prisma migrate reset
```

### Working with Prisma

After modifying `server/prisma/schema.prisma`:

1. **Generate Prisma Client:**
   ```bash
   npm run db:generate --workspace=server
   ```

2. **Create Migration:**
   ```bash
   npm run db:migrate --workspace=server
   ```

3. **Apply Migration (Production):**
   ```bash
   cd server
   npx prisma migrate deploy
   ```

## IDE Setup

### VS Code (Recommended)

Install these extensions:

- **ESLint** (`dbaeumer.vscode-eslint`)
- **Prettier** (`esbenp.prettier-vscode`)
- **Tailwind CSS IntelliSense** (`bradlc.vscode-tailwindcss`)
- **Prisma** (`Prisma.prisma`)
- **TypeScript Vue Plugin** (for better TS support)

**Recommended Settings** (`.vscode/settings.json`):

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.tsdk": "node_modules/typescript/lib",
  "tailwindCSS.experimental.classRegex": [
    ["clsx\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ]
}
```

## Troubleshooting

### Port Already in Use

If ports 3000 or 5000 are already in use:

```bash
# Find process using port 3000 (client)
lsof -i :3000
kill -9 <PID>

# Find process using port 5000 (server)
lsof -i :5000
kill -9 <PID>
```

Or change ports in:
- Client: `client/vite.config.ts` (`server.port`)
- Server: `server/.env` (`PORT`)

### Prisma Client Not Generated

If you see "Cannot find module '@prisma/client'":

```bash
npm run db:generate --workspace=server
```

### TypeScript Errors After Dependency Update

```bash
# Clear TypeScript cache
rm -rf node_modules/.cache
rm -rf client/node_modules/.cache
rm -rf server/node_modules/.cache

# Reinstall
npm install
```

### Tests Failing

```bash
# Clear test cache
npm run test -- --clearCache

# Rebuild
npm run build
```

### Database Locked Error

If you get "database is locked" (SQLite):

```bash
# Kill any processes holding the database
cd server
rm prisma/dev.db-journal

# Restart dev server
npm run dev:server
```

## Environment-Specific Notes

### Windows

- Use Git Bash or WSL for best compatibility
- Paths use backslashes (`\`) — scripts handle this automatically
- If Husky hooks don't work, ensure Git Bash is your default shell

### macOS/Linux

- All scripts should work out of the box
- Ensure file permissions are correct after cloning

## Next Steps

After setup is complete:

1. **Verify everything works:**
   ```bash
   npm run dev
   ```
   Visit http://localhost:3000 and confirm the homepage loads

2. **Run the test suite:**
   ```bash
   npm run test
   npm run test:e2e
   ```

3. **Explore the codebase:**
   - Client: `client/src/`
   - Server: `server/src/`
   - Tests: `client/tests/`, `server/tests/`, `e2e/tests/`

4. **Read the documentation:**
   - [README.md](../README.md) - Project overview
   - [ARCHITECTURE.md](./ARCHITECTURE.md) - System design
   - [API.md](./API.md) - API documentation (coming in Phase 4)

## Getting Help

If you encounter issues:

1. Check this troubleshooting section
2. Review error messages carefully
3. Check the [GitHub Issues](link-to-issues) for known problems
4. Ensure all prerequisites are correctly installed

---

**Setup Version:** 1.0  
**Last Updated:** Phase 1
