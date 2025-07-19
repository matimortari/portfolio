<template>
  <nav
    class="fixed top-0 z-50 w-full px-4 py-2 transition-transform duration-300"
    :class="[showNavbar ? 'translate-y-0' : '-translate-y-full', scrolled ? 'backdrop-blur-sm' : '']"
  >
    <div class="flex flex-row items-center justify-between">
      <div
        v-motion :initial="{ opacity: 0 }"
        :visible="{ opacity: 1 }" :duration="200"
        class="flex flex-row items-center justify-center gap-10 text-foreground"
      >
        <NuxtLink to="/" class="animate-scale">
          <img
            v-motion :initial="{ opacity: 0 }"
            :visible="{ opacity: 1 }" :duration="200"
            :delay="200" src="/logo.png"
            alt="Logo" width="40"
            height="40"
          >
        </NuxtLink>

        <div class="flex flex-row items-center gap-8 font-semibold tracking-wide">
          <NuxtLink
            v-motion :initial="{ opacity: 0, x: -20 }"
            :visible="{ opacity: 1, x: 0 }" :duration="200"
            :delay="200" to="#about"
            class="hidden hover:underline sm:block"
          >
            {{ t("index.navbar.about") }}
          </NuxtLink>
          <NuxtLink
            v-motion :initial="{ opacity: 0, x: -20 }"
            :visible="{ opacity: 1, x: 0 }" :duration="200"
            :delay="200" to="#projects"
            class="hidden hover:underline sm:block"
          >
            {{ t("index.navbar.projects") }}
          </NuxtLink>
          <NuxtLink
            v-motion :initial="{ opacity: 0, x: -20 }"
            :visible="{ opacity: 1, x: 0 }" :duration="200"
            :delay="200" to="#contact"
            class="hidden hover:underline sm:block"
          >
            {{ t("index.navbar.contact") }}
          </NuxtLink>
        </div>
      </div>

      <div
        v-motion :initial="{ opacity: 0 }"
        :visible="{ opacity: 1 }" :duration="200"
        :delay="400"
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
