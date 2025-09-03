<template>
  <section id="hero" class="relative flex min-h-screen items-center justify-center overflow-hidden">
    <div class="hero-background" />

    <div class="scrolling-map absolute inset-x-0 bottom-0 z-0 hidden w-[200%] opacity-20 md:flex">
      <img src="/assets/map.png" class="w-1/2 select-none" alt="Background scrolling map">
      <img src="/assets/map.png" class="w-1/2 select-none" alt="Background scrolling map">
    </div>

    <div
      v-motion :initial="{ opacity: 0, y: -40 }"
      :visible="{ opacity: 1, y: 0 }" :duration="1000"
      class="relative flex flex-col items-center gap-4 px-4 py-24"
    >
      <div class="relative size-36 select-none 2xl:size-44">
        <img src="/assets/avatar.png" alt="Avatar" class="avatar absolute inset-0">
      </div>

      <div class="m-4 flex flex-col gap-2 text-center">
        <h1>
          {{ t("index.hero.title") }}
        </h1>
        <h2>
          {{ t("index.hero.subtitle") }}
        </h2>
      </div>

      <div class="flex flex-col items-center justify-center px-10">
        <p class="text-muted-foreground max-w-md text-center leading-5">
          {{ t("index.hero.description") }}
        </p>

        <div class="text-secondary my-4 flex flex-row items-center justify-center gap-2 md:my-8">
          <nuxt-link v-for="link in contactLinks" :key="link.url" :to="link.url" :title="link.label">
            <icon :name="link.icon" size="30" class="hover:scale shrink-0 transition-all duration-500" />
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const contactLinks = [
  { url: "https://github.com/matimortari", icon: "lineicons:github", label: "GitHub" },
  { url: "https://linkedin.com/in/matheus-mortari-19rt", icon: "lineicons:linkedin", label: "LinkedIn" },
  { url: "mailto:matheus.felipe.19rt@gmail.com", icon: "material-symbols:mail-rounded", label: "Email" },
]
</script>

<style scoped>
.hero-background {
  background: linear-gradient(330deg, var(--background) 60%, var(--primary) 80%, var(--secondary) 100%);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.8;
}

.scrolling-map {
  animation: scroll 60s linear infinite;
}

.avatar {
  border-radius: 50%;
  box-shadow: 0 0 8px 2px var(--primary);
  transition: box-shadow 0.5s ease-in-out;
  animation: float 2s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translate(0, 0px);
  }
  60% {
    transform: translate(0, 8px);
  }
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
