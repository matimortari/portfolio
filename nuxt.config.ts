import { defineNuxtConfig } from "nuxt/config"

export default defineNuxtConfig({
  modules: [
    "@nuxtjs/google-fonts",
    "@nuxtjs/i18n",
    "@nuxt/icon",
    "@nuxtjs/tailwindcss",
    "@vueuse/motion/nuxt",
  ],
  srcDir: "src",
  googleFonts: {
    families: {
      Inter: true,
      Merriweather: true,
    },
    display: "swap",
    prefetch: true,
    preconnect: true,
  },
  i18n: {
    baseUrl: process.env.BASE_URL,
    restructureDir: "src/lib",
    vueI18n: "i18n.ts",
    detectBrowserLanguage: {
      useCookie: false,
      alwaysRedirect: true,
      redirectOn: "root",
      fallbackLocale: "en-US",
    },
  },
  tailwindcss: {
    cssPath: "~/styles/globals.css",
  },
  compatibilityDate: "2025-05-24",
})
