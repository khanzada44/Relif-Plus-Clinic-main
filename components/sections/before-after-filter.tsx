"use client";

import { useState, useMemo } from "react";
import type { BeforeAfterItem } from "@/types";
import { RevealGroup, RevealItem } from "@/components/shared/reveal-group";
import { BeforeAfterSlider } from "@/components/sections/before-after-slider";
import { cn } from "@/lib/utils";

export function BeforeAfterFilter({ items, procedures }: { items: BeforeAfterItem[]; procedures: string[] }) {
  const [active, setActive] = useState("All");
  const filtered = useMemo(
    () => (active === "All" ? items : items.filter((i) => i.procedure === active)),
    [active, items]
  );

  return (
    <>
      <div className="flex flex-wrap gap-3" role="tablist" aria-label="Filter by procedure">
        {procedures.map((proc) => (
          <button
            key={proc}
            role="tab"
            aria-selected={active === proc}
            onClick={() => setActive(proc)}
            className={cn(
              "rounded-pill border px-5 py-2 text-sm transition-all duration-300 hover:scale-105 active:scale-95",
              active === proc ? "border-wine bg-wine text-ivory" : "border-charcoal/15 text-charcoal hover:border-wine/50"
            )}
          >
            {proc}
          </button>
        ))}
      </div>

      <RevealGroup className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2">
        {filtered.map((item) => (
          <RevealItem key={item.id}>
            <BeforeAfterSlider before={item.before} after={item.after} procedure={item.procedure} />
            <h2 className="mt-4 font-display text-lg text-charcoal">{item.procedure}</h2>
            <p className="mt-1 text-sm text-stone">{item.description}</p>
            <p className="mt-1 text-xs uppercase tracking-wide text-wine-dark">Recovery: {item.recoveryTime}</p>
          </RevealItem>
        ))}
      </RevealGroup>
    </>
  );
}
