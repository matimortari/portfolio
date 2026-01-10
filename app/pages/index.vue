<template>
  <Navbar />
  <Hero />

  <section id="about" class="relative z-10 container mx-auto flex w-full flex-col items-center p-4 md:p-0">
    <div class="grid-backdrop" />

    <About />
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
  opacity: 0.2;
  background-image:
    linear-gradient(to right, var(--muted) 1px, transparent 1px),
    linear-gradient(to bottom, var(--muted) 1px, transparent 1px);
  background-size: 50px 50px;
  mask-image: linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%);
}

main > *:not(.grid-backdrop) {
  position: relative;
  z-index: 1;
}
</style>
