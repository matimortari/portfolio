export interface StackItemType {
  name: string
  description: string
  icon: string
  url: string
}

export interface ProjectItemType {
  title: string
  description: string
  image: string
  stack: string[]
  demoUrl: string
  sourceUrl: string
}

export interface ExperienceItemType {
  role: string
  company: string
  period: string
  description: string
  stack: string[]
}

export const stackItems: StackItemType[] = [
  { name: "TypeScript", description: "index.stack.items.0.description", icon: "lineicons:typescript", url: "https://www.typescriptlang.org" },
  { name: "Node.js", description: "index.stack.items.1.description", icon: "lineicons:nodejs", url: "https://nodejs.org" },
  { name: "Vue.js", description: "index.stack.items.2.description", icon: "lineicons:vuejs", url: "https://vuejs.org" },
  { name: "Nuxt.js", description: "index.stack.items.3.description", icon: "lineicons:nuxt", url: "https://nuxtjs.org" },
  { name: "TailwindCSS", description: "index.stack.items.4.description", icon: "lineicons:tailwindcss", url: "https://tailwindcss.com" },
  { name: "Prisma", description: "index.stack.items.5.description", icon: "lineicons:prisma", url: "https://prisma.io" },
  { name: "PostgreSQL", description: "index.stack.items.6.description", icon: "lineicons:postgresql", url: "https://www.postgresql.org" },
  { name: "Go", description: "index.stack.items.7.description", icon: "lineicons:go", url: "https://go.dev" },
  { name: "Git", description: "index.stack.items.8.description", icon: "lineicons:git", url: "https://git-scm.com" },
]

export const projectItems: ProjectItemType[] = [
  {
    title: "index.projects.items.0.title",
    description: "index.projects.items.0.description",
    image: "https://linknest-live.vercel.app/og-image.png",
    stack: ["TypeScript", "Nuxt.js", "Vue.js", "TailwindCSS", "Pinia", "Chart.js", "OAuth", "Prisma"],
    demoUrl: "https://linknest-live.vercel.app",
    sourceUrl: "https://github.com/matimortari/linknest",
  },
  {
    title: "index.projects.items.1.title",
    description: "index.projects.items.1.description",
    image: "https://secretkeepr.vercel.app/og-image.png",
    stack: ["TypeScript", "Nuxt.js", "Vue.js", "TailwindCSS", "Pinia", "OAuth", "Prisma"],
    demoUrl: "https://secretkeepr.vercel.app",
    sourceUrl: "https://github.com/matimortari/secretkeepr",
  },
]

export const experienceItems: ExperienceItemType[] = [
  {
    role: "index.experience.items.0.role",
    company: "index.experience.items.0.company",
    period: "index.experience.items.0.period",
    description: "index.experience.items.0.description",
    stack: ["Nuxt.js", "Vue", "TailwindCSS", "TypeScript", "HTML", "CSS", "ESLint", "Git"],
  },
  {
    role: "index.experience.items.1.role",
    company: "index.experience.items.1.company",
    period: "index.experience.items.1.period",
    description: "index.experience.items.1.description",
    stack: ["Nuxt.js", "Vue", "TailwindCSS", "TypeScript", "Node.js", "PostgreSQL", "Go", "Postman", "Git", "Vercel"],
  },
]
