# A Boilerplate POS API

A clean, type-safe **Point-of-Sale (POS)** REST API built with modern TypeScript tools. Designed with maintainability, scalability, and best practices in mind.

## Features

- **TypeScript** — strong typing for safer & more maintainable code
- **Express** — lightweight & flexible web framework
- **JWT** — A proposed standard for creating data with optional signature or encryption payload holds JSON
- **MySQL or PostgreSQL** — greate choice database (for dev & prod deployments)
- Clean Architecture — clear separation of concerns (controllers, services, routes)
- Centralized error handling
- Modular & easily extensible structure
- Development-friendly setup with hot-reload

## Tech Stack

| Layer           | Technology        |
| --------------- | ----------------- |
| Language        | TypeScript        |
| Framework       | Express           |
| Database        | MySQL             |
| Runtime         | Node.js           |
| Dev server      | Nodemon + ts-node |
| Package manager | pnpm              |
| Authentication  | JWT               |

## Project Structure

```

src/
├── repositories/       # Request/response handling
├── controllers/       # Request/response handling
├── services/          # Business logic + database operations
├── routes/            # Feature-based route definitions
├── middlewares/       # Validation, error handling, auth, etc.
├── utils/             # Helper functions & shared utilities
├── config/            # Database Configurations & mores.
├── database/          # scripts seed, migrate, create_table & add data
│   └── db_schema.sql  # write database table here
|   └── migrate.ts
|   └── seed.ts
|   └── seeds          # Folder for seeds data to database
└── server.ts          # (optional) entry point if separated
```

## Quick Start

```bash
# clone the repository
git clone <https://github.com/ChungsiangRoeurn/pos-api-boilerplate>
cd pos-api-boilerplate

# install dependencies
pnpm install

# run migrations to get table from database to your local
pnpm migrate

# run seed to get all data from set script files
pnpm seed

# start development server (with hot reload)
pnpm dev

```

## Scripts

```bash
{
  "dev": "nodemon --watch 'src/**/*.ts' --exec 'node --loader ts-node/esm src/server.ts'",
  "test": "echo \"Error: no test specified\" && exit 1",
  "start": "npx nodemon",
  "build": "tsc",
  "migrate": "ts-node src/database/migrate.ts",
  "seed": "ts-node src/database/seed.ts"
}

```
