<template>
  <section id="hero" class="relative flex min-h-screen items-center justify-center overflow-hidden">
    <div class="hero-background" />

    <div class="marquee absolute inset-x-0 z-0 w-[200%] opacity-60">
      <div v-for="i in 2" :key="i" class="hidden w-full md:flex" v-html="svgMap" />
    </div>

    <div
      v-motion :initial="{ opacity: 0, y: 20 }"
      :enter="{ opacity: 1, y: 0 }" :duration="1000"
      class="relative z-20 mx-4 my-24 flex flex-col-reverse items-center gap-8 md:flex-row md:justify-evenly md:gap-32"
    >
      <div
        v-motion :initial="{ opacity: 0, y: 20, filter: 'blur(5px)' }"
        :enter="{ opacity: 1, y: 0, filter: 'blur(0px)' }" :duration="1000"
        class="flex flex-col gap-4 text-center md:text-start"
      >
        <h1>
          {{ t("index.hero.title") }}
        </h1>
        <h2>
          {{ t("index.hero.subtitle") }}
        </h2>
        <p class="text-muted-foreground max-w-md leading-5">
          {{ t("index.hero.description") }}
        </p>

        <div class="flex flex-row items-center justify-center gap-2 md:ml-2 md:justify-start">
          <nuxt-link v-for="link in contactLinks" :key="link.url" :to="link.url" target="_blank">
            <icon :name="link.icon" size="35" class="text-secondary transition-all duration-500 hover:scale-110" />
          </nuxt-link>
        </div>
      </div>

      <div class="relative size-36 select-none md:size-56 2xl:size-64">
        <img src="/assets/avatar.png" alt="Avatar" class="avatar absolute inset-0">
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import DottedMap from "dotted-map"

const { t } = useI18n()

const contactLinks = [
  { url: "https://github.com/matimortari", icon: "lineicons:github", label: "GitHub" },
  { url: "https://linkedin.com/in/matheus-mortari-19rt", icon: "lineicons:linkedin", label: "LinkedIn" },
  { url: "mailto:matheus.felipe.19rt@gmail.com", icon: "material-symbols:mail-rounded", label: "Email" },
]

const svgMap = ref("")

onMounted(() => {
  const map = new DottedMap({ height: 100, grid: "diagonal" })
  svgMap.value = map.getSVG({
    radius: 0.25,
    color: "#2f2f3d",
    backgroundColor: "#09080d",
    shape: "circle",
  })
})
</script>

<style scoped>
.hero-background {
  background: linear-gradient(330deg, transparent 60%, var(--primary) 80%, var(--secondary) 100%);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
}

.marquee {
  display: flex;
  animation: scroll 50s linear infinite;
}

.avatar {
  border-radius: 50%;
  box-shadow: 0 0 8px 2px var(--primary);
  transition: box-shadow 0.5s ease-in-out;
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

.blur-wrapper {
  filter: blur(10px);
  transition: filter 1s ease-in-out;
}
</style>
