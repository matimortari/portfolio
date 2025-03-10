import { useLocale } from "next-intl"
import { Merriweather } from "next/font/google"
import aboutData from "../data/about.json"
import projectsData from "../data/projects.json"
import ProjectCard from "./ui/ProjectCard"

const merriweather = Merriweather({ subsets: ["latin"], weight: "900" })

export default function Projects() {
	const locale = useLocale()

	const { projectsTitle } = aboutData

	return (
		<section id="projects" className="flex-1 text-center">
			<h3 className={`${merriweather.className} my-12`}>{projectsTitle[locale]}</h3>

			<div className="flex w-full flex-col justify-between gap-12 md:flex-row md:gap-36">
				{projectsData.map((project) => (
					<ProjectCard
						key={project.title}
						title={project.title}
						description={project.description}
						image={project.image ?? ""}
						skills={project.skills}
						source={project.source}
						link={project.link}
					/>
				))}
			</div>
		</section>
	)
}
