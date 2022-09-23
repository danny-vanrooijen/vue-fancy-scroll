/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: {
    files: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  },
  safelist: [],
  theme: {
    extend: {},
    screens: {
      sm: "768px",
      md: "1024px",
      xl: "1441px",
      "2xl": "1921px",
      mobile: { max: "767px" },
      tablet: { max: "1023px" },
      desktop: { max: "1440px" },
    },
    container: {
      center: true,
      screens: {
        DEFAULT: "100vw",
        md: "1440px",
      },
      padding: {
        DEFAULT: "1.5rem",
      },
    },
  },
};
