import { Icon } from "@iconify/react"
import { useTranslations } from "next-intl"
import Link from "next/link"

export default function About() {
	const t = useTranslations("About")

	return (
		<section id="about" className="flex-1 text-center md:text-start">
			<h3 className="my-4">{t("title")}</h3>

			<div className="my-8 space-y-4">
				<p className="text-sm text-muted-foreground md:text-sm">{t("section1")}</p>
				<hr />

				<p className="text-sm text-muted-foreground md:text-sm">{t("section2")}</p>
				<hr />

				<div className="my-4 flex flex-col items-center justify-center gap-4 md:items-start">
					<div className="flex flex-col gap-2">
						<p className="flex flex-row items-center gap-2 font-medium italic">
							<Icon icon="simple-icons:github" className="icon size-5" />
							{t("githubLabel")}
							<Link href="https://github.com/matimortari" className="font-semibold text-secondary hover:underline">
								{t("github")}
							</Link>
						</p>

						<p className="flex flex-row items-center gap-2 font-medium italic">
							<Icon icon="simple-icons:linkedin" className="icon size-5" />
							{t("linkedinLabel")}
							<Link
								href="https://linkedin.com/in/matheus-mortari-19rt"
								className="font-semibold text-secondary hover:underline"
							>
								{t("linkedin")}
							</Link>
						</p>

						<p className="flex flex-row items-center gap-2 font-medium italic">
							<Icon icon="simple-icons:gmail" className="icon size-5" />
							{t("emailLabel")}
							<Link
								href="mailto:matheus.felipe.19rt@gmail.com"
								className="font-semibold text-secondary hover:underline"
							>
								{t("email")}
							</Link>
						</p>
					</div>
				</div>

				<div className="my-4 flex flex-col items-center justify-center gap-4 md:flex-row md:justify-end">
					<div className="flex flex-row gap-4">
						<Link href="/cv-pt.pdf" className="btn">
							{t("resumePortuguese")}
						</Link>

						<Link href="/cv-en.pdf" className="btn">
							{t("resumeEnglish")}
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}
