<template>
  <main class="relative flex h-screen w-full justify-center overflow-auto">
    <ClientOnly class="flex w-full flex-col items-center p-2">
      <iframe :src="pdfUrl" :title="$t('cv.meta.title')" :style="{ width: `${pdfWidth}px`, height: '100vh' }" />
    </ClientOnly>

    <button class="group fixed bottom-4 z-50 hidden items-center gap-2 rounded-full bg-transparent p-2 text-sm font-semibold transition-all duration-500 hover:scale-105 md:right-4 md:flex" @click="downloadPdf">
      <span class="transition-opacity duration-500 group-hover:opacity-100 md:opacity-0">{{ $t('cv.download') }}</span>
      <icon name="material-symbols:download" size="40" class="rounded-full p-1 backdrop-blur-xl" />
    </button>
  </main>
</template>

<script setup lang="ts">
const route = useRoute()
const { locale } = useI18n()
const windowWidth = ref(800)
const lang = computed(() => route.params.lang as string)
const blobUrl = computed(() => HERO_RESUME_LINKS.find(r => r.lang === lang.value)?.blob)
const pdfUrl = computed(() => blobUrl.value ? `${blobUrl.value}#toolbar=0&navpanes=0&scrollbar=0&view=FitH` : "")

const pdfWidth = computed(() => {
  if (windowWidth.value < 768) {
    return windowWidth.value - 16
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
  const url = URL.createObjectURL(blob)
  const link = document.createElement("a")
  link.href = url
  link.download = `Matheus_Mortari_CV_${lang.value.toUpperCase()}.pdf`
  link.click()
  URL.revokeObjectURL(url)
}

onMounted(() => {
  const updateWidth = () => windowWidth.value = window.innerWidth
  updateWidth()
  window.addEventListener("resize", updateWidth)
  onBeforeUnmount(() => window.removeEventListener("resize", updateWidth))
})

watchEffect(() => {
  if (lang.value !== "en" && lang.value !== "pt") {
    return navigateTo("/")
  }

  const mappedLocale = ({ en: "en-US", pt: "pt-BR" })[lang.value] as "en-US" | "pt-BR"
  if (mappedLocale && locale.value !== mappedLocale) {
    locale.value = mappedLocale
  }
})

useHead({
  title: computed(() => $t("cv.meta.title")),
  link: [{ rel: "canonical", href: computed(() => `https://matheus-mortari.vercel.app/cv/${lang.value}`) }],
  meta: [{ name: "description", content: computed(() => $t("cv.meta.description")) }],
})
</script>
