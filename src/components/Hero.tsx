import { Icon } from "@iconify/react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
	const t = useTranslations("Hero")

	return (
		<div id="hero" className="card-shadow relative flex min-h-screen items-center justify-center">
			<div className="hero-background" />

			<div className="absolute inset-x-0 bottom-0 z-0 h-full overflow-hidden opacity-20">
				<Image src="/map.png" alt="Background" className="block size-full md:hidden" width={250} height={250} />

				<div className="hero-map scroll">
					<Image src="/map.png" alt="Background" className="hidden size-full md:block" width={800} height={800} />
					<Image src="/map.png" alt="Background" className="hidden size-full md:block" width={800} height={800} />
				</div>
			</div>

			<div className="relative flex flex-col items-center p-4 text-center">
				<Image src="/avatar.png" alt="@matimortari" className="float icon avatar" width={180} height={180} />

				<div className="flex flex-col items-center gap-2 p-6">
					<h1>{t("title")}</h1>
					<h2>{t("subtitle")}</h2>
				</div>

				<p className="max-w-lg text-lg text-muted-foreground">{t("description")}</p>

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
		</div>
	)
}
