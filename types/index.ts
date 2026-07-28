export interface Service {
  slug: string;
  category: string;
  title: string;
  shortDescription: string;
  description: string;
  duration: string;
  priceFrom: number;
  /** Optional per-duration price breakdown, shown instead of a single "From $X" price when present. */
  priceTiers?: { label: string; price: number }[];
  image: string;
  benefits: string[];
  featured?: boolean;
}

export interface Doctor {
  slug: string;
  name: string;
  pronouns?: string;
  credential: string;
  languages: string[];
  bio: string[];
  services: string[];
  image: string;
  note?: string;
}

export type GalleryCategory =
  | "Clinic"
  | "Rooms"
  | "Equipment"
  | "Doctors"
  | "Patients"
  | "Events";

export interface GalleryImage {
  id: string;
  category: GalleryCategory;
  image: string;
  caption: string;
}

export interface BeforeAfterItem {
  id: string;
  procedure: string;
  before: string;
  after: string;
  recoveryTime: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  image: string;
  rating: number;
  review: string;
  procedure: string;
  date: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
}

export type BlogBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: BlogBlock[];
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
}

export interface Offer {
  id: string;
  title: string;
  description: string;
  discount: string;
  validUntil: string;
  image: string;
  serviceSlug: string;
}

export interface PricingTier {
  category: string;
  items: { name: string; price: number; unit?: string }[];
}
