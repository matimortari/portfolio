<template>
  <div
    v-motion :initial="{ opacity: 0 }"
    :visible="{ opacity: 1 }" :duration="800"
    class="flex flex-col items-center gap-2 text-center md:items-start md:text-start"
  >
    <div class="project-container relative mb-2 w-full max-w-[600px]">
      <img :src="project.image" :alt="project.title" class="absolute right-1.5 bottom-1.5 size-full rounded-lg select-none">
    </div>

    <div
      v-motion :initial="{ opacity: 0, x: -20 }"
      :visible="{ opacity: 1, x: 0 }" :duration="800"
      class="my-1 flex flex-row items-center gap-4"
    >
      <h4 class="font-serif">
        {{ project.title }}
      </h4>

      <div class="flex flex-row items-center gap-2">
        <nuxt-link :to="project.sourceUrl" :title="project.sourceUrl">
          <icon name="simple-icons:github" size="25" class="hover:scale flex items-center transition-all duration-500" />
        </nuxt-link>
        <nuxt-link :to="project.demoUrl" :title="project.demoUrl">
          <icon name="material-symbols:captive-portal" size="25" class="hover:scale flex items-center transition-all duration-500" />
        </nuxt-link>
      </div>
    </div>

    <div
      v-motion :initial="{ opacity: 0, y: -20 }"
      :visible="{ opacity: 1, y: 0 }" :duration="800"
      class="flex flex-wrap justify-center gap-1 md:justify-start"
    >
      <span v-for="skill in project.skills" :key="skill" class="bg-accent rounded-full px-2 py-1 text-xs">
        {{ skill }}
      </span>
    </div>

    <p
      v-motion :initial="{ opacity: 0, x: 20 }"
      :visible="{ opacity: 1, x: 0 }" :duration="800"
      class="text-muted-foreground max-w-xl text-sm"
    >
      {{ project.description }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  project: {
    title: string
    description: string
    image: string
    skills: string[]
    sourceUrl: string
    demoUrl: string
  }
}>()
</script>

<style scoped>
.project-container {
  border-radius: 1rem;
  aspect-ratio: 2 / 1;
  width: 100%;
  max-width: 600px;
  box-shadow: 4px 4px 0 1px var(--accent);
  transition: all 0.5s ease-in-out;
}
.project-container:hover {
  transform: scale(1.02);
}
.project-container img {
  border-radius: 1rem;
  border: 2px solid var(--accent);
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s ease-in-out;
}
</style>
