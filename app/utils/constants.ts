export const STACK_ITEMS: StackItem[] = [
  { name: "TypeScript", description: "index.stack.items.0.description", icon: "simple-icons:typescript", url: "https://www.typescriptlang.org" },
  { name: "Node.js", description: "index.stack.items.1.description", icon: "simple-icons:nodedotjs", url: "https://nodejs.org" },
  { name: "Vue.js", description: "index.stack.items.2.description", icon: "simple-icons:vuedotjs", url: "https://vuejs.org" },
  { name: "Nuxt.js", description: "index.stack.items.3.description", icon: "simple-icons:nuxt", url: "https://nuxtjs.org" },
  { name: "TailwindCSS", description: "index.stack.items.4.description", icon: "simple-icons:tailwindcss", url: "https://tailwindcss.com" },
  { name: "Prisma", description: "index.stack.items.5.description", icon: "simple-icons:prisma", url: "https://prisma.io" },
  { name: "PostgreSQL", description: "index.stack.items.6.description", icon: "simple-icons:postgresql", url: "https://www.postgresql.org" },
  { name: "Go", description: "index.stack.items.7.description", icon: "simple-icons:go", url: "https://go.dev" },
  { name: "Git", description: "index.stack.items.8.description", icon: "simple-icons:git", url: "https://git-scm.com" },
  { name: "Docker", description: "index.stack.items.9.description", icon: "simple-icons:docker", url: "https://www.docker.com" },
]

export const PROJECT_ITEMS: ProjectItem[] = [
  {
    title: "index.projects.items.0.title",
    description: "index.projects.items.0.description",
    image: "https://alllinks-bio.vercel.app/og-image.png",
    stack: ["TypeScript", "Nuxt.js", "Vue.js", "TailwindCSS", "Chart.js", "OAuth", "Prisma"],
    demoUrl: "https://alllinks-bio.vercel.app",
    sourceUrl: "https://github.com/matimortari/alllinks",
  },
  {
    title: "index.projects.items.1.title",
    description: "index.projects.items.1.description",
    image: "https://windkeep.vercel.app/og-image.png",
    stack: ["TypeScript", "Nuxt.js", "Vue.js", "TailwindCSS", "Go", "OAuth", "Prisma"],
    demoUrl: "https://windkeep.vercel.app",
    sourceUrl: "https://github.com/matimortari/windkeep",
  },
]

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    role: "index.experience.items.0.role",
    company: "index.experience.items.0.company",
    period: "index.experience.items.0.period",
    description: "index.experience.items.0.description",
  },
  {
    role: "index.experience.items.1.role",
    company: "index.experience.items.1.company",
    period: "index.experience.items.1.period",
    description: "index.experience.items.1.description",
  },
]

export const ABOUT_SECTIONS: AboutSection[] = [
  {
    text: "index.about.section1",
  },
  {
    text: "index.about.section2",
  },
]

export const NAV_LINKS: LinkItem[] = [
  {
    label: "index.navbar.about",
    url: "#about",
  },
  {
    label: "index.navbar.contact",
    url: "#contact",
  },
]

export const CONTACT_LINKS: LinkItem[] = [
  {
    label: "GitHub",
    icon: "simple-icons:github",
    text: "/matimortari",
    url: "https://github.com/matimortari",
  },
  {
    label: "LinkedIn",
    icon: "simple-icons:linkedin",
    text: "/matheus-mortari-19rt",
    url: "https://linkedin.com/in/matheus-mortari-19rt",
  },
  {
    label: "Email",
    icon: "simple-icons:gmail",
    text: "matheus.felipe.19rt@gmail.com",
    url: "mailto:matheus.felipe.19rt@gmail.com",
  },
]

export const HERO_CONTACT_LINKS: LinkItem[] = [
  {
    label: "GitHub",
    icon: "simple-icons:github",
    url: "https://github.com/matimortari",
  },
  {
    label: "LinkedIn",
    icon: "simple-icons:linkedin",
    url: "https://linkedin.com/in/matheus-mortari-19rt",
  },
  {
    label: "Email",
    icon: "material-symbols:mail-rounded",
    url: "mailto:matheus.felipe.19rt@gmail.com",
  },
]

export const HERO_RESUME_LINKS: ResumeLink[] = [
  {
    lang: "en",
    label: "index.contact.resumeEn",
    url: "/cv/en",
    blob: "https://kdenka4dfbuxnv79.public.blob.vercel-storage.com/portfolio/CV-EN.pdf",
  },
  {
    lang: "pt",
    label: "index.contact.resumePt",
    url: "/cv/pt",
    blob: "https://kdenka4dfbuxnv79.public.blob.vercel-storage.com/portfolio/CV-PT.pdf",
  },
]
