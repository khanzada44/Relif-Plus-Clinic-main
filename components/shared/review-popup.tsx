"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { testimonials } from "@/data/reviews";
import { SITE } from "@/constants/site";
import { cn } from "@/lib/utils";

const ROTATE_MS = 7000;

export function ReviewPopup() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, ROTATE_MS);
    return () => clearInterval(interval);
  }, [visible]);

  const review = testimonials[index];
  if (dismissed || !review) return null;

  return (
    <>
      {/* <div
        className={cn(
          "fixed bottom-6 left-6 z-40 w-72 rounded-2xl border border-charcoal/10 bg-white p-4 shadow-lift transition-all duration-500",
          visible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0",
        )}
        role="status"
      >
        <button
          onClick={() => setDismissed(true)}
          aria-label="Dismiss"
          className="absolute right-2 top-2 rounded-full p-1 text-stone transition-colors hover:bg-champagne/40 hover:text-charcoal"
        >
          <X className="h-3.5 w-3.5" />
        </button>
        <a
          href={SITE.googleReviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-3 pr-4"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-champagne/60 font-display text-sm text-wine-dark">
            {review.name.charAt(0)}
          </div>
          <div>
            <p className="line-clamp-2 text-sm text-charcoal">
              {review.review}
            </p>
            <p className="mt-1.5 text-xs text-gold-dark" aria-hidden="true">
              ★★★★★
            </p>
            <p className="mt-0.5 text-xs font-medium text-stone">
              {review.name} · Google
            </p>
          </div>
        </a>
      </div> */}
      
    </>
  );
}
