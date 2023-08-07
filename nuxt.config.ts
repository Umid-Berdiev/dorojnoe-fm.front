// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  typescript: {
    shim: false,
  },

  modules: [
    // [
    //   "@nuxtjs/google-fonts",
    //   {
    //     families: {
    //       "Roboto Condensed": true,
    //       download: true,
    //       inject: true,
    //     },
    //   },
    // ],
    // [
    //   "@nuxtjs/google-fonts",
    //   {
    //     families: {
    //       Inter: true,
    //       download: true,
    //       inject: true,
    //     },
    //   },
    // ],
    "nuxt-swiper",
    // "@nuxtjs/google-fonts",
  ],
  css: ["~/assets/scss/main.scss"],
  plugins: [],
  components: [
    {
      global: true,
      path: "~/components",
      pathPrefix: false,
    },
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // buildModules: ["@nuxtjs/google-fonts"],
  // googleFonts: {
  //   families: {
  //     "Roboto Condensed": true,
  //     Inter: true,
  //   },
  //   download: true,
  //   inject: true,
  //   overwriting: true,
  // },
});
