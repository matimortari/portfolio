import { useTranslations } from "next-intl"
import Link from "next/link"

export default function About() {
	const t = useTranslations("About")

	return (
		<section id="about">
			<p className="title">{t("title")}</p>

			<div className="grid max-w-xl grid-cols-1">
				<div>
					<p className="text-sm md:text-sm">{t("section1")}</p>
					<hr />
				</div>

				<div>
					<p className="text-sm md:text-sm">{t("section2")}</p>
					<hr />
				</div>

				<div>
					<p className="text-sm md:text-sm">{t("section3")}</p>
					<hr />
				</div>
			</div>

			<div className="flex flex-col items-center gap-4">
				<p className="font-serif text-xl font-semibold">{t("resume")}</p>

				<div className="flex flex-row gap-8">
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
