import ProjectCard from "@/src/components/ui/ProjectCard"
import aboutData from "@/src/data/about.json"
import projectsData from "@/src/data/projects.json"
import { motion } from "framer-motion"
import { useLocale } from "next-intl"
import { Merriweather } from "next/font/google"

const merriweather = Merriweather({ subsets: ["latin"], weight: "900" })

export default function Projects() {
	const locale = useLocale()

	const { projectsTitle } = aboutData

	return (
		<section id="projects" className="flex-1 text-center">
			<motion.h3
				initial={{ opacity: 0, y: -20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
				className={`${merriweather.className} my-12`}
			>
				{projectsTitle[locale]}
			</motion.h3>

			<div className="flex w-full flex-col justify-between gap-12 md:flex-row md:gap-36">
				{projectsData.map((project, index) => (
					<motion.div
						key={project.title}
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: 0.1 * index }}
					>
						<ProjectCard
							title={project.title}
							description={project.description}
							image={project.image ?? ""}
							skills={project.skills}
							source={project.source}
							link={project.link}
						/>
					</motion.div>
				))}
			</div>
		</section>
	)
}
