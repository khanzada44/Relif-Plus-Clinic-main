import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import Link from "next/link";
import { blogPosts, getPostBySlug } from "@/data/blog";
import { getServiceBySlug } from "@/data/services";
import { getLocalSeoPageBySlug } from "@/data/local-seo";
import { Container } from "@/components/shared/container";
import { Badge } from "@/components/ui/badge";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbSchema } from "@/lib/schema";

// Maps each post to the service/location pages that cover the same topic,
// so posts link into the commercial pages instead of being linking dead ends.
const BLOG_SERVICE_LINKS: Record<string, string[]> = {
  "what-conditions-do-people-seek-acupuncture-for": ["acupuncture"],
  "hijama-for-women-east-toronto": ["wet-cupping-hijama"],
  "foot-massage-what-to-expect": ["foot-massage"],
  "head-massage-what-to-expect": ["head-massage"],
  "hot-stone-therapy-what-to-know": ["hot-stone-therapy"],
  "facial-cupping-what-to-expect": ["facial-cupping"],
  "facial-acupuncture-what-to-know": ["cosmetic-acupuncture"],
  "acupuncture-vs-osteopathy": ["acupuncture", "osteopathic-therapy"],
  "wellness-massage-services-east-toronto": ["head-massage", "foot-massage", "hot-stone-therapy", "thai-oil-massage"],
  "tuina-oil-massage-gua-sha": ["tuina-massage-gua-sha"],
  "brazilian-lymphatic-drainage-what-to-know": ["brazilian-lymphatic-drainage"],
  // "aromatherapy-massage-toronto": ["aromatherapy-massage-toronto"],
  "dry-cupping-therapy-and-moving-cupping": ["cupping-therapy"],
  "faq-wet-cupping-hijama": ["wet-cupping-hijama"],
  "osteopathy-east-toronto-first-visit": ["osteopathic-therapy"],
  "acupuncture-east-toronto-first-visit": ["acupuncture"],
  
  "brazilian-lymphatic-drainage-massage-toronto": ["brazilian-lymphatic-drainage"],
  "brazilian-lymphatic-drainage-vs-manual-lymphatic-drainage": ["brazilian-lymphatic-drainage"],
  "preparing-for-brazilian-lymphatic-drainage-massage": ["brazilian-lymphatic-drainage"],
};

const BLOG_LOCAL_SEO_LINKS: Record<string, string[]> = {
  "hijama-for-women-east-toronto": ["hijama-east-toronto", "hijama-toronto"],
  "osteopathy-east-toronto-first-visit": ["osteopathic-therapy-east-toronto"],
  "acupuncture-east-toronto-first-visit": ["acupuncture-east-toronto"],
  "brazilian-lymphatic-drainage-what-to-know": [ "brazilian-lymphatic-drainage-east-york",],
  "aromatherapy-massage-toronto":["shiatsu-massage-east-york"]
  
};

function getRelatedLinksForPost(slug: string) {
  const services = (BLOG_SERVICE_LINKS[slug] ?? [])
    .map((s) => getServiceBySlug(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s))
    .map((s) => ({ href: `/services/${s.slug}`, label: s.title }));
  const locations = (BLOG_LOCAL_SEO_LINKS[slug] ?? [])
    .map((s) => getLocalSeoPageBySlug(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s))
    .map((s) => ({ href: `/${s.slug}`, label: `${s.serviceLabel} ${s.area}` }));
  return [...services, ...locations];
}

export function generateStaticParams() {
  console.log('Hello');
  
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.image,
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();
  const relatedLinks = getRelatedLinksForPost(post.slug);

  return (
    <article className="py-16 md:py-24">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />
      <Container className="max-w-3xl">
        <Badge variant="wine">{post.category}</Badge>
        <h1 className="mt-5 font-display text-display-lg text-charcoal">{post.title}</h1>
        <p className="mt-4 text-sm uppercase tracking-wide text-stone">
          {post.author} · {post.date} · {post.readTime}
        </p>

        <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-2xl">
          <Image src={post.image} alt={post.title} fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 768px" />
        </div>

        <div className="mt-10 space-y-5 text-base leading-relaxed text-charcoal">
          {post.content.map((block, i) => {
            if (block.type === "heading") {
              return (
                <h2 key={i} className="pt-4 font-display text-2xl text-charcoal">
                  {block.text}
                </h2>
              );
            }
            if (block.type === "list") {
              return (
                <ul key={i} className="space-y-2.5">
                  {block.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-stone">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-wine" />
                      {item}
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={i} className="text-stone">
                {block.text}
              </p>
            );
          })}
        </div>

        {relatedLinks.length > 0 && (
          <div className="mt-12 border-t border-charcoal/10 pt-8">
            <p className="font-display text-lg text-charcoal">Related Pages</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full border border-charcoal/10 px-4 py-1.5 text-sm text-wine-dark underline-offset-4 hover:underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </Container>
    </article>
  );
}