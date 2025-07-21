<template>
  <section id="hero" class="relative flex min-h-screen items-center justify-center overflow-hidden">
    <div class="hero-background" />

    <div class="animate-scroll absolute inset-x-0 bottom-0 z-0 flex w-[200%] overflow-hidden opacity-20">
      <img
        src="/map.png" alt="Background Image"
        class="hidden size-full lg:block" width="800"
        height="800"
      >
      <img
        src="/map.png" alt="Background Image"
        class="hidden size-full lg:block" width="800"
        height="800"
      >
    </div>

    <div
      v-motion :initial="{ opacity: 0, y: -40 }"
      :visible="{ opacity: 1, y: 0 }" :duration="800"
      class="relative flex flex-col items-center gap-2 px-4 pb-12 pt-24"
    >
      <div class="relative size-36 lg:size-40 2xl:size-44">
        <img src="/avatar.png" alt="Avatar" class="avatar animate-float absolute inset-0">
      </div>

      <div class="m-4 flex flex-col gap-2 text-center">
        <h1 class="font-serif text-3xl xl:text-4xl">
          {{ t("index.hero.title") }}
        </h1>
        <h2 class="font-serif text-xl xl:text-2xl">
          {{ t("index.hero.subtitle") }}
        </h2>
      </div>

      <div class="flex flex-col items-center justify-center px-10">
        <p class="max-w-md text-center leading-5 text-muted-foreground">
          {{ t("index.hero.description") }}
        </p>

        <div class="my-4 flex flex-row items-center justify-center gap-4 text-secondary lg:my-8">
          <a
            v-for="link in socialLinks" :key="link.href"
            :href="link.href" :title="link.title"
            target="_blank"
          >
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
  { href: "mailto:matheus.felipe.19rt@gmail.com", icon: "simple-icons:gmail", title: "Email" },
]
</script>
