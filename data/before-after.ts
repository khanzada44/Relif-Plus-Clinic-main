import type { BeforeAfterItem } from "@/types";

export const beforeAfterItems: BeforeAfterItem[] = [
  {
    id: "ba1",
    procedure: "Fractional Laser Resurfacing",
    before: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=900&q=60",
    after: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=900&q=80",
    recoveryTime: "5–7 days",
    description: "Texture and tone refinement across the cheeks and forehead after a single session.",
  },
  {
    id: "ba2",
    procedure: "Dermal Filler Contouring",
    before: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=900&q=60",
    after: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=900&q=80",
    recoveryTime: "Same day",
    description: "Subtle cheek and jawline contouring, restoring structure lost over time.",
  },
  {
    id: "ba3",
    procedure: "Non-Invasive Body Contouring",
    before: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=60",
    after: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=80",
    recoveryTime: "No downtime",
    description: "Gradual abdominal contouring visible over a three-month protocol.",
  },
  {
    id: "ba4",
    procedure: "Medical Microneedling with PRP",
    before: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=900&q=60",
    after: "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=900&q=80",
    recoveryTime: "2–3 days",
    description: "Improved firmness and reduced acne scarring after a three-session series.",
  },
];

export const procedureFilters = ["All", ...Array.from(new Set(beforeAfterItems.map((i) => i.procedure)))];
