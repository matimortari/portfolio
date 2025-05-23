import { routing } from "@/src/lib/i18n/routing"
import { getRequestConfig } from "next-intl/server"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function loadTranslations(locale: "en" | "pt") {
  const modules = await Promise.all([
    import("../../json/navbar.json"),
    import("../../json/hero.json"),
    import("../../json/about.json"),
    import("../../json/projects.json")
  ])

  return {
    Navbar: modules[0].default,
    Hero: modules[1].default,
    About: modules[2].default,
    Projects: Object.fromEntries(modules[3].default.map((project: any, index: number) => [index, project]))
  }
}

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale

  if (!locale || !routing.locales.includes(locale as "en" | "pt")) {
    locale = routing.defaultLocale
  }

  const messages = await loadTranslations(locale as "en" | "pt")

  return {
    locale: locale as "en" | "pt",
    messages
  }
})
