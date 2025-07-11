import en from "./locales/en-US.json"
import br from "./locales/pt-BR.json"

export default defineI18nConfig(() => {
  const config = useRuntimeConfig()

  return {
    legacy: false,
    langDir: "./locales",
    messages: { "en-US": en, "pt-BR": br },
    baseUrl: config.public.baseUrl,
    locales: [
      {
        code: "en",
        iso: "en-US",
        isCatchallLocale: true,
      },
      {
        code: "br",
        iso: "pt-BR",
      },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "nuxt-lang",
      redirectOn: "root",
    },
  }
})
