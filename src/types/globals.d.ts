interface ProjectCardProps {
	title: string
	description: {
		en: string
		pt: string
	}
	skills: string[]
	source: string
	link: string
}

interface StackCardProps {
	name: string
	icon: string
	link: string
	description: { en: string; pt: string }
}
