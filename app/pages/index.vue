<template>
  <Navbar />
  <Hero />

  <div class="m-8 flex flex-col items-center justify-center gap-4 md:mx-32 2xl:mx-52">
    <About />
    <Contact />
  </div>

  <Footer />
</template>

<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: t("index.meta.title"),
  link: [{ rel: "canonical", href: "https://matheus-mortari.vercel.app" }],
  meta: [{ name: "description", content: t("index.meta.description") }],
})

useLocaleHead({
  dir: true,
  seo: true,
  lang: true,
})
</script>
