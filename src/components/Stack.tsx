import { useLocale } from "next-intl"
import { Merriweather } from "next/font/google"
import aboutData from "../data/aboutData.json"
import stackData from "../data/stackData.json"
import StackCard from "./ui/StackCard"

const merriweather = Merriweather({ subsets: ["latin"], weight: "900" })

export default function Stack() {
	const locale = useLocale()

	const { stackTitle } = aboutData

	return (
		<section id="stack" className="flex-1 text-center md:text-start">
			<h3 className={`${merriweather.className} my-8`}>{stackTitle[locale]}</h3>

			<div className="grid grid-cols-2 gap-4 md:gap-2">
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
