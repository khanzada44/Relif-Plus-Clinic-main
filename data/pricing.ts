import type { PricingTier } from "@/types";

export const pricingTiers = [
  {
    category: "Osteopathic Therapy",
    items: [
      { name: "Initial Assessment Membership", price: 160, unit: "45 min" },
      { name: "Treatment Follow-Up Membership", price: 0, unit: "30 min" },
      { name: "Osteopathy Initial Treatment", price: 125, unit: "45 min" },
      { name: "Osteopathy Extended Follow-Up", price: 110, unit: "40 min" },
      { name: "Osteopathy Follow-Up", price: 90, unit: "30 min" },
    ],
  },
  {
    category: "Acupuncture & TCM",
    items: [
      { name: "Free 15-Min Acupuncture Consult (In-Person)", price: 0, unit: "15 min" },
      { name: "Initial Assessment Acupuncture", price: 148, unit: "80 min" },
      { name: "Acupuncture – Follow Up", price: 120, unit: "60 min" },
      { name: "Tuina Massage + Guasha ", price: 135, unit: "60 min" },
      { name: "Tuina Massage + Guasha ", price: 220, unit: "90 min" },
      { name: "Tuina Massage + Guasha", price: 220, unit: "60 min" },
      { name: "Cosmetic Acupuncture – Initial", price: 160, unit: "60 min" },
      { name: "Cosmetic Acupuncture – Follow Up", price: 135, unit: "45 min" },
    ],
  },
  {
    category: "Cupping & Hijama",
    items: [
      { name: "Facial Cupping – Initial", price: 148, unit: "60 min" },
      { name: "Facial Cupping – Follow Up", price: 125, unit: "45 min" },
      { name: "Therapeutic Cupping (Fire & Moving Techniques)", price: 130, unit: "60 min" },
      { name: "Hijama (Wet Cupping)", price: 130, unit: "45 min" },
    ],
  },
  {
    category: "Massage ( Non RMT )",
    items: [
      { name: "Thai Oil Massage (Relaxation or Deep Pressure)", price: 100, unit: "60 min" },
      { name: "Thai Oil Massage (Relaxation or Deep Pressure)", price: 148, unit: "90 min" },
      { name: "Hot Stone Massage ", price: 120, unit: "60 min" },
      { name: "Hot Stone Massage ", price: 155, unit: "90 min" },
      { name: "Foot Massage", price: 80, unit: "45 min" },
      { name: "Foot Massage ", price: 100, unit: "60 min" },
      { name: "Herbal Compress Ball ", price: 110, unit: "75 min" },
      { name: "Herbal Compress Ball ", price: 145, unit: "105 min" },
      { name: "Aromatherapy ", price: 110, unit: "60 min" },
      { name: "Aromatherapy ", price: 145, unit: "90 min" },
      { name: "Brazilian Lymphatic Drainage Full Body ", price: 148, unit: "60 min" },
      { name: "Brazilian Lymphatic Drainage Full Body ", price: 235, unit: "90 min" },
      { name: "Brazilian Lymphatic Drainage – Full Legs", price: 80, unit: "30 min" },
      { name: "Head Massage ", price: 45, unit: "45 min" },
    ],
  },
  // NEW: Brazilian Lymphatic Drainage Packages
  {
    category: "Brazilian Lymphatic Drainage Packages",
    items: [
      {
        name: "Signature Lymphatic Package (3 Sessions)",
        price: 444,
        unit: "3 x 60 min",
        description: "Includes 1 complimentary 30-min relaxation massage. Most popular!"
      },
      {
        name: "Advanced Lymphatic Package (4 Sessions)",
        price: 555,
        unit: "4 x 60 min",
        description: "Includes 1 complimentary 45-min relaxation massage. Best value!"
      },
      {
        name: "Ultimate Lymphatic Package (5 Sessions)",
        price: 699,
        unit: "5 x 60 min",
        description: "Includes 1 complimentary 60-min relaxation massage. Full experience!"
      },
    ],
  },
];
