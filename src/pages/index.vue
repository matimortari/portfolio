<template>
  <div>
    <Transition name="fade">
      <div
        v-if="!isLoaded"
        class="fixed inset-0 z-50 flex items-center justify-center"
      >
        <img
          src="/logo.png"
          alt="Loading..."
          width="50"
          height="50"
          class="opacity-80 animate-bounce"
        >
      </div>
    </Transition>

    <Transition name="fade">
      <div v-show="isLoaded" class="flex flex-col">
        <Navbar />
        <Hero />

        <div class="flex flex-col items-center justify-center m-8 gap-8 lg:m-16">
          <div class="flex w-full flex-col justify-between gap-8 lg:flex-row lg:gap-16">
            <About />
            <Stack />
          </div>

          <Projects />
        </div>

        <footer id="footer" class="footer-container" />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const isLoaded = ref(false)

onMounted(() => {
  if (document.readyState === "complete") {
    isLoaded.value = true
  }
  else {
    window.addEventListener("load", () => {
      isLoaded.value = true
    })
  }
})

const { t } = useI18n()

useHead({
  title: t("index.meta.title"),
  meta: [{ name: "description", content: t("index.meta.description") }],
})
useSeoMeta({
  title: t("index.meta.title"),
  description: t("index.meta.description"),
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
