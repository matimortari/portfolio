import { fileURLToPath } from "node:url"

export default defineNuxtConfig({
  modules: [
    "@nuxt/icon",
    "@nuxtjs/google-fonts",
    "@nuxtjs/i18n",
    "@nuxtjs/tailwindcss",
    "@vueuse/motion/nuxt",
  ],
  alias: {
    "#server": fileURLToPath(new URL("./server", import.meta.url)),
  },
  runtimeConfig: {
    public: {
      baseUrl: process.env.NUXT_PUBLIC_BASE_URL,
    },
  },
  googleFonts: {
    display: "swap",
    prefetch: true,
    preconnect: true,
    families: {
      Inter: true,
      Merriweather: true,
    },
  },
  i18n: {
    baseUrl: process.env.NUXT_PUBLIC_BASE_URL,
    restructureDir: "app/lib",
    vueI18n: "i18n.ts",
    detectBrowserLanguage: {
      useCookie: false,
      alwaysRedirect: true,
      redirectOn: "root",
      fallbackLocale: "en-US",
    },
  },
  tailwindcss: {
    cssPath: "~/assets/styles.css",
  },
  compatibilityDate: "2025-05-24",
})
