<template>
  <div
    v-motion :initial="{ opacity: 0 }"
    :visible="{ opacity: 1 }" :duration="800"
    class="card flex min-h-[145px] flex-col items-center justify-center gap-2 text-center md:min-h-[205px] xl:min-h-0"
  >
    <nuxt-link
      :to="stackItem.link" :title="stackItem.link"
      target="_blank" rel="noopener noreferrer"
      class="hover:scale flex items-center rounded-full p-2 transition-all hover:bg-muted"
    >
      <icon :name="stackItem.icon" size="25" />
    </nuxt-link>

    <h5 class="font-serif">
      {{ stackItem.name }}
    </h5>

    <span class="flex-grow text-center text-sm text-muted-foreground md:text-xs">
      {{ stackItem.description }}
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  stackItem: {
    name: string
    icon: string
    link: string
    description: string
  }
}>()
</script>
