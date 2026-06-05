import "server-only";
import { z } from "zod";

// Server-side environment validation. NEVER import this from a Client Component.
// Vars are optional in Phase 1 so the app compiles before secrets are wired up;
// tighten (drop .optional()) as each phase makes a var required.
const serverEnvSchema = z.object({
  DATABASE_URL: z.string().url().optional(),

  // --- Phase: Auth ---
  JWT_SECRET: z.string().min(16).optional(),

  // --- Phase: Email ---
  RESEND_API_KEY: z.string().min(1).optional(),
});

export const serverEnv = serverEnvSchema.parse(process.env);
