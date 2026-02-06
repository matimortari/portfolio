interface StackItem {
  name: string
  description: string
  icon: string
  url: string
}

interface ProjectItem {
  title: string
  description: string
  image: string
  stack: string[]
  demoUrl: string
  sourceUrl: string
}

interface AboutSection {
  text: string
}

interface LinkItem {
  label: string
  url: string
  icon?: string
  text?: string
}

interface ResumeLink {
  lang: "en" | "pt"
  label: string
  url: string
  blob: string
}
