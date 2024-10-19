import { Icon } from "@iconify/react"
import projectsData from "../data/projectsData.json"
import { ProjectCardProps } from "../types/types"

export default function Projects() {
	return (
		<div id="projects" className="flex flex-col items-center justify-center text-center">
			<strong className="title">Projects</strong>

			<div className="grid max-w-xl grid-cols-1 gap-4">
				{projectsData.map((project: ProjectCardProps) => (
					<div key={project.title} className="card-shadow max-w-md rounded-lg p-6">
						<div className="flex flex-col items-center gap-2">
							<strong className="font-serif text-2xl font-semibold">{project.title}</strong>
							<p className="my-2 text-sm">{project.description}</p>

							<div className="flex flex-wrap items-center justify-center gap-1 text-center">
								{project.skills.map((skill, index) => (
									<span key={index} className="rounded-lg bg-accent px-2 py-1 text-xs font-medium">
										{skill}
									</span>
								))}
							</div>

							<hr className="my-2 w-full border-t border-accent opacity-50" />

							<div className="flex flex-row items-center justify-center gap-6">
								<a
									href={project.source}
									target="_blank"
									rel="noopener noreferrer"
									className="card-shadow flex flex-row items-center justify-center gap-2 rounded-lg p-2"
								>
									<Icon icon="simple-icons:github" className="icon h-5 w-5" />
									<p className="text-base font-medium">Source</p>
								</a>

								<a
									href={project.preview}
									target="_blank"
									rel="noopener noreferrer"
									className="card-shadow flex flex-row items-center justify-center gap-2 rounded-lg p-2"
								>
									<Icon icon="simple-icons:vercel" className="icon h-5 w-5" />
									<p className="text-base font-medium">Preview</p>
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
