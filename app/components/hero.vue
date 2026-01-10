<template>
  <section id="hero" class="relative flex min-h-screen items-center justify-center overflow-hidden">
    <div class="hero-background" />

    <div class="marquee">
      <div v-for="index in 2" :key="index" class="hidden w-full md:flex" v-html="svgMap" />
    </div>

    <div
      v-motion :initial="{ opacity: 0, x: -40 }"
      :visible-once="{ opacity: 1, x: 0 }" :duration="800"
      :delay="motionDelay" class="relative z-20 flex flex-col items-center justify-center gap-12 px-4 py-24 md:mx-auto md:flex-row md:gap-32"
    >
      <img src="/assets/avatar.png" alt="Avatar" class="avatar w-44 md:w-64">

      <header class="flex flex-1 flex-col gap-4 text-center md:text-start">
        <h1>
          {{ $t("index.hero.title") }}
        </h1>
        <h2 class="bg-linear-to-r from-muted-foreground to-primary bg-clip-text text-transparent">
          {{ $t("index.hero.subtitle") }}
        </h2>
        <p class="max-w-md leading-5 text-muted-foreground">
          {{ $t("index.hero.description") }}
        </p>

        <div class="flex flex-col gap-4 md:flex-row md:items-center">
          <div class="flex flex-col items-center justify-center gap-2 md:flex-row md:justify-start">
            <nuxt-link
              v-for="(resume, index) in HERO_RESUME_LINKS" :key="index"
              :to="resume.url" target="_blank"
              class="group btn"
            >
              <icon name="material-symbols:lab-profile-outline" size="20" class="transition-all duration-500 group-hover:scale-125" />
              <span>{{ $t(resume.label) }}</span>
            </nuxt-link>
          </div>

          <div class="flex flex-row justify-center gap-2 md:justify-start">
            <nuxt-link
              v-for="(link, index) in HERO_CONTACT_LINKS" :key="index"
              :to="link.url" target="_blank"
              class="group btn rounded-full! bg-muted/80! hover:bg-muted!"
            >
              <icon :name="link.icon ?? ''" size="20" class="transition-all duration-500 group-hover:scale-125" />
            </nuxt-link>
          </div>
        </div>
      </header>
    </div>
  </section>
</template>

<script setup lang="ts">
import DottedMap from "dotted-map"

const motionDelay = ref(0)
const svgMap = ref("")

onMounted(async () => {
  await nextTick()
  motionDelay.value = 1000

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
  position: absolute;
  display: flex;
  z-index: 0;
  width: 200%;
  opacity: 60%;
  inset-inline: 0;
  animation: scroll 50s linear infinite;
}

.avatar {
  flex-shrink: 0;
  object-fit: cover;
  border-radius: 50%;
  animation: float 10s ease-in-out infinite;
  transition: all 0.5s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
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
