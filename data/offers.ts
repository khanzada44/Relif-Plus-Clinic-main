import type { Offer } from "@/types";

export const offers: Offer[] = [
  {
    id: "o1",
    title: "First Consultation, Complimentary",
    description: "New patients receive a full consultation and advanced skin analysis at no cost.",
    discount: "Complimentary",
    validUntil: "Ongoing",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
    serviceSlug: "advanced-skin-analysis",
  },
  {
    id: "o2",
    title: "Summer Radiance Package",
    description: "A three-session HydraFacial series priced as a single ritual.",
    discount: "Save 15%",
    validUntil: "August 31, 2026",
    image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?auto=format&fit=crop&w=1200&q=80",
    serviceSlug: "hydrafacial-signature",
  },
  {
    id: "o3",
    title: "Refer a Friend",
    description: "Both you and your referral receive $100 toward any injectable treatment.",
    discount: "$100 credit",
    validUntil: "Ongoing",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1200&q=80",
    serviceSlug: "botulinum-refinement",
  },
];
