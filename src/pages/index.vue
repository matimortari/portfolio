<template>
  <div>
    <Transition name="fade">
      <div v-if="!isLoaded" class="fixed inset-0 z-50 flex items-center justify-center">
        <img src="/logo.png" alt="Loading..." width="50" height="50" class="opacity-80 animate-bounce">
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
const { t } = useI18n()

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

const metaTitle = t("index.meta.title")
const metaDescription = t("index.meta.description")

useHead({
  title: metaTitle,
  link: [{ rel: "canonical", href: "https://matheus-mortari.vercel.app" }, { rel: "icon", href: "/favicon.ico" }],
  meta: [
    { name: "description", content: metaDescription },
    { property: "og:title", content: metaTitle },
    { property: "og:description", content: metaDescription },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "https://matheus-mortari.vercel.app/og-image.png" },
    { property: "og:url", content: "https://matheus-mortari.vercel.app" },
    { name: "google-site-verification", content: "2j0bcfhh8FCYPpzFylzbiPjl3Pa0X7lMuG060ctsCsA" }
  ],
})

useSeoMeta({
  title: metaTitle,
  description: metaDescription,
  ogTitle: metaTitle,
  ogDescription: metaDescription,
  ogImage: "https://matheus-mortari.vercel.app/og-image.png",
  ogUrl: "https://matheus-mortari.vercel.app",
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
