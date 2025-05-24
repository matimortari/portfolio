<template>
  <div class="flex min-h-screen flex-col">
    <Navbar />
    <Hero />

    <div class="m-8 flex flex-col items-center justify-center gap-8 md:mx-16 lg:mx-20">
      <div class="flex w-full flex-col justify-between gap-8 lg:flex-row lg:gap-20">
        <About />
        <Stack />
      </div>

      <Projects />
    </div>

    <footer id="footer" class="footer-container" />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: t("index.meta.title"),
  meta: [{ name: "description", content: t("index.meta.description") }]
})
useSeoMeta({
  title: t("index.meta.title"),
  description: t("index.meta.description")
})
</script>
