<template>
  <Navbar />
  <Hero />

  <div class="relative">
    <div class="grid-backdrop" />
    <main class="relative z-10 container mx-auto flex w-full flex-col items-center gap-20 px-4 py-12">
      <About />
      <Stack />
      <Projects />
      <Contact />
    </main>
  </div>

  <Footer />
  <UiBackToTop />
</template>

<script setup lang="ts">
useHead({
  title: computed(() => $t("index.meta.title")),
  link: [{ rel: "canonical", href: "https://matheus-mortari.vercel.app" }],
  meta: [{ name: "description", content: computed(() => $t("index.meta.description")) }],
})
</script>

<style scoped>
.grid-backdrop {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background-image:
    linear-gradient(to right, rgba(0, 255, 136, 0.02) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(0, 255, 136, 0.02) 1px, transparent 1px);
  background-size: 100px 100px;
}

main > *:not(.grid-backdrop) {
  position: relative;
  z-index: 1;
}
</style>
