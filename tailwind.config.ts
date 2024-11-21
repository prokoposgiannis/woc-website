import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryColor: "var(--primaryColor)",
        secondaryColor: "var(--secondaryColor)",
        secondaryColorLight: "var(--secondaryColorLight)",
        white: "var(--white)",
      },
      keyframes: {
        underline: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        underline: "underline 0.3s ease-in-out",
      },
      textShadow: {
        glow: "0 0 8px rgba(255, 255, 255, 0.8)", // Glow effect
      },
    },
  },
  plugins: [],
};
export default config;
