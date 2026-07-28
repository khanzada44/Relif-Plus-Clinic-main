"use client";

import { useState, useMemo } from "react";
import type { Service } from "@/types";
import { RevealGroup, RevealItem } from "@/components/shared/reveal-group";
import { ServiceCard } from "@/components/sections/service-card";
import { cn } from "@/lib/utils";

export function ServicesFilter({ services, categories }: { services: Service[]; categories: string[] }) {
  const [active, setActive] = useState("All");
  const filtered = useMemo(
    () => (active === "All" ? services : services.filter((s) => s.category === active)),
    [active, services]
  );

  return (
    <>
      <div className="flex flex-wrap gap-3" role="tablist" aria-label="Filter services by category">
        {["All", ...categories].map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={active === cat}
            onClick={() => setActive(cat)}
            className={cn(
              "rounded-pill border px-5 py-2 text-sm transition-all duration-300 hover:scale-105 active:scale-95",
              active === cat ? "border-wine bg-wine text-ivory" : "border-charcoal/15 text-charcoal hover:border-wine/50"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <RevealGroup className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((service) => (
          <RevealItem key={service.slug}>
            <ServiceCard service={service} />
          </RevealItem>
        ))}
      </RevealGroup>
    </>
  );
}