import { Icon } from "@iconify/react"
import { useLocale } from "next-intl"
import { Merriweather } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import heroData from "../data/heroData.json"

const merriweather = Merriweather({ subsets: ["latin"], weight: "900" })

export default function Hero() {
	const locale = useLocale()

	const { title, subtitle, description } = heroData

	return (
		<section id="hero" className="relative flex min-h-screen items-center justify-center">
			<div className="hero-background" />

			<div className="hero-map scroll absolute inset-x-0 bottom-0 z-0 overflow-hidden opacity-20">
				<Image src="/map.png" alt="Background" className="hidden size-full md:block" width={800} height={800} />
				<Image src="/map.png" alt="Background" className="hidden size-full md:block" width={800} height={800} />
			</div>

			<div className="relative flex flex-col items-center gap-4 p-16">
				<Image src="/avatar.png" alt="@matimortari" className="float icon avatar" width={180} height={180} />

				<div className="my-4 flex flex-col gap-4 text-center md:gap-2">
					<h1 className={merriweather.className}>{title[locale]}</h1>
					<h2 className={merriweather.className}>{subtitle[locale]}</h2>
				</div>

				<p className="max-w-sm text-center font-medium text-muted-foreground">{description[locale]}</p>

				<div className="my-4 flex items-center justify-center gap-6 text-secondary">
					<Link href="https://github.com/matimortari">
						<Icon icon="simple-icons:github" className="icon size-6" />
					</Link>
					<Link href="https://linkedin.com/in/matheus-mortari-19rt">
						<Icon icon="simple-icons:linkedin" className="icon size-6" />
					</Link>
					<Link href="mailto:matheus.felipe.19rt@gmail.com">
						<Icon icon="simple-icons:gmail" className="icon size-6" />
					</Link>
				</div>
			</div>
		</section>
	)
}
