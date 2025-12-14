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
const { locale } = useI18n()
const lang = computed(() => route.params.lang as string)
const blobUrl = computed(() => HERO_RESUME_LINKS.find(r => r.lang === lang.value)?.blob)

const pdfWidth = computed(() => {
  if (window.innerWidth < 768) {
    return window.innerWidth * 0.95
  }

  if (window.innerWidth < 1024) {
    return window.innerWidth * 0.9
  }

  return 800
})

watchEffect(() => {
  if (lang.value !== "en" && lang.value !== "pt") {
    return navigateTo("/")
  }

  const mappedLocale = ({ en: "en-US", pt: "pt-BR" } as Record<string, "en-US" | "pt-BR">)[lang.value]
  if (mappedLocale && locale.value !== mappedLocale) {
    locale.value = mappedLocale
  }

  useHead({
    title: $t("cv.meta.title"),
    link: [{ rel: "canonical", href: `https://matheus-mortari.vercel.app/cv/${lang.value}` }],
    meta: [{ name: "description", content: $t("cv.meta.description") }],
  })

  useLocaleHead({
    dir: true,
    seo: true,
    lang: true,
  })
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
