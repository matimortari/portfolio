<template>
  <nav class="fixed top-0 z-50 w-full px-8 py-4 transition-all duration-500" :class="[showNavbar ? 'translate-y-0' : '-translate-y-full', scrolled ? 'backdrop-blur-sm' : '']">
    <div class="flex flex-row items-center justify-between">
      <div
        v-motion :initial="{ opacity: 0 }"
        :visible-once="{ opacity: 1 }" :duration="1000"
        class="text-foreground flex flex-row items-center justify-center gap-10"
      >
        <nuxt-link to="/" class="hover:scale transition-all duration-500 outline-none select-none">
          <img src="/assets/logo.png" alt="Logo" width="40" height="40">
        </nuxt-link>

        <div class="flex flex-row items-center gap-8 font-semibold tracking-wide">
          <nuxt-link v-for="link in navLinks" :key="link.url" :to="link.url" class="hidden text-lg outline-none hover:underline md:block">
            {{ link.title }}
          </nuxt-link>
        </div>
      </div>

      <div
        v-motion :initial="{ opacity: 0 }"
        :visible-once="{ opacity: 1 }" :duration="1000"
        class="flex flex-row items-center gap-4"
      >
        <button v-for="language in availableLocales" :key="language" class="font-semibold outline-none hover:underline md:text-lg" @click="() => setLanguage(language)">
          {{ t(`locale.${language}`) }}
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const { t, locale, availableLocales } = useI18n()

const showNavbar = ref(true)
const scrolled = ref(false)

let lastScrollY = 0

const navLinks = computed(() => [
  { url: "#about", title: t("index.navbar.about") },
  { url: "#contact", title: t("index.navbar.contact") },
])

function handleScroll() {
  const currentY = window.scrollY
  showNavbar.value = currentY < lastScrollY || currentY < 10
  scrolled.value = currentY > 0
  lastScrollY = currentY
}

onMounted(async () => {
  const savedLang = localStorage.getItem("nuxt-lang")
  if (savedLang && (savedLang === "en-US" || savedLang === "pt-BR")) {
    locale.value = savedLang as "en-US" | "pt-BR"
    await nextTick()
  }

  lastScrollY = window.scrollY
  scrolled.value = lastScrollY > 0
  window.addEventListener("scroll", handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll)
})

async function setLanguage(language: string) {
  locale.value = language as "en-US" | "pt-BR"
  localStorage.setItem("nuxt-lang", language)
  await nextTick()
}
</script>
