<template>
  <main>
    <slot />
  </main>
</template>

<script setup lang="ts">
useLocaleHead({
  dir: true,
  key: "id",
  seo: true,
  lang: true
})
</script>
