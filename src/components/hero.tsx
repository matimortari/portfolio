import hero from "@/src/data/hero.json"
import { Icon } from "@iconify/react"
import { motion } from "framer-motion"
import { useLocale } from "next-intl"
import { Merriweather } from "next/font/google"
import Image from "next/image"
import Link from "next/link"

const merriweather = Merriweather({ subsets: ["latin"], weight: "900" })

export default function Hero() {
	const locale = useLocale()

	const { title, subtitle, description } = hero

	return (
		<section id="hero" className="relative flex min-h-screen items-center justify-center">
			<div className="hero-background" />

			<div className="hero-map scroll absolute inset-x-0 bottom-0 z-0 overflow-hidden opacity-20">
				<Image src="/map.png" alt="" className="hidden size-full md:block" width={800} height={800} />
				<Image src="/map.png" alt="" className="hidden size-full md:block" width={800} height={800} />
			</div>

			<div className="relative flex flex-col items-center gap-4 p-16">
				<motion.div initial={{ opacity: 0, y: -40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
					<Image src="/avatar.png" alt="Avatar" priority={true} width={150} height={150} className="float avatar" />
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
					className="my-4 flex flex-col gap-4 text-center md:gap-2"
				>
					<h1 className={merriweather.className}>{title[locale]}</h1>
					<h2 className={merriweather.className}>{subtitle[locale]}</h2>
				</motion.div>

				<motion.p
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
					className="max-w-md text-center text-sm text-muted-foreground md:text-base"
				>
					{description[locale]}
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.6 }}
					className="my-4 flex flex-row items-center justify-center gap-4 text-secondary"
				>
					<Link href="https://github.com/matimortari" title="GitHub">
						<Icon icon="simple-icons:github" width={25} height={25} className="scale" />
					</Link>
					<Link href="https://linkedin.com/in/matheus-mortari-19rt" title="LinkedIn">
						<Icon icon="simple-icons:linkedin" width={25} height={25} className="scale" />
					</Link>
					<Link href="mailto:matheus.felipe.19rt@gmail.com" title="Email">
						<Icon icon="simple-icons:gmail" width={25} height={25} className="scale" />
					</Link>
				</motion.div>
			</div>
		</section>
	)
}
