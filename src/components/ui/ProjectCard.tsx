import { Icon } from "@iconify/react"
import { useLocale, useTranslations } from "next-intl"
import Link from "next/link"

export default function ProjectCard({ title, description, skills, source, link }: Readonly<ProjectCardProps>) {
	const t = useTranslations("Projects")
	const locale = useLocale()

	return (
		<div className="card w-full max-w-lg">
			<header className="flex flex-col gap-4 text-center md:text-start">
				<h4>{title}</h4>
				<p className="h-20 overflow-hidden text-ellipsis text-sm text-muted-foreground">{description[locale]}</p>
			</header>

			<div className="my-4 flex flex-wrap gap-1">
				{skills.map((skill) => (
					<span key={skill} className="rounded-full bg-accent px-2 py-1 text-xs font-medium">
						{skill}
					</span>
				))}
			</div>

			<div className="flex w-full flex-row items-center justify-end gap-4">
				<Link href={source} target="_blank" rel="noopener noreferrer" className="btn">
					<Icon icon="simple-icons:github" className="icon size-5" />
					{t("source")}
				</Link>

				<Link href={link} target="_blank" rel="noopener noreferrer" className="btn">
					<Icon icon="bxs:navigation" className="icon size-5" />
					{t("link")}
				</Link>
			</div>
		</div>
	)
}
