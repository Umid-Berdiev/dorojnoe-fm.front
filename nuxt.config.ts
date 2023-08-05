// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  typescript: {
    shim: false,
  },

  modules: [],
  css: ["~/assets/scss/main.scss"],
  plugins: [],
  components: {
    global: true,
    dirs: ["~/components"],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  buildModules: ["@nuxtjs/google-fonts"],
  googleFonts: {
    display: "swap",
    families: {
      Inter: {
        wight: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
      "Roboto Condensed": {
        wight: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
    },
  },
});
