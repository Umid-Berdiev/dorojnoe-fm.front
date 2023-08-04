// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  typescript: {
    shim: false,
  },

  plugins: [
    // "/c:/projects/frontend/vue-projects/nuxt-projects/dorojnoe-fm.front/plugins/useBootstrap.client.ts",
  ],

  css: ["~/assets/scss/main.scss"],
});
