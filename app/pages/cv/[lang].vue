<template>
  <div class="flex h-screen w-full justify-center overflow-auto bg-muted">
    <ClientOnly>
      <div class="flex w-full flex-col items-center p-4">
        <VuePdfEmbed :source="blobUrl" :width="pdfWidth" class="pdf-viewer" />
      </div>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
const VuePdfEmbed = defineAsyncComponent(() => import("vue-pdf-embed"))
const route = useRoute()
const lang = route.params.lang as string
const blobUrl = HERO_RESUME_LINKS.find(r => r.lang === lang)?.blob ?? ""
if (lang !== "en" && lang !== "pt") {
  await navigateTo("/")
}

const pdfWidth = computed(() => {
  if (import.meta.client) {
    const screenWidth = window.innerWidth
    // Mobile: 95% width
    if (screenWidth < 768) {
      return screenWidth * 0.95
    }
    // Tablet: 90% width
    if (screenWidth < 1024) {
      return screenWidth * 0.9
    }
    // Desktop: fixed width of 800px
    return 800
  }

  return 800
})

useHead({
  title: $t("cv.meta.title"),
  link: [{ rel: "canonical", href: `https://matheus-mortari.vercel.app/cv/${lang}` }],
  meta: [{ name: "description", content: $t("cv.meta.description") }],
})

useLocaleHead({
  dir: true,
  seo: true,
  lang: true,
})
</script>

<style scoped>
.pdf-viewer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.pdf-viewer :deep(canvas) {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
}
</style>
