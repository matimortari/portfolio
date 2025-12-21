<template>
  <Navbar />
  <Hero :motion-delay="motionDelay" />

  <section id="about" class="relative flex flex-col items-center justify-center gap-8">
    <div class="grid-backdrop" />

    <div class="relative z-10 flex w-full flex-col items-center gap-8 p-4 md:container md:mx-auto">
      <About />
      <Contact />
    </div>
  </section>

  <Footer />

  <UiBackToTop />
</template>

<script setup lang="ts">
const motionDelay = ref(0)

onMounted(async () => {
  await nextTick()
  motionDelay.value = 800
})

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
  opacity: 0.1;
  background-image:
    linear-gradient(to right, var(--muted) 1px, transparent 1px),
    linear-gradient(to bottom, var(--muted) 1px, transparent 1px);
  background-size: 50px 50px;
}

main > *:not(.grid-backdrop) {
  position: relative;
  z-index: 1;
}
</style>
