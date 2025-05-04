import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://matheus-mortari-dev.vercel.app",
			lastModified: new Date(),
			alternates: {
				languages: {
					pt: "https://matheus-mortari-dev.vercel.app/pt",
					en: "https://matheus-mortari-dev.vercel.app/en"
				}
			},
			changeFrequency: "yearly",
			priority: 1
		}
	]
}
