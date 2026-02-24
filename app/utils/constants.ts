export const BASE_URL = "https://matheus-mortari.up.railway.app"

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
    image: "https://linkiosk.up.railway.app/og-image.png",
    stack: ["TypeScript", "Nuxt.js", "Vue.js", "TailwindCSS", "Chart.js", "OAuth", "Prisma", "PostgreSQL", "Redis"],
    demoUrl: "https://linkiosk.up.railway.app",
    sourceUrl: "https://github.com/matimortari/linkiosk",
  },
  {
    title: "index.projects.items.1.title",
    description: "index.projects.items.1.description",
    image: "https://linkiosk.up.railway.app/og-image.png",
    stack: ["TypeScript", "Nuxt.js", "Vue.js", "TailwindCSS", "Go", "OAuth", "Prisma", "PostgreSQL", "Redis"],
    demoUrl: "https://linkiosk.up.railway.app",
    sourceUrl: "https://github.com/matimortari/windkeep",
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
    label: "index.navbar.projects",
    url: "#projects",
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
    icon: "simple-icons:gmail",
    url: "mailto:matheus.felipe.19rt@gmail.com",
  },
]

export const HERO_RESUME_LINKS: ResumeLink[] = [
  {
    lang: "en",
    label: "index.hero.resumeEn",
    url: "/cv/en",
    blob: "https://pub-ce5c64d2ed6a4723bca8e1f8005858ac.r2.dev/cv/CV-EN.pdf",
  },
  {
    lang: "pt",
    label: "index.hero.resumePt",
    url: "/cv/pt",
    blob: "https://pub-ce5c64d2ed6a4723bca8e1f8005858ac.r2.dev/cv/CV-PT.pdf",
  },
]
