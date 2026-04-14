import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Elegantn\u00ed n\u00e1mo\u0159nick\u00e1 modr\u00e1
        navy: {
          50: "#f1f4f9",
          100: "#dde4ee",
          200: "#b8c6d9",
          300: "#8aa0bd",
          400: "#5d78a0",
          500: "#3f5a85",
          600: "#2f476c",
          700: "#253a5a",
          800: "#1c2e49",
          900: "#14233a",
          950: "#0d182a",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
