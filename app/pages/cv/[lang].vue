<template>
  <div class="flex h-screen w-full justify-center overflow-auto bg-muted">
    <ClientOnly>
      <div class="flex w-full flex-col items-center p-4">
        <iframe :src="pdfUrlWithParams" :title="$t('cv.title')" :style="{ width: `${pdfWidth}px`, height: '100vh' }" />
      </div>

      <button class="btn fixed bottom-4 left-1/2 z-50 -translate-x-1/2 md:right-8 md:left-auto md:translate-x-0" @click="downloadPdf">
        <icon name="material-symbols:download" size="25" />
        <span>{{ $t('cv.download') }}</span>
      </button>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { locale } = useI18n()
const windowWidth = ref(800)
const lang = computed(() => route.params.lang as string)
const blobUrl = computed(() => HERO_RESUME_LINKS.find(r => r.lang === lang.value)?.blob)

const pdfUrlWithParams = computed(() => {
  if (!blobUrl.value) {
    return ""
  }

  return `${blobUrl.value}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`
})

const pdfWidth = computed(() => {
  if (windowWidth.value < 768) {
    return windowWidth.value * 0.95
  }
  if (windowWidth.value < 1024) {
    return windowWidth.value * 0.9
  }
  return 800
})

async function downloadPdf() {
  if (!blobUrl.value) {
    return
  }

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

onMounted(() => {
  const updateWidth = () => {
    windowWidth.value = window.innerWidth
  }

  updateWidth()
  window.addEventListener("resize", updateWidth)

  onBeforeUnmount(() => {
    window.removeEventListener("resize", updateWidth)
  })
})

watchEffect(() => {
  if (lang.value !== "en" && lang.value !== "pt") {
    return navigateTo("/")
  }

  const mappedLocale = ({ en: "en-US", pt: "pt-BR" } as Record<string, "en-US" | "pt-BR">)[lang.value]
  if (mappedLocale && locale.value !== mappedLocale) {
    locale.value = mappedLocale
  }
})

useHead({
  title: computed(() => $t("index.meta.title")),
  link: [{ rel: "canonical", href: computed(() => `https://matheus-mortari.vercel.app/cv/${lang.value}`) }],
  meta: [{ name: "description", content: computed(() => $t("index.meta.description")) }],
})
</script>
