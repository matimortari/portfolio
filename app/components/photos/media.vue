<template>
  <video
    v-if="photo.type === 'video'"
    :src="photo.url" :width="variant === 'tile' ? photo.width : undefined"
    :height="variant === 'tile' ? photo.height : undefined" draggable="false"
    class="photos-media" :class="variant === 'tile' ? tileClass : stageClass"
    autoplay muted
    loop playsinline
    :preload="variant === 'tile' ? 'auto' : undefined" :controls="variant === 'stage'"
    :controlslist="variant === 'stage' ? 'nodownload' : undefined" :disablepictureinpicture="variant === 'stage' ? true : undefined"
    @contextmenu.prevent @dragstart.prevent
    @loadeddata="onReady" @error="emit('ready')"
  />
  <img
    v-else
    :src="photo.url" :alt="`Photo ${photo.id}`"
    :width="variant === 'tile' ? photo.width : undefined" :height="variant === 'tile' ? photo.height : undefined"
    draggable="false" class="photos-media pointer-events-none"
    :class="variant === 'tile' ? tileClass : stageClass" :loading="variant === 'tile' ? 'lazy' : undefined"
    @contextmenu.prevent @dragstart.prevent
    @load="emit('ready')" @error="emit('ready')"
  >
</template>

<script setup lang="ts">
const props = defineProps<{
  photo: Photo
  variant: "tile" | "stage"
  loaded?: boolean
}>()

const emit = defineEmits<{ ready: [] }>()

const stageClass = "max-h-[82vh] max-w-full object-contain"
const tileClass = computed(() => [
  "pointer-events-none size-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-85",
  { "opacity-100": props.loaded },
])

function onReady(event: Event) {
  emit("ready")
  const video = event.target
  if (!(video instanceof HTMLVideoElement)) {
    return
  }
  video.muted = true
  void video.play().catch(() => {})
}
</script>

<style scoped>
.photos-media {
  user-select: none;
  -webkit-user-drag: none;
  -webkit-touch-callout: none;
}
</style>
