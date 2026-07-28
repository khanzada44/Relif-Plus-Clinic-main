if (typeof window !== "undefined") {
  throw new Error(
    "lib/env.ts reads server-only environment variables and must never be imported from a Client Component."
  );
}

/**
 * True only for the real production deployment. Vercel sets VERCEL_ENV to
 * "production" | "preview" | "development"; the NODE_ENV fallback covers
 * non-Vercel production builds (e.g. `next build && next start` elsewhere).
 * Used to keep preview/staging deployments out of search results.
 */
export const isProductionDeployment =
  process.env.VERCEL_ENV === "production" ||
  (!process.env.VERCEL_ENV && process.env.NODE_ENV === "production");
