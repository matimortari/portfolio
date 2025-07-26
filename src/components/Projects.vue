<template>
  <section id="projects" class="flex-1 text-center">
    <h3
      v-motion :initial="{ opacity: 0, y: -20 }"
      :visible="{ opacity: 1, y: 0 }" :transition="{ duration: 400 }"
      class="my-10 font-serif"
    >
      {{ t("index.projects.title") }}
    </h3>

    <div
      v-motion :initial="{ opacity: 0, y: -40 }"
      :visible="{ opacity: 1, y: 0 }" :transition="{ duration: 400 }"
      :delay="200"
      class="flex w-full flex-col justify-center gap-12 lg:flex-row xl:gap-40"
    >
      <UiProjectCard
        v-for="(project, index) in projects" :key="project.title"
        v-motion :initial="{ opacity: 0, y: 40 }"
        :visible="{ opacity: 1, y: 0 }" :transition="{ duration: 400 }"
        :delay="100 * Number(index)" :title="project.title"
        :description="project.description" :image="project.image"
        :skills="project.skills" :source="project.source"
        :link="project.link"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const { t, tm } = useI18n()

const projects = computed(() => tm("index.projects.items"))
</script>
