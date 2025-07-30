<template>
  <div
    v-motion :initial="{ opacity: 0 }"
    :visible="{ opacity: 1 }" :duration="400"
    class="card flex min-h-[145px] flex-col items-center justify-center gap-2 text-center lg:min-h-[205px] xl:min-h-0"
  >
    <a :href="link" :title="link" target="_blank" rel="noopener noreferrer">
      <Icon :name="icon" size="25" class="animate-scale" />
    </a>

    <h6 class="font-serif">
      {{ name }}
    </h6>

    <span class="flex-grow text-center text-sm text-muted-foreground lg:text-xs">
      {{ description }}
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps({
  name: { type: String, required: true },
  icon: { type: String, required: true },
  link: { type: String, required: true },
  description: { type: String, required: true },
})
</script>
