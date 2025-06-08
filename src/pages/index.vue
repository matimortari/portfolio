<template>
  <div class="flex flex-col">
    <Navbar />
    <Hero />

    <div class="flex flex-col items-center justify-center m-8 gap-8 lg:m-16">
      <div class="flex w-full flex-col justify-between gap-8 lg:flex-row lg:gap-16">
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
