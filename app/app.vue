<template>
  <UiLoading v-show="isLoading" />

  <div v-show="!isLoading">
    <Analytics :debug="false" />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import { Analytics } from "@vercel/analytics/nuxt"

const { locale } = useI18n()
const isLoading = ref(true)

onMounted(() => {
  const onLoad = () => (isLoading.value = false)
  if (document.readyState === "complete") {
    isLoading.value = false
  }
  else {
    window.addEventListener("load", onLoad)
    onBeforeUnmount(() => window.removeEventListener("load", onLoad))
  }
})

useLocaleHead({ dir: true, seo: true })
useHead({
  htmlAttrs: { lang: computed(() => locale.value) },
  link: [{ rel: "icon", href: "/favicon.svg" }],
  meta: [
    { name: "description", content: computed(() => $t("index.meta.description")) },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "https://matheus-mortari.vercel.app/og-image.png" },
    { name: "google-site-verification", content: "2j0bcfhh8FCYPpzFylzbiPjl3Pa0X7lMuG060ctsCsA" },
  ],
})
</script>
