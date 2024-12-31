import { Icon } from "@iconify/react"
import { useLocale, useTranslations } from "next-intl"
import Link from "next/link"

export default function ProjectCard({ title, description, skills, source, preview }: ProjectCardProps) {
	const t = useTranslations("Projects")
	const locale = useLocale()

	const currentDescription = description[locale]

	return (
		<div className="card-shadow flex h-80 flex-col items-center gap-2 rounded-lg p-6">
			<div className="flex flex-grow flex-col items-center gap-2">
				<strong className="font-serif text-2xl font-semibold">{title}</strong>
				<p className="max-w-sm overflow-hidden text-ellipsis text-sm">{currentDescription}</p>
			</div>

			<div className="flex max-w-sm flex-wrap items-center justify-center gap-1 text-center">
				{skills.map((skill, index) => (
					<p key={index} className="rounded-lg bg-accent px-2 py-1 text-xs font-medium">
						{skill}
					</p>
				))}
			</div>

			<hr className="w-full" />

			<div className="flex w-full flex-row items-center justify-center gap-8">
				<Link
					href={source}
					target="_blank"
					rel="noopener noreferrer"
					className="flex flex-row items-center justify-center gap-2 hover:underline"
				>
					<Icon icon="simple-icons:github" className="icon size-6" />
					<p className="text-sm font-medium">{t("source")}</p>
				</Link>

				<Link
					href={preview}
					target="_blank"
					rel="noopener noreferrer"
					className="flex flex-row items-center justify-center gap-2 hover:underline"
				>
					<Icon icon="bxs:navigation" className="icon size-6" />
					<p className="text-sm font-medium">{t("preview")}</p>
				</Link>
			</div>
		</div>
	)
}
