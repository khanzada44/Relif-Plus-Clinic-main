"use client";

import { createContext, useContext, useRef } from "react";
import { m, useInView } from "framer-motion";
import type { ReactNode } from "react";

const RevealContext = createContext(false);

export function RevealGroup({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className={className}>
      <RevealContext.Provider value={inView}>{children}</RevealContext.Provider>
    </div>
  );
}

export function RevealItem({ children, className }: { children: ReactNode; className?: string }) {
  const inView = useContext(RevealContext);

  return (
    <m.div
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </m.div>
  );
}