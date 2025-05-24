<template>
  <section id="about" class="flex-1 text-center lg:text-start">
    <h3
      v-motion :initial="{ opacity: 0, y: -20 }" :visible="{ opacity: 1, y: 0 }" :duration="800"
      class="font-serif my-10"
    >
      {{ t("index.about.title") }}
    </h3>

    <div
      v-for="(section, index) in sections" :key="index" v-motion :initial="{ opacity: 0, x: -20 }"
      :visible="{ opacity: 1, x: 0 }" :duration="800"
    >
      <p class="text-sm text-muted-foreground md:text-sm my-4">
        {{ t(section) }}
      </p>
      <hr v-if="index < sections.length - 1">
    </div>

    <hr class="my-4">

    <div id="contact" class="flex flex-col items-center justify-center gap-4 text-sm md:items-start">
      <h4
        v-motion :initial="{ opacity: 0, y: -10 }" :visible="{ opacity: 1, y: 0 }" :duration="800"
        class="font-serif text-lg"
      >
        {{ t("index.about.contact") }}
      </h4>
      <p
        v-for="(contact, index) in contacts" :key="index" v-motion :initial="{ opacity: 0, x: -20 }"
        :visible="{ opacity: 1, x: 0 }" :duration="400" :delay="200 * Number(index)"
        class="flex flex-row items-center gap-2 font-semibold italic"
      >
        <Icon :name="contact.icon" size="20" class="animate-scale" />
        {{ contact.label }}
        <a :href="contact.href" class="text-secondary hover:underline" target="_blank">{{ contact.text }}</a>
      </p>
    </div>

    <hr class="my-4">

    <div
      v-motion :initial="{ opacity: 0, y: -20 }" :visible="{ opacity: 1, y: 0 }" :duration="800" :delay="400"
      class="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-end"
    >
      <a v-for="(resume, index) in resumes" :key="index" :href="resume.href" class="btn" target="_blank">
        <Icon name="material-symbols:article-shortcut" size="25" class="animate-scale" />
        {{ t(resume.label) }}
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const sections = [
  "index.about.section1",
  "index.about.section2"
]

const contacts = [
  {
    icon: "simple-icons:github",
    label: "GitHub",
    text: "/matimortari",
    href: "https://github.com/matimortari"
  },
  {
    icon: "simple-icons:linkedin",
    label: "LinkedIn",
    text: "/matheus-mortari-19rt",
    href: "https://linkedin.com/in/matheus-mortari-19rt"
  },
  {
    icon: "simple-icons:gmail",
    label: "Email",
    text: "matheus.felipe.19rt@gmail.com",
    href: "mailto:matheus.felipe.19rt@gmail.com"
  }
]

const resumes = [
  {
    label: "index.about.resumeEn",
    href: "https://matimortari.github.io/assets/cv/cv-en.pdf"
  },
  {
    label: "index.about.resumePt",
    href: "https://matimortari.github.io/assets/cv/cv-pt.pdf"
  }
]
</script>
