<template>
  <Navbar />
  <Hero />

  <div class="m-8 flex flex-col items-center justify-center gap-8 md:m-16">
    <div class="flex w-full flex-col justify-between gap-8 md:flex-row md:gap-16">
      <About />
      <Stack />
    </div>
    <Projects />
  </div>

  <footer id="footer" class="footer-container" />
</template>

<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: ("index.meta.title"),
  link: [{ rel: "canonical", href: "https://matheus-mortari.vercel.app" }, { rel: "icon", href: "/favicon.ico" }],
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
  title: ("index.meta.title"),
  description: t("index.meta.description"),
  ogTitle: ("index.meta.title"),
  ogDescription: t("index.meta.description"),
  ogImage: "https://matheus-mortari.vercel.app/og-image.png",
  ogUrl: "https://matheus-mortari.vercel.app",
})
</script>
