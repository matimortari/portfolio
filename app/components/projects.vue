<template>
  <section id="projects" class="flex flex-col items-center justify-center gap-8 py-4 text-sm md:items-start">
    <header class="flex w-full flex-row items-center gap-4 whitespace-nowrap">
      <h4 v-motion :initial="{ opacity: 0, y: -10 }" :visible-once="{ opacity: 1, y: 0 }" :duration="1000">
        {{ $t("index.projects.title") }}
      </h4>
      <span class="divider" />
    </header>

    <div class="flex flex-col items-center gap-4 md:items-start">
      <div
        v-for="(project, index) in PROJECT_ITEMS" :key="index"
        v-motion :initial="{ opacity: 0 }"
        :visible="{ opacity: 1 }" :duration="1000"
        :delay="100 * Number(index)" class="flex flex-col items-center gap-2 text-center md:items-start md:text-start"
      >
        <div class="project-container max-w-[500px] 2xl:max-w-[600px]">
          <img :src="project.image" :alt="$t(project.title)" class="right-1 bottom-1 select-none">
        </div>

        <div class="my-2 flex w-full flex-row items-center gap-2 whitespace-nowrap">
          <h4>
            {{ $t(project.title) }}
          </h4>
          <span class="divider" />

          <div class="flex flex-row items-center gap-2">
            <nuxt-link :to="project.sourceUrl" target="_blank" class="flex shrink-0 items-center transition-all duration-500 hover:scale-125 hover:text-secondary">
              <icon name="lineicons:github" size="30" />
            </nuxt-link>
            <nuxt-link :to="project.demoUrl" target="_blank" class="flex shrink-0 items-center transition-all duration-500 hover:scale-125 hover:text-secondary">
              <icon name="material-symbols:share-windows" size="30" />
            </nuxt-link>
          </div>
        </div>

        <div class="flex flex-wrap justify-center gap-1 md:justify-start">
          <span v-for="(skill) in project.stack" :key="skill" class="label rounded-full! bg-muted!">
            {{ skill }}
          </span>
        </div>

        <p class="max-w-xl text-sm text-muted-foreground">
          {{ $t(project.description) }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.project-container {
  position: relative;
  border-radius: 1rem;
  aspect-ratio: 2 / 1;
  width: 100%;
  filter: brightness(0.7);
  box-shadow: 2px 2px 0 2px var(--primary);
  transition: all 0.5s ease-in-out;
}
.project-container:hover {
  filter: brightness(1);
  transform: scale(1.02);
}
.project-container img {
  position: absolute;
  border-radius: 1rem;
  border: 3px solid var(--muted);
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s ease-in-out;
}
</style>
