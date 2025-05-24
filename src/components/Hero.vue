<template>
  <section id="hero" class="relative flex min-h-screen items-center justify-center overflow-hidden">
    <div class="hero-background" />

    <div class="hero-map animate-scroll absolute inset-x-0 bottom-0 z-0 overflow-hidden opacity-20">
      <img src="/map.png" alt="Background Image" class="hidden size-full md:block" width="800" height="800">
      <img src="/map.png" alt="Background Image" class="hidden size-full md:block" width="800" height="800">
    </div>

    <div
      v-motion :initial="{ opacity: 0, y: -40 }" :visible="{ opacity: 1, y: 0 }" :duration="800"
      class="relative flex flex-col items-center gap-4 p-16"
    >
      <div class="relative size-36 sm:size-44">
        <img src="/avatar.png" alt="Avatar" class="avatar animate-float absolute inset-0 object-cover w-full h-full">
      </div>

      <div class="m-4 flex flex-col gap-4 text-center">
        <h1 class="font-serif text-4xl 2xl:text-5xl">
          {{ t("index.hero.title") }}
        </h1>
        <h2 class="font-serif">
          {{ t("index.hero.subtitle") }}
        </h2>
      </div>

      <div class="flex flex-col items-center justify-center">
        <p class="max-w-md text-center text-sm text-muted-foreground sm:text-base">
          {{ t("index.hero.description") }}
        </p>

        <div class="my-4 flex flex-row items-center justify-center gap-4 text-secondary">
          <a v-for="link in socialLinks" :key="link.href" :href="link.href" :title="link.title" target="_blank">
            <Icon :name="link.icon" size="25" class="animate-scale" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const socialLinks = [
  { href: "https://github.com/matimortari", icon: "simple-icons:github", title: "GitHub" },
  { href: "https://linkedin.com/in/matheus-mortari-19rt", icon: "simple-icons:linkedin", title: "LinkedIn" },
  { href: "mailto:matheus.felipe.19rt@gmail.com", icon: "simple-icons:gmail", title: "Email" }
]
</script>
