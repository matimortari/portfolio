<template>
  <div>
    <transition name="fade">
      <div v-if="isLoading" class="fixed inset-0 z-50 flex items-center justify-center">
        <img src="/assets/logo.png" alt="Loading..." width="100" height="100">
      </div>
    </transition>

    <transition name="fade">
      <main v-show="!isLoading">
        <slot />
      </main>
    </transition>
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

@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.4;
  }
}

img,
p {
  opacity: 0.8;
  animation: fade 1s ease-in-out infinite alternate;
}
</style>
