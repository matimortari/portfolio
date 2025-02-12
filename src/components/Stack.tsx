import { useTranslations } from "next-intl"
import stackData from "../data/stackData.json"
import StackCard from "./ui/StackCard"

export default function Stack() {
	const t = useTranslations("Stack")

	return (
		<section id="stack" className="flex-1 text-center md:text-start">
			<h3 className="my-4">{t("title")}</h3>

			<div className="my-8 grid grid-cols-1 gap-4 md:grid-cols-3">
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
