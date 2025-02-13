import About from "@/src/components/About"
import Hero from "@/src/components/Hero"
import Navbar from "@/src/components/Navbar"
import Projects from "@/src/components/Projects"
import Stack from "@/src/components/Stack"

export default function Home() {
	return (
		<div className="flex min-h-screen flex-col">
			<Navbar />
			<Hero />

			<div className="m-8 flex flex-col items-center justify-center gap-8 md:mx-20">
				<div className="flex w-full flex-col justify-between gap-8 md:flex-row md:gap-20">
					<About />
					<Stack />
				</div>

				<Projects />
			</div>

			<footer id="footer" className="footer-container h-20" />
		</div>
	)
}
