<template>
  <section id="about" class="flex-1 text-center md:text-start">
    <h3
      v-motion :initial="{ opacity: 0, y: -20 }"
      :visible="{ opacity: 1, y: 0 }" :duration="800"
      class="my-10 font-serif"
    >
      {{ t("index.about.title") }}
    </h3>

    <div
      v-for="(section, index) in sections" :key="index"
      v-motion :initial="{ opacity: 0, x: -20 }"
      :visible="{ opacity: 1, x: 0 }" :duration="800"
    >
      <p class="my-4 text-sm text-muted-foreground md:text-sm">
        {{ t(section) }}
      </p>
      <hr v-if="index < sections.length - 1">
    </div>

    <hr class="my-4">

    <div id="contact" class="flex flex-col items-center justify-center gap-4 text-sm md:items-start">
      <h5
        v-motion :initial="{ opacity: 0, y: -10 }"
        :visible="{ opacity: 1, y: 0 }" :duration="800"
        class="font-serif"
      >
        {{ t("index.about.contact") }}
      </h5>

      <p
        v-for="(contact, index) in contacts" :key="index"
        v-motion :initial="{ opacity: 0, x: -20 }"
        :visible="{ opacity: 1, x: 0 }" :duration="800"
        :delay="200 * Number(index)" class="flex flex-row items-center gap-2 italic"
      >
        <icon :name="contact.icon" size="20" />
        <span>{{ contact.label }}</span>
        <nuxt-link :to="contact.link" class="text-secondary hover:underline" target="_blank" rel="noopener noreferrer">
          {{ contact.text }}
        </nuxt-link>
      </p>
    </div>

    <hr class="my-4">

    <div
      v-motion :initial="{ opacity: 0, y: 20 }"
      :visible="{ opacity: 1, y: 0 }" :duration="800"
      :delay="800" class="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-end"
    >
      <nuxt-link
        v-for="(resume, index) in resumes" :key="index"
        :to="resume.link" class="btn"
        target="_blank" rel="noopener noreferrer"
      >
        <icon name="material-symbols:article-shortcut" size="25" class="hover:scale transition-all" />
        {{ t(resume.label) }}
      </nuxt-link>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const sections = [
  "index.about.section1",
  "index.about.section2",
]

const contacts = [
  {
    icon: "simple-icons:github",
    label: "GitHub",
    text: "/matimortari",
    link: "https://github.com/matimortari",
  },
  {
    icon: "simple-icons:linkedin",
    label: "LinkedIn",
    text: "/matheus-mortari-19rt",
    link: "https://linkedin.com/in/matheus-mortari-19rt",
  },
  {
    icon: "simple-icons:gmail",
    label: "Email",
    text: "matheus.felipe.19rt@gmail.com",
    link: "mailto:matheus.felipe.19rt@gmail.com",
  },
]

const resumes = [
  {
    label: "index.about.resumeEn",
    link: "https://matimortari.github.io/statics/cv/cv-en.pdf",
  },
  {
    label: "index.about.resumePt",
    link: "https://matimortari.github.io/statics/cv/cv-pt.pdf",
  },
]
</script>
