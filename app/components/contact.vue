<template>
  <section id="contact" class="flex flex-col items-center justify-center gap-6 py-4 text-sm md:items-start">
    <header class="flex w-full flex-row items-center gap-6 whitespace-nowrap">
      <h4 v-motion :initial="{ opacity: 0, y: -10 }" :visible="{ opacity: 1, y: 0 }" :duration="800">
        {{ t("index.contact.title") }}
      </h4>
      <hr class="w-full">
    </header>

    <div class="flex flex-col items-center gap-2 md:items-start">
      <p
        v-for="(contact, index) in contactLinks" :key="index"
        v-motion :initial="{ opacity: 0, x: -20 }"
        :visible="{ opacity: 1, x: 0 }" :duration="800"
        :delay="200 * Number(index)" class="flex flex-row items-center gap-2 italic"
      >
        <icon :name="contact.icon" size="25" class="shrink-0" />
        <span>{{ contact.label }}</span>
        <nuxt-link :to="contact.url" class="text-secondary hover:underline">
          {{ contact.text }}
        </nuxt-link>
      </p>
    </div>
    <hr class="w-full">

    <div class="flex w-full flex-col gap-2">
      <nuxt-link
        v-for="(resume, index) in resumeLinks" :key="index"
        v-motion :initial="{ opacity: 0, x: -20 }"
        :visible="{ opacity: 1, x: 0 }" :duration="800"
        :delay="200 * Number(index)" :to="resume.url"
        class="btn flex w-full items-center justify-center gap-2 text-sm italic hover:underline"
      >
        <icon name="material-symbols:article-shortcut" size="25" class="shrink-0" />
        <span>{{ t(resume.label) }}</span>
      </nuxt-link>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const contactLinks = [
  {
    url: "https://github.com/matimortari",
    icon: "lineicons:github",
    label: "GitHub",
    text: "/matimortari",
  },
  {
    url: "https://linkedin.com/in/matheus-mortari-19rt",
    icon: "lineicons:linkedin",
    label: "LinkedIn",
    text: "/matheus-mortari-19rt",
  },
  {
    url: "mailto:matheus.felipe.19rt@gmail.com",
    icon: "material-symbols:mail-rounded",
    label: "Email",
    text: "matheus.felipe.19rt@gmail.com",
  },
]

const resumeLinks = [
  {
    label: "index.contact.resumeEn",
    url: "https://matimortari.github.io/statics/cv/cv-en.pdf",
  },
  {
    label: "index.contact.resumePt",
    url: "https://matimortari.github.io/statics/cv/cv-pt.pdf",
  },
]
</script>
