import defaultTheme from "tailwindcss/defaultTheme";
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#70C7BA",
          50: "#E5F7F5",
          100: "#CCEEEA",
          200: "#99DDD5",
          300: "#70C7BA",
          400: "#5CB7A9",
          500: "#47A699",
          600: "#399182",
          700: "#2C7467",
          800: "#1E574D",
          900: "#133D34",
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
