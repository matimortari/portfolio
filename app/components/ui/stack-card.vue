<template>
  <div
    v-motion :initial="{ opacity: 0 }"
    :visible="{ opacity: 1 }" :duration="800"
    class="stack-item flex min-h-[145px] flex-col justify-center gap-2 p-4 md:min-h-[205px] md:p-2 xl:min-h-0"
  >
    <div class="flex flex-row items-center gap-2">
      <nuxt-link
        :to="stackItem.link" :title="stackItem.link"
        target="_blank" rel="noopener noreferrer"
        class="hover:scale flex items-center rounded-full p-1 transition-all hover:bg-muted"
      >
        <icon :name="stackItem.icon" size="35" />
      </nuxt-link>

      <h5 class="font-serif">
        {{ stackItem.name }}
      </h5>
    </div>

    <icon :name="stackItem.icon" size="120" class="absolute -bottom-8 -right-4 -z-10 opacity-10" />

    <span class="p-1 text-start text-sm text-muted-foreground md:flex-grow md:text-xs">
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
