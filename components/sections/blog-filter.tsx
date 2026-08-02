"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/types";
import { RevealGroup, RevealItem } from "@/components/shared/reveal-group";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function BlogFilter({ posts, categories }: { posts: BlogPost[]; categories: readonly string[] }) {
  const [active, setActive] = useState<string>("All");
  const filtered = useMemo(
    () => (active === "All" ? posts : posts.filter((p) => p.category === active)),
    [active, posts]
  );

  return (
    <>
      <div className="flex flex-wrap gap-3" role="tablist" aria-label="Filter articles by category">
        {categories.map((cat) => (
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

      <RevealGroup className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3">
        {filtered.map((post) => (
          <RevealItem key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="group block hover-lift">
             <div className="relative aspect-[4/4] overflow-hidden rounded-2xl">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-700 ease-silk group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
              <Badge variant="wine" className="mt-4">
                {post.category}
              </Badge>
              <h2 className="mt-3 font-display text-xl text-charcoal">{post.title}</h2>
              <p className="mt-2 text-sm text-stone">{post.excerpt}</p>
              <p className="mt-3 text-xs uppercase tracking-wide text-stone">
                {post.author} · {post.date} · {post.readTime}
              </p>
            </Link>
          </RevealItem>
        ))}
      </RevealGroup>
    </>
  );
}