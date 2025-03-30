"use client"

import navbarData from "@/src/data/navbar.json"
import { motion } from "framer-motion"
import { useLocale } from "next-intl"
import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
	const locale = useLocale()

	const { about, projects, contact } = navbarData

	return (
		<nav className="fixed top-0 z-50 w-full rounded-lg px-6 py-2 backdrop-blur">
			<div className="flex flex-row items-center justify-between">
				<div className="flex flex-row items-center justify-center gap-10 font-semibold text-foreground">
					<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
						<Link href="/">
							<Image src="/logo.png" alt="Logo" className="scale" width={35} height={35} />
						</Link>
					</motion.div>

					<div className="flex flex-row items-center gap-4">
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
						>
							<Link href="#about" className="hidden hover:underline md:block">
								{about[locale]}
							</Link>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.4 }}
						>
							<Link href="#projects" className="hidden hover:underline md:block">
								{projects[locale]}
							</Link>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: 0.6 }}
						>
							<Link href="#contact" className="hidden hover:underline md:block">
								{contact[locale]}
							</Link>
						</motion.div>
					</div>
				</div>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 2 }}
					className="flex flex-row items-center gap-2 text-sm font-bold"
				>
					<Link href="/en" title="English - US" className="btn-round">
						EN
					</Link>
					<Link href="/pt" title="Português - BR" className="btn-round">
						PT
					</Link>
				</motion.div>
			</div>
		</nav>
	)
}
