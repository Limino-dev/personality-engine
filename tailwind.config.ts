import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        stage: "#2A2A2D",
        primary: "#6F68AC",
        "primary-light": "#B0A9DA",
        "primary-deep": "#46406E",
        "primary-mid": "#57518C",
        "page-cream": "#FBFAF8",
        "block-grey": "#F2F1EF",
      },
      transitionTimingFunction: {
        slide: "cubic-bezier(.22,.61,.36,1)",
      },
    },
  },
  plugins: [],
};

export default config;
