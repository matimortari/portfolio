import { Icon } from "@iconify/react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
	const t = useTranslations("Footer")

	return (
		<footer id="footer" className="card-shadow footer-container">
			<Image src="/logo.png" alt="Logo" className="icon" width={50} height={50} />

			<div className="m-4 flex justify-center gap-4 text-secondary">
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

			<div className="text-center text-xs">
				{t("iconCredits")}{" "}
				<Link href="https://iconify.design/" className="text-secondary hover:underline">
					{t("iconifyLinkText")}
				</Link>
				<p>{t("copyright")}</p>
			</div>
		</footer>
	)
}
