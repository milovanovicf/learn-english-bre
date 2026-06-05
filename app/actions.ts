"use server";

// Server Actions live here (and in feature-scoped *.actions.ts files later).
//
// Phase 1: placeholder only. Real actions (auth, enrollment, course CRUD,
// writing-feedback) arrive in later phases. Each will validate input with Zod
// before touching the database.

/** Placeholder so this module is a valid "use server" entrypoint. */
export async function ping(): Promise<{ ok: true; at: string }> {
  return { ok: true, at: new Date().toISOString() };
}
