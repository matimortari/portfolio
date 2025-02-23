"use client"

import { Icon } from "@iconify/react"
import { useLocale } from "next-intl"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import navbarData from "../data/navbar.json"

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
					<Link href="/">
						<Image src="/logo.png" alt="Logo" className="scale" width={35} height={35} />
					</Link>

					<div className="flex flex-row items-center gap-4">
						<Link href="#about" className="hidden flex-row items-center justify-center gap-1 hover:underline md:flex">
							<Icon icon="material-symbols:person-pin-rounded" width={25} height={25} className="scale" />
							<p>{about[locale]}</p>
						</Link>

						<Link
							href="#projects"
							className="hidden flex-row items-center justify-center gap-1 hover:underline md:flex"
						>
							<Icon icon="material-symbols:folder-code" width={25} height={25} className="scale" />
							<p>{projects[locale]}</p>
						</Link>

						<Link href="#contact" className="hidden flex-row items-center justify-center gap-1 hover:underline md:flex">
							<Icon icon="material-symbols:chat-paste-go" width={25} height={25} className="scale" />
							<p>{contact[locale]}</p>
						</Link>
					</div>
				</div>

				<div className="flex flex-row items-center gap-2 text-sm font-bold">
					<Link
						href="/en"
						title="English - US"
						className={`btn-round ${window.location.pathname === "/en" ? "bg-accent" : ""}`}
					>
						EN
					</Link>
					<Link
						href="/pt"
						title="Português - BR"
						className={`btn-round ${window.location.pathname === "/pt" ? "bg-accent" : ""}`}
					>
						PT
					</Link>
				</div>
			</div>
		</nav>
	)
}
