<template>
  <header class="flex w-full flex-row items-center gap-4 whitespace-nowrap">
    <h3 v-motion :initial="{ opacity: 0, y: -20 }" :visible-once="{ opacity: 1, y: 0 }" :duration="500">
      {{ $t("index.about.title") }}
    </h3>
    <span class="divider" />
  </header>

  <div class="my-8 flex w-full flex-col justify-between gap-8 md:flex-row md:gap-16">
    <div class="flex flex-col gap-16 text-center md:max-w-[60%] md:flex-2 md:text-start">
      <section class="flex flex-col gap-8 2xl:gap-16">
        <div
          v-for="(section, index) in ABOUT_SECTIONS" :key="index"
          v-motion :initial="{ opacity: 0, x: -20 }"
          :visible="{ opacity: 1, x: 0 }" :duration="500"
          :delay="index * 200" class="flex flex-row items-start gap-1"
        >
          <icon name="material-symbols:chevron-right-rounded" size="30" class="hidden shrink-0 text-secondary md:block" />
          <p class="text-sm text-muted-foreground md:text-start 2xl:text-base">
            {{ $t(section.text) }}
          </p>
        </div>
      </section>

      <Experience />
      <Stack />
    </div>

    <div class="flex flex-col gap-16 text-center md:flex-1 md:text-start">
      <Projects />
    </div>
  </div>
</template>
