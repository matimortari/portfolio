<template>
  <transition name="fade-slide">
    <button v-show="showButton" class="group fixed bottom-4 left-4 z-50 flex items-center gap-2 rounded-full bg-transparent p-2 text-sm font-semibold transition-all duration-500 hover:scale-105" @click="scrollToTop">
      <icon name="material-symbols:arrow-upward" size="40" class="rounded-full p-1 backdrop-blur-xl" />
      <span class="hidden opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:inline-block">{{ $t('index.footer.backToTop') }}</span>
    </button>
  </transition>
</template>

<script setup lang="ts">
const showButton = ref(false)

function handleScroll() {
  showButton.value = window.scrollY > 100
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" })
}

onMounted(() => window.addEventListener("scroll", handleScroll))
onBeforeUnmount(() => window.removeEventListener("scroll", handleScroll))
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
.fade-slide-enter-to,
.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
