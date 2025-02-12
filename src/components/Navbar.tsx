"use client"

import { Icon } from "@iconify/react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Navbar() {
	const t = useTranslations("Navbar")

	const [scrolled, setScrolled] = useState(false)
	const [isClient, setIsClient] = useState(false)

	useEffect(() => {
		setIsClient(true)

		const handleScroll = () => {
			if (window.scrollY > 10) {
				setScrolled(true)
			} else {
				setScrolled(false)
			}
		}

		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	if (!isClient) {
		return null
	}

	return (
		<nav
			id="navbar"
			className={`fixed z-10 w-full rounded transition-colors duration-300 ${
				scrolled ? "bg-primary" : "bg-transparent"
			} `}
		>
			<div className="flex items-center justify-between px-4 py-2">
				<Image src="/logo.png" alt="Logo" className="icon" width={50} height={50} />

				<div className="flex flex-row items-center justify-center gap-4 font-bold text-foreground md:gap-6">
					<Link href="#about" className="hidden flex-row items-center justify-center gap-1 hover:underline md:flex">
						<Icon icon="material-symbols:person-pin-rounded" className="icon size-6" />
						<p>{t("aboutMe")}</p>
					</Link>

					<Link href="#footer" className="hidden flex-row items-center justify-center gap-1 hover:underline md:flex">
						<Icon icon="material-symbols:chat-paste-go" className="icon size-6" />
						<p>{t("contact")}</p>
					</Link>

					<div className="flex flex-row items-center gap-2 font-bold">
						<Link href="/en" className={`rounded-lg p-1 ${window.location.pathname === "/en" ? "bg-secondary" : ""}`}>
							EN
						</Link>
						<Link href="/pt" className={`rounded-lg p-1 ${window.location.pathname === "/pt" ? "bg-secondary" : ""}`}>
							PT
						</Link>
					</div>
				</div>
			</div>
		</nav>
	)
}
