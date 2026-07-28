import type { Metadata } from "next";
import { blogPosts, blogCategories } from "@/data/blog";
import { Container } from "@/components/shared/container";
import { PageHero } from "@/components/shared/page-hero";
import { BlogFilter } from "@/components/sections/blog-filter";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  title: "Health & Wellness Blog",
  description: "Educational articles about Acupuncture, Hijama, Osteopathic Therapy, Traditional Chinese Medicine, wellness, and self-care from Relief Plus Wellness, Toronto.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
      <PageHero
        eyebrow="Health & Wellness"
        title="Health & Wellness Blog"
        description="Educational information about acupuncture, Traditional Chinese Medicine, Wet Cupping (Hijama), Brazilian Lymphatic Drainage, osteopathic therapy, wellness treatments, and self-care practices from Relief Plus Wellness."
      />
      <section className="py-20 md:py-28">
        <Container>
          <BlogFilter posts={blogPosts} categories={blogCategories} />
        </Container>
      </section>
    </>
  );
}