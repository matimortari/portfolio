<template>
  <Navbar />
  <Hero />

  <section id="about" class="relative z-10 container mx-auto flex w-full flex-col items-center p-8">
    <div class="grid-backdrop" />

    <div class="flex w-full flex-col gap-24 border-y-2 border-primary py-12 text-center">
      <About />
      <Stack />
      <Projects />
    </div>

    <Contact />
  </section>

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
    linear-gradient(to right, rgba(0, 255, 136, 0.03) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(0, 255, 136, 0.03) 1px, transparent 1px);
  background-size: 40px 40px;
}

main > *:not(.grid-backdrop) {
  position: relative;
  z-index: 1;
}
</style>
