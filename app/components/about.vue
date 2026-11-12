<template>
  <section id="about" class="mx-auto flex max-w-3xl flex-col gap-8 text-center">
    <h3 v-motion="MOTION_FADE_UP">
      {{ $t("index.about.title") }}
    </h3>

    <div class="flex flex-col gap-4">
      <template v-for="(section, index) in ABOUT_SECTIONS" :key="index">
        <p v-motion="MOTION_FADE_UP" :delay="80 + index * 90" class="text-sm text-muted-foreground">
          {{ $t(section.text) }}
        </p>
        <span v-if="index < ABOUT_SECTIONS.length - 1" class="mx-auto w-3/4 border-t border-muted" />
      </template>
    </div>
  </section>
</template>
