<template>
  <div
    v-motion :initial="{ opacity: 0 }"
    :visible="{ opacity: 1 }" :duration="800"
    class="stack-item group flex min-h-[150px] flex-col justify-center gap-2 p-2 md:min-h-[200px] xl:min-h-0"
  >
    <div class="flex flex-row items-center justify-between gap-2 border-b-2 p-2">
      <h5 class="font-serif">
        {{ stackItem.name }}
      </h5>

      <nuxt-link :to="stackItem.url" :title="stackItem.url" class="hover:scale flex items-center rounded-full p-1 transition-all duration-500 hover:bg-muted">
        <icon :name="stackItem.icon" size="35" />
      </nuxt-link>
    </div>

    <icon :name="stackItem.icon" size="150" class="absolute -bottom-10 -left-6 -z-10 opacity-10 transition-opacity duration-500 group-hover:opacity-20" />

    <span class="text-start text-sm text-muted-foreground md:flex-grow md:text-xs">
      {{ stackItem.description }}
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  stackItem: {
    name: string
    icon: string
    url: string
    description: string
  }
}>()
</script>

<style scoped>
.stack-item {
  border: 2px solid var(--border);
  border-radius: 0.5rem;
  overflow: hidden;
  position: relative;
  transition: all 0.5s ease-in-out;
}
</style>
