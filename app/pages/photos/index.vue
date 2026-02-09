<template>
  <div class="fixed top-0 z-50 w-full px-4">
    <nuxt-link
      v-motion to="/"
      :initial="{ opacity: 0, scale: 0, rotate: -180 }" :visible-once="{ opacity: 1, scale: 1, rotate: 0 }"
      :duration="600" :delay="200"
      class="pl-4 transition-all duration-500 outline-none select-none hover:scale-125 hover:rotate-12"
    >
      <img src="/assets/symbol.png" alt="Logo" width="35" height="35">
    </nuxt-link>
  </div>

  <main class="container mx-auto px-4 py-24">
    <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
      <div v-for="photo in photos" :key="photo.id" class="group relative aspect-square cursor-pointer overflow-hidden rounded-lg bg-zinc-800" @click="openLightbox(photo)">
        <img :src="photo.url" :alt="`Photo ${photo.id}`" class="size-full object-cover transition-transform duration-300 group-hover:scale-110" loading="lazy">
      </div>
    </div>

    <Teleport to="body">
      <Transition name="lightbox-overlay">
        <div v-if="selectedPhoto" class="fixed inset-0 z-100 flex items-center justify-center bg-black/80 p-4" @click="closeLightbox">
          <Transition name="lightbox-image">
            <img
              v-if="selectedPhoto" :src="selectedPhoto.url"
              :alt="`Photo ${selectedPhoto.id}`" class="max-h-[90vh] max-w-full object-contain"
              @click.stop
            >
          </Transition>

          <button class="group fixed top-4 right-4 flex rounded-full bg-muted p-1 text-sm transition-all duration-500 hover:text-primary!" @click="closeLightbox">
            <icon name="material-symbols:close" size="30" />
          </button>
        </div>
      </Transition>
    </Teleport>
  </main>
</template>

<script setup lang="ts">
const photos = ref<Photo[]>([])
const isLoading = ref(true)
const error = ref(false)
const selectedPhoto = ref<Photo | null>(null)

onMounted(async () => {
  try {
    const { PHOTOS } = await import("~/utils/photos")
    photos.value = PHOTOS
  }
  catch (err: any) {
    console.error("Failed to load photos:", err)
    error.value = true
  }
  finally {
    isLoading.value = false
  }
})

function openLightbox(photo: Photo) {
  selectedPhoto.value = photo
  document.body.style.overflow = "hidden"
}

function closeLightbox() {
  selectedPhoto.value = null
  document.body.style.overflow = ""
}

onMounted(() => {
  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      closeLightbox()
    }
  }
  window.addEventListener("keydown", handleKeydown)
  onBeforeUnmount(() => {
    window.removeEventListener("keydown", handleKeydown)
    document.body.style.overflow = ""
  })
})

useHead({
  title: computed(() => $t("photos.meta.title")),
  link: [{ rel: "canonical", href: "https://matheus-mortari.vercel.app/photos" }],
  meta: [{ name: "description", content: computed(() => $t("photos.meta.description")) }],
})
</script>

<style scoped>
.lightbox-overlay-enter-active,
.lightbox-overlay-leave-active {
  transition: opacity 300ms;
}

.lightbox-overlay-enter-from,
.lightbox-overlay-leave-to {
  opacity: 0;
}

.lightbox-image-enter-active,
.lightbox-image-leave-active {
  transition: all 300ms;
}

.lightbox-image-enter-from,
.lightbox-image-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
