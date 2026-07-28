import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

/** Consistent max-width + gutter wrapper used across every section. */
export function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mx-auto w-full max-w-[1360px] px-5 md:px-8 lg:px-12", className)} {...props} />;
}
