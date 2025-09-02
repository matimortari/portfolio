<template>
  <header class="flex w-full flex-row items-center gap-8 whitespace-nowrap">
    <h3 v-motion :initial="{ opacity: 0, y: -20 }" :visible="{ opacity: 1, y: 0 }" :duration="800">
      {{ t("index.about.title") }}
    </h3>
    <hr class="w-full">
  </header>

  <div class="my-8 flex w-full flex-col justify-between gap-8 md:flex-row md:gap-20">
    <div class=" flex flex-col gap-8 text-center md:w-2/3 md:gap-12 md:text-start">
      <section id="about" class=" flex flex-col gap-4 md:gap-8">
        <div
          v-for="(section, index) in sections" :key="index"
          v-motion :initial="{ opacity: 0, x: -20 }"
          :visible="{ opacity: 1, x: 0 }"
          :duration="800" class="text-muted-foreground flex flex-row items-start gap-1 text-center text-sm md:text-start"
        >
          <span class="hidden md:block">
            <icon name="material-symbols:chevron-right-rounded" size="30" class="text-secondary shrink-0" />
          </span>
          <p>
            {{ t(section) }}
          </p>
        </div>
      </section>
      <Experience />
    </div>

    <div class="flex flex-col gap-8 text-center md:w-1/3 md:gap-12 md:text-start">
      <Stack />
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
