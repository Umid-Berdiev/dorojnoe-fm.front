const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderRadius: {
      none: "0",
      sm: "0.125rem" /* 2px */,
      default: "0.25rem" /* 4px */,
      md: "0.375rem" /* 6px */,
      lg: "0.5rem" /* 8px */,
      xl: "0.75rem" /* 12px */,
      "2xl": "1rem" /* 16px */,
      "3xl": "1.5rem" /* 24px */,
      full: "9999px",
      pill: "15.5rem",
    },
    colors: {
      primary: "#DA3832",
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      red: colors.red,
      inherit: "inherit",
    },
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        roboto: ["Roboto Condensed", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
