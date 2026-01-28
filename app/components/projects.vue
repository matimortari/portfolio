<template>
  <section
    id="projects" v-motion
    :initial="{ opacity: 0, y: 20 }" :visible-once="{ opacity: 1, y: 0 }"
    :duration="500" class="mx-auto flex w-full max-w-7xl flex-col items-center gap-8"
  >
    <h3>
      {{ $t("index.projects.title") }}
    </h3>

    <div class="grid w-full gap-24 md:grid-cols-2">
      <article
        v-for="(project, index) in PROJECT_ITEMS" :key="index"
        v-motion :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0 }" :duration="500"
        :delay="index * 150" class="flex flex-col gap-2"
      >
        <div class="w-full overflow-hidden rounded-md border">
          <img :src="project.image" :alt="$t(project.title)" class="h-auto w-full transition-transform duration-500 hover:scale-105">
        </div>

        <div class="flex flex-col gap-2">
          <div class="flex flex-row items-center justify-between">
            <h4>
              {{ $t(project.title) }}
            </h4>

            <div class="flex flex-row items-center gap-2">
              <nuxt-link :to="project.demoUrl" target="_blank" class="btn">
                <icon name="material-symbols:share-windows" size="20" class="transition-all duration-500 group-hover:scale-125" />
              </nuxt-link>
              <nuxt-link :to="project.sourceUrl" target="_blank" class="btn">
                <icon name="simple-icons:github" size="20" class="transition-all duration-500 group-hover:scale-125" />
              </nuxt-link>
            </div>
          </div>

          <p class="text-sm text-muted-foreground md:text-start">
            {{ $t(project.description) }}
          </p>

          <div class="flex flex-wrap gap-2">
            <span v-for="tech in project.stack" :key="tech" class="label">{{ tech }}</span>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
