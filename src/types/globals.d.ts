interface ProjectCardProps {
	title: string
	description: {
		en: string
		pt: string
	}
	skills: string[]
	source: string
	preview: string
}

interface StackCardProps {
	name: string
	icon: string
	link: string
	description: { en: string; pt: string }
}
