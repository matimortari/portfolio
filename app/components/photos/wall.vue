<template>
  <div class="photos-wall mx-auto w-full max-w-7xl">
    <div v-for="(column, colIndex) in columns" :key="colIndex" class="photos-column">
      <button
        v-for="entry in column" :key="entry.photo.id"
        type="button" class="photos-cell group"
        @click="emit('select', entry.index)"
        @contextmenu.prevent @dragstart.prevent
      >
        <div class="relative w-full overflow-hidden bg-muted transition-[aspect-ratio] duration-300" :style="{ aspectRatio: frameRatio(entry.photo) }">
          <div v-if="!loaded.has(entry.photo.id)" class="absolute inset-0 animate-pulse bg-muted" aria-hidden="true" />
          <PhotosMedia :photo="entry.photo" variant="tile" :loaded="loaded.has(entry.photo.id)" @ready="markLoaded(entry.photo.id)" />
        </div>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  photos: Photo[]
  aspect: "9:16" | "1:1"
}>()

const emit = defineEmits<{ select: [index: number] }>()

const loaded = ref(new Set<number>())
const columnCount = ref(2)
const columns = computed(() => {
  const cols: { photo: Photo, index: number }[][] = Array.from({ length: columnCount.value }, () => [])
  props.photos.forEach((photo, index) => cols[index % columnCount.value]!.push({ photo, index }))
  return cols
})

function frameRatio(photo: Photo) {
  return props.aspect === "1:1" ? "1 / 1" : `${photo.width} / ${photo.height}`
}

function updateColumnCount() {
  if (window.innerWidth >= 1280) {
    columnCount.value = 4
  }
  else if (window.innerWidth >= 768) {
    columnCount.value = 3
  }
  else { columnCount.value = 2 }
}

function markLoaded(id: number) {
  loaded.value = new Set(loaded.value).add(id)
}

onMounted(() => {
  updateColumnCount()
  window.addEventListener("resize", updateColumnCount)
})

onBeforeUnmount(() => window.removeEventListener("resize", updateColumnCount))
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
  user-select: none;
  -webkit-touch-callout: none;
}
</style>
