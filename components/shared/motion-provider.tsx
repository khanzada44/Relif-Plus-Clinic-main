"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Loads only the "domAnimation" feature slice of framer-motion (opacity/transform
 * animations + AnimatePresence) instead of the full animation engine, which the
 * app never uses drag or layout-animation features from. Paired with `m.*`
 * components (instead of `motion.*`) throughout the app.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
}
