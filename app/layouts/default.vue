<template>
  <div>
    <Transition name="fade">
      <div v-if="isLoading" class="fixed inset-0 z-50 flex items-center justify-center">
        <img
          src="/logo.png" alt="Loading..."
          width="50" height="50"
          class="animate-bounce opacity-80"
        >
      </div>
    </Transition>

    <Transition name="fade">
      <main v-show="!isLoading">
        <slot />
      </main>
    </Transition>
  </div>
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
    onBeforeUnmount(() => {
      window.removeEventListener("load", onLoad)
    })
  }

  // Optional fallback to stop loading if something goes wrong
  setTimeout(() => {
    if (isLoading.value) {
      isLoading.value = false
    }
  }, 5000)
})

useLocaleHead({
  dir: true,
  seo: true,
  lang: true,
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
