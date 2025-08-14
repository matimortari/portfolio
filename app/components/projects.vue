<template>
  <section id="projects" class="text-center">
    <h3
      v-motion :initial="{ opacity: 0, y: -20 }"
      :visible="{ opacity: 1, y: 0 }" :duration="800"
      class="my-10 font-serif"
    >
      {{ t("index.projects.title") }}
    </h3>

    <div
      v-motion :initial="{ opacity: 0, y: -40 }"
      :visible="{ opacity: 1, y: 0 }" :duration="800"
      :delay="200" class="flex w-full flex-col justify-center gap-12 md:flex-row xl:gap-40"
    >
      <UiProjectCard
        v-for="(project, index) in tm('index.projects.items')" :key="project.title"
        v-motion :project="project"
        :initial="{ opacity: 0, y: 40 }" :visible="{ opacity: 1, y: 0 }"
        :duration="400" :delay="100 * Number(index)"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const { t, tm } = useI18n()
</script>
