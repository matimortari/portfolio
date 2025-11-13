import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
  modules: [
    "@nuxt/icon",
    "@nuxt/fonts",
    "@nuxtjs/i18n",
    "@vueuse/motion/nuxt",
  ],
  imports: {
    dirs: ["lib/**"],
  },
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
    restructureDir: "app/lib",
    baseUrl: process.env.NUXT_PUBLIC_BASE_URL,
    locales: [
      { code: "en-US", language: "en-US", file: "en-US.json" },
      { code: "pt-BR", language: "pt-BR", file: "pt-BR.json" },
    ],
    defaultLocale: "en-US",
    strategy: "no_prefix",
    detectBrowserLanguage: {
      useCookie: false,
      cookieKey: "nuxt-lang",
      alwaysRedirect: true,
      redirectOn: "root",
      fallbackLocale: "en-US",
    },
  },

  icon: {
    mode: "svg",
    clientBundle: { scan: true },
  },
})
