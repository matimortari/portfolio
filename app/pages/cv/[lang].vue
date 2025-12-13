<template>
  <section class="flex min-h-screen flex-col items-center justify-center bg-background">
    <h1>
      {{ lang === 'pt' ? $t('index.contact.resumePt') : $t('index.contact.resumeEn') }}
    </h1>

    <div class="h-[80vh] w-full max-w-4xl overflow-hidden rounded border shadow-lg">
      <iframe
        v-if="pdfUrl"
        :src="pdfUrl"
        class="h-full w-full" frameborder="0"
        title="CV PDF"
      />

      <div v-else class="flex h-full items-center justify-center text-muted-foreground">
        {{ $t('loading') }}
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const route = useRoute()
const lang = route.params.lang as string || "en"

const pdfUrl = computed(() => {
  const link = HERO_RESUME_LINKS.find((l: { label: string, url: string }) =>
    (lang === "pt" && l.label === "index.contact.resumePt") || (lang !== "pt" && l.label === "index.contact.resumeEn"),
  )

  return link?.origin || ""
})
</script>

<style scoped>
section {
  background: linear-gradient(330deg, transparent 60%, var(--primary) 80%, var(--secondary) 100%);
}
</style>
