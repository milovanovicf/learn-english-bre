import { NextResponse } from "next/server";
import { nowBelgrade } from "@/app/lib/datetime";

// Liveness probe. Does not touch the database in Phase 1.
export async function GET() {
  return NextResponse.json({
    status: "ok",
    service: "linguasrb",
    time: nowBelgrade().toISO(),
  });
}
