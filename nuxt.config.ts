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
});
