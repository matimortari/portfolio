import { Icon } from "@iconify/react"
import { useLocale } from "next-intl"
import Link from "next/link"

export default function StackCard({ name, icon, link, description }: Readonly<StackCardProps>) {
	const locale = useLocale()

	return (
		<div className="card flex flex-col items-center p-2 text-center">
			<Link href={link}>
				<Icon icon={icon} className="icon size-8 p-1 text-foreground" />
			</Link>
			<p className="p-1 font-semibold">{name}</p>
			<span className="text-xs text-muted-foreground">{description[locale]}</span>
		</div>
	)
}
