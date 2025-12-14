<template>
  <UiLoading v-show="showLoader" />

  <div v-show="!showLoader" class="min-h-screen">
    <Analytics :debug="false" />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import { Analytics } from "@vercel/analytics/nuxt"

const showLoader = ref(true)

onMounted(() => {
  const onLoad = () => (showLoader.value = false)

  if (document.readyState === "complete") {
    showLoader.value = false
  }
  else {
    window.addEventListener("load", onLoad)
    onBeforeUnmount(() => window.removeEventListener("load", onLoad))
  }
})
</script>
