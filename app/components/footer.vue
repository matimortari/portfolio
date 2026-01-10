<template>
  <footer class="relative mt-16 flex flex-col items-center justify-center">
    <img src="/assets/footer-bg.svg" alt="Footer Background" class="pointer-events-none absolute bottom-0 -z-10 w-full translate-y-4 opacity-20 select-none">

    <p class="flex flex-col items-center gap-1 py-8 text-center text-xs text-muted-foreground">
      <span>How far have we come, how far can we go?</span>
      <span>{{ new Date().getFullYear() }} {{ $t("index.footer.copyright") }}</span>
    </p>
  </footer>
</template>
