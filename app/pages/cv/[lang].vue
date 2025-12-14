<template>
  <div class="flex h-screen w-full justify-center overflow-auto bg-muted">
    <ClientOnly>
      <div class="flex w-full flex-col items-center p-4">
        <VuePdfEmbed :source="blobUrl" :width="pdfWidth" class="pdf-viewer" />
      </div>

      <button class="btn fixed bottom-4 left-1/2 z-50 -translate-x-1/2 md:right-8 md:left-auto md:translate-x-0" @click="downloadPdf">
        <icon name="material-symbols:download" size="25" />
        <span>{{ $t('cv.download') }}</span>
      </button>
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

async function downloadPdf() {
  if (!blobUrl.value) {
    return
  }

  try {
    const response = await fetch(blobUrl.value)
    const blob = await response.blob()
    const blobLink = document.createElement("a")
    blobLink.href = URL.createObjectURL(blob)
    blobLink.download = `Matheus_Mortari_CV_${lang.value.toUpperCase()}.pdf`
    document.body.appendChild(blobLink)
    blobLink.click()
    document.body.removeChild(blobLink)
    URL.revokeObjectURL(blobLink.href)
  }
  catch (err) {
    console.error("Download failed", err)
  }
}

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
