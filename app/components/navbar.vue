<template>
  <nav class="fixed top-0 z-50 w-full transition-all duration-500" :class="[showNavbar ? 'translate-y-0' : '-translate-y-full']">
    <div
      v-motion :initial="{ opacity: 0, y: -20 }"
      :visible-once="{ opacity: 1, y: 0 }" :duration="600"
      class="mx-auto max-w-7xl p-4 transition-all duration-500"
    >
      <div
        class="flex flex-row items-center justify-between rounded-full border transition-all duration-500"
        :class="scrolled ? 'border bg-background/80 p-2 shadow-lg backdrop-blur-sm' : 'border-transparent! py-4'"
      >
        <div class="flex flex-row items-center justify-center gap-8 text-foreground">
          <nuxt-link
            v-motion to="/"
            :initial="{ opacity: 0, scale: 0, rotate: -180 }" :visible-once="{ opacity: 1, scale: 1, rotate: 0 }"
            :duration="600" :delay="200"
            class="pl-4 transition-all duration-500 outline-none select-none hover:scale-125 hover:rotate-12"
          >
            <img src="/assets/symbol.png" alt="Logo" width="35" height="35">
          </nuxt-link>

          <div class="flex flex-row items-center gap-8 font-semibold tracking-wide">
            <nuxt-link
              v-for="(link, index) in NAV_LINKS" :key="index"
              v-motion :to="link.url"
              :initial="{ opacity: 0, y: -20, scale: 0.8 }" :visible-once="{ opacity: 1, y: 0, scale: 1 }"
              :duration="400" :delay="300 + 100 * index"
              class="group hidden outline-none md:block"
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
  const currentY = window.scrollY
  showNavbar.value = currentY < lastScrollY || currentY < 10
  scrolled.value = currentY > 50
  lastScrollY = currentY
}

onMounted(() => {
  const savedLang = localStorage.getItem("nuxt-lang")
  if (savedLang && (savedLang === "en-US" || savedLang === "pt-BR")) {
    nextTick(() => {
      locale.value = savedLang as "en-US" | "pt-BR"
    })
  }

  lastScrollY = window.scrollY
  scrolled.value = lastScrollY > 50
  window.addEventListener("scroll", handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll)
})
</script>
