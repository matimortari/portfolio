<template>
  <section id="stack" class="flex flex-col items-center justify-center gap-8 text-sm md:items-start">
    <header class="flex w-full flex-row items-center gap-6 whitespace-nowrap">
      <h4 v-motion :initial="{ opacity: 0, y: -20 }" :visible="{ opacity: 1, y: 0 }" :duration="800">
        {{ t("index.stack.title") }}
      </h4>
      <hr class="w-full">
    </header>

    <div class="flex flex-wrap justify-center gap-1 md:justify-start">
      <div
        v-for="(item, index) in stackItems" :key="index"
        v-motion class="label"
        :title="t(item.description)" :initial="{ opacity: 0, y: 20 }"
        :visible="{ opacity: 1, y: 0 }" :duration="400"
        :delay="100 * Number(index)"
      >
        <nuxt-link :to="item.url" target="_blank" class="hover:scale flex flex-row items-center gap-1 transition-transform duration-500">
          <icon :name="item.icon" size="25" class="shrink-0" />
          <span>{{ (item.name) }}</span>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>
