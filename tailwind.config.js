const colors = require("tailwindcss/colors");

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
  darkMode: "media", // or 'media' or 'class'
  theme: {
    // borderRadius: {
    //   none: "0",
    //   sm: "0.125rem" /* 2px */,
    //   default: "0.25rem" /* 4px */,
    //   md: "0.375rem" /* 6px */,
    //   lg: "0.5rem" /* 8px */,
    //   xl: "0.75rem" /* 12px */,
    //   "2xl": "1rem" /* 16px */,
    //   "3xl": "1.5rem" /* 24px */,
    //   full: "9999px",
    //   pill: "15.5rem",
    // },
    // colors: {
    //   transparent: "transparent",
    //   current: "currentColor",
    //   black: colors.black,
    //   white: colors.white,
    //   gray: colors.gray,
    //   emerald: colors.emerald,
    //   indigo: colors.indigo,
    //   yellow: colors.yellow,
    //   red: colors.red,
    //   inherit: "inherit",
    // },
    container: {
      center: true,
    },
    extend: {
      colors: {
        whitesmoke: "#eaeaef",
        firebrick: "#da3832",
        "main-black": "#222",
        "main-grey": "#a7a7a7",
        "main-white": "#fff",
        gainsboro: {
          100: "#dadbe2",
          200: "#dbdbdb",
        },
        gray2: "#162826",
        "main-bg-light": "#f8f8fa",
        black: "#0a0a0a",
        gray: colors.gray,
      },
      fontFamily: {
        inter: "Inter",
        montserrat: "Montserrat",
        "roboto-condensed": "'Roboto Condensed'",
      },
      borderRadius: {
        "43xl": "62px",
        "4xl": "2rem", // 32px
      },
      spacing: {
        18: "4.5rem",
      },
    },
    // fontSize: {
    //   sm: "1rem",
    //   base: "1.14rem",
    //   xs: "0.86rem",
    //   "5xl": "1.71rem",
    // },
    fontSize: {
      xs: "0.625rem",
      sm: "0.75rem",
      base: ".875rem",
      lg: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
