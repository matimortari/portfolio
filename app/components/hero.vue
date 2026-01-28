<template>
  <section id="hero" class="relative flex min-h-screen items-center justify-center overflow-hidden">
    <div class="hero-background" />
    <div class="corner-accent corner-tl" />
    <div class="corner-accent corner-br" />

    <div
      v-motion :initial="{ opacity: 0, x: -40 }"
      :visible-once="{ opacity: 1, x: 0 }" :duration="800"
      :delay="motionDelay" class="relative z-20 flex flex-col-reverse items-center justify-center gap-12 px-4 py-24 md:mx-auto md:flex-row md:gap-32"
    >
      <header class="flex flex-1 flex-col gap-4 text-center md:text-start">
        <h1>
          {{ $t("index.hero.title") }}
        </h1>
        <h2 class="bg-linear-to-r from-muted-foreground to-primary bg-clip-text text-transparent">
          {{ $t("index.hero.subtitle") }}
        </h2>

        <div class="flex flex-col items-center gap-2 md:items-start">
          <div class="flex flex-wrap gap-2">
            <nuxt-link
              v-for="(resume, index) in HERO_RESUME_LINKS" :key="index"
              :to="resume.url" target="_blank"
              class="group btn"
            >
              <icon name="material-symbols:lab-profile-outline" size="20" class="transition-all duration-500 group-hover:scale-125" />
              <span>{{ $t(resume.label) }}</span>
            </nuxt-link>
          </div>

          <div class="flex flex-row items-center gap-2">
            <nuxt-link
              v-for="(link, index) in HERO_CONTACT_LINKS" :key="index"
              :to="link.url" target="_blank"
              class="group btn"
            >
              <icon :name="link.icon ?? ''" size="25" class="transition-all duration-500 group-hover:scale-125" />
            </nuxt-link>
          </div>
        </div>
      </header>

      <div class="avatar-container">
        <div class="avatar-border" />
        <img src="/assets/avataaar.png" alt="Avatar" class="relative size-full rounded-full object-cover">
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const motionDelay = ref(0)

onMounted(async () => {
  await nextTick()
  motionDelay.value = 1000
})
</script>

<style scoped>
.hero-background {
  position: absolute;
  inset: 0;
  z-index: 0;
  background:
    radial-gradient(ellipse at 20% 30%, rgba(76, 64, 131, 0.15) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 70%, rgba(76, 64, 131, 0.1) 0%, transparent 50%),
    radial-gradient(ellipse at 50% 50%, rgba(76, 64, 131, 0.05) 0%, transparent 60%);
}

.corner-accent {
  position: absolute;
  width: 200px;
  height: 200px;
  border: 2px solid var(--primary);
  z-index: 2;
}
.corner-tl {
  top: 1rem;
  left: 1rem;
  border-right: none;
  border-bottom: none;
  animation: pulse-border 3s ease-in-out infinite;
}
.corner-br {
  bottom: 1rem;
  right: 1rem;
  border-left: none;
  border-top: none;
  animation: pulse-border 3s ease-in-out infinite 1.5s;
}

@keyframes pulse-border {
  0%,
  100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.05);
  }
}

.avatar-container {
  position: relative;
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}
@media (min-width: 1024px) {
  .avatar-container {
    width: 300px;
    height: 300px;
  }
}

.avatar-border {
  position: absolute;
  inset: -1px;
  border: 4px solid var(--primary);
  border-radius: 50%;
  clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
  z-index: 1;
  animation: rotate-border 10s linear infinite;
}
@keyframes rotate-border {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
