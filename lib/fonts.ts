import { Fraunces, Manrope } from "next/font/google";

// Only weight 400 (normal + italic) of Fraunces is ever used across the
// codebase — h1-h4 render at font-normal by default and no element pairs
// font-display with font-light/font-medium. 300 and 500 were dead weight.
export const fontDisplay = Fraunces({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

export const fontBody = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});
