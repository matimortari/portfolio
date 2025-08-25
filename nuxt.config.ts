import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
  modules: ["@nuxt/icon", "@nuxtjs/google-fonts", "@nuxtjs/i18n", "@vueuse/motion/nuxt"],
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
    baseUrl: process.env.NUXT_PUBLIC_BASE_URL,
    restructureDir: "app/lib",
    vueI18n: "i18n.ts",
    defaultLocale: "en-US",
    detectBrowserLanguage: {
      useCookie: false,
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
