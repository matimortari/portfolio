<template>
  <div class="fixed top-0 z-50 w-full px-4">
    <nuxt-link
      v-motion to="/"
      class="pl-4 transition-all duration-500 outline-none select-none hover:scale-125 hover:rotate-12"
      :initial="{ opacity: 0, scale: 0, rotate: -180 }" :visible-once="{ opacity: 1, scale: 1, rotate: 0 }"
      :duration="500" :delay="200"
    >
      <img src="/assets/symbol.png" alt="Logo" width="35" height="35">
    </nuxt-link>
  </div>

  <main class="px-4 py-24">
    <div class="photos-wall mx-auto w-full max-w-6xl">
      <div v-for="(column, colIndex) in columns" :key="colIndex" class="photos-column">
        <button
          v-for="entry in column" :key="entry.photo.id"
          type="button" class="photos-cell group"
          @click="openLightbox(entry.index)"
        >
          <div class="relative w-full overflow-hidden bg-muted" :style="{ aspectRatio: `${entry.photo.width} / ${entry.photo.height}` }">
            <div v-if="!loaded.has(entry.photo.id)" class="absolute inset-0 animate-pulse bg-muted" aria-hidden="true" />
            <img
              :src="entry.photo.url" :alt="`Photo ${entry.photo.id}`"
              :width="entry.photo.width" :height="entry.photo.height"
              class="size-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-85"
              :class="{ 'opacity-100': loaded.has(entry.photo.id) }" loading="lazy"
              @load="markLoaded(entry.photo.id)" @error="markLoaded(entry.photo.id)"
            >
          </div>
        </button>
      </div>
    </div>

    <Teleport to="body">
      <Transition name="lightbox-overlay">
        <div v-if="selectedIndex !== null" class="fixed inset-0 z-100 flex flex-col bg-background/95" @click="closeLightbox">
          <div class="flex items-center justify-between px-4 py-3 font-mono text-xs tracking-widest text-muted-foreground uppercase">
            <span>{{ selectedIndex + 1 }} / {{ photos.length }}</span>
            <button type="button" class="p-1 transition-colors duration-300 hover:text-foreground" aria-label="Close" @click.stop="closeLightbox">
              <icon name="material-symbols:close" size="30" />
            </button>
          </div>

          <div class="relative flex min-h-0 flex-1 items-center justify-center px-10 sm:px-16" @click.stop>
            <button type="button" class="absolute left-1 z-10 p-2 font-mono text-xs tracking-widest text-muted-foreground uppercase transition-colors duration-300 hover:text-foreground sm:left-4" aria-label="Previous photo" @click="showPrev">
              prev
            </button>

            <Transition name="lightbox-image" mode="out-in">
              <img
                v-if="selectedPhoto" :key="selectedPhoto.id"
                :src="selectedPhoto.url" :alt="`Photo ${selectedPhoto.id}`"
                class="max-h-[82vh] max-w-full object-contain"
              >
            </Transition>

            <button type="button" class="absolute right-1 z-10 p-2 font-mono text-xs tracking-widest text-muted-foreground uppercase transition-colors duration-300 hover:text-foreground sm:right-4" aria-label="Next photo" @click="showNext">
              next
            </button>
          </div>

          <div class="flex justify-center gap-2 overflow-x-auto px-4 py-5">
            <button
              v-for="(photo, index) in photos" :key="`thumb-${photo.id}`"
              type="button" class="size-1.5 shrink-0 rounded-full transition-colors duration-300"
              :class="index === selectedIndex ? 'bg-foreground' : 'bg-muted-foreground/35 hover:bg-muted-foreground'"
              :aria-label="`Go to photo ${photo.id}`" @click.stop="selectedIndex = index"
            />
          </div>
        </div>
      </Transition>
    </Teleport>
  </main>
</template>

<script setup lang="ts">
const { public: { baseURL } } = useRuntimeConfig()
const photos = ref<Photo[]>([])
const selectedIndex = ref<number | null>(null)
const loaded = ref(new Set<number>())
const columnCount = ref(2)
const selectedPhoto = computed(() => selectedIndex.value === null ? null : photos.value[selectedIndex.value] ?? null)
const columns = computed(() => {
  const cols: { photo: Photo, index: number }[][] = Array.from({ length: columnCount.value }, () => [])
  photos.value.forEach((photo, index) => cols[index % columnCount.value]!.push({ photo, index }))
  return cols
})

function updateColumnCount() {
  const w = window.innerWidth
  if (w >= 1280) {
    columnCount.value = 6
  }
  else if (w >= 1024) {
    columnCount.value = 5
  }
  else if (w >= 768) {
    columnCount.value = 4
  }
  else if (w >= 640) {
    columnCount.value = 3
  }
  else { columnCount.value = 2 }
}

onMounted(async () => {
  updateColumnCount()
  window.addEventListener("resize", updateColumnCount)
  window.addEventListener("keydown", handleKeydown)
  const { PHOTOS } = await import("~/utils/photos")
  photos.value = PHOTOS
})

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateColumnCount)
  window.removeEventListener("keydown", handleKeydown)
  document.body.style.overflow = ""
})

function markLoaded(id: number) {
  loaded.value = new Set(loaded.value).add(id)
}

function openLightbox(index: number) {
  selectedIndex.value = index
  document.body.style.overflow = "hidden"
}

function closeLightbox() {
  selectedIndex.value = null
  document.body.style.overflow = ""
}

function showPrev() {
  if (selectedIndex.value === null || photos.value.length === 0) {
    return
  }
  selectedIndex.value = (selectedIndex.value - 1 + photos.value.length) % photos.value.length
}

function showNext() {
  if (selectedIndex.value === null || photos.value.length === 0) {
    return
  }
  selectedIndex.value = (selectedIndex.value + 1) % photos.value.length
}

function handleKeydown(e: KeyboardEvent) {
  if (selectedIndex.value === null) {
    return
  }
  if (e.key === "Escape") {
    closeLightbox()
  }
  else if (e.key === "ArrowLeft") {
    showPrev()
  }
  else if (e.key === "ArrowRight") {
    showNext()
  }
}

useHead({
  title: computed(() => $t("photos.meta.title")),
  link: [{ rel: "canonical", href: `${baseURL}/photos` }],
  meta: [{ name: "description", content: computed(() => $t("photos.meta.description")) }],
})
</script>

<style scoped>
.photos-wall {
  display: flex;
  align-items: flex-start;
  gap: 8px;
}

.photos-column {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
}

@media (min-width: 768px) {
  .photos-wall,
  .photos-column {
    gap: 10px;
  }
}

@media (min-width: 1280px) {
  .photos-wall,
  .photos-column {
    gap: 12px;
  }
}

.photos-cell {
  display: block;
  width: 100%;
  padding: 0;
  border: 0;
  background: transparent;
}

.lightbox-overlay-enter-active,
.lightbox-overlay-leave-active {
  transition: opacity 280ms;
}

.lightbox-overlay-enter-from,
.lightbox-overlay-leave-to {
  opacity: 0;
}

.lightbox-image-enter-active,
.lightbox-image-leave-active {
  transition: opacity 220ms ease;
}

.lightbox-image-enter-from,
.lightbox-image-leave-to {
  opacity: 0;
}
</style>
