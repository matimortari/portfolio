<template>
  <Navbar />
  <Hero :motion-delay="motionDelay" />

  <div id="about" class="m-4 flex flex-col items-center justify-center gap-4 md:container md:mx-auto">
    <About />
    <Contact />
  </div>

  <Footer />

  <UiBackToTop />
</template>

<script setup lang="ts">
const motionDelay = ref(0)

onMounted(async () => {
  await nextTick()
  motionDelay.value = 800
})

useHead({
  title: $t("index.meta.title"),
  link: [{ rel: "canonical", href: "https://matheus-mortari.vercel.app" }],
  meta: [{ name: "description", content: $t("index.meta.description") }],
})

useLocaleHead({
  dir: true,
  seo: true,
  lang: true,
})
</script>
