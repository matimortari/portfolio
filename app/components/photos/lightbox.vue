<template>
  <Teleport to="body">
    <Transition name="lightbox-overlay">
      <div
        v-if="index !== null" class="fixed inset-0 z-100 flex flex-col bg-background/95"
        @click="index = null" @contextmenu.prevent
        @dragstart.prevent
      >
        <div class="flex items-center justify-between px-4 py-3 font-mono text-xs tracking-widest text-muted-foreground uppercase">
          <span>{{ index + 1 }} / {{ photos.length }}</span>
          <button type="button" class="p-1 transition-colors duration-300 hover:text-foreground" aria-label="Close" @click.stop="index = null">
            <icon name="material-symbols:close" size="30" />
          </button>
        </div>

        <div class="relative flex min-h-0 flex-1 items-center justify-center px-10 sm:px-16" @click.stop>
          <button type="button" class="absolute left-1 z-10 p-2 font-mono text-xs tracking-widest text-muted-foreground uppercase transition-colors duration-300 hover:text-foreground sm:left-4" aria-label="Previous" @click="showPrev">
            prev
          </button>

          <Transition name="lightbox-image" mode="out-in">
            <PhotosMedia v-if="selectedPhoto" :key="selectedPhoto.id" :photo="selectedPhoto" variant="stage" />
          </Transition>

          <button type="button" class="absolute right-1 z-10 p-2 font-mono text-xs tracking-widest text-muted-foreground uppercase transition-colors duration-300 hover:text-foreground sm:right-4" aria-label="Next" @click="showNext">
            next
          </button>
        </div>

        <div class="flex justify-center gap-2 overflow-x-auto p-4">
          <button
            v-for="(photo, photoIndex) in photos" :key="`thumb-${photo.id}`"
            type="button" class="size-1.5 shrink-0 rounded-full transition-colors duration-300"
            :class="photoIndex === index ? 'bg-foreground' : 'bg-muted-foreground/35 hover:bg-muted-foreground'"
            :aria-label="`Go to ${photo.type} ${photo.id}`" @click.stop="index = photoIndex"
          />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
const props = defineProps<{ photos: Photo[] }>()
const index = defineModel<number | null>({ required: true })
const selectedPhoto = computed(() => index.value === null ? null : props.photos[index.value] ?? null)

function showPrev() {
  if (index.value === null || props.photos.length === 0) {
    return
  }
  index.value = (index.value - 1 + props.photos.length) % props.photos.length
}

function showNext() {
  if (index.value === null || props.photos.length === 0) {
    return
  }
  index.value = (index.value + 1) % props.photos.length
}

function handleKeydown(e: KeyboardEvent) {
  if (index.value === null) {
    return
  }
  if (e.key === "Escape") {
    close()
  }
  else if (e.key === "ArrowLeft") {
    showPrev()
  }
  else if (e.key === "ArrowRight") {
    showNext()
  }
}

onMounted(() => window.addEventListener("keydown", handleKeydown))
watch(index, value => document.body.style.overflow = value === null ? "" : "hidden")
onBeforeUnmount(() => {
  window.removeEventListener("keydown", handleKeydown)
  document.body.style.overflow = ""
})
</script>

<style scoped>
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
