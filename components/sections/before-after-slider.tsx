"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

export function BeforeAfterSlider({
  before,
  after,
  procedure,
  className,
}: {
  before: string;
  after: string;
  procedure: string;
  className?: string;
}) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("relative aspect-[4/5] w-full select-none overflow-hidden rounded-2xl bg-champagne/30", className)}
      onMouseMove={(e) => dragging.current && updatePosition(e.clientX)}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchMove={(e) => {
        const touch = e.touches[0];
        if (touch) updatePosition(touch.clientX);
      }}
      role="group"
      aria-label={`Before and after comparison for ${procedure}`}
    >
      <Image src={after} alt={`${procedure} — after`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
        <Image src={before} alt={`${procedure} — before`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
      </div>

      <span className="absolute left-3 top-3 rounded-pill bg-charcoal/70 px-3 py-1 text-xs uppercase tracking-wide text-ivory">Before</span>
      <span className="absolute right-3 top-3 rounded-pill bg-wine/90 px-3 py-1 text-xs uppercase tracking-wide text-ivory">After</span>

      <div
        className="absolute inset-y-0 z-10 flex w-1 -translate-x-1/2 cursor-ew-resize items-center justify-center bg-ivory"
        style={{ left: `${position}%` }}
        onMouseDown={() => (dragging.current = true)}
        onTouchStart={() => (dragging.current = true)}
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ivory shadow-lift">
          <MoveHorizontal className="h-4 w-4 text-charcoal" />
        </div>
      </div>
    </div>
  );
}
