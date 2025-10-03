<template>
  <section id="stack" class="flex flex-col items-center justify-center gap-8 text-sm md:items-start">
    <header class="flex w-full flex-row items-center gap-4 whitespace-nowrap">
      <h4 v-motion :initial="{ opacity: 0, y: -20 }" :visible-once="{ opacity: 1, y: 0 }" :duration="1000">
        {{ t("index.stack.title") }}
      </h4>
      <hr class="w-full">
    </header>

    <div class="flex flex-wrap justify-center gap-1 md:justify-start">
      <div
        v-for="(item, index) in stackItems" :key="index"
        v-motion class="label group"
        :title="t(item.description)" :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0 }" :duration="500"
        :delay="100 * Number(index)"
      >
        <nuxt-link :to="item.url" target="_blank" class="flex flex-row items-center gap-1 transition-all duration-500">
          <icon :name="item.icon" size="25" class="group-hover:scale shrink-0 transition-all duration-500" />
          <span>{{ (item.name) }}</span>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>
