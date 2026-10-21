<template>
  <div class="fixed top-0 z-50 flex w-full items-center justify-between p-4">
    <nuxt-link
      v-motion to="/"
      class="pl-4 transition-all duration-500 outline-none select-none hover:scale-125 hover:rotate-12"
      :initial="{ opacity: 0, scale: 0, rotate: -180 }" :visible-once="{ opacity: 1, scale: 1, rotate: 0 }"
      :duration="500" :delay="200"
    >
      <img src="/assets/symbol.png" alt="Logo" width="35" height="35">
    </nuxt-link>

    <div class="relative mr-4 grid grid-cols-2 rounded-full border bg-background/50 p-1 backdrop-blur-sm" role="group" aria-label="Aspect">
      <div class="pointer-events-none absolute top-1 left-1 h-[calc(100%-8px)] w-[calc(50%-4px)] rounded-full bg-primary transition-transform duration-300 ease-out" :class="aspect === '1:1' ? 'translate-x-full' : 'translate-x-0'" />
      <button
        v-for="option in aspects" :key="option"
        type="button" class="relative z-10 rounded-full px-3 py-1.5 text-center font-mono text-xs tracking-widest transition-colors duration-300"
        :class="aspect === option ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'" :aria-pressed="aspect === option"
        @click="aspect = option"
      >
        {{ option }}
      </button>
    </div>
  </div>

  <main class="px-4 py-24">
    <PhotosWall :photos="photos" :aspect="aspect" @select="selectedIndex = $event" />
    <PhotosLightbox v-model="selectedIndex" :photos="photos" />
  </main>
</template>

<script setup lang="ts">
const { public: { baseURL } } = useRuntimeConfig()
const photos = ref<Photo[]>([])
const selectedIndex = ref<number | null>(null)
const aspects = ["9:16", "1:1"] as const
const aspect = ref<(typeof aspects)[number]>("9:16")

onMounted(async () => {
  const { PHOTOS } = await import("~/utils/photos")
  photos.value = PHOTOS
})

useHead({
  title: computed(() => $t("photos.meta.title")),
  link: [{ rel: "canonical", href: `${baseURL}/photos` }],
  meta: [{ name: "description", content: computed(() => $t("photos.meta.description")) }],
})
</script>
