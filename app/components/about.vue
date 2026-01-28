<template>
  <section
    id="about" v-motion
    :initial="{ opacity: 0, y: 20 }" :visible-once="{ opacity: 1, y: 0 }"
    :duration="500" class="mx-auto flex max-w-3xl flex-col gap-4 text-center"
  >
    <h3>
      {{ $t("index.about.title") }}
    </h3>

    <p v-for="(section, index) in ABOUT_SECTIONS" :key="index" class="text-sm text-muted-foreground">
      {{ $t(section.text) }}
    </p>
  </section>
</template>
