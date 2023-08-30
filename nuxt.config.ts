// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  typescript: {
    shim: false,
  },

  modules: ["nuxt-swiper", "nuxt-mapbox", "@nuxtjs/google-fonts"],
  css: ["~/assets/scss/main.scss"],
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
  mapbox: {
    accessToken:
      "pk.eyJ1Ijoiam9rZXI4MiIsImEiOiJjbGwyZzg5NHcwNzliM3BxczRsN2pyYjZ0In0.mIPLdKP71H6g3yhb-a-abQ",
  },
  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700],
      Montserrat: [400, 500, 600, 700, 900],
      Oswald: [400, 500, 600, 700],
      "Roboto Condensed": [400, 500, 600, 700],
    },
    display: "swap", // 'auto' | 'block' | 'swap' | 'fallback' | 'optional'
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE,
      apiPlayer: process.env.API_PLAYER,
      apiWs: process.env.API_WS,
    },
  },
  vite: {
    optimizeDeps: {
      include: ["@vueform/multiselect"],
    },
  },
  nitro: {
    preset: "cleavr",
  },
});
