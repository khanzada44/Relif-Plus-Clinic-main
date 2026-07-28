"use client";

import { useEffect } from "react";
import { SITE } from "@/constants/site";

// Only catches errors thrown by the root layout itself (rare) — must render
// its own <html>/<body> since the layout that would normally provide them is
// what failed. Kept deliberately plain (inline styles, no shared components)
// for that reason.
export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body style={{ fontFamily: "sans-serif", textAlign: "center", padding: "4rem 1.5rem" }}>
        <h1 style={{ fontSize: "1.5rem" }}>Something went wrong</h1>
        <p style={{ marginTop: "1rem", color: "#555" }}>
          Please try again, or call us at {SITE.phone} if the problem continues.
        </p>
        <button
          onClick={() => reset()}
          style={{ marginTop: "1.5rem", padding: "0.75rem 1.5rem", cursor: "pointer" }}
        >
          Try Again
        </button>
      </body>
    </html>
  );
}
