<template>
  <section id="projects" class="flex-1 text-center">
    <h3
      v-motion :initial="{ opacity: 0, y: -20 }" :visible="{ opacity: 1, y: 0 }" :duration="800"
      class="font-serif my-10"
    >
      {{ t("index.projects.title") }}
    </h3>

    <div
      v-motion :initial="{ opacity: 0, y: -40 }" :visible="{ opacity: 1, y: 0 }" :duration="400" :delay="200"
      class="flex w-full flex-col justify-center gap-12 lg:flex-row lg:gap-36 2xl:gap-52"
    >
      <UiProjectCard
        v-for="(project, index) in projects"
        :key="project.title"
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :visible="{ opacity: 1, y: 0 }"
        :duration="400" :delay="600 * Number(index)" :title="project.title"
        :description="project.description" :image="project.image" :skills="project.skills" :source="project.source"
        :link="project.link"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const { t, tm } = useI18n()

const projects = computed(() => tm("index.projects.items"))
</script>
