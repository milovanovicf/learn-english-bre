import { defineConfig } from "prisma/config";

// Prisma 7 moves the datasource connection URL out of schema.prisma and into
// this config (used by CLI commands: migrate, db push, introspect).
// The runtime client connects via the Neon adapter in lib/db/prisma.ts.
// Empty fallback lets offline commands (e.g. `prisma generate`) run without a
// configured DATABASE_URL; migrate/db push require the real value in `.env`.
export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    url: process.env.DATABASE_URL ?? "",
  },
});
