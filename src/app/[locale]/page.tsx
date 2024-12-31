import About from "@/src/components/About"
import Footer from "@/src/components/Footer"
import Hero from "@/src/components/Hero"
import Navbar from "@/src/components/Navbar"
import Projects from "@/src/components/Projects"
import Stack from "@/src/components/Stack"

export default function Home() {
	return (
		<div className="flex min-h-screen flex-col">
			<Navbar />
			<Hero />
			<main className="flex flex-1 flex-col p-4 md:flex-row">
				<div className="flex flex-1 flex-col">
					<About />
					<Stack />
				</div>

				<div className="flex flex-1 flex-col">
					<Projects />
				</div>
			</main>
			<Footer />
		</div>
	)
}
