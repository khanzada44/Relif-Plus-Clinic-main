export interface InsuranceProvider {
  name: string;
  logo: string;
}

export const insuranceLogoStripProviders: InsuranceProvider[] = [
  { name: "Blue Cross", logo: "/images/incurance/blue-cross.png" },
  { name: "Canada Life", logo: "/images/incurance/canada-life.png" },
  { name: "ClaimSecure", logo: "/images/incurance/claimsecure.png" },
  { name: "Desjardins", logo: "/images/incurance/desjardins.png" },
  { name: "Equitable", logo: "/images/incurance/equitable.png" },
  { name: "Green Shield", logo: "/images/incurance/green-shield.png" },
  { name: "Manulife", logo: "/images/incurance/manulife.png" },
  { name: "Sun Life", logo: "/images/incurance/sun-life.png" },
];