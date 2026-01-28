import en from "~/utils/locales/en-US.json"
import br from "~/utils/locales/pt-BR.json"

export default defineI18nConfig(() => {
  return {
    legacy: false,
    langDir: "./locales",
    messages: { "en-US": en, "pt-BR": br },
    locales: [
      { code: "en-US", iso: "en-US" },
      { code: "pt-BR", iso: "pt-BR" },
    ],
  }
})
