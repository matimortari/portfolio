<template>
  <transition name="fade-slide" mode="out-in">
    <div v-show="isLoading" class="fixed inset-0 flex min-h-screen flex-col items-center justify-center gap-4 bg-background">
      <div class="relative h-1 w-1/4 overflow-hidden rounded bg-muted">
        <div class="progress-bar h-1 bg-primary" />
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
const isLoading = ref(true)

onMounted(() => {
  const onLoad = () => {
    isLoading.value = false
  }

  if (document.readyState === "complete") {
    isLoading.value = false
  }
  else {
    window.addEventListener("load", onLoad)
    onBeforeUnmount(() => window.removeEventListener("load", onLoad))
  }

  setTimeout(() => {
    if (isLoading.value) {
      isLoading.value = false
    }
  }, 5000)
})
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 1s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  filter: blur(8rem);
  opacity: 0;
}
.fade-slide-enter-to,
.fade-slide-leave-from {
  filter: blur(0);
  opacity: 1;
}

.progress-bar {
  transform-origin: left;
  transform: scaleX(0);
  animation: progress 2.5s ease-in-out infinite alternate;
}

@keyframes progress {
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
}
</style>
