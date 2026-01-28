import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
  modules: [
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxtjs/i18n",
    "@vueuse/motion/nuxt",
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: {
    processCSSVariables: true,
    families: [
      { name: "Inter", provider: "google", weights: ["300 800"] },
      { name: "Merriweather Sans", provider: "google", weights: ["700"] },
    ],
  },
  css: ["~/assets/styles.css"],
  i18n: {
    restructureDir: "app/utils",
    baseUrl: process.env.NUXT_PUBLIC_BASE_URL,
    locales: [
      { code: "en-US", iso: "en-US", file: "en-US.json" },
      { code: "pt-BR", iso: "pt-BR", file: "pt-BR.json" },
    ],
    defaultLocale: "en-US",
    strategy: "no_prefix",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "nuxt-lang",
      alwaysRedirect: true,
      fallbackLocale: "en-US",
    },
  },
  icon: {
    mode: "svg",
    clientBundle: { scan: true },
  },
})
