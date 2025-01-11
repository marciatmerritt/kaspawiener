import defaultTheme from "tailwindcss/defaultTheme";
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3A84C9",
          50: "#EAF4FC",
          100: "#D3E8F8",
          200: "#A6D2F2",
          300: "#7ABDED",
          400: "#539AD7",
          500: "#3A84C9",
          600: "#306DA8",
          700: "#245282",
          800: "#19385D",
          900: "#0F243D",
        },
      },
      fontFamily: {
        sans: ["'Inter Variable'", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [typography],
  darkMode: "class",
};
