# Prisma Nest Template

Minimal Prisma setup based on `craktek_server`.

## Setup

```bash
pnpm install
cp .env.example .env
pnpm prisma:generate
pnpm prisma:migrate
pnpm prisma:seed
pnpm start:dev
```

## What is included

- Prisma 7 config in `prisma.config.ts`
- Folder-based schema at `prisma/schema`
- Generated client output at `prisma/generated/prisma`
- PostgreSQL adapter setup with `@prisma/adapter-pg`
- Minimal Nest `PrismaModule` and `PrismaService`
- Basic Nest app structure with root and health endpoints
- Generic example `User` model and seed

## Endpoints

- `GET /api` root status
- `GET /api/health` app and database health

Replace the example model with your app models, then run `pnpm prisma:migrate`.
