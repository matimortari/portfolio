<template>
  <section id="stack" class="flex-1 text-center lg:text-start">
    <h3
      v-motion :initial="{ opacity: 0, y: -20 }" :visible="{ opacity: 1, y: 0 }" :duration="400"
      class="font-serif my-10"
    >
      {{ t("index.stack.title") }}
    </h3>

    <div
      v-motion :initial="{ opacity: 0, y: -40 }" :visible="{ opacity: 1, y: 0 }" :duration="400" :delay="200"
      class="flex flex-col gap-2 lg:grid lg:grid-cols-3"
    >
      <UiStackCard
        v-for="(item, index) in stackItems"
        :key="item.name"
        v-motion
        :name="item.name"
        :icon="item.icon"
        :link="item.link"
        :description="item.description"
        :initial="{ opacity: 0, y: 20 }"
        :visible="{ opacity: 1, y: 0 }"
        :duration="200"
        :delay="100 * Number(index)"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const { t, tm } = useI18n()

const stackItems = computed(() => tm("index.stack.items"))
</script>
