<template>
  <section id="about" class="mx-auto flex max-w-3xl flex-col gap-8 text-center">
    <h3
      v-motion :initial="{ opacity: 0, scale: 0.9 }"
      :visible-once="{ opacity: 1, scale: 1 }"
      :duration="600"
    >
      {{ $t("index.about.title") }}
    </h3>

    <div class="flex flex-col gap-4">
      <template v-for="(section, index) in ABOUT_SECTIONS" :key="index">
        <p
          v-motion :initial="{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }"
          :visible-once="{ opacity: 1, x: 0 }" :delay="index * 100"
          :duration="500" class="text-sm text-muted-foreground"
        >
          {{ $t(section.text) }}
        </p>
        <span v-if="index < ABOUT_SECTIONS.length - 1" class="mx-auto w-3/4 border-t border-muted" />
      </template>
    </div>
  </section>
</template>
