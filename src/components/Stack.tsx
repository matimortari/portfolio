import { useTranslations } from "next-intl"
import stackData from "../data/stackData.json"
import StackCard from "./ui/StackCard"

export default function Stack() {
	const t = useTranslations("Stack")

	return (
		<section id="stack">
			<p className="title">{t("title")}</p>

			<div className="grid max-w-xl grid-cols-2 gap-6 lg:grid-cols-3">
				{stackData.map((item) => (
					<StackCard
						key={item.name}
						name={item.name}
						icon={item.icon}
						link={item.link}
						description={item.description}
					/>
				))}
			</div>
		</section>
	)
}
