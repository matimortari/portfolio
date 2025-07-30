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
  if (storedLanguage && storedLanguage !== "en-US") {
    locale.value = storedLanguage
  }
}

useHead({
  htmlAttrs: {
    lang: locale,
    dir: computed(() => {
      return t("locale.dir") as "ltr" | "rtl" | "auto"
    }),
  },
  titleTemplate() {
    return `${t("site.name")}`
  },
})
</script>
