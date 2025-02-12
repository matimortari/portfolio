import { useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
	const t = useTranslations("Footer")

	return (
		<footer id="footer" className="footer-container">
			<Image src="/logo.png" alt="Logo" className="icon" width={50} height={50} />

			<div className="my-4 text-center text-xs text-muted-foreground">
				{t("iconCredits")}{" "}
				<Link href="https://iconify.design/" className="text-secondary hover:underline">
					{t("iconifyLinkText")}
				</Link>
				<p>{t("copyright")}</p>
			</div>
		</footer>
	)
}
