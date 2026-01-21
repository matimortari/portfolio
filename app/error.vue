<template>
  <div class="flex h-screen flex-col items-center justify-center gap-4">
    <h1>
      {{ error.status }}
    </h1>

    <p class="text-center text-muted-foreground">
      {{ error.statusText || "Unknown error" }}
    </p>

    <nuxt-link to="/">
      Go back home
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from "#app"

defineProps<{
  error: NuxtError
}>()
</script>
