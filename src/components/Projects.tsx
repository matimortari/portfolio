import { useTranslations } from "next-intl"
import projectsData from "../data/projectsData.json"
import ProjectCard from "./ui/ProjectCard"

export default function Projects() {
	const t = useTranslations("Projects")

	return (
		<section id="projects">
			<strong className="title">{t("title")}</strong>

			<div className="grid max-w-xl grid-cols-1 gap-6">
				{projectsData.map((project) => (
					<ProjectCard
						key={project.title}
						title={project.title}
						description={project.description}
						skills={project.skills}
						source={project.source}
						preview={project.preview}
					/>
				))}
			</div>
		</section>
	)
}
