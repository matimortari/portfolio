<template>
  <header class="flex w-full flex-row items-center gap-4 whitespace-nowrap">
    <h3 v-motion :initial="{ opacity: 0, y: -20 }" :visible-once="{ opacity: 1, y: 0 }" :duration="1000">
      {{ t("index.about.title") }}
    </h3>
    <hr class="w-full">
  </header>

  <div class="my-8 flex w-full flex-col justify-between gap-8 md:flex-row md:gap-20">
    <div class="flex flex-col gap-12 text-center md:w-2/3 md:text-start">
      <section id="about" class="flex flex-col gap-8 2xl:gap-12">
        <div
          v-for="(section, index) in sections" :key="index"
          v-motion :initial="{ opacity: 0, x: -20 }"
          :visible="{ opacity: 1, x: 0 }" :duration="1000"
          class="text-muted-foreground flex flex-row items-start gap-1 text-center text-sm md:max-w-[90%] md:text-start 2xl:text-base"
        >
          <icon name="material-symbols:chevron-right-rounded" size="30" class="text-secondary hidden shrink-0 md:block" />
          <p>
            {{ t(section) }}
          </p>
        </div>
      </section>
      <Experience />
    </div>

    <div class="flex flex-col gap-12 text-center md:w-1/3 md:text-start">
      <Stack />
      <Projects />
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

const sections = [
  "index.about.section1",
  "index.about.section2",
  "index.about.section3",
]
</script>
