import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", md: "2rem", lg: "3rem" },
      screens: { "2xl": "1360px" },
    },
    extend: {
      colors: {
        ivory: "#FAF5EF",
        champagne: "#EAD9CE",
        wine: {
          DEFAULT: "#7A2333",
          light: "#B9495C",
          dark: "#54141F",
        },
        gold: {
          DEFAULT: "#B8922F",
          light: "#D3AE5C",
          dark: "#8F701F",
        },
        charcoal: {
          DEFAULT: "#211A19",
          soft: "#33201F",
        },
        stone: "#7D6A62",
        border: "hsl(350 20% 89%)",
        input: "hsl(350 20% 89%)",
        ring: "#7A2333",
        background: "#FAF5EF",
        foreground: "#211A19",
        primary: { DEFAULT: "#7A2333", foreground: "#FAF5EF" },
        secondary: { DEFAULT: "#EAD9CE", foreground: "#211A19" },
        muted: { DEFAULT: "#F2E7DF", foreground: "#7D6A62" },
        accent: { DEFAULT: "#EAD9CE", foreground: "#211A19" },
        destructive: { DEFAULT: "#B3452F", foreground: "#FAF5EF" },
        card: { DEFAULT: "#FFFFFF", foreground: "#211A19" },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 6vw, 6rem)", { lineHeight: "1.02", letterSpacing: "-0.01em" }],
        "display-lg": ["clamp(2.5rem, 4.5vw, 4.25rem)", { lineHeight: "1.05", letterSpacing: "-0.01em" }],
        "display-md": ["clamp(2rem, 3vw, 2.75rem)", { lineHeight: "1.1" }],
        eyebrow: ["0.75rem", { lineHeight: "1", letterSpacing: "0.28em" }],
      },
      borderRadius: {
        lg: "1rem",
        xl: "1.5rem",
        "2xl": "2rem",
        pill: "999px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(33,29,26,0.04), 0 12px 32px -12px rgba(33,29,26,0.12)",
        lift: "0 24px 60px -20px rgba(33,29,26,0.25)",
      },
      transitionTimingFunction: {
        silk: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "draw-line": { from: { width: "0%" }, to: { width: "100%" } },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "ken-burns": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.06)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "draw-line": "draw-line 1s cubic-bezier(0.22,1,0.36,1) forwards",
        "fade-up": "fade-up 0.8s cubic-bezier(0.22,1,0.36,1) forwards",
        "accordion-down": "accordion-down 0.3s ease-out",
        "accordion-up": "accordion-up 0.3s ease-out",
        "ken-burns": "ken-burns 22s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
