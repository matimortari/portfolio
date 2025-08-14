<template>
  <nav
    class="fixed top-0 z-50 w-full px-4 py-2 transition-transform duration-300"
    :class="[showNavbar ? 'translate-y-0' : '-translate-y-full', scrolled ? 'backdrop-blur-sm' : '']"
  >
    <div class="flex flex-row items-center justify-between">
      <div
        v-motion :initial="{ opacity: 0 }"
        :visible="{ opacity: 1 }" :duration="800"
        class="flex flex-row items-center justify-center gap-10 text-foreground"
      >
        <NuxtLink to="/" class="hover:scale select-none outline-none transition-all">
          <img
            v-motion :initial="{ opacity: 0 }"
            :visible="{ opacity: 1 }" :duration="800"
            :delay="200" src="/assets/logo.png"
            alt="Logo" width="40"
            height="40"
          >
        </NuxtLink>

        <div class="flex flex-row items-center gap-8 font-semibold tracking-wide">
          <NuxtLink
            v-for="link in navLinks" :key="link.link"
            v-motion :to="link.link"
            :visible="{ opacity: 1, x: 0 }"
            :duration="800" :delay="200"
            class="hidden outline-none hover:underline sm:block"
          >
            {{ link.title }}
          </NuxtLink>
        </div>
      </div>

      <div
        v-motion :initial="{ opacity: 0 }"
        :visible="{ opacity: 1 }" :duration="800"
        class="flex flex-row items-center gap-4 font-semibold"
      >
        <button v-for="language in availableLocales" :key="language" @click="() => setLanguage(language)">
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

const navLinks = [
  { link: "#about", title: t("index.navbar.about") },
  { link: "#projects", title: t("index.navbar.projects") },
  { link: "#contact", title: t("index.navbar.contact") },
]

function handleScroll() {
  const currentY = window.scrollY
  showNavbar.value = currentY < lastScrollY || currentY < 10
  scrolled.value = currentY > 0
  lastScrollY = currentY
}

onMounted(async () => {
  const savedLang = localStorage.getItem("nuxt-lang")
  if (savedLang) {
    locale.value = savedLang
    await nextTick()
    document.documentElement.dir = t("locale.dir")
  }

  lastScrollY = window.scrollY
  scrolled.value = lastScrollY > 0
  window.addEventListener("scroll", handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll)
})

async function setLanguage(language: string) {
  locale.value = language
  localStorage.setItem("nuxt-lang", language)
  await nextTick()
  document.documentElement.dir = t("locale.dir")
}
</script>
