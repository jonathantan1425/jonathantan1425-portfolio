/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      turquoise: {
        50: "#effefb",
        100: "#c9fef7",
        200: "#93fcef",
        300: "#56f2e6",
        400: "#23ded5",
        500: "#0ac2bc",
        600: "#059c9b",
        700: "#097c7c",
        800: "#0c6263",
        900: "#0f5252",
        950: "#013032",
      },
      smoke: {
        50: "#f6f6f7",
        100: "#e2e3e5",
        200: "#c4c6cb",
        300: "#9fa1a9",
        400: "#7b7c86",
        500: "#60626c",
        600: "#4c4d55",
        700: "#3f3f46",
        800: "#35353a",
        900: "#2e2f33",
        950: "#18181b",
      },
    },
    screens: {
      xxs: "320px",
      xs: "480px",
      ...defaultTheme.screens,
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      dropShadow: {
        turquoise: "0 3px 3px rgba(35, 222, 213, 1)",
      },
    },
  },
  plugins: [require("daisyui")],
};
