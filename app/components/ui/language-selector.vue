<template>
  <div
    v-motion :initial="{ opacity: 0 }"
    :visible-once="{ opacity: 1 }" :duration="1000"
    class="flex flex-row items-center gap-4"
  >
    <button
      v-for="language in availableLocales" :key="language"
      class="font-semibold outline-none hover:underline md:text-lg" :class="{ 'text-primary': language === locale }"
      @click="setLanguage(language)"
    >
      {{ $t(`locale.${language}`) }}
    </button>
  </div>
</template>

<script setup lang="ts">
const { locale, availableLocales } = useI18n()

async function setLanguage(language: string) {
  locale.value = language as "en-US" | "pt-BR"
  localStorage.setItem("nuxt-lang", language)
  await nextTick()
}
</script>
