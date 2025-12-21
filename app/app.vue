<template>
  <UiLoading v-show="showLoader" />

  <div v-show="!showLoader" class="min-h-screen">
    <Analytics :debug="false" />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import { Analytics } from "@vercel/analytics/nuxt"

const { locale } = useI18n()
const showLoader = ref(true)

onMounted(() => {
  const onLoad = () => (showLoader.value = false)

  if (document.readyState === "complete") {
    showLoader.value = false
  }
  else {
    window.addEventListener("load", onLoad)
    onBeforeUnmount(() => window.removeEventListener("load", onLoad))
  }
})

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
useLocaleHead({ dir: true, seo: true })
</script>
