import { useTranslations } from "next-intl"
import projectsData from "../data/projectsData.json"
import ProjectCard from "./ui/ProjectCard"

export default function ProjectsSection() {
	const t = useTranslations("Projects")

	return (
		<section id="projects" className="w-full p-4 text-center">
			<h3 className="my-4">{t("title")}</h3>

			<div className="my-8 flex flex-col justify-center gap-4 md:flex-row md:gap-12">
				{projectsData.map((project) => (
					<ProjectCard
						key={project.title}
						title={project.title}
						description={project.description}
						skills={project.skills}
						source={project.source}
						link={project.link}
					/>
				))}
			</div>
		</section>
	)
}
