import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./_components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "background-base": "#312442",

        "submenu-active": "#312442",
        "submenu-inactive": "#3D2D52",

        "details-active": "#F48F6B",
        "details-active-orange": "#E84A11",
        "details-inactive": "#FFFFFF",

        "details-enum": "#7E93A8",

        "background-details-inactive": "#3D2D52",
        "background-details-active": "#5C5380",

        h2: "#7E93A8",
        white: "#FFFFFF",
      },
      width: {
        "calc-full-plus-6": "calc(100% + 6px)",
      },
    },
    screens: {
      calculator: { max: "360px" },
      mobile: { min: "768px" },
      tablet: { min: "1024px" },
      laptop: { min: "1366px" },
      laptopmax: { max: "1366px" },
    },
  },
  plugins: [],
};
export default config;
