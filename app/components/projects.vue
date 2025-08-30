<template>
  <header class="flex w-full flex-row items-center gap-4 whitespace-nowrap">
    <hr class="w-full">
    <h3 v-motion :initial="{ opacity: 0, y: -20 }" :visible="{ opacity: 1, y: 0 }" :duration="800">
      {{ t("index.projects.title") }}
    </h3>
  </header>

  <section
    id="projects"
    v-motion :initial="{ opacity: 0, y: -40 }"
    :visible="{ opacity: 1, y: 0 }" :duration="800"
    :delay="200" class="my-4 flex w-full flex-col justify-center gap-8 md:flex-row md:gap-24 2xl:gap-32"
  >
    <div
      v-for="(project, index) in tm('index.projects.items')" :key="project.title"
      v-motion :initial="{ opacity: 0, y: 40 }"
      :visible="{ opacity: 1, y: 0 }" :duration="400"
      :delay="100 * Number(index)"
      class="flex flex-col items-center gap-2 text-center md:items-start md:text-start"
    >
      <div class="project-container relative mb-2 w-full max-w-[600px]">
        <img :src="project.image" :alt="project.title" class="absolute right-1.5 bottom-1.5 size-full rounded-lg select-none">
      </div>

      <div
        v-motion :initial="{ opacity: 0, x: -20 }"
        :visible="{ opacity: 1, x: 0 }" :duration="800"
        class="flex w-full flex-row items-center gap-2 whitespace-nowrap"
      >
        <h4>
          {{ project.title }}
        </h4>
        <hr class="w-full">

        <div class="flex flex-row items-center gap-2">
          <nuxt-link :to="project.sourceUrl" :title="project.sourceUrl" class="hover:scale hover:text-secondary flex items-center transition-all duration-500" external>
            <icon name="lineicons:github" size="30" />
          </nuxt-link>
          <nuxt-link :to="project.demoUrl" :title="project.demoUrl" class="hover:scale hover:text-secondary flex items-center transition-all duration-500" external>
            <icon name="material-symbols:share-windows" size="30" />
          </nuxt-link>
        </div>
      </div>

      <div
        v-motion :initial="{ opacity: 0, y: -20 }"
        :visible="{ opacity: 1, y: 0 }" :duration="800"
        class="flex flex-wrap justify-center gap-1 md:justify-start"
      >
        <span v-for="skill in project.stack" :key="skill" class="!bg-accent label !rounded-full">
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
  </section>
</template>

<script setup lang="ts">
const { t, tm } = useI18n()
</script>

<style scoped>
.project-container {
  border-radius: 1rem;
  aspect-ratio: 2 / 1;
  width: 100%;
  max-width: 500px;
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
