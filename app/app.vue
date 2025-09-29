<template>
  <NuxtLayout>
    <Analytics :debug="false" />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { Analytics } from "@vercel/analytics/nuxt"

const { locale, t } = useI18n()

if (import.meta.client) {
  const storedLanguage = localStorage.getItem("nuxt-lang")
  if (storedLanguage === "en-US" || storedLanguage === "pt-BR") {
    locale.value = storedLanguage
  }
}

useHead({
  htmlAttrs: { lang: locale.value, dir: "ltr" },
  link: [{ rel: "icon", href: "/favicon.svg" }],
  meta: [
    { name: "description", content: t("index.meta.description") },
    { property: "og:title", content: ("index.meta.title") },
    { property: "og:description", content: t("index.meta.description") },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "https://matheus-mortari.vercel.app/og-image.png" },
    { name: "google-site-verification", content: "2j0bcfhh8FCYPpzFylzbiPjl3Pa0X7lMuG060ctsCsA" },
  ],
})
</script>
