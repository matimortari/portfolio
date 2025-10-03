<template>
  <section id="hero" class="relative flex min-h-screen justify-center overflow-hidden">
    <div class="hero-background" />

    <div class="marquee absolute inset-x-0 z-0 w-[200%] opacity-60">
      <div v-for="i in 2" :key="i" class="hidden w-full md:flex" v-html="svgMap" />
    </div>

    <div
      v-motion :initial="{ opacity: 0, y: 20 }"
      :visible-once="{ opacity: 1, y: 0 }" :duration="1000"
      class="relative z-20 mx-4 my-24 flex flex-col items-center gap-8 md:mx-auto md:flex-row md:justify-evenly md:gap-24 2xl:gap-32"
    >
      <div class="shrink-0">
        <img src="/assets/avatar.png" alt="Matheus Mortari" class="avatar w-44 md:w-56 2xl:w-72">
      </div>

      <div class="flex flex-1 flex-col gap-4 text-center md:text-start">
        <h1>
          {{ t("index.hero.title") }}
        </h1>
        <h2 class="from-muted-foreground to-primary bg-gradient-to-r bg-clip-text text-transparent">
          {{ t("index.hero.subtitle") }}
        </h2>
        <p class="text-muted-foreground max-w-md leading-5">
          {{ t("index.hero.description") }}
        </p>

        <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-4">
          <div class="flex flex-row items-center justify-center gap-2 sm:justify-start">
            <nuxt-link
              v-for="resume in resumeLinks" :key="resume.url"
              :to="resume.url" target="_blank"
              class="group bg-primary/80 hover:bg-primary flex flex-row items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-500"
            >
              <icon name="material-symbols:lab-profile-outline" size="20" class="group-hover:scale transition-all duration-500" />
              <span>{{ t(resume.label) }}</span>
            </nuxt-link>
          </div>

          <div class="flex flex-row justify-center gap-2 sm:justify-start">
            <nuxt-link
              v-for="link in contactLinks" :key="link.url"
              :to="link.url" target="_blank"
              class="group bg-muted/80 hover:bg-muted rounded-full p-2 transition-all duration-500"
            >
              <icon :name="link.icon" size="30" class="group-hover:scale group-hover:text-secondary transition-all duration-500" />
            </nuxt-link>
          </div>
        </div>
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

const resumeLinks = [
  {
    label: "index.contact.resumeEn",
    url: "https://matimortari.github.io/statics/cv/cv-en.pdf",
  },
  {
    label: "index.contact.resumePt",
    url: "https://matimortari.github.io/statics/cv/cv-pt.pdf",
  },
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
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 0 8px 2px var(--primary);
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
