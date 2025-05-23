import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://matheus-mortari.vercel.app",
      lastModified: new Date(),
      alternates: {
        languages: {
          pt: "https://matheus-mortari.vercel.app/pt",
          en: "https://matheus-mortari.vercel.app/en",
        },
      },
      changeFrequency: "yearly",
      priority: 1,
    },
  ];
}
