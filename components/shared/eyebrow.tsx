"use client";

import { m } from "framer-motion";
import { cn } from "@/lib/utils";

export function Eyebrow({ children, className = "text-wine", align = "left" }: { children: React.ReactNode; className?: string; align?: "left" | "center" }) {
  return (
    <m.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className={cn("flex items-center gap-3", align === "center" && "justify-center")}
    >
      <m.span
        variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }}
        style={{ transformOrigin: "left" }}
        className={cn("h-px w-8 shrink-0 bg-current/60", className)}
      />
      <m.span
        variants={{ hidden: { opacity: 0, x: -8 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.15 } } }}
        className={cn("text-eyebrow uppercase font-body font-semibold tracking-[0.28em]", className)}
      >
        {children}
      </m.span>
    </m.div>
  );
}
