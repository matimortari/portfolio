import { Icon } from "@iconify/react"
import stackData from "../data/stackData.json"
import { StackCardProps } from "../types/types"

export default function Stack() {
	return (
		<section id="stack">
			<strong className="title">Tech Stack</strong>

			<div className="grid max-w-xl grid-cols-2 gap-6 lg:grid-cols-3">
				{stackData.map((item: StackCardProps) => (
					<div key={item.name} className="card-shadow flex flex-col items-center rounded-lg p-2 text-center">
						<a href={item.link}>
							<Icon icon={item.icon} className="icon p-1 text-4xl text-foreground" />
						</a>

						<strong className="p-1 font-serif font-semibold">{item.name}</strong>
						<p className="text-xs">{item.description}</p>
					</div>
				))}
			</div>
		</section>
	)
}
