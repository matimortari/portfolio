<template>
  <nav class="fixed top-0 z-50 w-full p-4 transition-all duration-500 md:px-8" :class="[showNavbar ? 'translate-y-0' : '-translate-y-full', scrolled ? 'backdrop-blur-sm' : '']">
    <div class="flex flex-row items-center justify-between">
      <div class="flex flex-row items-center justify-center gap-10 text-foreground">
        <nuxt-link
          v-motion to="/"
          :initial="{ opacity: 0, x: -10 }" :visible-once="{ opacity: 1, x: 0 }"
          :duration="500" class="transition-all duration-500 outline-none select-none hover:scale-125"
        >
          <img src="/assets/symbol.png" alt="Logo" width="40" height="40">
        </nuxt-link>

        <div class="flex flex-row items-center gap-8 font-semibold tracking-wide">
          <nuxt-link
            v-for="(link, index) in NAV_LINKS" :key="index"
            v-motion :to="link.url"
            :initial="{ opacity: 0, y: -10 }" :visible-once="{ opacity: 1, y: 0 }"
            :duration="500" :delay="200 * index"
            class="hidden text-lg outline-none hover:underline md:block"
          >
            {{ $t(link.label) }}
          </nuxt-link>
        </div>
      </div>

      <UiLanguageSelector />
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
  scrolled.value = currentY > 0
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
  scrolled.value = lastScrollY > 0
  window.addEventListener("scroll", handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll)
})
</script>
