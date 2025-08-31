<template>
  <header class="flex w-full flex-row items-center gap-4 whitespace-nowrap">
    <h3 v-motion :initial="{ opacity: 0, y: -20 }" :visible="{ opacity: 1, y: 0 }" :duration="800">
      {{ t("index.about.title") }}
    </h3>
    <hr class="w-full">
  </header>

  <div class="my-8 flex w-full flex-col justify-between gap-8 md:flex-row md:gap-20">
    <div class="flex flex-col gap-12 text-center md:w-2/3 md:text-start">
      <section id="about" class="text-center md:text-start">
        <p
          v-for="(section, index) in sections" :key="index"
          v-motion class="text-muted-foreground border-b py-4 text-sm"
          :visible="{ opacity: 1, x: 0 }" :duration="800"
        >
          {{ t(section) }}
        </p>
      </section>
      <Experience />
    </div>

    <div class="mb-8 flex flex-col gap-8 text-center md:w-1/3 md:text-start">
      <Stack />
      <hr class="w-full">
      <Contact />
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

const sections = [
  "index.about.section1",
  "index.about.section2",
]
</script>
