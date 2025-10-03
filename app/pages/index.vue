<template>
  <Navbar />
  <Hero />

  <div class="m-8 flex flex-col items-center justify-center md:mx-32 2xl:mx-52">
    <About />
    <Contact />
  </div>

  <footer class="relative">
    <img src="/assets/footer-bg.svg" alt="Footer Background" class="pointer-events-none absolute bottom-0 -z-10 w-full translate-y-4 opacity-20 select-none">

    <p class="text-muted-foreground flex flex-col items-center gap-1 py-8 text-center text-xs">
      <span>How far have we come, how far can we go?</span>
      <span>{{ new Date().getFullYear() }} © Matheus Mortari. All rights reserved.</span>
    </p>
  </footer>
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
