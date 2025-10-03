<template>
  <footer class="relative mt-16 flex flex-col items-center justify-center">
    <img src="/assets/footer-bg.svg" alt="Footer Background" class="pointer-events-none absolute bottom-0 -z-10 w-full translate-y-4 opacity-20 select-none">

    <p class="text-muted-foreground flex flex-col items-center gap-1 py-8 text-center text-xs">
      <button class="text-muted-foreground group my-8 flex flex-row items-center gap-2 text-xs font-semibold" @click="scrollToTop">
        <span class="group-hover:underline"> {{ t("index.footer.backToTop") }}</span>
        <icon name="material-symbols:arrow-upward" size="25" class="group-hover:scale duration-500" />
      </button>

      <span>How far have we come, how far can we go?</span>
      <span>{{ new Date().getFullYear() }} {{ t("index.footer.copyright") }}</span>
    </p>
  </footer>
</template>

<script setup lang="ts">
const { t } = useI18n()

function scrollToTop() {
  globalThis.window.scrollTo({ top: 0, behavior: "smooth" })
}
</script>
