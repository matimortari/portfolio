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
  htmlAttrs: {
    lang: locale,
    dir: "ltr",
  },
  titleTemplate() {
    return `${t("index.meta.title")}`
  },
})
</script>
