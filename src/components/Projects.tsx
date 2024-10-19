import { Icon } from "@iconify/react"
import projectsData from "../data/projectsData.json"
import { ProjectCardProps } from "../types/types"

export default function Projects() {
	return (
		<section id="projects">
			<strong className="title">Projects</strong>

			<div className="grid max-w-xl grid-cols-1 gap-6">
				{projectsData.map((project: ProjectCardProps) => (
					<div key={project.title} className="card-shadow flex flex-col items-center gap-2 rounded-lg p-6">
						<strong className="font-serif text-2xl font-semibold">{project.title}</strong>
						<p className="max-w-sm text-sm">{project.description}</p>

						<div className="flex max-w-sm flex-wrap items-center justify-center gap-1 text-center">
							{project.skills.map((skill, index) => (
								<span key={index} className="rounded-lg bg-accent px-2 py-1 text-xs font-medium">
									{skill}
								</span>
							))}
						</div>

						<hr />

						<div className="flex flex-row items-center justify-center gap-8">
							<a
								href={project.source}
								target="_blank"
								rel="noopener noreferrer"
								className="flex flex-row items-center justify-center gap-2 hover:underline"
							>
								<Icon icon="simple-icons:github" className="icon h-6 w-6" />
								<p className="text-sm font-medium">Source</p>
							</a>

							<a
								href={project.preview}
								target="_blank"
								rel="noopener noreferrer"
								className="flex flex-row items-center justify-center gap-2 hover:underline"
							>
								<Icon icon="bxs:navigation" className="icon h-6 w-6" />
								<p className="text-sm font-medium">Preview</p>
							</a>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}

// 				{projectsData.map((project: ProjectCardProps) => (
// 					<div key={project.title} className="card-shadow flex min-w-[250px] flex-col rounded-lg p-6 md:min-w-[300px]">
// 						<div className="flex flex-col items-center gap-2">
// 							<strong className="font-serif text-2xl font-semibold">{project.title}</strong>
// 							<p className="text-sm">{project.description}</p>
// 						</div>

// 						<div className="flex flex-col items-start justify-between md:flex-row">
// 							<div className="mb-2 flex flex-wrap items-center justify-start gap-1 md:mb-0">
// 								{project.skills.map((skill, index) => (
// 									<span key={index} className="rounded-lg bg-accent px-2 py-1 text-xs font-medium">
// 										{skill}
// 									</span>
// 								))}
// 							</div>
