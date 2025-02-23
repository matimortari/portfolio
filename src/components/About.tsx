import { Icon } from "@iconify/react"
import { useLocale } from "next-intl"
import { Merriweather } from "next/font/google"
import Link from "next/link"
import aboutData from "../data/about.json"

const merriweather = Merriweather({ subsets: ["latin"], weight: "900" })

export default function About() {
	const locale = useLocale()

	const {
		aboutTitle,
		aboutSection1,
		aboutSection2,
		githubLabel,
		github,
		linkedinLabel,
		linkedin,
		emailLabel,
		email,
		resumeEn,
		resumePt
	} = aboutData

	return (
		<section id="about" className="flex-1 text-center md:text-start">
			<h3 className={`${merriweather.className} my-8`}>{aboutTitle[locale]}</h3>

			<div className="space-y-6">
				<p className="text-sm text-muted-foreground md:text-sm">{aboutSection1[locale]}</p>
				<hr />
				<p className="text-sm text-muted-foreground md:text-sm">{aboutSection2[locale]}</p>
				<hr />

				<div id="contact" className="flex flex-col items-center justify-center gap-4 text-sm md:items-start">
					<p className="flex flex-row items-center gap-2 font-semibold italic">
						<Icon icon="simple-icons:github" width={20} height={20} className="scale" />
						{githubLabel}
						<Link href="https://github.com/matimortari" className="text-secondary hover:underline">
							{github}
						</Link>
					</p>
					<p className="flex flex-row items-center gap-2 font-semibold italic">
						<Icon icon="simple-icons:linkedin" width={20} height={20} className="scale" />
						{linkedinLabel}
						<Link href="https://linkedin.com/in/matheus-mortari-19rt" className="text-secondary hover:underline">
							{linkedin}
						</Link>
					</p>
					<p className="flex flex-row items-center gap-2 font-semibold italic">
						<Icon icon="simple-icons:gmail" width={20} height={20} className="scale" />
						{emailLabel}
						<Link href="mailto:matheus.felipe.19rt@gmail.com" className="text-secondary hover:underline">
							{email}
						</Link>
					</p>
				</div>

				<div className="my-4 flex flex-col items-center justify-center gap-4 md:flex-row md:justify-end">
					<Link href="https://matimortari.github.io/assets/cv-en.pdf" className="btn">
						<Icon icon="material-symbols:article-shortcut" width={25} height={25} className="scale" />
						{resumeEn[locale]}
					</Link>
					<Link href="https://matimortari.github.io/assets/cv-pt.pdf" className="btn">
						<Icon icon="material-symbols:article-shortcut" width={25} height={25} className="scale" />
						{resumePt[locale]}
					</Link>
				</div>
			</div>
		</section>
	)
}
