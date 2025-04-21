import { Icon } from "@iconify/react"
import { motion } from "framer-motion"
import { useLocale } from "next-intl"
import { Merriweather } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const merriweather = Merriweather({ subsets: ["latin"], weight: "900" })

export default function ProjectCard({ title, description, image, skills, source, link }: Readonly<ProjectCardProps>) {
	const locale = useLocale()

	const [updatedImageUrl, setUpdatedImageUrl] = useState(image)

	// Cache busting for project images
	useEffect(() => {
		setUpdatedImageUrl(`${image}?v=${Date.now()}`)
	}, [image])

	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			whileHover={{ scale: 1.02, transition: { duration: 0.4 } }}
			transition={{ duration: 0.6 }}
			viewport={{ once: true }}
			className="flex flex-col items-start gap-2 text-start"
		>
			<Image
				src={updatedImageUrl}
				alt={title}
				width={600}
				height={315}
				unoptimized={true}
				className="rounded-lg border"
			/>

			<motion.div
				initial={{ opacity: 0, x: -20 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 1 }}
				viewport={{ once: true }}
				className="my-1 flex flex-row items-center gap-4"
			>
				<h4 className={merriweather.className}>{title}</h4>

				<div className="flex flex-row items-center gap-2">
					<Link href={source} title={source} target="_blank" rel="noopener noreferrer">
						<Icon icon="simple-icons:github" width={25} height={25} className="scale" />
					</Link>
					<Link href={link} title={link} target="_blank" rel="noopener noreferrer">
						<Icon icon="material-symbols:captive-portal" width={30} height={30} className="scale" />
					</Link>
				</div>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: -20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
				viewport={{ once: true }}
				className="flex max-w-sm flex-wrap gap-1"
			>
				{skills.map((skill) => (
					<span key={skill} className="text-primary-foreground rounded-full bg-accent px-2 py-1 text-xs font-semibold">
						{skill}
					</span>
				))}
			</motion.div>

			<motion.p
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
				viewport={{ once: true }}
				className="max-w-md text-sm text-muted-foreground"
			>
				{description[locale]}
			</motion.p>
		</motion.div>
	)
}
