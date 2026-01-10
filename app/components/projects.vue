<template>
  <section id="projects" class="flex flex-1 flex-col items-center justify-center gap-4 text-sm md:items-start">
    <header class="flex w-full flex-col items-center gap-1 whitespace-nowrap md:items-start">
      <h4>
        {{ $t("index.projects.title") }}
      </h4>
      <p class="text-sm font-medium text-muted-foreground">
        {{ $t("index.projects.subtitle") }}
      </p>
    </header>

    <div class="flex flex-col items-center gap-8 md:items-start md:gap-4">
      <div
        v-for="(project, index) in PROJECT_ITEMS" :key="index"
        v-motion :initial="{ opacity: 0 }"
        :visible="{ opacity: 1 }" :duration="500"
        :delay="200 * Number(index)" class="flex flex-col items-center gap-2 text-center md:text-start"
      >
        <div class="project-container">
          <img :src="project.image" :alt="$t(project.title)" class="right-1 bottom-1 select-none">
        </div>

        <div class="flex w-full flex-row items-center gap-2 p-2 whitespace-nowrap">
          <h4>
            {{ $t(project.title) }}
          </h4>
          <span class="divider" />

          <div class="flex flex-row items-center gap-2">
            <nuxt-link :to="project.sourceUrl" target="_blank" class="flex shrink-0 items-center transition-all duration-500 hover:scale-125 hover:text-secondary">
              <icon name="simple-icons:github" size="30" />
            </nuxt-link>
            <nuxt-link :to="project.demoUrl" target="_blank" class="flex shrink-0 items-center transition-all duration-500 hover:scale-125 hover:text-secondary">
              <icon name="material-symbols:share-windows" size="30" />
            </nuxt-link>
          </div>
        </div>

        <div class="flex flex-wrap justify-center gap-1 self-start md:justify-start">
          <span v-for="(skill, i) in project.stack" :key="i" class="label rounded-full! bg-muted!">{{ skill }}</span>
        </div>

        <p class="max-w-xl pb-4 text-sm text-muted-foreground">
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
  filter: brightness(0.8);
  box-shadow: 1px 1px 0 1px var(--primary);
  transition: all 0.5s ease-in-out;
}
.project-container:hover {
  filter: brightness(1);
  transform: scale(1.02);
}
.project-container img {
  position: absolute;
  border-radius: 1rem;
  border: 1px solid var(--primary);
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s ease-in-out;
}
</style>
