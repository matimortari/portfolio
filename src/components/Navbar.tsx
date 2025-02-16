"use client"

import { Icon } from "@iconify/react"
import { useLocale } from "next-intl"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import navbarData from "../data/navbarData.json"

export default function Navbar() {
	const locale = useLocale()

	const { about, projects, contact } = navbarData

	const [isClient, setIsClient] = useState(false)

	useEffect(() => {
		setIsClient(true)
	}, [])

	if (!isClient) {
		return null
	}

	return (
		<nav className="fixed top-0 z-50 w-full rounded-lg px-6 py-2 backdrop-blur">
			<div className="flex flex-row items-center justify-between">
				<div className="flex flex-row items-center justify-center gap-10 font-bold text-foreground">
					<Image src="/logo.png" alt="Logo" className="icon" width={35} height={35} />

					<div className="flex flex-row items-center gap-4">
						<Link href="#about" className="hidden flex-row items-center justify-center gap-1 hover:underline md:flex">
							<Icon icon="material-symbols:person-pin-rounded" className="icon size-6" />
							<p>{about[locale]}</p>
						</Link>

						<Link
							href="#projects"
							className="hidden flex-row items-center justify-center gap-1 hover:underline md:flex"
						>
							<Icon icon="material-symbols:folder-code" className="icon size-6" />
							<p>{projects[locale]}</p>
						</Link>

						<Link href="#contact" className="hidden flex-row items-center justify-center gap-1 hover:underline md:flex">
							<Icon icon="material-symbols:chat-paste-go" className="icon size-6" />
							<p>{contact[locale]}</p>
						</Link>
					</div>
				</div>

				<div className="flex flex-row items-center gap-2 text-sm font-bold">
					<Link
						href="/en"
						title="English - US"
						className={`rounded-full p-2 ${window.location.pathname === "/en" ? "btn-round" : ""}`}
					>
						EN
					</Link>
					<Link
						href="/pt"
						title="Português - BR"
						className={`rounded-full p-2 ${window.location.pathname === "/pt" ? "btn-round" : ""}`}
					>
						PT
					</Link>
				</div>
			</div>
		</nav>
	)
}
