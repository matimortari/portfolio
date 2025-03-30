import StackCard from "@/src/components/ui/StackCard"
import aboutData from "@/src/data/about.json"
import stackData from "@/src/data/stack.json"
import { motion } from "framer-motion"
import { useLocale } from "next-intl"
import { Merriweather } from "next/font/google"

const merriweather = Merriweather({ subsets: ["latin"], weight: "900" })

export default function Stack() {
	const locale = useLocale()

	const { stackTitle } = aboutData

	return (
		<section id="stack" className="flex-1 text-center md:text-start">
			<motion.h3
				initial={{ opacity: 0, y: -20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
				viewport={{ once: true }}
				className={`${merriweather.className} my-8`}
			>
				{stackTitle[locale]}
			</motion.h3>

			<div className="grid grid-cols-2 gap-4 md:gap-2">
				{stackData.map((item, index) => (
					<motion.div
						key={item.name}
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.1 * index }}
						viewport={{ once: true }}
					>
						<StackCard name={item.name} icon={item.icon} link={item.link} description={item.description} />
					</motion.div>
				))}
			</div>
		</section>
	)
}
