# A Boilerplate POS API

A clean, type-safe **Point-of-Sale (POS)** REST API built with modern TypeScript tools. Designed with maintainability, scalability, and best practices in mind.

## Features

- **TypeScript** — strong typing for safer & more maintainable code
- **Express** — lightweight & flexible web framework
- **Prisma ORM** — beautiful database modeling & type-safe queries
- **Better Auth** — secure authentication system and maintainable 
- **SQLite** — lightweight, zero-config database (great for dev & small/medium deployments)
- **Zod** — powerful schema validation & runtime type checking
- Clean Architecture — clear separation of concerns (controllers, services, routes)
- Centralized error handling
- Modular & easily extensible structure
- Development-friendly setup with hot-reload

## Tech Stack

| Layer            | Technology           |
|------------------|----------------------|
| Language         | TypeScript           |
| Framework        | Express              |
| Database         | SQLite               |
| ORM              | Prisma version 6     |
| Validation       | Zod                  |
| Runtime          | Node.js              |
| Dev server       | Nodemon + ts-node    |
| Package manager  | pnpm                 |
| Authentication   | better auth          |

## Project Structure
```

src/
├── controllers/       # Request/response handling
├── services/          # Business logic + database operations
├── routes/            # Feature-based route definitions
├── middlewares/       # Validation, error handling, auth, etc.
├── utils/             # Helper functions & shared utilities
├── schemas/           # Zod schemas for input validation
├── prisma/            # Prisma schema & migrations
│   └── schema.prisma
├── app.ts             # Express application setup
└── server.ts          # (optional) entry point if separated
```

## Quick Start

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd ******

# 2. Install dependencies
pnpm install

# 3. Create/update .env (if needed)
# You can usually use the default SQLite settings:
# DATABASE_URL="file:./dev.db"

# 4. Run Prisma migrations & generate client
npx prisma migrate dev --name init

# 5. Start development server (with hot reload)
pnpm dev

```
## Scripts

```bash
{
  "dev": "nodemon --watch 'src/**/*.ts' --exec 'node --loader ts-node/esm src/index.ts'",
  "test": "echo \"Error: no test specified\" && exit 1",
  "start": "npx nodemon",
  "build": "tsc",
  "prisma:generate": "prisma generate",
  "prisma:migrate": "prisma migrate dev",
  "prisma:studio": "prisma studio"
}

```
