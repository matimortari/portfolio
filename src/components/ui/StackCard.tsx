import { Icon } from "@iconify/react"
import { useLocale } from "next-intl"
import Link from "next/link"

export default function StackCard({ name, icon, link, description }: StackCardProps) {
	const locale = useLocale()

	const currentDescription = description[locale]

	return (
		<div className="card-shadow flex flex-col items-center rounded-lg p-2 text-center">
			<Link href={link}>
				<Icon icon={icon} className="icon size-8 p-1 text-foreground" />
			</Link>
			<p className="p-1 font-serif font-semibold">{name}</p>
			<p className="text-xs">{currentDescription}</p>
		</div>
	)
}
