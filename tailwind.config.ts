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
        secondaryColorAgent: "var(--secondaryColorAgent)",
        secondaryColorCompany: "var(--secondaryColorCompany)",
        secondaryColorLight: "var(--secondaryColorLight)",
        white: "var(--white)",
      },
      keyframes: {
        underline: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        shine: {
          "0%, 100%": { opacity: "0.3", fill: "#ffffff" },
          "50%": { opacity: "1", fill: "#ffffff" },
        },
      },
      animation: {
        underline: "underline 0.3s ease-in-out",
        shine0: "shine 3s ease-in-out infinite",
        shine1: "shine 4s ease-in-out infinite",
        shine2: "shine 4s ease-in-out infinite",
        shine3: "shine 6s ease-in-out infinite",
        shine4: "shine 5s ease-in-out infinite",
      },
      boxShadow: {
        "custom-shadow": "-4px 6px 15px rgba(0, 0, 0, 0.5)", // Example shadow
      },
    },
  },
  plugins: [],
};
export default config;
