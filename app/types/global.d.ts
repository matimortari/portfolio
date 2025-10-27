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

interface ExperienceItem {
  role: string
  company: string
  period: string
  description: string
  stack: string[]
}