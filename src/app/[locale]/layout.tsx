import { routing } from "@/src/i18n/routing"
import "@/src/styles/animations.css"
import "@/src/styles/globals.css"
import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import { notFound } from "next/navigation"

export const metadata: Metadata = {
	title: "Matheus Mortari",
	description: "My Portfolio",
	keywords: [
		"Matheus Mortari",
		"Matheus Mortari Portfolio",
		"Matheus Mortari Developer",
		"Matheus Mortari Full-Stack Developer",
		"Developer Portfolio",
		"Full-Stack Developer",
		"Full-Stack Developer Portfolio"
	],
	openGraph: {
		url: "https://matheus-mortari-dev-live.vercel.app/",
		images: "/cover.png",
		title: "Matheus Mortari",
		description: "My Portfolio",
		type: "website"
	},
	other: {
		"google-site-verification": "2j0bcfhh8FCYPpzFylzbiPjl3Pa0X7lMuG060ctsCsA"
	}
}

export default async function RootLayout({ children, params: { locale } }) {
	if (!routing.locales.includes(locale as any)) {
		notFound()
	}

	const messages = await getMessages()

	return (
		<html lang={locale} suppressHydrationWarning>
			<NextIntlClientProvider messages={messages} locale={locale}>
				<Analytics />
				<body>{children}</body>
			</NextIntlClientProvider>
		</html>
	)
}
