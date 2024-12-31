import { useTranslations } from "next-intl"

export default function About() {
	const t = useTranslations("About")

	return (
		<section id="about">
			<strong className="title">{t("aboutMe")}</strong>

			<div className="grid max-w-xl grid-cols-1">
				<div>
					<p className="text-sm md:text-base">{t("section1")}</p>
					<hr />
				</div>
				<div>
					<p className="text-sm md:text-base">{t("section2")}</p>
					<hr />
				</div>
				<div>
					<p className="text-sm md:text-base">{t("section3")}</p>
					<hr />
				</div>
			</div>
		</section>
	)
}
