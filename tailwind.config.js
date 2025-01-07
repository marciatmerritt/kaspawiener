/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#70C7BA',
          50: '#E5F7F5', // Lightest
          100: '#CCEEEA', // Very light
          200: '#99DDD5', // Light
          300: '#70C7BA', // Base primary
          400: '#5CB7A9', // Slightly darker
          500: '#47A699', // Mid-tone
          600: '#399182', // Darker
          700: '#2C7467', // Even darker
          800: '#1E574D', // Very dark
          900: '#133D34', // Darkest
        },
      },
      fontFamily: {
        sans: ["'Inter Variable'", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};
