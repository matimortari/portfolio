<template>
  <nav class="fixed top-0 z-50 w-full transition-transform duration-300 ease-out" :class="[showNavbar ? 'translate-y-0' : '-translate-y-full']">
    <div v-motion="MOTION_FADE_DOWN" class="mx-auto max-w-7xl p-4 transition-all duration-300">
      <div
        class="flex flex-row items-center justify-between rounded-full border transition-all duration-300"
        :class="scrolled ? 'border bg-background/80 p-2 shadow-lg backdrop-blur-sm' : 'border-transparent! py-4'"
      >
        <div class="flex flex-row items-center justify-center gap-8 text-foreground">
          <nuxt-link v-motion="MOTION_FADE_SCALE" to="/" :delay="80" class="pl-4 transition-transform duration-300 outline-none select-none hover:scale-110">
            <img src="/assets/symbol.png" alt="Logo" width="35" height="35">
          </nuxt-link>

          <div class="flex flex-row items-center gap-8 font-semibold tracking-wide">
            <nuxt-link
              v-for="(link, index) in NAV_LINKS" :key="index"
              v-motion="MOTION_FADE_DOWN" :to="link.url"
              :delay="140 + 50 * index" class="group hidden outline-none md:block"
            >
              <span class="relative">{{ $t(link.label) }}<span class="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" /></span>
            </nuxt-link>
          </div>
        </div>

        <UiLanguageSelector />
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const showNavbar = ref(true)
const scrolled = ref(false)
let lastScrollY = 0

function handleScroll() {
  showNavbar.value = window.scrollY < lastScrollY
  scrolled.value = window.scrollY > 50
  lastScrollY = window.scrollY
}

onMounted(() => {
  const savedLang = localStorage.getItem("nuxt-lang")
  if (savedLang && (savedLang === "en-US" || savedLang === "pt-BR")) {
    nextTick(() => locale.value = savedLang as "en-US" | "pt-BR")
  }

  lastScrollY = window.scrollY
  scrolled.value = lastScrollY > 50
  window.addEventListener("scroll", handleScroll)
})

onBeforeUnmount(() => window.removeEventListener("scroll", handleScroll))
</script>
