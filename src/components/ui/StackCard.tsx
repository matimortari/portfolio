import { Icon } from "@iconify/react"
import { useLocale } from "next-intl"
import { Merriweather } from "next/font/google"
import Link from "next/link"

const merriweather = Merriweather({ subsets: ["latin"], weight: "900" })

export default function StackCard({ name, icon, link, description }: Readonly<StackCardProps>) {
	const locale = useLocale()

	return (
		<div className="card flex flex-col items-center gap-2 p-2 text-center md:p-4">
			<Link href={link} title={link} target="_blank" rel="noopener noreferrer">
				<Icon icon={icon} className="icon size-6 text-foreground" />
			</Link>

			<h5 className={merriweather.className}>{name}</h5>

			<span className="text-xs text-muted-foreground">{description[locale]}</span>
		</div>
	)
}
