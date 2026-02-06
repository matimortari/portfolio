<template>
  <section id="projects" class="mx-auto flex max-w-7xl flex-col items-center gap-8">
    <h3 v-motion :initial="{ opacity: 0, y: -30 }" :visible-once="{ opacity: 1, y: 0 }" :duration="600">
      {{ $t("index.projects.title") }}
    </h3>

    <div class="flex w-full flex-col justify-between gap-12 md:flex-row">
      <div
        v-for="(project, index) in PROJECT_ITEMS" :key="index"
        v-motion :initial="{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }"
        :visible-once="{ opacity: 1, x: 0 }" :duration="600"
        :delay="index * 200" class="flex flex-col gap-2"
      >
        <div class="group w-full overflow-hidden rounded-md border">
          <img :src="project.image" :alt="$t(project.title)" class="h-auto w-full transition-all duration-500 group-hover:scale-105">
        </div>

        <div class="flex flex-col gap-2">
          <div class="flex flex-row items-center justify-between">
            <h4>
              {{ $t(project.title) }}
            </h4>
            <div class="flex flex-row items-center gap-2">
              <nuxt-link :to="project.demoUrl" target="_blank" class="btn group">
                <icon name="material-symbols:share-windows" size="20" class="shrink-0 duration-500 group-hover:scale-110" />
              </nuxt-link>
              <nuxt-link :to="project.sourceUrl" target="_blank" class="btn group">
                <icon name="simple-icons:github" size="20" class="shrink-0 duration-500 group-hover:scale-110" />
              </nuxt-link>
            </div>
          </div>

          <p class="text-sm text-muted-foreground md:text-start">
            {{ $t(project.description) }}
          </p>

          <div class="flex flex-wrap justify-center gap-1 md:justify-start">
            <span v-for="item in project.stack" :key="item" class="label">{{ item }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
