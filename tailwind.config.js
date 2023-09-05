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
    "./node_modules/flowbite/**/*.{js,ts}",
    "./node_modules/@vueform/multiselect/**/*.vue",
    "./node_modules/@vueform/multiselect/**/*.{js,ts}",
  ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      borderRadius: {
        "43xl": "62px",
        "4xl": "2rem", // 32px
      },
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
        oswald: "Oswald",
        "roboto-condensed": "'Roboto Condensed'",
      },
      spacing: {
        18: "4.5rem",
      },
    },
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
  plugins: [require("flowbite/plugin")],
};
