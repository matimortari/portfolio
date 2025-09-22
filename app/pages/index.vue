<template>
  <Navbar />
  <Hero />

  <div class="m-8 flex flex-col items-center justify-center md:m-32">
    <About />
    <Projects />
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
  link: [{ rel: "canonical", href: "https://matheus-mortari.vercel.app" }, { rel: "icon", href: "/favicon.svg" }],
  meta: [
    { name: "description", content: t("index.meta.description") },
    { property: "og:title", content: ("index.meta.title") },
    { property: "og:description", content: t("index.meta.description") },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "https://matheus-mortari.vercel.app/og-image.png" },
    { property: "og:url", content: "https://matheus-mortari.vercel.app" },
    { name: "google-site-verification", content: "2j0bcfhh8FCYPpzFylzbiPjl3Pa0X7lMuG060ctsCsA" },
  ],
})

useSeoMeta({
  title: t("index.meta.title"),
  description: t("index.meta.description"),
  ogTitle: t("index.meta.title"),
  ogDescription: t("index.meta.description"),
  ogImage: "https://matheus-mortari.vercel.app/og-image.png",
  ogUrl: "https://matheus-mortari.vercel.app",
})
</script>
