<template>
  <div
    v-motion :initial="{ opacity: 0 }" :visible="{ opacity: 1 }" :duration="400"
    class="card flex min-h-[175px] sm:min-h-0 lg:min-h-[205px] xl:min-h-0 flex-col items-center justify-center text-center gap-2"
  >
    <a :href="link" :title="link" target="_blank" rel="noopener noreferrer">
      <Icon :name="icon" size="25" class="animate-scale" />
    </a>

    <h5 class="font-serif">
      {{ name }}
    </h5>

    <span class="flex-grow text-xs text-muted-foreground text-center">
      {{ description }}
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps({
  name: { type: String, required: true },
  icon: { type: String, required: true },
  link: { type: String, required: true },
  description: { type: String, required: true }
})
</script>
