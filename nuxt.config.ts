import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  typescript: {
    shim: false,
  },

  modules: [
    "nuxt-swiper",
    "nuxt-mapbox",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
    "@vueuse/nuxt",
  ],
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
      Inter: [400, 500, 600, 700, 900],
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
    logLevel: "info",
    optimizeDeps: {
      include: ["@vueform/multiselect"],
    },
  },
  build: {
    transpile: ["@headlessui/vue", "@heroicons/vue"],
  },
  image: {
    densities: [1, 2],
    format: ["webp"],
    quality: 80,
    screens: {
      xs: 320,
      lg: 1024,
      xl: 1280,
    },
  },
});
