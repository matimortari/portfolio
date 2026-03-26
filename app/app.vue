<template>
  <UiLoading v-show="isLoading" />

  <div v-show="!isLoading">
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
const { public: { baseURL } } = useRuntimeConfig()
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
    { property: "og:image", content: computed(() => `${baseURL}/og-image-${locale.value === "pt-BR" ? "pt" : "en"}.png`) },
    { name: "google-site-verification", content: "LCOdFEOFVCM7MI46pZbQPMk1qndhd1gXesZE5JDBvcQ" },
  ],
})
</script>
