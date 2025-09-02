import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
  modules: ["@nuxt/icon", "@nuxtjs/google-fonts", "@nuxtjs/i18n", "@vueuse/motion/nuxt"],
  imports: {
    dirs: ["lib", "lib/constants", "lib/locales"],
  },
  runtimeConfig: {
    public: {
      baseUrl: process.env.NUXT_PUBLIC_BASE_URL,
    },
  },
  css: ["~/assets/styles.css"],
  vite: {
    plugins: [
      tailwindcss(),
    ],
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
    clientBundle: {
      scan: true,
    },
  },
  compatibilityDate: "2025-05-24",
})
