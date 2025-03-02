import { routing } from "@/src/i18n/routing"
import "@/src/styles/globals.css"
import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import { Inter } from "next/font/google"
import { notFound } from "next/navigation"

const inter = Inter({ subsets: ["latin"] })

type Params = Promise<{ locale: string }>

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
	const { locale } = await params

	const titles = {
		en: "Matheus Mortari — Full-Stack Developer",
		pt: "Matheus Mortari — Desenvolvedor Full-Stack"
	}

	const descriptions = {
		en: "Welcome to my website, where you can learn about my work. Feel free to explore and connect!",
		pt: "Bem-vindo ao meu site, onde você pode conhecer meu trabalho. Sinta-se à vontade para explorar e se conectar!"
	}

	return {
		title: titles[locale],
		description: descriptions[locale],
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
			url: "https://matheus-mortari-dev.vercel.app",
			title: titles[locale],
			description: descriptions[locale],
			type: "website",
			images: "/opengraph-image.png"
		},
		other: {
			"google-site-verification": "2j0bcfhh8FCYPpzFylzbiPjl3Pa0X7lMuG060ctsCsA"
		}
	}
}

export default async function RootLayout({
	children,
	params
}: {
	readonly children: React.ReactNode
	readonly params: Params
}) {
	const { locale } = await params

	if (!routing.locales.includes(locale as any)) {
		notFound()
	}

	const messages = await getMessages()

	return (
		<html lang={locale} suppressHydrationWarning>
			<NextIntlClientProvider messages={messages} locale={locale}>
				<Analytics />
				<body className={inter.className}>{children}</body>
			</NextIntlClientProvider>
		</html>
	)
}
