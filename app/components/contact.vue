<template>
  <section id="contact" class="mx-auto flex flex-col items-center border-t p-8 text-center">
    <header class="flex flex-col items-center gap-4 text-center">
      <h2>
        {{ t("index.contact.title") }}
      </h2>
      <p class="text-muted-foreground text-sm leading-5 md:whitespace-nowrap">
        {{ t("index.contact.subtitle") }}
      </p>
    </header>

    <div class="my-12 flex w-full flex-col items-center gap-8">
      <div class="grid gap-8 md:grid-cols-3">
        <nuxt-link
          v-for="link in contactLinks" :key="link.url"
          :to="link.url" target="_blank"
          class="group flex flex-col items-center gap-1"
        >
          <icon :name="link.icon" size="35" class="text-primary group-hover:scale duration-500" />
          <span class="font-semibold">{{ link.label }}</span>
          <span class="text-muted-foreground text-sm group-hover:underline">{{ link.text }}</span>
        </nuxt-link>
      </div>

      <div class="flex flex-row items-center justify-center gap-4">
        <nuxt-link
          v-for="resume in resumeLinks" :key="resume.url"
          :to="resume.url" target="_blank"
          class="group flex flex-row items-center gap-2 text-sm md:rounded-xl md:border md:p-4"
        >
          <icon name="material-symbols:article-shortcut" size="25" class="group-hover:scale group-hover:text-primary duration-500" />
          <span class="font-semibold group-hover:underline">{{ t(resume.label) }}</span>
        </nuxt-link>
      </div>
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
