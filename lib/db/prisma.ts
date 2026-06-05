import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "./generated/client";

// Single PrismaClient instance, reused across hot-reloads in dev to avoid
// exhausting Neon connections. Uses the Neon serverless driver adapter.
const connectionString = process.env.DATABASE_URL ?? "";

const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient;
};

function createClient() {
  const adapter = new PrismaNeon({ connectionString });
  return new PrismaClient({ adapter });
}

export const prisma = globalForPrisma.prisma ?? createClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
