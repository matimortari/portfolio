"use client"

import About from "@/src/components/about"
import Hero from "@/src/components/hero"
import Navbar from "@/src/components/navbar"
import Projects from "@/src/components/projects"
import Stack from "@/src/components/stack"

export default function Home() {
	return (
		<div className="flex min-h-screen flex-col">
			<Navbar />
			<Hero />

			<div className="m-8 flex flex-col items-center justify-center gap-8 md:mx-16 lg:mx-20">
				<div className="flex w-full flex-col justify-between gap-8 lg:flex-row lg:gap-20">
					<About />
					<Stack />
				</div>

				<Projects />
			</div>

			<footer id="footer" className="footer-container" />
		</div>
	)
}
