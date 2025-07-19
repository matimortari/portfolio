<template>
  <div
    v-motion :initial="{ opacity: 0 }"
    :visible="{ opacity: 1 }" :duration="400"
    class="flex flex-col items-center gap-2 text-center lg:items-start lg:text-start"
  >
    <img
      :src="image" :alt="title"
      width="600" height="320"
      class="card p-0"
    >

    <div
      v-motion :initial="{ opacity: 0, x: -20 }"
      :visible="{ opacity: 1, x: 0 }" :duration="400"
      class="my-1 flex flex-row items-center gap-4"
    >
      <h4 class="font-serif">
        {{ title }}
      </h4>

      <div class="flex flex-row items-center gap-2">
        <a :href="source" :title="source" target="_blank" rel="noopener noreferrer">
          <Icon name="simple-icons:github" size="25" class="animate-scale" />
        </a>
        <a :href="link" :title="link" target="_blank" rel="noopener noreferrer">
          <Icon name="material-symbols:captive-portal" size="25" class="animate-scale" />
        </a>
      </div>
    </div>

    <div
      v-motion :initial="{ opacity: 0, y: -20 }"
      :visible="{ opacity: 1, y: 0 }" :duration="400"
      class="flex  flex-wrap justify-center gap-1 lg:justify-start"
    >
      <span v-for="skill in skills" :key="skill" class="rounded-full bg-accent px-2 py-1 text-xs font-semibold">
        {{ skill }}
      </span>
    </div>

    <p
      v-motion :initial="{ opacity: 0, x: 20 }"
      :visible="{ opacity: 1, x: 0 }" :duration="400"
      class="text-sm max-w-xl text-muted-foreground"
    >
      {{ description }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  source: { type: String, required: true },
  link: { type: String, required: true },
  skills: { type: Array as () => string[], required: true },
})
</script>
