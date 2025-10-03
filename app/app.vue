<template>
  <div>
    <transition name="fade" mode="out-in">
      <div v-show="isLoading" class="bg-background fixed inset-0 flex min-h-screen flex-col items-center justify-center gap-4">
        <div class="bg-muted relative w-1/4">
          <div class="progress-bar bg-primary" />
        </div>
      </div>
    </transition>

    <transition name="fade" mode="out-in">
      <div v-show="!isLoading" class="min-h-screen">
        <Analytics :debug="false" />
        <NuxtPage />
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { Analytics } from "@vercel/analytics/nuxt"

const isLoading = ref(true)

const { locale, t } = useI18n()

if (import.meta.client) {
  const storedLanguage = localStorage.getItem("nuxt-lang")
  if (storedLanguage === "en-US" || storedLanguage === "pt-BR") {
    locale.value = storedLanguage
  }
}

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
    if (isLoading.value)
      isLoading.value = false
  }, 5000)
})

useHead({
  htmlAttrs: { lang: locale.value, dir: "ltr" },
  link: [{ rel: "icon", href: "/favicon.svg" }],
  meta: [
    { name: "description", content: t("index.meta.description") },
    { property: "og:title", content: t("index.meta.title") },
    { property: "og:description", content: t("index.meta.description") },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "https://matheus-mortari.vercel.app/og-image.png" },
    { name: "google-site-verification", content: "2j0bcfhh8FCYPpzFylzbiPjl3Pa0X7lMuG060ctsCsA" },
  ],
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

.progress-bar {
  transform-origin: left;
  transform: scaleX(0);
  height: 2px;
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
