"use client";

import dynamic from "next/dynamic";

// next/dynamic's `ssr: false` can only be called from within a Client
// Component — this thin wrapper exists solely so app/page.tsx (a Server
// Component) can defer ReviewPopup's JS to a post-hydration chunk.
export const ReviewPopupLazy = dynamic(() => import("./review-popup").then((mod) => mod.ReviewPopup), {
  ssr: false,
});
