import { Icon } from "@iconify/react"
import { useTranslations } from "next-intl"
import { Merriweather } from "next/font/google"
import Link from "next/link"

const merriweather = Merriweather({ subsets: ["latin"], weight: "900" })

export default function About() {
	const t = useTranslations("About")

	return (
		<section id="about" className="flex-1 text-center md:text-start">
			<h3 className={`${merriweather.className} my-8`}>{t("title")}</h3>

			<div className="space-y-6">
				<p className="text-sm text-muted-foreground md:text-sm">{t("section1")}</p>
				<hr />
				<p className="text-sm text-muted-foreground md:text-sm">{t("section2")}</p>
				<hr />

				<div id="contact" className="flex flex-col items-center justify-center gap-4 text-sm md:items-start">
					<p className="flex flex-row items-center gap-2 font-semibold italic">
						<Icon icon="simple-icons:github" className="icon size-5" />
						{t("githubLabel")}
						<Link href="https://github.com/matimortari" className="text-secondary hover:underline">
							{t("github")}
						</Link>
					</p>
					<p className="flex flex-row items-center gap-2 font-semibold italic">
						<Icon icon="simple-icons:linkedin" className="icon size-5" />
						{t("linkedinLabel")}
						<Link href="https://linkedin.com/in/matheus-mortari-19rt" className="text-secondary hover:underline">
							{t("linkedin")}
						</Link>
					</p>
					<p className="flex flex-row items-center gap-2 font-semibold italic">
						<Icon icon="simple-icons:gmail" className="icon size-5" />
						{t("emailLabel")}
						<Link href="mailto:matheus.felipe.19rt@gmail.com" className="text-secondary hover:underline">
							{t("email")}
						</Link>
					</p>
				</div>

				<div className="my-4 flex flex-col items-center justify-center gap-4 md:flex-row md:justify-end">
					<Link href="/cv-pt.pdf" className="btn">
						{t("resumePortuguese")}
					</Link>
					<Link href="/cv-en.pdf" className="btn">
						{t("resumeEnglish")}
					</Link>
				</div>
			</div>
		</section>
	)
}
