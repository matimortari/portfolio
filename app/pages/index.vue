<template>
  <Navbar />
  <Hero />

  <div class="m-8 flex flex-col items-center justify-center md:m-32">
    <About />
    <Projects />
  </div>

  <footer class="relative">
    <img src="/assets/footer-bg.svg" alt="Footer Background" class="pointer-events-none absolute bottom-0 -z-10 w-full opacity-20 select-none">
  </footer>
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
