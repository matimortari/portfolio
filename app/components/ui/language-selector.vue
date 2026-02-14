<template>
  <div
    v-motion :initial="{ opacity: 0, scale: 0.8 }"
    :visible-once="{ opacity: 1, scale: 1 }" :duration="500"
    :delay="500" class="relative flex flex-row items-center gap-2 rounded-full border bg-background/50 p-1 backdrop-blur-sm"
  >
    <div class="language-indicator" :style="{ transform: `translateX(${locale === 'en-US' ? '0%' : '100%'})` }" />

    <button
      v-for="(language, index) in availableLocales" :key="index"
      v-motion :initial="{ opacity: 0, rotateY: -90 }"
      :visible-once="{ opacity: 1, rotateY: 0 }" :duration="400"
      :delay="600 + index * 100" class="relative z-10 rounded-full p-1 text-sm font-semibold transition-all duration-300"
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

<style scoped>
.language-indicator {
  position: absolute;
  left: 4px;
  width: calc(50% - 4px);
  height: calc(100% - 8px);
  background: var(--primary);
  border-radius: 9999px;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;
}
</style>
