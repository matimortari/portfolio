<template>
  <section id="stack" class="flex-1 text-center md:text-start">
    <h3
      v-motion :initial="{ opacity: 0, y: -20 }"
      :visible="{ opacity: 1, y: 0 }" :duration="800"
      class="my-10 font-serif"
    >
      {{ t("index.stack.title") }}
    </h3>

    <div
      v-motion :initial="{ opacity: 0, y: -40 }"
      :visible="{ opacity: 1, y: 0 }" :duration="800"
      :delay="200" class="flex flex-col gap-2 md:grid md:grid-cols-3"
    >
      <UiStackCard
        v-for="(item, index) in tm('index.stack.items')" :key="item.name"
        v-motion :stack-item="item"
        :initial="{ opacity: 0, y: 20 }" :visible="{ opacity: 1, y: 0 }"
        :duration="400" :delay="100 * Number(index)"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const { t, tm } = useI18n()
</script>
