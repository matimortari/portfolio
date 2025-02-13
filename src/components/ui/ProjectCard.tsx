import { Icon } from "@iconify/react"
import { useLocale } from "next-intl"
import { Merriweather } from "next/font/google"
import Image from "next/image"
import Link from "next/link"

const merriweather = Merriweather({ subsets: ["latin"], weight: "900" })

export default function ProjectCard({ title, description, image, skills, source, link }: Readonly<ProjectCardProps>) {
	const locale = useLocale()

	return (
		<div className="flex flex-col items-start gap-2 text-start">
			<Image src={image} alt={title} width={400} height={200} className="rounded-lg border" />

			<div className="my-1 flex flex-row items-center gap-4">
				<h4 className={merriweather.className}>{title}</h4>

				<div className="flex items-center gap-2">
					<Link href={source} target="_blank" rel="noopener noreferrer">
						<Icon icon="simple-icons:github" className="icon size-6" />
					</Link>
					<Link href={link} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold tracking-widest">
						<Icon icon="bxs:navigation" className="icon size-6" />
					</Link>
				</div>
			</div>

			<div className="flex max-w-md flex-wrap gap-1">
				{skills.map((skills) => (
					<span key={skills} className="text-primary-foreground rounded-full bg-accent px-2 py-1 text-xs font-semibold">
						{skills}
					</span>
				))}
			</div>

			<p className="max-w-md text-sm text-muted-foreground">{description[locale]}</p>
		</div>
	)
}
