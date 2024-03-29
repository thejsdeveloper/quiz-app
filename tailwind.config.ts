import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "2.8xl": "46px",
        "1.75xl": "28px",
      },
      colors: {
        blue: {
          dark: "#13163D",
          DEFAULT: "#3B199C",
          gray: "#4950AE",
          light: "#8F95EE",
        },
        white: {
          DEFAULT: "#FFFFFF",
        },
        red: {
          DEFAULT: "#E24040",
        },
        green: {
          DEFAULT: "#44C651",
        },
        violet: {
          DEFAULT: "#8040FF",
        },
        sky: {
          DEFAULT: "#08BAFE",
        },
      },
    },
  },
  plugins: [nextui()],
};
export default config;
