import aboutData from "../data/aboutData.json"
import { aboutDataProps } from "../types/types"

export default function About() {
	return (
		<section id="about">
			<strong className="title">About Me</strong>

			<div className="grid max-w-xl grid-cols-1">
				{aboutData.map((section: aboutDataProps) => (
					<div key={section.content}>
						<p className="text-sm md:text-base">{section.content}</p>
						<hr />
					</div>
				))}
			</div>
		</section>
	)
}
