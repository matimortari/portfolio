import { getRequestConfig } from "next-intl/server"
import { routing } from "./routing"

export default getRequestConfig(async ({ requestLocale }) => {
	let locale = await requestLocale

	if (!locale || !routing.locales.includes(locale as "en" | "pt")) {
		locale = routing.defaultLocale
	}

	return {
		locale: locale as "en" | "pt",
		messages: (await import(`../data/locales/${locale}.json`)).default
	}
})
